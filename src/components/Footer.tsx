import { useLanguage } from "../i18n/LanguageContext";
import { WHATSAPP_BUSINESS_NUMBER } from "../utils/inquiry";
import { WhatsAppIcon } from "./icons";

export default function Footer() {
  const { dict } = useLanguage();

  return (
    <footer className="border-t border-white/5 py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <span className="font-serif text-xl tracking-[0.15em] text-zinc-50">
              CASA<span className="text-sand-300">INDR</span>
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">{dict.footer.tagline}</p>
          </div>

          <div>
            <span className="text-xs uppercase tracking-widest2 text-zinc-500">
              {dict.footer.contactLabel}
            </span>
            <ul className="mt-4 space-y-2 text-sm text-zinc-400">
              <li>Info@casaindr.com</li>
              <li>{dict.footer.address}</li>
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_BUSINESS_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sand-200 transition-colors hover:text-sand-100"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {dict.footer.whatsappCta}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-xs uppercase tracking-widest2 text-zinc-500">
              {dict.footer.legalLabel}
            </span>
            <ul className="mt-4 space-y-2 text-sm text-zinc-500">
              <li>{dict.footer.legal1}</li>
              <li>{dict.footer.legal2}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-6 text-xs text-zinc-600">
          © {new Date().getFullYear()} CASAINDR. {dict.footer.rights}
        </div>
      </div>
    </footer>
  );
}
