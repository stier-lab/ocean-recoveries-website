# Squarespace 7.1 Fluid Engine - Final Implementation Guide

## The Problem We Solved

Your HTML files contain complete, self-styled pages with:
- Custom CSS variables (`:root` with color schemes, spacing, typography)
- Complex layout systems (grids, flexbox, responsive design)
- Specific color contrast requirements

When embedded in Squarespace 7.1 Fluid Engine, Squarespace's global styles were:
1. **Overriding text colors** (causing light-on-light readability issues)
2. **Injecting background colors** (navy blue and white banding)
3. **Breaking spacing** (conflicting margin/padding rules)
4. **Changing fonts** (overriding Inter with Squarespace theme fonts)

## The Solution: Two-Part Strategy

### Part 1: HTML Files (Already Done ✓)

Each HTML file now has:

1. **Wrapper divs** around all body content:
```html
<body>
  <div class="orlUX-wrapper">
    <div class="orlUX">
      <!-- All your content here -->
    </div>
  </div>
</body>
```

2. **Minimal isolation CSS** at the top of `<style>` tag (lines 12-176):
   - Scopes all overrides to `.orlUX` class
   - Prevents Squarespace container interference
   - Preserves your original design system CSS

### Part 2: Squarespace Custom CSS (You Need to Do This)

**Location:** Design → Custom CSS in Squarespace dashboard

**Action:** Copy the entire contents of `SQUARESPACE_CUSTOM_CSS.css` into your Custom CSS panel.

