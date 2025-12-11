# Squarespace 7.1 Troubleshooting Guide

**Status:** ✅ DEEP FIX APPLIED
**Date:** October 20, 2025
**Issue:** Light-on-light text, navy/white backgrounds, spacing problems

---

## 🔍 Issues Identified

### 1. **Light-on-Light Text (Unreadable)**
**Problem:** Squarespace was making body text light gray (#cccccc) on white backgrounds
**Cause:** Site-wide color scheme overriding our text colors
**Fix Applied:** Force dark text colors with maximum specificity

### 2. **Navy & White Background Bands**
**Problem:** Content showing navy blue backgrounds with white stripes
**Cause:** Fluid Engine grid system + page section themes
**Fix Applied:** Force all backgrounds to transparent or white

### 3. **Unwanted Spacing**
**Problem:** Extra padding/margins creating gaps
**Cause:** Fluid Engine's `.fe-block` containers and `.sqs-block-code` wrappers
**Fix Applied:** Reset all Squarespace spacing to 0

---

## ✅ What The Deep Fix Does

### Container Isolation
```css
/* Removes ALL Squarespace backgrounds */
.sqs-block-code,
[class*="fe-block"],
.page-section {
  background: transparent !important;
}

/* Forces page background to pure white */
body, #page, .site-wrapper {
  background: #ffffff !important;
}
```

### Text Contrast Enforcement
```css
/* Dark text on white backgrounds */
.orlUX h1, .orlUX h2, .orlUX h3 {
  color: #0b2545 !important;  /* Dark blue */
}

.orlUX p {
  color: #566579 !important;  /* Dark gray */
}

/* White text in hero section */
.orlUX .hero h1, .orlUX .hero p {
  color: #ffffff !important;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.5) !important;
}
```

### Spacing Reset
```css
/* Remove all Squarespace padding */
.sqs-block-code,
.sqs-block-code *,
.sqs-block-content,
.sqs-block-content * {
  margin: 0 !important;
  padding: 0 !important;
}
```

---

## 🚀 How to Use in Squarespace

### Step 1: Add Custom CSS (Required!)

Go to **Design → Custom CSS** and paste this:

```css
/* Force Squarespace to respect our code block */
.sqs-block-code {
  background: transparent !important;
  padding: 0 !important;
  margin: 0 !important;
  border: none !important;
}

.sqs-block-content {
  background: transparent !important;
  padding: 0 !important;
}

/* Remove section backgrounds */
[class*="fe-block"],
.page-section {
  background: transparent !important;
}

/* Ensure page is white */
body, #page {
  background: #ffffff !important;
}
```

### Step 2: Configure Page Section

1. Click on the section containing your code block
2. Go to **Section → Background**
3. Set to **White** or **Transparent**
4. Go to **Section → Width**
5. Set to **Full Bleed** or **Inset** (both work)

### Step 3: Add Code Block

1. Add a **Code Block** to your page
2. Paste the entire HTML file contents
3. Save and preview

---

## 🐛 Common Issues & Fixes

### Issue: Text Still Light Gray

**Diagnosis:**
- Squarespace's site-wide theme is overriding colors
- Check if you added Custom CSS (Step 1)

**Fix:**
```css
/* Add this to Custom CSS with higher specificity */
body .sqs-block-code .orlUX h1 {
  color: #0b2545 !important;
}

body .sqs-block-code .orlUX p {
  color: #566579 !important;
}
```

### Issue: Navy Background Still Showing

**Diagnosis:**
- Page section has a theme color applied
- Fluid Engine grid is adding backgrounds

**Fix:**
1. Click on the page section
2. Go to **Section → Theme**
3. Select **Light** (not Dark or Accent)
4. OR add this to Custom CSS:
```css
[data-section-theme],
.page-section[data-section-theme] {
  background: #ffffff !important;
}
```

### Issue: Content Too Narrow with White Sides

**Diagnosis:**
- Fluid Engine grid is constraining width
- Container padding not accounting for Squarespace's layout

**Fix:**
1. Make sure section is set to **Full Bleed** width
2. OR add to Custom CSS:
```css
.sqs-block-code .orlUX-wrapper {
  width: 100vw !important;
  margin-left: calc(-50vw + 50%) !important;
  margin-right: calc(-50vw + 50%) !important;
}
```

### Issue: Hero Text Not White

**Diagnosis:**
- Hero section not getting the white text override

**Fix:**
Add this to Custom CSS:
```css
body .sqs-block-code .orlUX .hero h1,
body .sqs-block-code .orlUX .hero p,
body .sqs-block-code .orlUX .hero .eyebrow {
  color: #ffffff !important;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.6) !important;
}
```

### Issue: Buttons Wrong Color

**Diagnosis:**
- Squarespace button styles overriding ours

**Fix:**
```css
body .sqs-block-code .orlUX .btn--primary {
  background: #ffffff !important;
  color: #0b2545 !important;
  border: 2px solid #dbe7f3 !important;
}

body .sqs-block-code .orlUX .btn--secondary {
  background: #117db2 !important;
  color: #ffffff !important;
}
```

---

## 🔬 Debugging Tools

### Check What Squarespace is Applying

1. Right-click on broken element → **Inspect**
2. Look in **Computed** tab
3. Find which stylesheet is winning:
   - If you see `squarespace.css` or `site.css` → Squarespace is overriding
   - If you see `<style>` → Our styles are winning ✓

### Force Your Styles to Win

If Squarespace is still winning, increase specificity:

**Current:**
```css
.orlUX h1 { color: #0b2545 !important; }
```

**Higher Specificity:**
```css
body .sqs-block-code .orlUX h1 {
  color: #0b2545 !important;
}
```

**Nuclear Option:**
```css
html body .sqs-block-code .orlUX-wrapper .orlUX h1 {
  color: #0b2545 !important;
}
```

---

## 📊 Color Reference

| Element | Color | Hex | Purpose |
|---------|-------|-----|---------|
| Primary headings | Dark Blue | `#0b2545` | H1, H2 on white |
| Secondary headings | Medium Blue | `#173451` | H3, H4 |
| Body text | Dark Gray | `#566579` | Paragraphs, descriptions |
| Links | Accent Blue | `#117db2` | Clickable elements |
| Hero text | White | `#ffffff` | Text on dark hero |
| Backgrounds | White | `#ffffff` | Main sections |

**Contrast Ratios:**
- `#0b2545` on `#ffffff` → **14.7:1** (AAA)
- `#566579` on `#ffffff` → **5.2:1** (AA)
- `#ffffff` on `#0b2545` → **14.7:1** (AAA)

---

## 📋 Pre-Flight Checklist

Before deploying to Squarespace:

- [ ] Custom CSS added to Design → Custom CSS
- [ ] Section background set to White or Transparent
- [ ] Section theme set to Light (not Dark/Accent)
- [ ] Code Block added with full HTML
- [ ] Tested on Desktop view
- [ ] Tested on Mobile view
- [ ] Tested on Tablet view
- [ ] Text is readable (dark on white)
- [ ] Hero text is white on dark
- [ ] No navy/white banding
- [ ] Buttons have correct colors
- [ ] Links are visible and blue

---

## 🆘 Still Having Issues?

### Last Resort: Ultra Nuclear Option

If nothing else works, wrap your ENTIRE HTML in this mega-wrapper:

```html
<div style="background: #ffffff !important; width: 100% !important; padding: 0 !important; margin: 0 !important;">
  <!-- Your entire orlUX-wrapper and orlUX content here -->
</div>
```

### Contact for Help

If issues persist:
1. Take screenshot of the problem
2. Right-click broken element → Inspect
3. Copy the "Computed" styles
4. Note which CSS file is winning
5. Share this info for targeted debugging

---

**All files updated with maximum Squarespace isolation! 🛡️**
