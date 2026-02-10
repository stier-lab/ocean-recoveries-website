# Bug Bash Wave 2 Plan

## Context
Wave 1 fixed 23 bugs across 21 files. Wave 2 focuses on:
- Verifying wave 1 fixes are correct and complete
- Catching bugs wave 1 missed
- Fixing "not fixed" items from wave 1 that are worth addressing
- Cross-cutting issues that span multiple scopes

## Scope Splits (6 parallel agents)

| Agent | Scope | Focus |
|-------|-------|-------|
| **pages-core-v2** | Homepage, values, privacy, accessibility, join pages | Verify scroll listener cleanup works, check for remaining leaks, review reduced-motion coverage |
| **research-module-v2** | Research pages + components | Wave 1 found nothing — deeper review of D3/React lifecycle, SSR hydration, edge cases |
| **publications-news-v2** | Publications, news pages, PublicationList React component | Fix scroll listener leaks in news pages (wave 1 noted but didn't fix), verify XSS fix, check news [slug] page |
| **layout-shared-v2** | Nav, Footer, Breadcrumbs, CommandPalette, GlobalEffects | Verify all listener cleanup patterns work correctly, check for edge cases in view transition lifecycle |
| **data-integrity-v2** | Data files, SEO components, people page | Verify DOI fixes propagated correctly, check all structured data output, validate all schema components |
| **build-perf-v2** | Build pipeline, dependencies, image optimization, config | Fix unused deps, clean dead config, assess image optimization opportunities |

## Methodology
1. Read wave 1 report for your scope
2. Verify all wave 1 fixes
3. Do a fresh pass looking for anything missed
4. Fix what can be fixed safely
5. Write report to `bug-bash-reports/<scope>-v2.md`
