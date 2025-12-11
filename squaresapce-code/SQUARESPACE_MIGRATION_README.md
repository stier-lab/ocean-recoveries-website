# Squarespace 7.1 Fluid Engine Migration

## Summary
All HTML files have been updated to work with **Squarespace 7.1 Fluid Engine** template system.

**Date:** October 20, 2025
**Backup Location:** `/Users/adrianstiermbp2023/Desktop/webby/archive_pre_squarespace/`

---

## What Changed

### CSS Hardening
All files now include Squarespace isolation CSS at the top of their `<style>` blocks:
- Force white backgrounds on all Squarespace containers
- Override Fluid Engine grid system backgrounds
- **Aggressive `!important` flags on ALL colors to prevent Squarespace overrides**
- Transparent backgrounds on all content elements
- Explicit color declarations for headings, paragraphs, links, and UI elements
- Typography forced on all elements to prevent font inheritance issues

### HTML Structure
All files wrapped with:
```html
<div class="orlUX-wrapper">
  <div class="orlUX">
    <!-- Your content here -->
  </div>
</div>
```

---

## Files Updated

### ✅ Converted Files
1. `coral_reefs.html`
2. `kelp-forests.html`
3. `organismal.html`
4. `research.html`
5. `people.html`
6. `publications.html`
7. `news.html`
8. `join_us.html` (replaced with v2)

### 📦 Archived Files
Original versions saved in: `archive_pre_squarespace/`

---

## How to Use in Squarespace

### Method 1: Full Page Integration
1. In Squarespace, create a **new page**
2. Add a **Code Block** to the page
3. Copy the **entire contents** of one of the HTML files
4. Paste into the Code Block
5. Save and preview

### Method 2: Section Integration
1. Add a **Code Block** to an existing page section
2. Make sure the section has:
   - **Background:** White or transparent
   - **Width:** Full bleed or inset (both work)
3. Paste the HTML code
4. Save

---

## Squarespace Custom CSS

Add this to your **Design → Custom CSS** in Squarespace:

```css
/* Force Squarespace 7.1 Fluid Engine to respect white backgrounds */
.fe-block[class*="fe-block"] {
  background: transparent !important;
}

.sqs-block-code {
  background: #ffffff !important;
  padding: 0 !important;
  margin: 0 !important;
}

.sqs-block-code .sqs-block-content {
  background: #ffffff !important;
  padding: 0 !important;
  margin: 0 !important;
}

/* If the page section itself has a blue background, override it */
.page-section {
  background: #ffffff !important;
}
```

---

## Testing Checklist

Test each page in Squarespace for:
- [ ] White background (no blue or multiple colors)
- [ ] Proper spacing and layout
- [ ] Typography renders correctly (Inter font)
- [ ] Images load properly
- [ ] Cards have shadows and hover effects
- [ ] Navigation works (scrollspy on join_us.html)
- [ ] Mobile responsive (test on small screens)

---

## Troubleshooting

### Issue: Still seeing blue backgrounds
**Solution:**
1. Check that Custom CSS was added (above)
2. Ensure page section background is set to white/transparent
3. Try refreshing the page (Ctrl+Shift+R / Cmd+Shift+R)

### Issue: Layout looks broken
**Solution:**
1. Verify you copied the **entire** HTML file (including `<style>` tag)
2. Check that `.orlUX-wrapper` div is present
3. Make sure Code Block is in a **full-width section**

### Issue: Fonts don't look right
**Solution:**
1. Verify Inter font is loading (check `<link>` tag for Google Fonts)
2. Clear browser cache
3. Check Squarespace isn't overriding with site-wide font

---

## Files for Reference

- `squarespace_hardened_prefix.css` - The isolation CSS used
- `convert_to_squarespace.py` - Python script used for conversion
- `join_us_squarespace.html` - First version (deprecated)
- `join_us_squarespace_v2.html` - Current version with extra wrappers

---

## Next Steps

1. **Test locally**: Open the HTML files in a browser to verify they still work standalone
2. **Upload to Squarespace**: Follow "How to Use" instructions above
3. **Verify on live site**: Check https://www.oceanrecoveries.com after deployment
4. **Monitor**: Watch for any CSS conflicts on different devices

---

## Need Help?

If you encounter issues:
1. Check the archived originals in `archive_pre_squarespace/`
2. Verify Custom CSS was added to Squarespace
3. Use browser DevTools to inspect which styles are being applied
4. Compare working version with broken version

---

**All files are now Squarespace 7.1 Fluid Engine ready! 🌊**
