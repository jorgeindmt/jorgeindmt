export type ConciergeServiceId = "chef" | "golfCart" | "yacht" | "vipTransfer";

export interface ConciergeService {
  id: ConciergeServiceId;
  label: string;
}

export const CONCIERGE_SERVICES: ConciergeService[] = [
  { id: "chef", label: "Chef privado" },
  { id: "golfCart", label: "Alquiler de carrito de golf" },
  { id: "yacht", label: "Alquiler de yate" },
  { id: "vipTransfer", label: "Traslado VIP" },
];

export interface BudgetRange {
  id: string;
  label: string;
}

export const BUDGET_RANGES: BudgetRange[] = [
  { id: "1000-2500", label: "US$1,000 – 2,500 / noche" },
  { id: "2500-5000", label: "US$2,500 – 5,000 / noche" },
  { id: "5000-10000", label: "US$5,000 – 10,000 / noche" },
  { id: "10000+", label: "US$10,000+ / noche" },
];

export interface InquiryFormData {
  budget: string;
  bedrooms: number;
  adults: number;
  children: number;
  checkIn: string;
  checkOut: string;
  concierge: ConciergeServiceId[];
  fullName: string;
  email: string;
  countryCode: string;
  phone: string;
}

export const initialInquiryFormData: InquiryFormData = {
  budget: BUDGET_RANGES[1].id,
  bedrooms: 3,
  adults: 2,
  children: 0,
  checkIn: "",
  checkOut: "",
  concierge: [],
  fullName: "",
  email: "",
  countryCode: "+1",
  phone: "",
};
