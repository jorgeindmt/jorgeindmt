import { useLanguage } from "../i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavbarProps {
  onRequestConsultation: () => void;
}

export default function Navbar({ onRequestConsultation }: NavbarProps) {
  const { dict } = useLanguage();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5 sm:px-10">
        <a href="#top" className="font-serif text-2xl tracking-[0.15em] text-zinc-50">
          CASA<span className="text-sand-300">INDR</span>
        </a>

        <nav className="hidden items-center gap-10 text-sm font-light tracking-wide text-zinc-400 md:flex">
          <a href="#como-funciona" className="transition-colors hover:text-zinc-100">
            {dict.nav.howItWorks}
          </a>
          <a href="#portafolio" className="transition-colors hover:text-zinc-100">
            {dict.nav.portfolio}
          </a>
          <a href="#conserjeria" className="transition-colors hover:text-zinc-100">
            {dict.nav.concierge}
          </a>
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <LanguageSwitcher />
          <button
            onClick={onRequestConsultation}
            className="rounded-full border border-sand-300/40 px-5 py-2 text-xs font-medium uppercase tracking-widest2 text-sand-200 transition-all hover:border-sand-300 hover:bg-sand-300/10 sm:px-6 sm:text-sm"
          >
            {dict.nav.cta}
          </button>
        </div>
      </div>
    </header>
  );
}
