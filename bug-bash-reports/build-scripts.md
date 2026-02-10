# Build & Scripts Bug Bash Report

## Bugs Found & Fixed

### 1. `generate-news.cjs` -- Trailing hyphens in generated slugs

**File:** `/Users/adrianstier/ocean-recoveries-website/scripts/generate-news.cjs` (line 89-95)

The `slugify()` function stripped leading/trailing hyphens *before* truncating to 60 characters, so the `substring(0, 60)` call could re-introduce a trailing hyphen when it cut mid-word. This produced 7 slugs with trailing hyphens, yielding ugly URLs like `/news/fish-populations-don-t-follow-simple-rules-and-that-changes-/`.

**Fix:** Added `.replace(/-$/, '')` after the `substring(0, 60)` call. Verified: all 77 slugs now have clean endings.

### 2. `generate-news.cjs` -- Incomplete escaping of double-quoted string fields

**File:** `/Users/adrianstier/ocean-recoveries-website/scripts/generate-news.cjs` (lines 270-285)

When writing the TypeScript output, several fields placed inside double-quoted strings had no or incomplete escaping:

- `title` only escaped `"` but not `\` (backslashes would corrupt the output)
- `author` had zero escaping
- `doiUrl` had zero escaping
- `pdfUrl` had zero escaping
- `excerpt` only escaped `"` and `\n` but not `\`

While the current 77 publications have no problematic characters in these fields, any future publication with a backslash, double quote, or other special character in any of these fields would silently produce broken TypeScript and a build failure.

**Fix:** Introduced a shared `escDQ()` helper that escapes both `\` and `"` and applied it to all double-quoted fields (`slug`, `title`, `author`, `excerpt`, `doiUrl`, `pdfUrl`).

## Bugs Found (Not Fixed)

### 3. Vite build warning: mixed dynamic/static import of `team.ts`

**Warning:**
```
(!) src/data/team.ts is dynamically imported by src/components/seo/OrganizationSchema.astro
but also statically imported by CommandPalette.astro, index.astro, people.astro
```

`OrganizationSchema.astro` uses `await import('@data/team')` (dynamic import, conditional on `includeMembers` prop) while three other files use static `import { currentTeam } from '@data/team'`. Vite warns that the dynamic import cannot tree-shake team.ts into a separate chunk because it's already statically imported elsewhere. This is harmless for a static site (no runtime chunk-splitting benefit) but the conditional import in OrganizationSchema adds complexity for no real gain since `team.ts` is always bundled anyway. Could be changed to a static import with conditional usage.

### 4. Unreferenced image subdirectories deployed to production

**Paths:**
- `public/images/hero/` (4.1 MB) -- contains `reef-hero.jpg`
- `public/images/research/` (14 MB) -- contains `coral-card.jpg`, `kelp-card.jpg`, `organismal-card.jpg`

These image subdirectories are not referenced anywhere in `src/` and will be deployed to the Netlify production site unnecessarily, adding ~18 MB to the deployed bundle.

### 5. 22 unreferenced images in `public/images/` (~43 MB total)

Files present in `public/images/` but never referenced in any source file:

| File | Size |
|------|------|
| `Arete indicus - ML.jpg` | <0.1 MB |
| `beach-sunset-sea-lion-silhouette.jpg` | 1.5 MB |
| `bear-mural-street-art.jpg` | 2.5 MB |
| `conflict-vector.ai` | 0.5 MB (Adobe Illustrator source file, not a web asset) |
| `coral-bleaching-timelapse-study.jpeg` | 0.1 MB |
| `coral-reef-bleached-anemone-fish-school.jpeg` | 5.6 MB |
| `gooseneck-barnacles-cluster-tidepool.jpg` | 2.8 MB |
| `lionfish.jpeg` | 0.3 MB |
| `logo-keck.png` | <0.1 MB |
| `logo-nsf.jpg` | <0.1 MB |
| `logo-opc-full.jpg` | <0.1 MB |
| `logo-opc.png` | 0.3 MB |
| `man-portrait-marina-boats-background.jpg` | 0.7 MB |
| `man-portrait-selfie-outdoors.jpeg` | 0.8 MB |
| `marine-iguana-galapagos-beach.jpg` | 2.3 MB |
| `marine-iguana-sand-galapagos.jpg` | 3.0 MB |
| `sally-lightfoot-crab-galapagos.jpg` | 4.1 MB |
| `squid-silhouette-blue-ocean.JPG` | 2.2 MB |
| `stylophora-coral.jpeg` | 5.8 MB |
| `tropical-palm-island-ocean.jpeg` | 3.2 MB |
| `whitemouth-moray-eel-closeup.JPG` | 4.2 MB |
| `whitemouth-moray-eel-coral.JPG` | 4.1 MB |

