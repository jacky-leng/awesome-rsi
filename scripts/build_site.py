#!/usr/bin/env python3
"""Build Pages using only the public catalog. No private research tree required."""
import json
import os
from pathlib import Path
import re
import shutil
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parents[1]


def validate(data):
    if set(data) - {'updated', 'schema_version', 'works', 'insights', 'reading_context'}:
        raise ValueError('Unexpected top-level catalog fields')
    categories = {'system', 'kernel', 'kernel-benchmark', 'recipe', 'harness', 'evaluation', 'concept'}
    allowed = {'slug', 'title', 'short_title', 'year', 'date', 'category', 'source_type', 'reviewed', 'sources', 'publication', 'targets'}
    public_fields = {'date', 'scope', 'actor', 'target', 'summary', 'details', 'result'}
    targets = {'Systems code & policies', 'Kernel code', 'Model weights', 'Training recipes & data', 'Agent harnesses', 'Memory & skills', 'Search / research procedures', 'Evaluation protocols', 'Field-wide frameworks'}
    seen = set()
    for work in data['works']:
        if set(work) - allowed or set(work['publication']) - public_fields:
            raise ValueError('Unexpected catalog fields')
        if not isinstance(work.get('targets'), list) or not work['targets'] or not set(work['targets']).issubset(targets) or len(work['targets']) != len(set(work['targets'])):
            raise ValueError('Missing, duplicate or unknown research target')
        slug = work['slug']
        if not re.fullmatch(r'[a-z0-9-]+', slug) or slug in seen:
            raise ValueError(f'Invalid or duplicate slug: {slug}')
        seen.add(slug)
        if work['category'] not in categories or not work['title'] or not work['publication']['summary']:
            raise ValueError(f'Incomplete entry: {slug}')
        if not work['sources']:
            raise ValueError(f'Missing sources: {slug}')
        for source in work['sources']:
            if set(source) != {'label', 'url'}:
                raise ValueError(f'Unexpected source fields: {slug}')
            url = urlsplit(source['url'])
            if url.scheme not in {'https', 'http'} or not url.netloc or url.username or url.password:
                raise ValueError(f'Invalid source URL: {slug}')
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
        url = urlsplit(source['url'])
        if url.scheme != 'https' or not url.netloc or url.username or url.password:
            raise ValueError('Invalid companion-source URL')
    if re.search(r'[\u4e00-\u9fff]', json.dumps(data, ensure_ascii=False)):
        raise ValueError('Public English catalog contains untranslated Chinese text')
    return len(seen)


def main():
    count = validate(json.loads((ROOT / 'catalog/browser.json').read_text()))
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
