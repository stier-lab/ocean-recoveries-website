# Build, Config & Dependencies -- Wave 2 Bug Bash Report

**Scope:** `scripts/generate-news.cjs`, `package.json`, `astro.config.mjs`, `tailwind.config.mjs`, `tsconfig.json`, `public/` static assets

---

## Wave 1 Fix Verification

### 1. Trailing hyphens in slugs -- VERIFIED OK

`slugify()` (line 89-96 of `scripts/generate-news.cjs`) now reads:

```js
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .substring(0, 60)
    .replace(/-$/, '');
}
```

The final `.replace(/-$/, '')` after `.substring(0, 60)` correctly strips any trailing hyphen introduced by mid-word truncation. Build output confirms all 77 news slugs have clean endings (no trailing slashes or hyphens visible in the generated routes).

### 2. escDQ() applied to all double-quoted string fields -- VERIFIED OK

`escDQ` (line 271) escapes both `\` and `"`:

```js
const escDQ = (s) => (s || '').replace(/\\/g, '\\\\').replace(/"/g, '\\"');
```

Applied to: `slug`, `title`, `author`, `excerpt`, `doiUrl`, `pdfUrl`. The `content` field uses template literals and is handled by the separate `escapeForTemplate()` function (line 137-143), which escapes backticks, dollar signs, and backslashes. Both helpers are correct.

---

## Bugs Fixed in Wave 2

### 3. Removed unused `leaflet` and `@types/leaflet` from dependencies

**File:** `package.json`

`leaflet` (^1.9.4) and `@types/leaflet` (^1.9.21) were listed in `dependencies` but never imported anywhere in `src/`. The site's map functionality (`ResearchGlobe.tsx`) uses `d3` and `topojson-client` instead. These two packages added unnecessary weight to `node_modules` and inflated install times.

**Fix:** Removed both entries from the `dependencies` object.

### 4. Moved `pdf-parse` from dependencies to devDependencies

**File:** `package.json`

`pdf-parse` (^1.1.1) was in `dependencies` but is only used by build/pipeline scripts in `scripts/` (extract-pdfs, extract-abstracts, etc.), never by the Astro application itself. Having it in `dependencies` means it would be installed in production `npm ci --production` environments even though it is not needed at runtime.

**Fix:** Moved `pdf-parse` to `devDependencies`.

### 5. Removed dead `count-up` animation from Tailwind config

**File:** `tailwind.config.mjs` (line 82)

The `animation` section defined `'count-up': 'countUp 1.5s ease-out forwards'` but:
- No `countUp` keyframes existed in the `keyframes` section
- The `count-up` animation class was never used in any source file

This was dead configuration referencing a nonexistent keyframe definition.

**Fix:** Removed the `'count-up'` entry from the `animation` object.

---

## Observations (Not Fixed -- Informational)

### 6. `@types/d3` and `@types/topojson-client` remain in dependencies (correct)

These type packages are in `dependencies` rather than `devDependencies`. This is intentional and correct for this project: Netlify's default `npm install` behavior respects `NODE_ENV` and may skip devDependencies, but `astro check` (which runs as part of `npm run build`) needs these type definitions. Moving them to devDependencies could break the Netlify build. No change needed.

### 7. `_astro` disallowed in robots.txt

`robots.txt` disallows `/_astro/` which is the hashed asset directory in the Astro build output. This is correct -- these are cache-busted JS/CSS chunks that should not be indexed by search engines.

### 8. Static AI discovery files are present and well-formed

`public/llms.txt` and `public/ai-summary.md` are present, well-structured, and contain accurate information. `robots.txt` references the sitemap at the correct URL. The `Last Updated` dates in both AI files say "December 2024" which may need updating eventually, but this is cosmetic.

---

## Build Verification

After all changes, `npm run build` completes successfully:

```
> node scripts/generate-news.cjs
Generated 77 news posts

> astro check && astro build
Result (44 files): 0 errors, 0 warnings, 0 hints
90 page(s) built in 6.92s
Complete!
```

The only notice is the known Vite mixed-import warning for `team.ts` (wave 1 item, low priority, intentionally skipped).

---

## Summary

| # | Issue | Severity | Status |
|---|-------|----------|--------|
| 1 | Trailing hyphens in slugs (wave 1) | Medium | Verified fixed |
| 2 | Incomplete escDQ() escaping (wave 1) | Medium | Verified fixed |
| 3 | Unused `leaflet` + `@types/leaflet` deps | Low | **Fixed** |
| 4 | `pdf-parse` in wrong dep category | Low | **Fixed** |
| 5 | Dead `count-up` animation in Tailwind | Low | **Fixed** |
| 6 | `@types/*` in dependencies | Info | Correct as-is |
| 7 | `_astro` disallowed in robots.txt | Info | Correct as-is |
| 8 | AI discovery files present | Info | OK |
