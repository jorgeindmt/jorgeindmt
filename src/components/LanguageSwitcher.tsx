import { useLanguage } from "../i18n/LanguageContext";
import type { Language } from "../i18n/translations";

const OPTIONS: Language[] = ["es", "en"];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language selector"
      className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.02] p-1 text-xs font-medium uppercase tracking-wide"
    >
      {OPTIONS.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLanguage(option)}
          aria-pressed={language === option}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            language === option
              ? "bg-sand-300 text-zinc-950"
              : "text-zinc-400 hover:text-zinc-100"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
