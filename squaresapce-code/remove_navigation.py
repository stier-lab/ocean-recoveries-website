#!/usr/bin/env python3
"""Remove duplicate navigation from coral_reefs.html and organismal.html for Squarespace 7.1"""

import re

def remove_navigation(filepath):
    print(f"Processing {filepath}...")

    with open(filepath, 'r') as f:
        content = f.read()

    # Remove top navigation HTML
    content = re.sub(
        r'  <!-- Top Navigation -->.*?</nav>\s*\n',
        '',
        content,
        flags=re.DOTALL
    )

    # Remove floating page navigation HTML
    content = re.sub(
        r'  <!-- Floating Page Navigation -->.*?</div>\s*\n',
        '',
        content,
        flags=re.DOTALL
    )

    # Replace hero comment
    content = re.sub(
        r'  <!-- Hero -->',
        '  <!-- Hero (Squarespace 7.1 optimized - no duplicate navigation) -->',
        content
    )

    # Remove top navigation CSS (all variants)
    content = re.sub(
        r'    /\* ===== Top Navigation ===== \*/.*?@media \(max-width: 640px\) \{\s+\.nav-links \{\s+display: none;\s+\}\s+\}',
        '    /* Navigation removed - Squarespace 7.1 provides its own navigation */',
        content,
        flags=re.DOTALL
    )

    # Remove floating navigation CSS
    content = re.sub(
        r'    /\* ===== Navigation \(Floating TOC Button\) ===== \*/.*?@media \(max-width: 768px\) \{[^}]*\.page-nav-panel[^}]*\}[^}]*\}',
        '',
        content,
        flags=re.DOTALL
    )

    # Remove mobile menu CSS
    content = re.sub(
        r'    /\* Mobile Menu \*/.*?\.menu-grid a:hover \{',
        '    /* ===== Hero ===== */',
        content,
        flags=re.DOTALL
    )

    # Remove page navigation toggle JavaScript
    content = re.sub(
        r'    // Page navigation toggle.*?\}\)\(\);\s+\}\)\(\);',
        '    })();',
        content,
        flags=re.DOTALL
    )

    with open(filepath, 'w') as f:
        f.write(content)

    print(f"✓ Removed navigation from {filepath}")

if __name__ == "__main__":
    remove_navigation('/Users/adrianstiermbp2023/Desktop/webby/coral_reefs.html')
    remove_navigation('/Users/adrianstiermbp2023/Desktop/webby/organismal.html')
    print("Done! Navigation removed from all ecosystem pages.")
