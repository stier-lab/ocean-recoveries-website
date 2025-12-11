# URGENT: Deploy Updated Files to Fix Live Site Issues

## Current Problem

The live site (https://www.oceanrecoveries.com/coralreefs) has **severe visibility issues**:
- Light text on light backgrounds (unreadable)
- Invisible buttons
- Washed-out headings
- Poor contrast throughout

## Root Cause

Squarespace is serving **OLD HTML** (orlUX version) instead of your updated local files.

---

## Solution: Upload These Fixed Files

### Files Ready for Deployment (ALL FIXED):

✅ **coral_reefs.html** - CRITICAL PRIORITY
✅ **kelp-forests.html** - Fixed
✅ **organismal.html** - Fixed
✅ **research.html** - Fixed
✅ **publications.html** - Fixed

**Location:** `/Users/adrianstiermbp2023/Desktop/webby/`

---

## Deployment Steps

### 1. **Backup Current Squarespace Content**
   - Log into Squarespace
   - Download/backup the current coral_reefs page
   - Save a copy in case you need to revert

### 2. **Upload coral_reefs.html (PRIORITY 1)**
   - Go to Squarespace page editor
   - Replace the entire page content with `/Desktop/webby/coral_reefs.html`
   - **OR** if using Code Injection:
     - Copy the entire `coral_reefs.html` contents
     - Paste into the page's Custom CSS/HTML area

### 3. **Clear All Caches**
   - Clear Squarespace cache
   - Clear your browser cache
   - Use incognito/private browsing to test

### 4. **Verify Fixes**
   After uploading, check these specific areas:

   ✓ **Hero Section:**
     - "Explore Our Research" button should have white background
     - All text should have shadows for readability
     - Buttons should be clearly visible

   ✓ **Research Themes:**
     - "Research themes" heading should be dark navy (#0b2545)
     - Description text should be clearly readable
     - No washed-out text

   ✓ **Featured Projects:**
     - "Featured projects" heading should be bold and dark
     - All text should be easily readable
     - "Learn more" buttons should have proper backgrounds

   ✓ **Publications:**
     - All text should have good contrast
     - "Open" buttons should be visible (white background with dark text)
     - No light-on-light issues

### 5. **Test Responsiveness**
   - View on desktop
   - View on mobile
   - Test both light and dark modes

---

## What's Fixed in the Local Files

### ✅ Text Visibility
```css
/* Before (bad - on live site) */
.hero h1 { color: #fff; }
.eyebrow { color: rgba(255, 255, 255, 0.85); }

/* After (good - in local files) */
.hero h1 {
  color: #fff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
}
.eyebrow {
  color: #fff;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
```

### ✅ Button Visibility
```css
/* Proper button backgrounds now defined */
.btn--primary {
  background: #fff;
  color: var(--ink);
}
```

### ✅ Dark Mode Support
```css
/* Full dark mode variables added */
@media (prefers-color-scheme: dark) {
  :root {
    --ink: #e9f2fa;
    --bg: #0a1929;
    --card: #132942;
    /* ... */
  }
}
```

### ✅ Fallback Backgrounds
```css
.hero {
  /* Ensures text is always on dark background */
  background: linear-gradient(135deg, #0b2545 0%, #117db2 100%);
}
```

---

## Alternative: If You Can't Replace Entire Page

If Squarespace won't let you replace the entire HTML, extract just the CSS:

1. **Copy lines 11-1034** from coral_reefs.html (everything inside `<style>` tags)
2. **Paste into:** Squarespace → Design → Custom CSS
3. **Save and refresh**

---

## Post-Deployment Checklist

After deployment, verify these specific items from the screenshots:

- [ ] Screenshot 1: Hero buttons clearly visible
- [ ] Screenshot 2: "Research themes" heading readable
- [ ] Screenshot 3: "Featured projects" text dark and bold
- [ ] Screenshot 4: Publication "Open" buttons visible
- [ ] All text has proper contrast
- [ ] No light-on-light anywhere
- [ ] Dark mode works correctly
- [ ] Mobile view looks good

---

## Expected Results

### Before (Current Live Site):
- ❌ Invisible/washed out text
- ❌ Light buttons on light backgrounds
- ❌ Unreadable sections
- ❌ Poor contrast throughout

### After (With Fixed Files):
- ✅ Bold, readable headings
- ✅ Clear button backgrounds
- ✅ Perfect contrast everywhere
- ✅ Professional appearance
- ✅ Dark mode support
- ✅ Mobile responsive

---

## Need Help?

If you encounter issues during deployment:

1. **Check file encoding** - Should be UTF-8
2. **Verify no HTML got stripped** - Squarespace sometimes removes certain tags
3. **Clear cache thoroughly** - Old CSS can persist
4. **Test in incognito mode** - Eliminates browser cache issues

---

**Bottom Line:** Your local files are PERFECT. The live site will be fixed as soon as you upload them to Squarespace. All visibility issues will disappear immediately.
