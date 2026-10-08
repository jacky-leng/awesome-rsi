#!/usr/bin/env python3
"""Build Pages using only the public catalog. No private research tree required."""
from collections import Counter
import json
import os
from pathlib import Path
import re
import shutil
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parents[1]

CATEGORIES = {'system': 'AI for specialized systems', 'kernel': 'Kernels and compilers', 'kernel-benchmark': 'Kernel benchmarks', 'recipe': 'Model development', 'harness': 'Research agents', 'evaluation': 'Research evaluation', 'concept': 'Concepts and foundations'}
TARGETS = {'Systems code & policies', 'Kernel code', 'Model weights', 'Training recipes & data', 'Agent harnesses', 'Memory & skills', 'Search / research procedures', 'Evaluation protocols', 'Field-wide frameworks'}
# Loop-profile axes: allowed values and (min, max) count; None means exactly one value.
AXES = {
    'loop': ({'artifact', 'self-harness', 'self-weights', 'meta', 'cross-generation', 'framework'}, None),
    'feedback': ({'tests', 'measurement', 'benchmark', 'training-run', 'model-judge', 'self-generated', 'human', 'formal', 'simulator'}, (0, 3)),
    'search': ({'refinement', 'population', 'tree', 'parallel-agents', 'rl', 'distillation'}, (0, 3)),
    'persistence': ({'episodic', 'memory', 'weights', 'codebase'}, (1, 3)),
    'autonomy': ({'autonomous', 'human-gated', 'human-led', 'unspecified'}, None),
    'evidence': ({'benchmark', 'transfer', 'production', 'ablation', 'multi-round', 'cost', 'negative', 'theory'}, (1, 5)),
}


def check_url(url, schemes, message):
    parts = urlsplit(url)
    if parts.scheme not in schemes or not parts.netloc or parts.username or parts.password:
        raise ValueError(message)


def validate(data):
    if set(data) - {'updated', 'schema_version', 'works', 'insights', 'reading_context', 'taxonomy'}:
        raise ValueError('Unexpected top-level catalog fields')
    taxonomy = data['taxonomy']
    if set(taxonomy) != set(AXES):
        raise ValueError('Taxonomy must describe exactly the loop-profile axes')
    for axis, (values, _) in AXES.items():
        spec = taxonomy[axis]
        if set(spec) != {'label', 'question', 'values'} or set(spec['values']) != values:
            raise ValueError(f'Taxonomy values for {axis} do not match the build contract')
        if any(set(v) != {'label', 'description'} for v in spec['values'].values()):
            raise ValueError(f'Each {axis} value needs a label and a description')
    allowed = {'slug', 'title', 'short_title', 'year', 'date', 'category', 'source_type', 'reviewed', 'sources', 'publication', 'targets', *AXES}
    public_fields = {'date', 'scope', 'actor', 'target', 'summary', 'details', 'result'}
    seen = set()
    for work in data['works']:
        if set(work) - allowed or set(work['publication']) - public_fields:
            raise ValueError(f"Unexpected catalog fields: {work.get('slug')}")
        if not isinstance(work.get('targets'), list) or not work['targets'] or not set(work['targets']).issubset(TARGETS) or len(work['targets']) != len(set(work['targets'])):
            raise ValueError('Missing, duplicate or unknown research target')
        slug = work['slug']
        if not re.fullmatch(r'[a-z0-9-]+', slug) or slug in seen:
            raise ValueError(f'Invalid or duplicate slug: {slug}')
        seen.add(slug)
        if work['category'] not in CATEGORIES or not work['title'] or not work['publication']['summary']:
            raise ValueError(f'Incomplete entry: {slug}')
        for axis, (values, count) in AXES.items():
            value = work.get(axis)
            if count is None:
                ok = value in values
            else:
                ok = isinstance(value, list) and count[0] <= len(value) <= count[1] and len(set(value)) == len(value) and set(value) <= values
            if not ok:
                raise ValueError(f'Missing or invalid {axis}: {slug}')
        if 'episodic' in work['persistence'] and len(work['persistence']) > 1:
            raise ValueError(f'Episodic persistence cannot be combined: {slug}')
        if not work['sources']:
            raise ValueError(f'Missing sources: {slug}')
        for source in work['sources']:
            if set(source) != {'label', 'url'}:
                raise ValueError(f'Unexpected source fields: {slug}')
            check_url(source['url'], {'https', 'http'}, f'Invalid source URL: {slug}')
    for note in data.get('insights', []):
        if set(note) != {'title', 'evidence', 'interpretation', 'experiment', 'works'}:
            raise ValueError('Unexpected insight fields')
        if not note['works'] or not set(note['works']).issubset(seen):
            raise ValueError('Insight references a missing work')
    context = data.get('reading_context', {})
    if set(context) - {'window', 'method', 'coverage', 'collections'}:
        raise ValueError('Unexpected reading-context fields')
    for source in context.get('collections', []):
        if set(source) != {'label', 'url'}:
            raise ValueError('Unexpected companion-source fields')
        check_url(source['url'], {'https'}, 'Invalid companion-source URL')
    if re.search(r'[一-鿿]', json.dumps(data, ensure_ascii=False)):
        raise ValueError('Public English catalog contains untranslated Chinese text')
    return len(seen)


