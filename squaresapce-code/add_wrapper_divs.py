#!/usr/bin/env python3
"""
Add .orlUX-wrapper and .orlUX wrapper divs to body content
"""

import os
import re

def add_wrapper_divs(filepath):
    """
    Wrap all body content with .orlUX-wrapper and .orlUX divs
    """

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check if already wrapped
    if '<div class="orlUX-wrapper">' in content:
        return False, "Already has wrapper divs"

    # Find <body> tag and add wrapper right after it
    body_pattern = r'(<body>\s*)'

    if not re.search(body_pattern, content):
        return False, "No <body> tag found"

    # Add opening wrappers after <body>
    content = re.sub(
        body_pattern,
        r'\1<div class="orlUX-wrapper">\n  <div class="orlUX">\n',
        content,
        count=1
    )

    # Find </body> tag and add closing wrappers before it
    closing_body_pattern = r'(\s*</body>)'

    content = re.sub(
        closing_body_pattern,
        r'  </div>\n</div>\n\1',
        content,
        count=1
    )

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    return True, "Wrapper divs added successfully"

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

    print("🔧 Adding .orlUX wrapper divs...\n")

    for filename in files_to_fix:
        filepath = os.path.join(base_dir, filename)
        if os.path.exists(filepath):
            print(f"Processing {filename}...")
            success, message = add_wrapper_divs(filepath)
            if success:
                print(f"  ✓ {message}")
            else:
                print(f"  → {message}")
        else:
            print(f"  ✗ {filename} not found")

    print("\n✅ All files processed!")
    print("\n📝 Files are now ready for Squarespace 7.1 Fluid Engine")

if __name__ == '__main__':
    main()
