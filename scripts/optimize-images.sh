#!/usr/bin/env bash
# Resize each public/image jpg/png to max-width 1920px and compress to 80% quality.
# Skips files already < 250KB. Uses macOS sips (built-in, no install).

ROOT="/Users/eliod/travelwebsite/public/images"
TOTAL=0
SAVED=0
SKIPPED=0
RESIZED=0

while IFS= read -r -d '' f; do
  TOTAL=$((TOTAL+1))
  size_before=$(stat -f%z "$f" 2>/dev/null || echo 0)

  # Skip if already small
  if [ "$size_before" -lt 256000 ]; then
    SKIPPED=$((SKIPPED+1))
    continue
  fi

  # Get current width
  width=$(sips -g pixelWidth "$f" 2>/dev/null | awk '/pixelWidth:/ {print $2}')
  if [ -z "$width" ] || [ "$width" -lt 1 ]; then
    SKIPPED=$((SKIPPED+1))
    continue
  fi

  # Resize if wider than 1920
  if [ "$width" -gt 1920 ]; then
    sips --resampleWidth 1920 "$f" --out "$f" >/dev/null 2>&1
    RESIZED=$((RESIZED+1))
  fi

  # Re-encode at quality 80 (only for JPGs)
  case "$f" in
    *.jpg|*.JPG|*.jpeg|*.JPEG)
      sips -s formatOptions 80 "$f" --out "$f" >/dev/null 2>&1
      ;;
  esac

  size_after=$(stat -f%z "$f" 2>/dev/null || echo 0)
  diff=$((size_before - size_after))
  if [ "$diff" -gt 0 ]; then
    SAVED=$((SAVED + diff))
  fi
done < <(find "$ROOT" -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \) -print0)

echo "Processed: $TOTAL files"
echo "Resized (>1920px): $RESIZED"
echo "Skipped (<250KB): $SKIPPED"
echo "Bytes saved: $SAVED"