def readme_blocks(data):
    """Markdown generated from the catalog, keyed by README marker name."""
    works, loop = data['works'], data['taxonomy']['loop']
    loops = list(loop['values'])
    head = f"Reviewed through **{data['updated']}** · **{len(works)} works**."
    rows = ['| Direction | ' + ' | '.join(loop['values'][k]['label'] for k in loops) + ' | Total |', '|---|' + '---:|' * (len(loops) + 1)]
    for key, name in CATEGORIES.items():
        counts = Counter(w['loop'] for w in works if w['category'] == key)
        rows.append(f'| {name} | ' + ' | '.join(str(counts[k] or '·') for k in loops) + f' | {sum(counts.values())} |')
    totals = Counter(w['loop'] for w in works)
    rows.append('| **All** | ' + ' | '.join(f'**{totals[k]}**' for k in loops) + f' | **{len(works)}** |')
    landscape = [f"{loop['question']} Rows are research directions; columns are loop closure. See [TAXONOMY.md](TAXONOMY.md) for all six loop-profile axes.", '', *rows]
    collection = []
    for key, name in CATEGORIES.items():
        group = [w for w in works if w['category'] == key]
        collection += [f'### {name} ({len(group)})', '']
        for w in group:
            collection.append(f"- **[{w['title']}]({w['sources'][0]['url']})** · {w['publication']['date']} · *{loop['values'][w['loop']]['label']}*")
            collection.append(f"  {w['publication']['summary']}")
        collection.append('')
    context = data.get('reading_context', {})
    coverage = [context.get('window', ''), '', context.get('method', ''), '', context.get('coverage', ''), '', 'Companion collections used for discovery:', '']
    coverage += [f"- [{s['label']}]({s['url']})" for s in context.get('collections', [])]
    return {'reviewed': head, 'landscape': '\n'.join(landscape), 'collection': '\n'.join(collection).rstrip(), 'coverage': '\n'.join(coverage)}


def render_readme(text, data):
    for name, body in readme_blocks(data).items():
        pattern = re.compile(rf'(<!-- generated:{name} -->\n)(?:.*?\n)?(<!-- /generated:{name} -->)', re.S)
        if not pattern.search(text):
            raise ValueError(f'README is missing the generated:{name} markers')
        text = pattern.sub(lambda m: m.group(1) + body + '\n' + m.group(2), text)
    return text


def main():
    data = json.loads((ROOT / 'catalog/browser.json').read_text())
    count = validate(data)
    readme_path = ROOT / 'README.md'
    readme = render_readme(readme_path.read_text(), data)
    if readme != readme_path.read_text():
        if os.environ.get('GITHUB_ACTIONS'):
            raise ValueError('README.md is out of date with catalog/browser.json; run python3 scripts/build_site.py locally and commit it')
        readme_path.write_text(readme)
        print('Regenerated README.md collection from the catalog')
    out = ROOT / '_site'
    if out.exists():
        shutil.rmtree(out)
    for name in ['index.html', 'assets/browser.css', 'assets/browser.js', 'catalog/browser.json', 'README.md']:
        target = out / name
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(ROOT / name, target)
    repository = os.environ.get('GITHUB_REPOSITORY', '')
    revision = os.environ.get('GITHUB_SHA', 'main')
    if repository:
        if not re.fullmatch(r'[\w.-]+/[\w.-]+', repository) or not re.fullmatch(r'[\w.-]+', revision):
            raise ValueError('Invalid repository or revision')
        base = f'https://github.com/{repository}/blob/{revision}/'
        html = (out / 'index.html').read_text()
        html = html.replace('<title>', f'<meta name="repository-base" content="{base}">\n<title>', 1)
        html = html.replace('href="README.md"', f'href="{base}README.md"')
        (out / 'index.html').write_text(html)
    (out / '.nojekyll').touch()
    print(f'Built {count} public works → {out}')


if __name__ == '__main__':
    main()
