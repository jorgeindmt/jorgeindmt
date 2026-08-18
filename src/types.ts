export type ConciergeServiceId = "chef" | "golfCart" | "yacht" | "vipTransfer";

export const CONCIERGE_SERVICE_IDS: ConciergeServiceId[] = ["chef", "golfCart", "yacht", "vipTransfer"];

export type BudgetRangeId = "1000-2500" | "2500-5000" | "5000-10000" | "10000+";

export const BUDGET_RANGE_IDS: BudgetRangeId[] = ["1000-2500", "2500-5000", "5000-10000", "10000+"];

export interface InquiryFormData {
  budget: BudgetRangeId;
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
  budget: BUDGET_RANGE_IDS[1],
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
