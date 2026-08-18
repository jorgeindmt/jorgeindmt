import { translations, type Language } from "../i18n/translations";
import type { InquiryFormData } from "../types";

/** Número de WhatsApp Business de CASAINDR (formato E.164, sin "+" ni espacios). */
export const WHATSAPP_BUSINESS_NUMBER = "18099646177";

export function calculateNights(checkIn: string, checkOut: string): number {
  if (!checkIn || !checkOut) return 0;
  const inDate = new Date(checkIn);
  const outDate = new Date(checkOut);
  const diffMs = outDate.getTime() - inDate.getTime();
  if (Number.isNaN(diffMs) || diffMs <= 0) return 0;
  return Math.round(diffMs / (1000 * 60 * 60 * 24));
}

function formatDate(value: string, locale: string): string {
  if (!value) return "—";
  const date = new Date(`${value}T00:00:00`);
  return date.toLocaleDateString(locale, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function buildInquirySummary(data: InquiryFormData, language: Language): string {
  const dict = translations[language];
  const nights = calculateNights(data.checkIn, data.checkOut);
  const budgetLabel = dict.budget[data.budget] ?? data.budget;
  const conciergeLabels = data.concierge.length
    ? data.concierge.map((id) => dict.conciergeOptions[id]).join(", ")
    : dict.summary.none;

  return [
    `*${dict.summary.title}*`,
    "",
    `*${dict.summary.budget}:* ${budgetLabel}`,
    `*${dict.summary.bedrooms}:* ${data.bedrooms}`,
    `*${dict.summary.guests}:* ${data.adults} ${dict.summary.adultsWord}, ${data.children} ${dict.summary.childrenWord}`,
    `*${dict.summary.checkIn}:* ${formatDate(data.checkIn, dict.summary.dateLocale)}`,
    `*${dict.summary.checkOut}:* ${formatDate(data.checkOut, dict.summary.dateLocale)}`,
    `*${dict.summary.nightsTotal}:* ${nights || "—"}`,
    `*${dict.summary.concierge}:* ${conciergeLabels}`,
    "",
    `*${dict.summary.name}:* ${data.fullName}`,
    `*${dict.summary.email}:* ${data.email}`,
    `*${dict.summary.phone}:* ${data.countryCode} ${data.phone}`,
  ].join("\n");
}

export function buildWhatsAppUrl(data: InquiryFormData, language: Language): string {
  const text = encodeURIComponent(buildInquirySummary(data, language));
  return `https://wa.me/${WHATSAPP_BUSINESS_NUMBER}?text=${text}`;
}

/**
 * Punto de integración con backend/API propio (CRM, correo transaccional, etc).
 * Sustituye el cuerpo por una llamada real, p.ej.:
 *   await fetch("/api/inquiries", { method: "POST", body: JSON.stringify(data) })
 */
export async function submitInquiryToApi(
  data: InquiryFormData
): Promise<{ ok: boolean }> {
  console.info("[CASAINDR] Inquiry payload ready for API dispatch:", data);
  return { ok: true };
}
