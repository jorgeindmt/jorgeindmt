import {
  BUDGET_RANGES,
  CONCIERGE_SERVICES,
  type InquiryFormData,
} from "../types";

/** Número de WhatsApp Business de CASAINDR (formato E.164, sin "+" ni espacios). */
export const WHATSAPP_BUSINESS_NUMBER = "18095551234";

export function calculateNights(checkIn: string, checkOut: string): number {
  if (!checkIn || !checkOut) return 0;
  const inDate = new Date(checkIn);
  const outDate = new Date(checkOut);
  const diffMs = outDate.getTime() - inDate.getTime();
  if (Number.isNaN(diffMs) || diffMs <= 0) return 0;
  return Math.round(diffMs / (1000 * 60 * 60 * 24));
}

function formatDate(value: string): string {
  if (!value) return "—";
  const date = new Date(`${value}T00:00:00`);
  return date.toLocaleDateString("es-DO", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function buildInquirySummary(data: InquiryFormData): string {
  const nights = calculateNights(data.checkIn, data.checkOut);
  const budgetLabel =
    BUDGET_RANGES.find((b) => b.id === data.budget)?.label ?? data.budget;
  const conciergeLabels = data.concierge.length
    ? data.concierge
        .map((id) => CONCIERGE_SERVICES.find((s) => s.id === id)?.label ?? id)
        .join(", ")
    : "Ninguno seleccionado";

  return [
    "*Nueva Consulta de Villa — CASAINDR*",
    "",
    `*Presupuesto:* ${budgetLabel}`,
    `*Habitaciones:* ${data.bedrooms}`,
    `*Huéspedes:* ${data.adults} adultos, ${data.children} niños`,
    `*Check-in:* ${formatDate(data.checkIn)}`,
    `*Check-out:* ${formatDate(data.checkOut)}`,
    `*Noches totales:* ${nights || "—"}`,
    `*Conserjería:* ${conciergeLabels}`,
    "",
    `*Nombre:* ${data.fullName}`,
    `*Email:* ${data.email}`,
    `*Teléfono:* ${data.countryCode} ${data.phone}`,
  ].join("\n");
}

export function buildWhatsAppUrl(data: InquiryFormData): string {
  const text = encodeURIComponent(buildInquirySummary(data));
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
