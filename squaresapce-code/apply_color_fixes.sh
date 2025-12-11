#!/bin/bash

# Files to fix
files=("coral_reefs.html" "kelp-forests.html" "organismal.html" "research.html" "publications.html" "news.html")

# The color override CSS block to insert
color_overrides='
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
'

cd /Users/adrianstiermbp2023/Desktop/webby

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "Processing $file..."
        
        # Check if color overrides already exist
        if grep -q "AGGRESSIVE COLOR OVERRIDES FOR SQUARESPACE" "$file"; then
            echo "  → Already has color overrides, skipping"
        else
            # Use awk to insert after the typography inheritance block
            awk -v overrides="$color_overrides" '
            /\/\* Ensure proper typography inheritance \*\// {
                print
                getline; print
                getline; print
                getline; print
                getline; print
                print overrides
                next
            }
            {print}
            ' "$file" > "${file}.tmp" && mv "${file}.tmp" "$file"
            
            echo "  ✓ Color overrides added"
        fi
    else
        echo "✗ $file not found"
    fi
done

echo ""
echo "All files processed!"
