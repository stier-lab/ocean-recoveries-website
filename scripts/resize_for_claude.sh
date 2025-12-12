#!/bin/bash

SRC_DIR="/Users/adrianstiermbp2023/Ocean-recoveries-website/assets"
DEST_DIR="/Users/adrianstiermbp2023/Ocean-recoveries-website/assets/temp_resized"
MAX_SIZE_KB=3500
MAX_DIM=1500

mkdir -p "$DEST_DIR"
rm -f "$DEST_DIR"/*.jpeg "$DEST_DIR"/*.jpg "$DEST_DIR"/*.png "$DEST_DIR"/*.JPG "$DEST_DIR"/*.JPEG "$DEST_DIR"/*.PNG "$DEST_DIR"/*.webp 2>/dev/null

echo "Processing images from $SRC_DIR..."
count=0

shopt -s nullglob
for img in "$SRC_DIR"/*.jpeg "$SRC_DIR"/*.jpg "$SRC_DIR"/*.png "$SRC_DIR"/*.JPG "$SRC_DIR"/*.JPEG "$SRC_DIR"/*.PNG "$SRC_DIR"/*.webp; do
    [ -f "$img" ] || continue
    
    filename=$(basename "$img")
    dest_file="$DEST_DIR/$filename"
    
    size_kb=$(du -k "$img" | cut -f1)
    
    dims=$(sips -g pixelHeight -g pixelWidth "$img" 2>/dev/null | grep pixel)
    height=$(echo "$dims" | grep Height | awk '{print $2}')
    width=$(echo "$dims" | grep Width | awk '{print $2}')
    
    if [ -z "$height" ] || [ -z "$width" ]; then
        echo "Skipping (not readable): $filename"
        continue
    fi
    
    max_current=$height
    if [ "$width" -gt "$height" ]; then
        max_current=$width
    fi
    
    if [ "$size_kb" -gt "$MAX_SIZE_KB" ] || [ "$max_current" -gt "$MAX_DIM" ]; then
        echo "Resizing: $filename (${size_kb}KB, ${width}x${height})"
        
        if [ "$width" -gt "$height" ]; then
            sips --resampleWidth $MAX_DIM "$img" --out "$dest_file" 2>/dev/null
        else
            sips --resampleHeight $MAX_DIM "$img" --out "$dest_file" 2>/dev/null
        fi
        
        new_size_kb=$(du -k "$dest_file" 2>/dev/null | cut -f1)
        if [ -n "$new_size_kb" ] && [ "$new_size_kb" -gt "$MAX_SIZE_KB" ]; then
            echo "  Still large (${new_size_kb}KB), reducing dimensions further..."
            sips --resampleWidth 1000 "$dest_file" --out "$dest_file" 2>/dev/null
        fi
        
        ((count++))
    else
        echo "Copying: $filename (${size_kb}KB, ${width}x${height})"
        cp "$img" "$dest_file"
        ((count++))
    fi
done

echo ""
echo "Processed $count images"
echo "Output: $DEST_DIR"
