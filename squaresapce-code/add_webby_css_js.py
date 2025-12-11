#!/usr/bin/env python3
"""Add Webby CSS and JavaScript to coral_reefs.html and organismal.html"""

import re

# CSS to add before accessibility section
FADEIN_CSS = '''    /* ===== Webby Enhancement: Scroll-Triggered Fade-In Animations ===== */
    .fadeIn {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    .fadeIn.visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* Staggered animation delays for theme cards */
    .theme-card:nth-child(1) { transition-delay: 0s; }
    .theme-card:nth-child(2) { transition-delay: 0.1s; }
    .theme-card:nth-child(3) { transition-delay: 0.2s; }
    .theme-card:nth-child(4) { transition-delay: 0.3s; }

    /* Staggered animation delays for finding cards */
    .finding-card:nth-child(1) { transition-delay: 0s; }
    .finding-card:nth-child(2) { transition-delay: 0.1s; }
    .finding-card:nth-child(3) { transition-delay: 0.2s; }
    .finding-card:nth-child(4) { transition-delay: 0.3s; }

'''

# JavaScript to add before </body>
INTERSECTION_JS = '''
  <!-- Webby Enhancement: Scroll-Triggered Fade-In Animations -->
  <script>
    (function() {
      const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
      };

      const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeInObserver.unobserve(entry.target);
          }
        });
      }, observerOptions);

      document.querySelectorAll('.fadeIn').forEach(el => {
        fadeInObserver.observe(el);
      });
    })();
  </script>
'''

# Card enhancement CSS
CARD_CSS_PATTERN = r'(    /\* ===== Cards ===== \*/\s+\.card \{[^}]+\})'
CARD_CSS_REPLACEMENT = '''    /* ===== Cards ===== */
    /* Webby Enhancement: Gradient Borders */
    .card {
      background: var(--card);
      border: 1px solid var(--line);
      border-radius: var(--r-lg);
      padding: var(--s3);
      box-shadow: var(--shadow);
      position: relative;
      transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
    }

    .card::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: var(--r-lg);
      padding: 1px;
      background: linear-gradient(135deg, rgba(17,125,178,0.3), rgba(17,197,179,0.3));
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask-composite: exclude;
      opacity: 0;
      transition: opacity 0.4s ease;
      pointer-events: none;
    }

    .card:hover {
      transform: translateY(-3px);
      box-shadow: var(--shadow-lg);
    }

    .card:hover::before {
      opacity: 1;
    }'''

# Theme card enhancement CSS
THEME_CARD_CSS_PATTERN = r'(    \.theme-card \{[^}]+\}\s+\.theme-card:hover \{[^}]+\})'
THEME_CARD_CSS_REPLACEMENT = '''    /* Webby Enhancement: Theme Cards with Gradient Borders */
    .theme-card {
      border: 1px solid var(--line);
      border-radius: var(--r-lg);
      overflow: hidden;
      background: var(--card);
      box-shadow: var(--shadow);
      display: grid;
      grid-template-rows: auto 1fr auto;
      position: relative;
      transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease, border-color 0.3s ease;
    }

    .theme-card::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: var(--r-lg);
      padding: 1px;
      background: linear-gradient(135deg, rgba(17,125,178,0.3), rgba(17,197,179,0.3));
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask-composite: exclude;
      opacity: 0;
      transition: opacity 0.4s ease;
      pointer-events: none;
    }

    .theme-card:hover {
      transform: translateY(-8px);
      box-shadow: var(--shadow-lg);
      border-color: rgba(17,34,68,.16);
    }

    .theme-card:hover::before {
      opacity: 1;
    }'''

def enhance_file(filepath):
    print(f"Enhancing {filepath}...")

    with open(filepath, 'r') as f:
        content = f.read()

    # Add fadeIn CSS before accessibility section
    content = re.sub(
        r'(    /\* ===== Accessibility ===== \*/)',
        FADEIN_CSS + r'\1',
        content
    )

    # Add fadeIn to reduced motion
    content = re.sub(
        r'(\.finding-card:hover \{\s+transform: none;\s+\})',
        r'\1\n\n      .fadeIn {\n        opacity: 1 !important;\n        transform: none !important;\n      }',
        content
    )

    # Add Intersection Observer JS before </body>
    content = re.sub(
        r'(  </script>\s*</body>)',
        INTERSECTION_JS + r'\n</body>',
        content
    )

    # Enhance card CSS
    content = re.sub(CARD_CSS_PATTERN, CARD_CSS_REPLACEMENT, content, flags=re.DOTALL)

    # Enhance theme-card CSS
    content = re.sub(THEME_CARD_CSS_PATTERN, THEME_CARD_CSS_REPLACEMENT, content, flags=re.DOTALL)

    with open(filepath, 'w') as f:
        f.write(content)

    print(f"✓ Enhanced {filepath}")

if __name__ == "__main__":
    enhance_file('/Users/adrianstiermbp2023/Desktop/webby/coral_reefs.html')
    enhance_file('/Users/adrianstiermbp2023/Desktop/webby/organismal.html')
    print("Done! All Webby enhancements applied.")
