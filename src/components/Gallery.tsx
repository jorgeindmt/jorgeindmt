import { useLanguage } from "../i18n/LanguageContext";

type AmenityId = "oceanFront" | "golfView" | "pool" | "infinityPool" | "jacuzzi" | "privateDock";

interface VillaTeaser {
  name: string;
  bedrooms: number;
  amenities: AmenityId[];
  gradient: string;
}

const VILLAS: VillaTeaser[] = [
  {
    name: "Villa Arrecife",
    bedrooms: 6,
    amenities: ["oceanFront", "infinityPool"],
    gradient: "from-sky-950 via-zinc-900 to-zinc-950",
  },
  {
    name: "Villa Fairway",
    bedrooms: 5,
    amenities: ["golfView", "jacuzzi"],
    gradient: "from-emerald-950 via-zinc-900 to-zinc-950",
  },
  {
    name: "Villa Marejada",
    bedrooms: 8,
    amenities: ["oceanFront", "privateDock"],
    gradient: "from-indigo-950 via-zinc-900 to-zinc-950",
  },
  {
    name: "Villa Altozano",
    bedrooms: 4,
    amenities: ["golfView", "pool"],
    gradient: "from-amber-950 via-zinc-900 to-zinc-950",
  },
];

export default function Gallery() {
  const { dict } = useLanguage();

  return (
    <section id="portafolio" className="border-t border-white/5 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="mb-4 block text-xs uppercase tracking-widest2 text-sand-300/80">
              {dict.gallery.badge}
            </span>
            <h2 className="font-serif text-3xl text-zinc-50 sm:text-4xl">{dict.gallery.title}</h2>
          </div>
          <p className="max-w-sm text-sm text-zinc-500">{dict.gallery.note}</p>
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
                  {villa.amenities.map((amenityId) => (
                    <span
                      key={amenityId}
                      className="rounded-full border border-white/15 bg-black/30 px-2.5 py-1 text-[10px] uppercase tracking-wide text-zinc-200 backdrop-blur-sm"
                    >
                      {dict.gallery.amenities[amenityId]}
                    </span>
                  ))}
                </div>
                <h3 className="mt-4 font-serif text-xl text-zinc-50">{villa.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-wide text-zinc-400">
                  {villa.bedrooms} {dict.gallery.bedrooms}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
