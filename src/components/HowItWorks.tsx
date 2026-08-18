const STEPS = [
  {
    number: "01",
    title: "Envías tus criterios",
    description:
      "Completa la consulta personalizada con tu presupuesto, fechas y preferencias de conserjería.",
  },
  {
    number: "02",
    title: "Curamos las mejores opciones",
    description:
      "Nuestro equipo compara tu solicitud contra el portafolio disponible y te presenta propuestas a medida.",
  },
  {
    number: "03",
    title: "Reservas y disfrutas",
    description:
      "Confirmamos tu estancia y coordinamos cada detalle de conserjería, desde tu llegada hasta la salida.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="border-t border-white/5 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mb-16 max-w-xl">
          <span className="mb-4 block text-xs uppercase tracking-widest2 text-sand-300/80">
            Cómo Funciona
          </span>
          <h2 className="font-serif text-3xl text-zinc-50 sm:text-4xl">
            Un proceso simple, pensado para tu tiempo
          </h2>
        </div>

        <div className="grid gap-10 sm:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.number} className="border-t border-white/10 pt-6">
              <span className="font-serif text-4xl text-sand-300/60">{step.number}</span>
              <h3 className="mt-4 font-serif text-xl text-zinc-100">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
