#!/usr/bin/env python3
"""
Apply deep Squarespace 7.1 fixes to resolve text contrast and background issues
"""

import os
import re

DEEP_FIX_CSS = open('/Users/adrianstiermbp2023/Desktop/webby/SQUARESPACE_DEEP_FIX.css', 'r').read()

def apply_deep_fix(filepath):
    """Replace existing Squarespace CSS with deep fix version"""

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check if already has the deep fix
    if "SQUARESPACE 7.1 DEEP FIX" in content:
        return False, "Already has deep fix"

    # Find the existing SQUARESPACE isolation section and replace it entirely
    # Pattern matches from start of Squarespace comment to end of aggressive color overrides
    pattern = r'/\* =====================\s+SQUARESPACE 7\.1 FLUID ENGINE.*?background: #ffffff !important;\s*\}'

    if not re.search(pattern, content, re.DOTALL):
        return False, "Could not find Squarespace CSS section to replace"

    # Replace with deep fix
    new_content = re.sub(
        pattern,
        DEEP_FIX_CSS,
        content,
        flags=re.DOTALL
    )

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

    return True, "Deep fix applied"

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

    print("=" * 50)
    print("APPLYING SQUARESPACE 7.1 DEEP FIX")
    print("=" * 50)
    print()

    for filename in files_to_fix:
        filepath = os.path.join(base_dir, filename)
        if os.path.exists(filepath):
            print(f"Processing {filename}...")
            success, message = apply_deep_fix(filepath)
            if success:
                print(f"  ✓ {message}")
            else:
                print(f"  → {message}")
        else:
            print(f"  ✗ {filename} not found")

    print()
    print("=" * 50)
    print("✅ DEEP FIX COMPLETE")
    print("=" * 50)
    print()
    print("This fix addresses:")
    print("  • Light-on-light text contrast issues")
    print("  • Navy/white background conflicts")
    print("  • Spacing and margin problems")
    print("  • Typography inheritance")
    print()

if __name__ == '__main__':
    main()
