import InquiryForm from "./InquiryForm";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-sand-300/[0.07] blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-16 px-6 sm:px-10 lg:grid-cols-2 lg:items-center lg:gap-10">
        <div>
          <span className="mb-6 inline-block text-xs uppercase tracking-widest2 text-sand-300/80">
            Villas & Conserjería VIP · Casa de Campo
          </span>
          <h1 className="font-serif text-4xl leading-[1.1] text-zinc-50 sm:text-5xl lg:text-6xl">
            Encontramos tu villa ideal en Casa de Campo
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-zinc-400 sm:text-lg">
            Un servicio de curaduría personalizada. Cuéntanos tus criterios y nuestro equipo selecciona,
            de nuestro portafolio exclusivo, las propiedades que se ajustan exactamente a tu estancia —
            con conserjería dedicada de principio a fin.
          </p>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8 sm:max-w-md">
            <div>
              <dt className="font-serif text-2xl text-sand-200">40+</dt>
              <dd className="mt-1 text-xs uppercase tracking-wide text-zinc-500">Villas Curadas</dd>
            </div>
            <div>
              <dt className="font-serif text-2xl text-sand-200">24/7</dt>
              <dd className="mt-1 text-xs uppercase tracking-wide text-zinc-500">Conserjería</dd>
            </div>
            <div>
              <dt className="font-serif text-2xl text-sand-200">100%</dt>
              <dd className="mt-1 text-xs uppercase tracking-wide text-zinc-500">A Medida</dd>
            </div>
          </dl>
        </div>

        <div>
          <InquiryForm />
        </div>
      </div>
    </section>
  );
}
