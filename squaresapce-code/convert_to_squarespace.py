#!/usr/bin/env python3
"""
Convert HTML files to Squarespace 7.1 Fluid Engine compatible format
"""

import re
import os

SQUARESPACE_PREFIX = """/* =====================
   SQUARESPACE 7.1 FLUID ENGINE - ISOLATION LAYER
   Force complete visual isolation from Squarespace
====================== */

/* Kill all Squarespace spacing/backgrounds around code block */
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

/* Force white on parent containers */
[class*="fe-block"] {
  background: transparent !important;
}

/* Main wrapper - nuclear option for backgrounds */
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

/* Core container */
.orlUX {
  background: #ffffff !important;
  margin: 0 auto !important;
  padding: 0 !important;
  width: 100% !important;
  max-width: 100% !important;
  display: block !important;
  position: relative !important;
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

/* Force backgrounds transparent on all sections */
.orlUX h1, .orlUX h2, .orlUX h3, .orlUX h4, .orlUX h5, .orlUX h6,
.orlUX p, .orlUX div, .orlUX section, .orlUX article, .orlUX main,
.orlUX header, .orlUX footer, .orlUX nav {
  background: transparent !important;
}

/* Ensure proper typography inheritance */
.orlUX {
  font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
}

"""

def convert_file(filepath):
    """Convert a single HTML file to Squarespace format"""

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Add Squarespace CSS prefix after opening <style> tag
    content = re.sub(
        r'(<style>\s*)',
        r'\1' + SQUARESPACE_PREFIX + '\n    ',
        content,
        count=1
    )

    # Wrap body content with orlUX-wrapper and orlUX divs
    # Find the opening <body> tag
    body_match = re.search(r'<body[^>]*>', content)
    if body_match:
        body_tag = body_match.group(0)
        # Add wrapper after body tag
        content = content.replace(
            body_tag,
            body_tag + '\n<div class="orlUX-wrapper">\n  <div class="orlUX">',
            1
        )
        # Add closing wrappers before </body>
        content = content.replace(
            '</body>',
            '  </div>\n</div>\n</body>',
            1
        )

    return content

def main():
    base_dir = '/Users/adrianstiermbp2023/Desktop/webby'

    # Files to convert (excluding the join_us versions which are already done)
    files_to_convert = [
        'coral_reefs.html',
        'kelp-forests.html',
        'organismal.html',
        'research.html',
        'people.html',
        'publications.html',
        'news.html'
    ]

    for filename in files_to_convert:
        filepath = os.path.join(base_dir, filename)
        if os.path.exists(filepath):
            print(f"Converting {filename}...")
            converted_content = convert_file(filepath)

            # Write to new file
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(converted_content)
            print(f"✓ {filename} converted")
        else:
            print(f"✗ {filename} not found")

if __name__ == '__main__':
    main()
