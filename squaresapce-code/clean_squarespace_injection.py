#!/usr/bin/env python3
"""
Clean Squarespace CSS injection - properly inserts isolation CSS without duplicates
"""

import os
import re

SQUARESPACE_CSS = """/* =====================
   SQUARESPACE 7.1 FLUID ENGINE ISOLATION
   Prevents Squarespace from overriding custom styles
====================== */

/* Kill ALL Squarespace containers - nuclear option */
body .sqs-block-code,
body .sqs-block-code *,
body .sqs-block-content,
body .sqs-block-content *,
body .fe-block,
body .fe-block * {
  background: transparent !important;
  margin: 0 !important;
  padding: 0 !important;
  box-sizing: border-box !important;
}

/* Force white background on outer wrapper only */
body .orlUX-wrapper {
  background: #ffffff !important;
  margin: 0 !important;
  padding: 0 !important;
  width: 100% !important;
  max-width: 100% !important;
  display: block !important;
  position: relative !important;
}

body .orlUX {
  background: #ffffff !important;
  margin: 0 auto !important;
  padding: 0 !important;
  width: 100% !important;
  max-width: 100% !important;
  display: block !important;
  position: relative !important;
}

/* Restore proper box model to content inside .orlUX */
body .orlUX * {
  box-sizing: border-box !important;
}

/* Force typography - prevent Squarespace font inheritance */
body .orlUX,
body .orlUX *,
body .orlUX *::before,
body .orlUX *::after {
  font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
}

/* AGGRESSIVE COLOR OVERRIDES - prevent Squarespace theme colors */

/* Primary headings - dark blue */
body .orlUX h1,
body .orlUX h2,
body .orlUX .hero h1,
body .orlUX .section-header h2,
body .orlUX .person-name,
body .orlUX .alumni-who,
body .orlUX .nav-brand {
  color: #0b2545 !important;
  background: transparent !important;
}

/* Secondary headings */
body .orlUX h3,
body .orlUX h4,
body .orlUX h5,
body .orlUX h6 {
  color: #173451 !important;
  background: transparent !important;
}

/* Body text */
body .orlUX p,
body .orlUX .hero-lead,
body .orlUX .person-hook,
body .orlUX .alumni-now,
body .orlUX li {
  color: #566579 !important;
  background: transparent !important;
}

/* Labels and metadata */
body .orlUX .person-title,
body .orlUX .tag,
body .orlUX .nav-link,
body .orlUX .news-date {
  color: #6e7d8a !important;
  background: transparent !important;
}

/* Links and buttons */
body .orlUX a {
  color: #117db2 !important;
}

body .orlUX a:hover {
  color: #0a5a85 !important;
}

body .orlUX .btn {
  color: #117db2 !important;
  background: transparent !important;
  border-color: #117db2 !important;
}

/* Special accents */
body .orlUX .alumni-when {
  color: #11c5b3 !important;
  background: transparent !important;
}

/* Hero sections - white text on image backgrounds */
body .orlUX .hero h1,
body .orlUX .hero p,
body .orlUX .hero .hero-lead {
  color: #ffffff !important;
}

/* Card backgrounds - force white */
body .orlUX .person-card,
body .orlUX .featured-card,
body .orlUX .alumni-card,
body .orlUX .alumni-details,
body .orlUX .card,
body .orlUX .news-card {
  background: #ffffff !important;
}

/* Input elements */
body .orlUX input,
body .orlUX input::placeholder,
body .orlUX textarea {
  color: #566579 !important;
  background: transparent !important;
}

body .orlUX .alumni-search {
  background: #ffffff !important;
}

/* Section backgrounds */
body .orlUX section,
body .orlUX article,
body .orlUX main,
body .orlUX header,
body .orlUX footer,
body .orlUX nav,
body .orlUX div {
  background: transparent !important;
}

/* Only these specific sections should have colored backgrounds */
body .orlUX .hero,
body .orlUX .hero-coral {
  /* Let the original CSS handle these - don't force transparent */
  background: transparent;
}

/* End Squarespace isolation */

"""

def inject_squarespace_css(filepath):
    """
    Inject Squarespace isolation CSS at the beginning of <style> tag
    Only if it hasn't been injected already
    """

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check if already injected
    if "SQUARESPACE 7.1 FLUID ENGINE ISOLATION" in content:
        return False, "Already has Squarespace isolation CSS"

    # Find the <style> tag and inject CSS right after it
    style_pattern = r'(<style>\s*)'

    if not re.search(style_pattern, content):
        return False, "No <style> tag found"

    # Inject the CSS right after <style>
    new_content = re.sub(
        style_pattern,
        r'\1' + SQUARESPACE_CSS + '\n',
        content,
        count=1
    )

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

    return True, "Squarespace isolation CSS injected successfully"

def main():
    base_dir = '/Users/adrianstiermbp2023/Desktop/webby'

    files_to_fix = [
        'coral_reefs.html',
        'kelp-forests.html',
        'organismal.html',
        'research.html',
        'people.html',
        'publications.html',
        'news.html'
    ]

    print("🔧 Injecting clean Squarespace isolation CSS...\n")

    for filename in files_to_fix:
        filepath = os.path.join(base_dir, filename)
        if os.path.exists(filepath):
            print(f"Processing {filename}...")
            success, message = inject_squarespace_css(filepath)
            if success:
                print(f"  ✓ {message}")
            else:
                print(f"  → {message}")
        else:
            print(f"  ✗ {filename} not found")

    print("\n✅ All files processed!")
    print("\n📝 Next steps:")
    print("1. Open coral_reefs.html in browser to test spacing")
    print("2. If spacing looks good, test in Squarespace")
    print("3. Verify colors and typography are preserved")

if __name__ == '__main__':
    main()
