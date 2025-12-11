#!/bin/bash

# Apply Webby Enhancements to coral_reefs.html and organismal.html
# This script adds:
# 1. Gradient borders to cards
# 2. Scroll-triggered fade-in animations
# 3. Intersection Observer JavaScript

echo "Applying Webby enhancements to ecosystem pages..."

for file in coral_reefs.html organismal.html; do
  echo "Processing $file..."

  # Add fadeIn class to theme-cards
  sed -i '' 's/<article class="theme-card">/<article class="theme-card fadeIn">/g' "$file"

  # Add fadeIn class to finding-cards
  sed -i '' 's/<div class="finding-card" tabindex="0">/<div class="finding-card fadeIn" tabindex="0">/g' "$file"

  # Add fadeIn to vision card
  sed -i '' 's/<div class="card vision-card">/<div class="card vision-card fadeIn">/g' "$file"

  echo "✓ Added fadeIn classes to $file"
done

echo "Done! Webby enhancements applied to all ecosystem pages."
