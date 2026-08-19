#!/bin/bash
# Copia las mejores N fotos de una carpeta a public/villas/{id}/
#
# Uso:
#   ./scripts/copy-villa-images.sh cahoba "Cañas 50 " 8
#   ./scripts/copy-villa-images.sh anacaona "Punta aguila 34" 8

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
VILLAS_ROOT="$ROOT/src/Public/CASA DE CAMPO VILLAS"

id="${1:?Falta id (ej: cahoba)}"
folder="${2:?Falta carpeta (ej: Cañas 50 )}"
max="${3:-8}"

src="$VILLAS_ROOT/$folder"
dest="$ROOT/public/villas/$id"

if [ ! -d "$src" ]; then
  echo "❌ Carpeta no encontrada: $src"
  echo "   Lista carpetas con: ls \"$VILLAS_ROOT\""
  exit 1
fi

mkdir -p "$dest"
find "$dest" -maxdepth 1 -type f -delete 2>/dev/null || true

count=0
while IFS= read -r img; do
  count=$((count + 1))
  ext="${img##*.}"
  ext_lower=$(echo "$ext" | tr '[:upper:]' '[:lower:]')
  cp "$img" "$dest/$(printf '%02d' $count).$ext_lower"
  if [ "$count" -ge "$max" ]; then break; fi
done < <(find "$src" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" \) | sort | head -n "$max")

echo "✅ $id: $count fotos → public/villas/$id/"
ls -lh "$dest"
