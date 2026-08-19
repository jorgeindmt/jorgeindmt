#!/usr/bin/env node
/**
 * Lista las carpetas disponibles en src/Public/CASA DE CAMPO VILLAS/
 *
 * Uso: node scripts/list-villa-folders.mjs
 */

import { readdir, stat } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const VILLAS_ROOT = join(ROOT, "src/Public/CASA DE CAMPO VILLAS");

const IMAGE_EXT = /\.(jpg|jpeg|png|webp|gif)$/i;

async function countImages(folderPath) {
  let count = 0;
  const entries = await readdir(folderPath, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(folderPath, entry.name);
    if (entry.isDirectory()) {
      count += await countImages(full);
    } else if (IMAGE_EXT.test(entry.name)) {
      count += 1;
    }
  }
  return count;
}

async function main() {
  try {
    const folders = await readdir(VILLAS_ROOT, { withFileTypes: true });
    const results = [];

    for (const entry of folders) {
      if (!entry.isDirectory()) continue;
      const folderPath = join(VILLAS_ROOT, entry.name);
      const imageCount = await countImages(folderPath);
      if (imageCount > 0) {
        results.push({ name: entry.name, images: imageCount });
      }
    }

    results.sort((a, b) => a.name.localeCompare(b.name));

    console.log("\n📁 Carpetas con fotos en CASA DE CAMPO VILLAS:\n");
    console.log("  Copia el nombre exacto en villas.config.ts → sourceFolder\n");

    for (const { name, images } of results) {
      const marker = images > 15 ? "⚠️ " : "   ";
      console.log(`${marker}${name}  (${images} fotos)`);
    }

    console.log(`\nTotal: ${results.length} carpetas\n`);
    console.log("Para activar una villa:");
    console.log("  1. Edita src/data/villas.config.ts");
    console.log("  2. Pon enabled: true y sourceFolder con el nombre de arriba");
    console.log("  3. Agrega la entrada en IMAGE_GLOBS (src/data/villas.ts)\n");
  } catch (err) {
    console.error("Error:", err.message);
    process.exit(1);
  }
}

main();
