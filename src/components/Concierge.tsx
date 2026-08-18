import { ChefIcon, GolfCartIcon, YachtIcon } from "./icons";

const SERVICES = [
  {
    icon: ChefIcon,
    title: "Chef Privado",
    description: "Menús personalizados y experiencias gastronómicas dentro de tu villa.",
  },
  {
    icon: GolfCartIcon,
    title: "Carritos de Golf",
    description: "Movilidad inmediata dentro de Casa de Campo, disponible durante toda tu estancia.",
  },
  {
    icon: YachtIcon,
    title: "Embarcaciones",
    description: "Yates y salidas privadas al mar, coordinadas por nuestro equipo de conserjería.",
  },
];

export default function Concierge() {
  return (
    <section id="conserjeria" className="border-t border-white/5 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mb-16 max-w-xl">
          <span className="mb-4 block text-xs uppercase tracking-widest2 text-sand-300/80">
            Servicios de Conserjería
          </span>
          <h2 className="font-serif text-3xl text-zinc-50 sm:text-4xl">
            Cada detalle, atendido con discreción
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-colors hover:border-sand-300/30"
            >
              <Icon className="h-8 w-8 text-sand-300" />
              <h3 className="mt-6 font-serif text-xl text-zinc-100">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
