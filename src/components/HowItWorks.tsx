import { useLanguage } from "../i18n/LanguageContext";

export default function HowItWorks() {
  const { dict } = useLanguage();

  return (
    <section id="como-funciona" className="border-t border-white/5 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mb-16 max-w-xl">
          <span className="mb-4 block text-xs uppercase tracking-widest2 text-sand-300/80">
            {dict.steps.badge}
          </span>
          <h2 className="font-serif text-3xl text-zinc-50 sm:text-4xl">{dict.steps.title}</h2>
        </div>

        <div className="grid gap-10 sm:grid-cols-3">
          {dict.steps.items.map((step, index) => (
            <div key={step.title} className="border-t border-white/10 pt-6">
              <span className="font-serif text-4xl text-sand-300/60">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-serif text-xl text-zinc-100">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
