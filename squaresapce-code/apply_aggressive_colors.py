#!/usr/bin/env python3
"""
Apply aggressive color overrides to all HTML files
"""

import os

COLOR_OVERRIDES = """
/* AGGRESSIVE COLOR OVERRIDES FOR SQUARESPACE */
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

/* Force typography on all elements */
.orlUX,
.orlUX * {
  font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif !important;
}

/* Card backgrounds */
.orlUX .person-card,
.orlUX .featured-card,
.orlUX .alumni-card,
.orlUX .alumni-details,
.orlUX .card {
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

def apply_color_fixes(filepath):
    """Insert color overrides after the typography inheritance block"""

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check if already applied
    if "AGGRESSIVE COLOR OVERRIDES FOR SQUARESPACE" in content:
        return False, "Already has color overrides"

    # Find the insertion point
    marker = """/* Ensure proper typography inheritance */
.orlUX {
  font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
}"""

    if marker not in content:
        return False, "Marker not found"

    # Insert color overrides after marker
    new_content = content.replace(marker, marker + COLOR_OVERRIDES)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

    return True, "Color overrides added"

def main():
    base_dir = '/Users/adrianstiermbp2023/Desktop/webby'

    files_to_fix = [
        'coral_reefs.html',
        'kelp-forests.html',
        'organismal.html',
        'research.html',
        'publications.html',
        'news.html'
    ]

    for filename in files_to_fix:
        filepath = os.path.join(base_dir, filename)
        if os.path.exists(filepath):
            print(f"Processing {filename}...")
            success, message = apply_color_fixes(filepath)
            if success:
                print(f"  ✓ {message}")
            else:
                print(f"  → {message}")
        else:
            print(f"  ✗ {filename} not found")

    print("\n✅ All files processed!")

if __name__ == '__main__':
    main()
