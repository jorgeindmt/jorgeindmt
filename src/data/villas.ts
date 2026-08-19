import { ACTIVE_VILLAS } from "./villas.config";
import type { Villa } from "./villas.types";

/**
 * Glob POR CARPETA — solo las villas listadas aquí cargan fotos.
 * Al agregar una villa nueva al catálogo, copia una línea con su sourceFolder.
 */
const IMAGE_GLOBS: Record<string, Record<string, string>> = {
  cahoba: import.meta.glob<string>(
    "../Public/CASA DE CAMPO VILLAS/Cañas 50 /**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
    { eager: true, query: "?url", import: "default" },
  ),
  anacaona: import.meta.glob<string>(
    "../Public/CASA DE CAMPO VILLAS/Punta aguila 34/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
    { eager: true, query: "?url", import: "default" },
  ),
  batey: import.meta.glob<string>(
    "../Public/CASA DE CAMPO VILLAS/Batey 16/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
    { eager: true, query: "?url", import: "default" },
  ),
  guanin: import.meta.glob<string>(
    "../Public/CASA DE CAMPO VILLAS/El Valle 30/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
    { eager: true, query: "?url", import: "default" },
  ),
  cayo: import.meta.glob<string>(
    "../Public/CASA DE CAMPO VILLAS/Punta Minitas 34/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
    { eager: true, query: "?url", import: "default" },
  ),
  atabey: import.meta.glob<string>(
    "../Public/CASA DE CAMPO VILLAS/Punta Minitas 19 Villa Atabey/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
    { eager: true, query: "?url", import: "default" },
  ),
  cacique: import.meta.glob<string>(
    "../Public/CASA DE CAMPO VILLAS/Golf Villa 235_Villa Sol_750-1600/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
    { eager: true, query: "?url", import: "default" },
  ),
  yucahu: import.meta.glob<string>(
    "../Public/CASA DE CAMPO VILLAS/Fotos Mango 15/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
    { eager: true, query: "?url", import: "default" },
  ),
};

function getSrcImages(villaId: string, maxImages: number): string[] {
  const glob = IMAGE_GLOBS[villaId];
  if (!glob) return [];
  return Object.values(glob)
    .sort((a, b) => a.localeCompare(b))
    .slice(0, maxImages);
}

function getPublicImages(villa: Villa): string[] {
  if (!villa.publicPath) return [];
  if (villa.publicImages?.length) {
    return villa.publicImages.map((file) => `${villa.publicPath}/${file}`);
  }
  return [];
}

export const VILLAS: Villa[] = ACTIVE_VILLAS;

export function getVillaImages(villa: Villa): string[] {
  if (villa.imageSource === "public") {
    return getPublicImages(villa).slice(0, villa.maxImages);
  }
  return getSrcImages(villa.id, villa.maxImages);
}

export function getVillaCoverImage(villa: Villa): string | undefined {
  return getVillaImages(villa)[0];
}

export type {
  AmenityId,
  CapacityTierId,
  VillaLocationId,
  VillaTypeId,
  Villa,
} from "./villas.types";
