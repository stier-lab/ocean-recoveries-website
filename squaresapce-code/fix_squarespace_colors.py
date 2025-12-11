#!/usr/bin/env python3
"""
Fix Squarespace color conflicts by adding ultra-hardened CSS
"""

import re
import os

ULTRA_HARDENED_CSS = """/* =====================
   SQUARESPACE 7.1 FLUID ENGINE - ULTRA HARDENED ISOLATION
   Forces all colors, backgrounds, and typography
====================== */

/* Kill all Squarespace spacing/backgrounds */
.sqs-block-code {
  padding: 0 !important;
  margin: 0 !important;
  background: #ffffff !important;
}

.sqs-block-code .sqs-block-content {
  padding: 0 !important;
  margin: 0 !important;
  background: #ffffff !important;
}

[class*="fe-block"] {
  background: transparent !important;
}

/* Main wrapper - nuclear option */
.orlUX-wrapper {
  background: #ffffff !important;
  margin: 0 !important;
  padding: 0 !important;
  width: 100% !important;
  max-width: 100% !important;
  display: block !important;
  position: relative !important;
  overflow: hidden !important;
}

.orlUX {
  background: #ffffff !important;
  margin: 0 auto !important;
  padding: 0 !important;
  width: 100% !important;
  max-width: 100% !important;
  display: block !important;
  position: relative !important;
  font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
}

/* Reset Squarespace's box-sizing */
.orlUX-wrapper,
.orlUX-wrapper *,
.orlUX,
.orlUX *,
.orlUX *::before,
.orlUX *::after {
  box-sizing: border-box !important;
}

/* Force backgrounds transparent */
.orlUX h1, .orlUX h2, .orlUX h3, .orlUX h4, .orlUX h5, .orlUX h6,
.orlUX p, .orlUX div, .orlUX section, .orlUX article, .orlUX main,
.orlUX header, .orlUX footer, .orlUX nav, .orlUX ul, .orlUX li {
  background: transparent !important;
}

/* AGGRESSIVE COLOR OVERRIDES */
.orlUX h1,
.orlUX h2,
.orlUX .hero h1,
.orlUX .section-header h2,
.orlUX .person-name,
.orlUX .alumni-who,
.orlUX .nav-brand {
  color: #0b2545 !important;
}

.orlUX h3,
.orlUX h4 {
  color: #173451 !important;
}

.orlUX p,
.orlUX .hero-lead,
.orlUX .person-hook,
.orlUX .alumni-now {
  color: #566579 !important;
}

.orlUX .person-title,
.orlUX .tag,
.orlUX .nav-link {
  color: #6e7d8a !important;
}

.orlUX a,
.orlUX .btn {
  color: #117db2 !important;
}

.orlUX .alumni-when {
  color: #11c5b3 !important;
}

/* Force link colors */
.orlUX a:not(.btn):not(.nav-link) {
  color: #117db2 !important;
}

.orlUX a:not(.btn):not(.nav-link):hover {
  color: #0a5a85 !important;
}

/* Force typography inheritance on all text elements */
.orlUX,
.orlUX * {
  font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif !important;
}

/* Card backgrounds */
.orlUX .person-card,
.orlUX .featured-card,
.orlUX .alumni-card,
.orlUX .alumni-details {
  background: #ffffff !important;
}

/* Input elements */
.orlUX input,
.orlUX input::placeholder {
  color: #566579 !important;
  background: transparent !important;
}

.orlUX .alumni-search {
  background: #ffffff !important;
}

"""

def fix_file(filepath):
    """Replace the old isolation CSS with ultra-hardened version"""

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find and replace the old SQUARESPACE 7.1 FLUID ENGINE section
    pattern = r'/\* =====================\s+SQUARESPACE 7\.1 FLUID ENGINE.*?\*\/\s+/\* Ensure proper typography inheritance.*?\}\s+'

    # Replace with ultra-hardened version
    content = re.sub(
        pattern,
        ULTRA_HARDENED_CSS + '\n',
        content,
        flags=re.DOTALL
    )

    return content

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

    for filename in files_to_fix:
        filepath = os.path.join(base_dir, filename)
        if os.path.exists(filepath):
            print(f"Fixing {filename}...")
            fixed_content = fix_file(filepath)

            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
            print(f"✓ {filename} fixed with ultra-hardened CSS")
        else:
            print(f"✗ {filename} not found")

if __name__ == '__main__':
    main()
