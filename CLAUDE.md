# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A curated "reading desk" of recursive self-improvement (RSI) research: a static, dependency-free site (vanilla HTML/CSS/JS) deployed to GitHub Pages, plus a Markdown mirror of the same list in `README.md`. There is no package manager, bundler or framework.

## Commands

```sh
# Validate the catalog and build _site/ (same step CI runs)
python3 scripts/build_site.py

# Preview locally (the page fetches catalog JSON, so file:// does not work)
python3 -m http.server 8123 --bind 127.0.0.1
```

Browser tests are standalone Playwright scripts (no test runner, no package.json; Playwright is not installed in the repo). Serve the repo root first, then run one script at a time:

```sh
NODE_PATH=/path/to/node_modules BROWSER_URL=http://127.0.0.1:8123/ node tests/browser.cjs
NODE_PATH=/path/to/node_modules BROWSER_URL=http://127.0.0.1:8123/ node tests/layout.cjs
NODE_PATH=/path/to/node_modules BROWSER_URL=http://127.0.0.1:8123/ node tests/injected-elements.cjs
```

`browser.cjs` defaults to port 8123; `layout.cjs` and `injected-elements.cjs` default to 8125, so always pass `BROWSER_URL` or serve on the matching port.

## Architecture

- **`catalog/browser.json` is the single source of truth.** Top level: `updated`, `schema_version`, `taxonomy`, `works`, `insights`, `reading_context`. Each work has a unique `slug`, one primary `category`, one or more `targets`, `sources` (label + url), a `publication` block (`summary`, `details` as `[heading, text]` pairs, or the short form `result`), and the six **loop-profile** fields: `loop` and `autonomy` (one value each) plus `feedback`, `search`, `persistence`, `evidence` (lists). `insights[].works` reference slugs.
- **Loop-profile vocabulary lives in two places on purpose:** the allowed values and cardinalities are the contract in `AXES` in `scripts/build_site.py`; the display labels, questions and definitions are in the catalog's `taxonomy` block, which the build checks against `AXES` and the browser and README read. `TAXONOMY.md` documents the axes and the classification procedure (including the loop-closure decision order). Change all three together.
- **`scripts/build_site.py`** strictly validates the catalog — it rejects any unknown field, unknown category/target/axis value, wrong axis cardinality, `episodic` combined with other persistence values, duplicate slug, non-http(s) URL, insight pointing at a missing slug, or any CJK character — then regenerates the marked sections of `README.md` and copies only the public files into `_site/`. In CI it injects a `repository-base` meta tag and rewrites the `README.md` link to point at GitHub. Adding a new field, category or target therefore requires updating the allow-lists in `validate()` *and* the rendering in `assets/browser.js`.
- **`assets/browser.js`** loads the catalog, renders the three panes (sidebar / catalog list / detail), and keeps filter state in the URL query string (`?work=`, `category`, `q`, `year`, `type`, `target`, `sort`, `collection`, and one key per loop-profile axis, e.g. `?loop=self-harness&evidence=transfer`). Facet `<select>`s are built at boot from `db.taxonomy` (ids `facet-<axis>`). Bookmarks and theme are stored in `localStorage`. The Taxonomy, Research-insights and Landscape views share one `<dialog>`; Landscape cross-tabulates axes over the whole catalog and each cell carries a `data-filter` JSON that `applyFilters()` applies. Category display names live in the `categories` map here (keys must match `validate()`).
- **Bilingual remnants:** UI strings use `tr(en, zh)` and `lang` is hard-coded to `'en'`. The release is English-only — the build and `tests/browser.cjs` fail if Chinese text appears in the catalog or rendered page. Keep Chinese strings only as the second argument of `tr()`.
- **Cache busting:** `index.html` references `assets/browser.css?v=…` and `assets/browser.js?v=…`, where the version is the first 12 hex chars of the file's SHA-256 (`sha256sum assets/browser.js | cut -c1-12`). Update it whenever you change either asset.
- **Deployment:** `.github/workflows/pages.yml` runs the build on every push to `main` and deploys `_site/` to Pages. Automatic paper discovery is not enabled; entries are curated by hand.

## Editing the collection

Edit only `catalog/browser.json`, then run `python3 scripts/build_site.py`. The README sections between `<!-- generated:NAME -->` and `<!-- /generated:NAME -->` markers (reviewed line, landscape table, collection, research coverage) are regenerated from the catalog; never hand-edit them. Locally the build rewrites README.md; in CI (`GITHUB_ACTIONS` set) it fails instead if README is stale, so commit the regenerated README. Every new work needs all six loop-profile fields; follow the scope rule and decision order in `TAXONOMY.md`. Benchmarks take the loop level they test and `autonomy: unspecified`. `TAXONOMY.md`, the taxonomy dialog text in `browser.js`, and `targets` in `build_site.py` describe the same categories and target tags and should stay consistent.

Insights (`insights[]`) quote numbers from entries; when an entry's numbers change, re-check any insight that cites it. The lead insight's counts are computed from loop profiles at release time.

Categories are descriptive (the primary object being improved or evaluated), not a quality ranking; summaries should keep sources, model roles, baselines and metric contexts explicit rather than averaging incomparable results.