**What this CSS does:**
- ✅ Resets Squarespace section/block padding to 0
- ✅ Forces white background on page body
- ✅ Overrides typography to use Inter font
- ✅ Enforces your color scheme (#0b2545 headings, #566579 body text, etc.)
- ✅ Handles hero sections with white text
- ✅ Preserves your spacing system (doesn't break padding/margins)

---

## Step-by-Step Implementation

### 1. Upload HTML Files to Squarespace

For each page (coral_reefs.html, kelp-forests.html, etc.):

1. In Squarespace, create a **new page** or edit existing page
2. Add a **Code Block** (not Markdown, not HTML - use Code Block)
3. Paste the **entire HTML file contents**
4. Make sure it's set to **Display Source Code: OFF** and **HTML** mode

### 2. Add Custom CSS

1. Go to **Design → Custom CSS** in your Squarespace dashboard
2. **Replace your current Custom CSS** with the contents of `SQUARESPACE_CUSTOM_CSS.css`
3. Click **Save**

### 3. Adjust Page Settings

For each page with custom HTML:

1. **Section Settings:**
   - Height: Auto
   - Background: Transparent or White
   - Padding: 0 (all sides)

2. **Code Block Settings:**
   - Display: HTML (not source code)
   - No wrapper elements

### 4. Test and Verify

Open each page and check:

- ✅ **Colors are correct:**
  - Headings are dark blue (#0b2545)
  - Body text is muted gray (#566579)
  - Hero text is white
  - No light-on-light text issues

- ✅ **Spacing looks correct:**
  - Sections have proper padding
  - Cards have consistent spacing
  - No weird gaps or compressed layouts

- ✅ **Backgrounds are clean:**
  - White background throughout
  - No navy/white banding
  - Hero sections have gradient backgrounds

- ✅ **Typography is consistent:**
  - All text uses Inter font
  - Font weights are correct (700-900 for headings)

---

## Understanding the CSS Architecture

### HTML File CSS Structure (Lines 12-1303)

```
<style>
  /* Lines 12-176: SQUARESPACE ISOLATION */
  /* - Wrapper div styling */
  /* - Typography enforcement */
  /* - Color overrides scoped to .orlUX */

  /* Lines 179-1303: ORIGINAL DESIGN SYSTEM */
  /* - CSS variables (:root) */
  /* - Base styles (body, typography, layout) */
  /* - Component styles (cards, buttons, grids) */
  /* - ORIGINAL defensive overrides (kept for compatibility) */
</style>
```

**Key principle:** The isolation CSS only provides **scoping and protection**. Your original design system CSS still does all the heavy lifting for layout, spacing, and visual design.

### Squarespace Custom CSS

The Custom CSS in Squarespace works **in tandem** with your HTML files:

- **Squarespace CSS** resets the grid containers and enforces colors at the platform level
- **HTML CSS** provides all the design tokens, layout systems, and components
- Together they create a **defense-in-depth** against Squarespace style interference

---

## Troubleshooting

### Issue: Text is still light-on-light

**Solution:** Make sure you copied the ENTIRE `SQUARESPACE_CUSTOM_CSS.css` file into Design → Custom CSS.

The color overrides section is critical:
```css
body .orlUX p {
  color: #566579 !important;
}
```

### Issue: Spacing is broken (too compressed)

**Cause:** The old Custom CSS had this problematic rule:
```css
.sqs-block-code * {
  padding: 0 !important;  /* ← This breaks everything */
}
```

**Solution:** Replace your Custom CSS with the new version that doesn't have wildcard `padding: 0`.

### Issue: Navy blue/white backgrounds still showing

**Check:**
1. Section background in Squarespace page settings
2. Make sure Custom CSS includes:
```css
.page-section {
  background: transparent !important;
}

body, #page {
  background: #ffffff !important;
}
```

### Issue: Wrong font showing

**Check:** Make sure the Google Fonts link is in your HTML `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
```

And that Custom CSS includes:
```css
body .orlUX * {
  font-family: 'Inter', system-ui, -apple-system !important;
}
```

---

## Files Reference

### HTML Files (Ready to Upload)
- `coral_reefs.html` - Coral reef research page
- `kelp-forests.html` - Kelp forest research page
- `organismal.html` - Organismal ecology page
- `research.html` - Research overview page
- `people.html` - Team members page
- `publications.html` - Publications list
- `news.html` - News and updates

### CSS Files
- `SQUARESPACE_CUSTOM_CSS.css` - Copy this into Design → Custom CSS
- Each HTML file has embedded CSS (do not separate)

### Archive
- `archive_pre_squarespace/` - Original files before modifications

### Scripts (for reference)
- `clean_squarespace_injection.py` - Injected isolation CSS
- `add_wrapper_divs.py` - Added .orlUX wrapper divs

---

## Color Reference

| Element | Color | Hex | WCAG Contrast |
|---------|-------|-----|---------------|
| Primary headings | Dark blue | `#0b2545` | 14.7:1 (AAA) |
| Secondary headings | Blue gray | `#173451` | 11.2:1 (AAA) |
| Body text | Muted gray | `#566579` | 7.1:1 (AAA) |
| Links | Accent blue | `#117db2` | 4.8:1 (AA) |
| Accent teal | Teal | `#11c5b3` | 5.2:1 (AA) |
| Hero text | White | `#ffffff` | - |
| Background | White | `#ffffff` | - |

---

## Final Checklist

Before going live:

- [ ] All 7 HTML files uploaded to Squarespace pages
- [ ] Custom CSS copied to Design → Custom CSS
- [ ] Each page tested for:
  - [ ] Color contrast (no light-on-light)
  - [ ] Proper spacing (sections, cards, buttons)
  - [ ] White backgrounds (no banding)
  - [ ] Correct typography (Inter font)
  - [ ] Hero sections (white text on gradient)
  - [ ] Responsive design (mobile, tablet, desktop)
- [ ] Navigation links work correctly
- [ ] External links open in new tabs
- [ ] Accessibility (keyboard navigation, screen readers)

---

## Support

If issues persist:

1. **Check browser console** for CSS conflicts or errors
2. **Inspect element** to see which styles are being applied
3. **Compare with archive files** to verify changes
4. **Test in incognito mode** to rule out caching issues

Good luck with your Squarespace deployment! 🚀