Notable: `conflict-vector.ai` is an Adobe Illustrator source file and should never be deployed as a web asset.

### 6. 31 referenced images exceed 5 MB (some over 20 MB)

The largest referenced images that will be served to visitors:

| File | Size |
|------|------|
| `fish-biodiversity.jpeg` | 21.5 MB |
| `coyote-road.jpeg` | 16.3 MB |
| `pacific-herring-net.jpeg` | 14.4 MB |
| `aerial-view-island-lagoon-barrier-reef.jpeg` | 13.4 MB |
| `tropical-island-split-view-coral-reef-shark.jpeg` | 13.4 MB |
| `parrotfish.jpeg` | 12.8 MB |

These are unoptimized images being served directly to users. A single page load could transfer 50+ MB of images. These should be compressed/resized to web-appropriate dimensions (e.g., max 2000px wide, quality 80, <500 KB each).

### 7. `leaflet` and `@types/leaflet` are unused dependencies

**File:** `/Users/adrianstier/ocean-recoveries-website/package.json`

`leaflet` (1.9.4) and `@types/leaflet` are listed in dependencies but never imported anywhere in `src/`. The map functionality uses `d3` and `topojson-client` instead. These add unnecessary weight to `node_modules` and could be removed.

### 8. `pdf-parse` is in `dependencies` but only used by scripts

**File:** `/Users/adrianstier/ocean-recoveries-website/package.json`

`pdf-parse` is listed under `dependencies` but is only used by scripts in `scripts/` (extract-pdfs, extract-abstracts, etc.), never by the Astro application itself. It should be in `devDependencies` to avoid being included in production installs.

### 9. Tailwind config: `count-up` animation references nonexistent keyframes

**File:** `/Users/adrianstier/ocean-recoveries-website/tailwind.config.mjs` (line 82)

The `count-up` animation is defined as `'countUp 1.5s ease-out forwards'` but no `countUp` keyframes exist in the keyframes section. The animation is also never used in any source file, so this is dead configuration with a missing keyframe definition. Not impactful, but should be cleaned up or completed.

## Verified OK

- **Build passes**: `npm run build` completes with 0 errors and 0 warnings (only the Vite info-level mixed-import notice described above)
- **TypeScript strict mode**: `astro check` reports 0 errors, 0 warnings, 0 hints across 44 files
- **`public/favicon.svg`**: Exists and is valid (855 bytes)
- **Astro config**: `site` URL is correct, integrations (tailwind, react, sitemap) are properly configured, output mode is static (default)
- **TypeScript config**: Strict mode via `astro/tsconfigs/strict`, path aliases properly configured, `noUnusedLocals` and `noUnusedParameters` enforced
- **Tailwind config**: Content glob correctly covers all source file types, custom design tokens (colors, fonts, spacing, animations) are well-structured
- **Sitemap integration**: Properly configured with correct URL priorities and change frequencies
- **`package.json` scripts**: `prebuild`, `build`, `dev`, `preview`, `check` all correctly defined
- **Slug deduplication**: Works correctly -- duplicate slugs get `-2`, `-3` suffixes
- **Date generation**: All 77 publications have valid year fields; date formatting produces valid ISO date strings
- **`escapeForTemplate()`**: Correctly handles backticks, dollar signs, and backslashes for template literal content field
- **`robots.txt`**: Well-formed with correct sitemap URL
- **`.well-known/ai-plugin.json`**: Present
- **No duplicate slugs** in generated `posts.ts`
- **All 77 analyzed publications** generate valid news posts
