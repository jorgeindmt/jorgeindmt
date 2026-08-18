import { useLanguage } from "../i18n/LanguageContext";
import { ChefIcon, GolfCartIcon, YachtIcon } from "./icons";

const ICONS = [ChefIcon, GolfCartIcon, YachtIcon];

export default function Concierge() {
  const { dict } = useLanguage();

  return (
    <section id="conserjeria" className="border-t border-white/5 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mb-16 max-w-xl">
          <span className="mb-4 block text-xs uppercase tracking-widest2 text-sand-300/80">
            {dict.conciergeSection.badge}
          </span>
          <h2 className="font-serif text-3xl text-zinc-50 sm:text-4xl">{dict.conciergeSection.title}</h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {dict.conciergeSection.services.map((service, index) => {
            const Icon = ICONS[index];
            return (
              <div
                key={service.title}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-colors hover:border-sand-300/30"
              >
                <Icon className="h-8 w-8 text-sand-300" />
                <h3 className="mt-6 font-serif text-xl text-zinc-100">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
