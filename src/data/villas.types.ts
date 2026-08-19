export type AmenityId =
  | "oceanFront"
  | "golfView"
  | "pool"
  | "infinityPool"
  | "jacuzzi"
  | "privateDock";

export type VillaTypeId = "oceanfront" | "golf" | "family" | "estate";

export type VillaLocationId =
  | "puntaAguila"
  | "puntaMinitas"
  | "canas"
  | "golf"
  | "elValle"
  | "batey"
  | "mango";

export type CapacityTierId = "4-6" | "6-8" | "8plus";

export interface Villa {
  id: string;
  name: string;
  sourceFolder: string;
  maxImages: number;
  imageSource: "src" | "public";
  publicPath?: string;
  publicImages?: string[];
  bedrooms: number;
  capacity: number;
  type: VillaTypeId;
  location: VillaLocationId;
  capacityTier: CapacityTierId;
  amenities: AmenityId[];
}
