import { useMemo, useState } from "react";
import {
  BUDGET_RANGES,
  CONCIERGE_SERVICES,
  initialInquiryFormData,
  type ConciergeServiceId,
  type InquiryFormData,
} from "../types";
import { buildWhatsAppUrl, calculateNights, submitInquiryToApi } from "../utils/inquiry";
import { ArrowRightIcon, WhatsAppIcon } from "./icons";
import Stepper from "./Stepper";

const COUNTRY_CODES = ["+1", "+1809", "+34", "+44", "+49", "+33", "+55", "+52"];

export default function InquiryForm() {
  const [data, setData] = useState<InquiryFormData>(initialInquiryFormData);
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);

  const nights = useMemo(() => calculateNights(data.checkIn, data.checkOut), [data.checkIn, data.checkOut]);

  function update<K extends keyof InquiryFormData>(key: K, value: InquiryFormData[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  function toggleConcierge(id: ConciergeServiceId) {
    setData((prev) => ({
      ...prev,
      concierge: prev.concierge.includes(id)
        ? prev.concierge.filter((s) => s !== id)
        : [...prev.concierge, id],
    }));
  }

  function validate(): string | null {
    if (!data.checkIn || !data.checkOut) return "Selecciona fecha de entrada y salida.";
    if (nights <= 0) return "La fecha de salida debe ser posterior a la de entrada.";
    if (!data.fullName.trim()) return "Ingresa tu nombre completo.";
    if (!/^\S+@\S+\.\S+$/.test(data.email)) return "Ingresa un correo electrónico válido.";
    if (!data.phone.trim()) return "Ingresa tu número de teléfono.";
    return null;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError(null);
    setStatus("submitting");

    await submitInquiryToApi(data);
    window.open(buildWhatsAppUrl(data), "_blank", "noopener,noreferrer");

    setStatus("sent");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full rounded-3xl border border-white/10 bg-zinc-900/60 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-8 lg:p-10"
    >
      <div className="mb-8 flex items-baseline justify-between gap-4">
        <h3 className="font-serif text-2xl text-zinc-50 sm:text-3xl">Consulta Personalizada</h3>
        <span className="hidden text-xs uppercase tracking-widest2 text-zinc-500 sm:inline">
          Respuesta en 24h
        </span>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs uppercase tracking-widest2 text-zinc-500">
            Presupuesto por noche
          </label>
          <select
            value={data.budget}
            onChange={(e) => update("budget", e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-zinc-100 outline-none transition-colors focus:border-sand-300/50"
          >
            {BUDGET_RANGES.map((range) => (
              <option key={range.id} value={range.id} className="bg-zinc-900">
                {range.label}
              </option>
            ))}
          </select>
        </div>

        <Stepper label="Habitaciones" value={data.bedrooms} min={1} max={12} onChange={(v) => update("bedrooms", v)} />

        <Stepper label="Adultos" value={data.adults} min={1} max={20} onChange={(v) => update("adults", v)} />
        <Stepper label="Niños" value={data.children} min={0} max={12} onChange={(v) => update("children", v)} />

        <div>
          <label className="mb-2 block text-xs uppercase tracking-widest2 text-zinc-500">Check-in</label>
          <input
            type="date"
            value={data.checkIn}
            onChange={(e) => update("checkIn", e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-zinc-100 outline-none transition-colors focus:border-sand-300/50 [color-scheme:dark]"
          />
        </div>
        <div>
          <label className="mb-2 block text-xs uppercase tracking-widest2 text-zinc-500">Check-out</label>
          <input
            type="date"
            value={data.checkOut}
            min={data.checkIn || undefined}
            onChange={(e) => update("checkOut", e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-zinc-100 outline-none transition-colors focus:border-sand-300/50 [color-scheme:dark]"
          />
        </div>
      </div>

      {nights > 0 && (
        <div className="mt-6 flex items-center justify-between rounded-xl border border-sand-300/20 bg-sand-300/[0.06] px-5 py-3">
          <span className="text-sm text-zinc-300">Duración de la estancia</span>
          <span className="font-serif text-lg text-sand-200">
            {nights} {nights === 1 ? "noche" : "noches"}
          </span>
        </div>
      )}

      <div className="mt-8">
        <span className="mb-3 block text-xs uppercase tracking-widest2 text-zinc-500">
          Servicios de conserjería adicionales
        </span>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {CONCIERGE_SERVICES.map((service) => {
            const checked = data.concierge.includes(service.id);
            return (
              <label
                key={service.id}
                className={`cursor-pointer rounded-xl border px-3 py-3 text-center text-xs leading-snug transition-all ${
                  checked
                    ? "border-sand-300/60 bg-sand-300/10 text-sand-100"
                    : "border-white/10 bg-white/[0.02] text-zinc-400 hover:border-white/20"
                }`}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleConcierge(service.id)}
                  className="sr-only"
                />
                {service.label}
              </label>
            );
          })}
        </div>
      </div>

      <div className="mt-8 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs uppercase tracking-widest2 text-zinc-500">Nombre completo</label>
          <input
            type="text"
            value={data.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            placeholder="Nombre y apellido"
            className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-zinc-100 outline-none transition-colors placeholder:text-zinc-600 focus:border-sand-300/50"
          />
        </div>
        <div>
          <label className="mb-2 block text-xs uppercase tracking-widest2 text-zinc-500">Correo electrónico</label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="tucorreo@ejemplo.com"
            className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-zinc-100 outline-none transition-colors placeholder:text-zinc-600 focus:border-sand-300/50"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-2 block text-xs uppercase tracking-widest2 text-zinc-500">
            Teléfono / WhatsApp
          </label>
          <div className="flex gap-3">
            <select
              value={data.countryCode}
              onChange={(e) => update("countryCode", e.target.value)}
              className="w-24 rounded-xl border border-white/10 bg-white/[0.02] px-3 py-3 text-sm text-zinc-100 outline-none transition-colors focus:border-sand-300/50"
            >
              {COUNTRY_CODES.map((code) => (
                <option key={code} value={code} className="bg-zinc-900">
                  {code}
                </option>
              ))}
            </select>
            <input
              type="tel"
              value={data.phone}
              onChange={(e) => update("phone", e.target.value)}
              placeholder="809 555 1234"
              className="flex-1 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-zinc-100 outline-none transition-colors placeholder:text-zinc-600 focus:border-sand-300/50"
            />
          </div>
        </div>
      </div>

      {error && <p className="mt-6 text-sm text-red-400">{error}</p>}

      {status === "sent" ? (
        <div className="mt-8 flex items-center gap-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-5 py-4 text-sm text-emerald-200">
          <WhatsAppIcon className="h-5 w-5 shrink-0" />
          Tu solicitud fue preparada. Continúa la conversación en WhatsApp para recibir tus propuestas.
        </div>
      ) : (
        <button
          type="submit"
          disabled={status === "submitting"}
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-sand-300 px-6 py-4 text-sm font-medium uppercase tracking-widest2 text-zinc-950 transition-all hover:bg-sand-200 disabled:opacity-60"
        >
          {status === "submitting" ? "Preparando solicitud…" : "Solicitar Propuestas de Villas"}
          {status !== "submitting" && <ArrowRightIcon className="h-4 w-4" />}
        </button>
      )}
    </form>
  );
}
