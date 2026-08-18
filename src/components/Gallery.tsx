interface VillaTeaser {
  name: string;
  bedrooms: number;
  amenities: string[];
  gradient: string;
}

const VILLAS: VillaTeaser[] = [
  {
    name: "Villa Arrecife",
    bedrooms: 6,
    amenities: ["Frente al Mar", "Piscina Infinita"],
    gradient: "from-sky-950 via-zinc-900 to-zinc-950",
  },
  {
    name: "Villa Fairway",
    bedrooms: 5,
    amenities: ["Vista al Golf", "Jacuzzi"],
    gradient: "from-emerald-950 via-zinc-900 to-zinc-950",
  },
  {
    name: "Villa Marejada",
    bedrooms: 8,
    amenities: ["Frente al Mar", "Muelle Privado"],
    gradient: "from-indigo-950 via-zinc-900 to-zinc-950",
  },
  {
    name: "Villa Altozano",
    bedrooms: 4,
    amenities: ["Vista al Golf", "Piscina"],
    gradient: "from-amber-950 via-zinc-900 to-zinc-950",
  },
];

export default function Gallery() {
  return (
    <section id="portafolio" className="border-t border-white/5 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="mb-4 block text-xs uppercase tracking-widest2 text-sand-300/80">
              Muestra de Portafolio
            </span>
            <h2 className="font-serif text-3xl text-zinc-50 sm:text-4xl">
              Una selección de nuestras villas
            </h2>
          </div>
          <p className="max-w-sm text-sm text-zinc-500">
            Solo una muestra — cada consulta recibe propuestas curadas según tus criterios exactos.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VILLAS.map((villa) => (
            <article
              key={villa.name}
              className="group relative overflow-hidden rounded-2xl border border-white/10"
            >
              <div
                className={`flex aspect-[4/5] flex-col justify-end bg-gradient-to-br ${villa.gradient} p-5 transition-transform duration-500 group-hover:scale-105`}
              >
                <div className="flex flex-wrap gap-2">
                  {villa.amenities.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-black/30 px-2.5 py-1 text-[10px] uppercase tracking-wide text-zinc-200 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mt-4 font-serif text-xl text-zinc-50">{villa.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-wide text-zinc-400">
                  {villa.bedrooms} habitaciones
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
