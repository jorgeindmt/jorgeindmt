/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  CONFIGURACIÓN DE VILLAS — edita solo este archivo para elegir qué mostrar
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * CÓMO SELECCIONAR CARPETAS DE FOTOS:
 *
 * 1. Busca el nombre exacto de la carpeta en:
 *    src/Public/CASA DE CAMPO VILLAS/
 *
 * 2. Copia ese nombre en `sourceFolder` (respeta espacios y mayúsculas).
 *
 * 3. Pon `enabled: true` para mostrar la villa, `false` para ocultarla.
 *
 * 4. Ajusta `maxImages` (recomendado: 6–8) para no cargar decenas de fotos.
 *
 * 5. Para agregar una villa nueva:
 *    a) Ejecuta: ./scripts/copy-villa-images.sh mi-id "Nombre Carpeta" 8
 *    b) Agrega el bloque abajo con imageSource: "public"
 *    c) Agrega traducciones en translations.ts
 *
 * TIP — fotos muy pesadas / git push falla:
 *    Las fotos del sitio van en public/villas/{id}/ (liviano, ~4MB total).
 *    src/Public/ está en .gitignore — no se sube a git.
 *
 * ═══════════════════════════════════════════════════════════════════════════
 */

import type {
  AmenityId,
  CapacityTierId,
  VillaLocationId,
  VillaTypeId,
} from "./villas.types";

export type ImageSource = "src" | "public";

export interface VillaConfig {
  /** ID único — también usado como nombre de carpeta en public/villas/ */
  id: string;
  /** true = aparece en el portafolio */
  enabled: boolean;
  name: string;
  /** Nombre de carpeta dentro de src/Public/CASA DE CAMPO VILLAS/ */
  sourceFolder: string;
  /** Máximo de fotos a cargar (recomendado: 6–8) */
  maxImages: number;
  /** "src" = carpeta en src/Public | "public" = public/villas/{id}/ */
  imageSource: ImageSource;
  /** Solo si imageSource es "public", ej: "/villas/cahoba" */
  publicPath?: string;
  /** Si usas public/, lista los archivos aquí (ej: ["01.jpg", "02.jpg"]) */
  publicImages?: string[];
  bedrooms: number;
  capacity: number;
  type: VillaTypeId;
  location: VillaLocationId;
  capacityTier: CapacityTierId;
  amenities: AmenityId[];
}

/** ─── Edita la lista de villas aquí ─── */
export const VILLA_CATALOG: VillaConfig[] = [
  {
    id: "cahoba",
    enabled: true,
    name: "Villa Cahoba",
    sourceFolder: "Cañas 50 ",
    maxImages: 8,
    imageSource: "public",
    publicPath: "/villas/cahoba",
    publicImages: ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg"],
    bedrooms: 6,
    capacity: 12,
    type: "golf",
    location: "canas",
    capacityTier: "6-8",
    amenities: ["golfView", "pool", "jacuzzi"],
  },
  {
    id: "anacaona",
    enabled: true,
    name: "Villa Anacaona",
    sourceFolder: "Punta aguila 34",
    maxImages: 8,
    imageSource: "public",
    publicPath: "/villas/anacaona",
    publicImages: ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg"],
    bedrooms: 8,
    capacity: 16,
    type: "oceanfront",
    location: "puntaAguila",
    capacityTier: "8plus",
    amenities: ["oceanFront", "infinityPool", "privateDock"],
  },
  {
    id: "batey",
    enabled: true,
    name: "Villa Batey",
    sourceFolder: "Batey 16",
    maxImages: 6,
    imageSource: "public",
    publicPath: "/villas/batey",
    publicImages: ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg"],
    bedrooms: 5,
    capacity: 10,
    type: "family",
    location: "batey",
    capacityTier: "4-6",
    amenities: ["pool", "golfView"],
  },
  {
    id: "guanin",
    enabled: true,
    name: "Villa Guanín",
    sourceFolder: "El Valle 30",
    maxImages: 8,
    imageSource: "public",
    publicPath: "/villas/guanin",
    publicImages: ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg"],
    bedrooms: 6,
    capacity: 12,
    type: "estate",
    location: "elValle",
    capacityTier: "6-8",
    amenities: ["pool", "golfView", "jacuzzi"],
  },
  {
    id: "cayo",
    enabled: true,
    name: "Villa Cayo",
    sourceFolder: "Punta Minitas 34",
    maxImages: 8,
    imageSource: "public",
    publicPath: "/villas/cayo",
    publicImages: ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg"],
    bedrooms: 7,
    capacity: 14,
    type: "oceanfront",
    location: "puntaMinitas",
    capacityTier: "6-8",
    amenities: ["oceanFront", "infinityPool", "privateDock"],
  },
  {
    id: "atabey",
    enabled: true,
    name: "Villa Atabey",
    sourceFolder: "Punta Minitas 19 Villa Atabey",
    maxImages: 8,
    imageSource: "public",
    publicPath: "/villas/atabey",
    publicImages: ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg"],
    bedrooms: 6,
    capacity: 12,
    type: "oceanfront",
    location: "puntaMinitas",
    capacityTier: "6-8",
    amenities: ["oceanFront", "pool", "jacuzzi"],
  },
  {
    id: "cacique",
    enabled: true,
    name: "Villa Cacique",
    sourceFolder: "Golf Villa 235_Villa Sol_750-1600",
    maxImages: 6,
    imageSource: "public",
    publicPath: "/villas/cacique",
    publicImages: ["01.jpeg", "02.jpeg", "03.jpeg", "04.jpeg", "05.jpeg", "06.jpeg"],
    bedrooms: 5,
    capacity: 10,
    type: "golf",
    location: "golf",
    capacityTier: "4-6",
    amenities: ["golfView", "pool", "infinityPool"],
  },
  {
    id: "yucahu",
    enabled: true,
    name: "Villa Yucahu",
    sourceFolder: "Fotos Mango 15",
    maxImages: 6,
    imageSource: "public",
    publicPath: "/villas/yucahu",
    publicImages: ["01.jpeg", "02.jpeg", "03.jpeg", "04.jpeg", "05.jpeg", "06.jpeg"],
    bedrooms: 4,
    capacity: 8,
    type: "family",
    location: "mango",
    capacityTier: "4-6",
    amenities: ["pool", "golfView"],
  },
];

/** Villas activas (solo las que tienen enabled: true) */
export const ACTIVE_VILLAS = VILLA_CATALOG.filter((v) => v.enabled);
