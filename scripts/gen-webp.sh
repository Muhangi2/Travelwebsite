#!/usr/bin/env bash
# Generate .webp companion next to each .jpg/.jpeg over 100KB.
ROOT="/Users/eliod/travelwebsite/public/images"
GENERATED=0
SKIPPED=0

while IFS= read -r -d '' f; do
  webp="${f%.*}.webp"
  if [ -f "$webp" ]; then
    SKIPPED=$((SKIPPED+1))
    continue
  fi
  size=$(stat -f%z "$f" 2>/dev/null || echo 0)
  if [ "$size" -lt 102400 ]; then
    SKIPPED=$((SKIPPED+1))
    continue
  fi
  cwebp -q 78 -mt -quiet "$f" -o "$webp" 2>/dev/null
  GENERATED=$((GENERATED+1))
done < <(find "$ROOT" -type f \( -iname '*.jpg' -o -iname '*.jpeg' \) -print0)

echo "WebP generated: $GENERATED"
echo "Skipped (existing/small): $SKIPPED"
