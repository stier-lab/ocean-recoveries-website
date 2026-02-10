# Bug Bash Wave 3 Plan (Final Pass)

## Context
- Wave 1: 23 bugs fixed
- Wave 2: 10 bugs fixed, all wave 1 fixes verified
- Diminishing returns — wave 3 is a targeted final review, not a full re-audit

## Scope Splits (3 focused agents)

| Agent | Focus | Key Tasks |
|-------|-------|-----------|
| **cross-module-review** | Integration review across all scopes | Read all v2 reports, verify no regressions, run full build, check for cross-scope conflicts (e.g. multiple agents editing GlobalEffects.astro) |
| **listener-audit** | Final audit of ALL event listener patterns site-wide | Grep for every addEventListener across the entire src/ directory, verify each has a matching cleanup for view transitions. This is the #1 bug category (13 of 33 fixes). |
| **remaining-fixes** | Address actionable items from wave 1/2 "not fixed" lists | Remove dead CSS classes, clean up unused code that's safe to remove, fix the escapeHtml unused variable |

## Methodology
1. Read relevant wave 1 and wave 2 reports
2. Execute focused audit
3. Fix what's safe
4. Write report to `bug-bash-reports/<scope>-v3.md`
5. Orchestrator writes final summary and commits
