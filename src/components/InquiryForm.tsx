import { useMemo, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import {
  BUDGET_RANGE_IDS,
  CONCIERGE_SERVICE_IDS,
  initialInquiryFormData,
  type BudgetRangeId,
  type ConciergeServiceId,
  type InquiryFormData,
} from "../types";
import { buildWhatsAppUrl, calculateNights, submitInquiryToApi } from "../utils/inquiry";
import { ArrowRightIcon, WhatsAppIcon } from "./icons";
import Stepper from "./Stepper";

const COUNTRY_CODES = ["+1", "+1809", "+34", "+44", "+49", "+33", "+55", "+52"];

export default function InquiryForm() {
  const { language, dict } = useLanguage();
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
    if (!data.checkIn || !data.checkOut) return dict.form.errors.dates;
    if (nights <= 0) return dict.form.errors.nightsInvalid;
    if (!data.fullName.trim()) return dict.form.errors.name;
    if (!/^\S+@\S+\.\S+$/.test(data.email)) return dict.form.errors.email;
    if (!data.phone.trim()) return dict.form.errors.phone;
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
    window.open(buildWhatsAppUrl(data, language), "_blank", "noopener,noreferrer");

    setStatus("sent");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full rounded-3xl border border-white/10 bg-zinc-900/60 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-8 lg:p-10"
    >
      <div className="mb-8 flex items-baseline justify-between gap-4">
        <h3 className="font-serif text-2xl text-zinc-50 sm:text-3xl">{dict.form.title}</h3>
        <span className="hidden text-xs uppercase tracking-widest2 text-zinc-500 sm:inline">
          {dict.form.responseTime}
        </span>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs uppercase tracking-widest2 text-zinc-500">
            {dict.form.budgetLabel}
          </label>
          <select
            value={data.budget}
            onChange={(e) => update("budget", e.target.value as BudgetRangeId)}
            className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-zinc-100 outline-none transition-colors focus:border-sand-300/50"
          >
            {BUDGET_RANGE_IDS.map((id) => (
              <option key={id} value={id} className="bg-zinc-900">
                {dict.budget[id]}
              </option>
            ))}
          </select>
        </div>

        <Stepper
          label={dict.form.bedroomsLabel}
          value={data.bedrooms}
          min={1}
          max={12}
          onChange={(v) => update("bedrooms", v)}
        />

        <Stepper
          label={dict.form.adultsLabel}
          value={data.adults}
          min={1}
          max={20}
          onChange={(v) => update("adults", v)}
        />
        <Stepper
          label={dict.form.childrenLabel}
          value={data.children}
          min={0}
          max={12}
          onChange={(v) => update("children", v)}
        />

        <div>
          <label className="mb-2 block text-xs uppercase tracking-widest2 text-zinc-500">
            {dict.form.checkIn}
          </label>
          <input
            type="date"
            value={data.checkIn}
            onChange={(e) => update("checkIn", e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-zinc-100 outline-none transition-colors focus:border-sand-300/50 [color-scheme:dark]"
          />
        </div>
        <div>
          <label className="mb-2 block text-xs uppercase tracking-widest2 text-zinc-500">
            {dict.form.checkOut}
          </label>
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
          <span className="text-sm text-zinc-300">{dict.form.stayDuration}</span>
          <span className="font-serif text-lg text-sand-200">
            {nights} {nights === 1 ? dict.form.night : dict.form.nights}
          </span>
        </div>
      )}

      <div className="mt-8">
        <span className="mb-3 block text-xs uppercase tracking-widest2 text-zinc-500">
          {dict.form.conciergeLabel}
        </span>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {CONCIERGE_SERVICE_IDS.map((id) => {
            const checked = data.concierge.includes(id);
            return (
              <label
                key={id}
                className={`cursor-pointer rounded-xl border px-3 py-3 text-center text-xs leading-snug transition-all ${
                  checked
                    ? "border-sand-300/60 bg-sand-300/10 text-sand-100"
                    : "border-white/10 bg-white/[0.02] text-zinc-400 hover:border-white/20"
                }`}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleConcierge(id)}
                  className="sr-only"
                />
                {dict.conciergeOptions[id]}
              </label>
            );
          })}
        </div>
      </div>

      <div className="mt-8 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs uppercase tracking-widest2 text-zinc-500">
            {dict.form.fullName}
          </label>
          <input
            type="text"
            value={data.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            placeholder={dict.form.fullNamePlaceholder}
            className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-zinc-100 outline-none transition-colors placeholder:text-zinc-600 focus:border-sand-300/50"
          />
        </div>
        <div>
          <label className="mb-2 block text-xs uppercase tracking-widest2 text-zinc-500">
            {dict.form.email}
          </label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder={dict.form.emailPlaceholder}
            className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-zinc-100 outline-none transition-colors placeholder:text-zinc-600 focus:border-sand-300/50"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-2 block text-xs uppercase tracking-widest2 text-zinc-500">
            {dict.form.phone}
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
              placeholder={dict.form.phonePlaceholder}
              className="flex-1 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-zinc-100 outline-none transition-colors placeholder:text-zinc-600 focus:border-sand-300/50"
            />
          </div>
        </div>
      </div>

      {error && <p className="mt-6 text-sm text-red-400">{error}</p>}

      {status === "sent" ? (
        <div className="mt-8 flex items-center gap-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-5 py-4 text-sm text-emerald-200">
          <WhatsAppIcon className="h-5 w-5 shrink-0" />
          {dict.form.sent}
        </div>
      ) : (
        <button
          type="submit"
          disabled={status === "submitting"}
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-sand-300 px-6 py-4 text-sm font-medium uppercase tracking-widest2 text-zinc-950 transition-all hover:bg-sand-200 disabled:opacity-60"
        >
          {status === "submitting" ? dict.form.submitting : dict.form.submit}
          {status !== "submitting" && <ArrowRightIcon className="h-4 w-4" />}
        </button>
      )}
    </form>
  );
}
