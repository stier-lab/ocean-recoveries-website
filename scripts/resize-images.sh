#!/bin/bash

ASSETS_DIR="/Users/adrianstiermbp2023/Ocean-recoveries-website/assets"
TEMP_DIR="/Users/adrianstiermbp2023/Ocean-recoveries-website/assets/temp_resized"

# Find all image files larger than 5MB
find "$ASSETS_DIR" -maxdepth 1 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" \) -size +5M | while read -r file; do
    filename=$(basename "$file")
    echo "Resizing: $filename"
    # Resize to max 2000px on longest side while maintaining aspect ratio
    sips --resampleHeightWidthMax 2000 "$file" --out "$TEMP_DIR/$filename" 2>/dev/null
done

# Copy files under 5MB directly
find "$ASSETS_DIR" -maxdepth 1 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" \) ! -size +5M | while read -r file; do
    filename=$(basename "$file")
    # Skip if already exists in temp
    if [ ! -f "$TEMP_DIR/$filename" ]; then
        cp "$file" "$TEMP_DIR/$filename"
    fi
done

echo "Done! All images are in $TEMP_DIR"
