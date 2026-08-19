import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  VILLAS,
  getVillaCoverImage,
  getVillaImages,
  type CapacityTierId,
  type Villa,
  type VillaLocationId,
  type VillaTypeId,
} from "../data/villas";
import { useLanguage } from "../i18n/LanguageContext";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
  ExpandIcon,
} from "./icons";

type FilterKey = "capacity" | "type" | "location";

interface GalleryProps {
  onRequestConsultation?: () => void;
}

function FilterPills<T extends string>({
  label,
  options,
  value,
  onChange,
  getLabel,
}: {
  label: string;
  options: readonly (T | "all")[];
  value: T | "all";
  onChange: (value: T | "all") => void;
  getLabel: (option: T | "all") => string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[10px] uppercase tracking-widest2 text-zinc-500">{label}</span>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const active = value === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => onChange(option)}
              className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                active
                  ? "border-sand-400/60 bg-sand-400/15 text-sand-200"
                  : "border-white/10 text-zinc-400 hover:border-white/20 hover:text-zinc-200"
              }`}
            >
              {getLabel(option)}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function VillaModal({
  villa,
  onClose,
  onRequestConsultation,
}: {
  villa: Villa;
  onClose: () => void;
  onRequestConsultation?: () => void;
}) {
  const { dict } = useLanguage();
  const images = useMemo(() => getVillaImages(villa), [villa]);
  const [activeIndex, setActiveIndex] = useState(0);
  const villaCopy = dict.gallery.villas[villa.id as keyof typeof dict.gallery.villas];

  useEffect(() => {
    setActiveIndex(0);
  }, [villa.id]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") setActiveIndex((i) => Math.max(0, i - 1));
      if (event.key === "ArrowRight") setActiveIndex((i) => Math.min(images.length - 1, i + 1));
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [images.length, onClose]);

  function handleReserve() {
    onClose();
    onRequestConsultation?.();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/80 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={villa.name}
      onClick={onClose}
    >
      <div
        className="flex max-h-[95vh] w-full max-w-5xl flex-col overflow-hidden rounded-t-2xl border border-white/10 bg-zinc-950 sm:rounded-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative aspect-[16/10] w-full shrink-0 bg-zinc-900">
          {images[activeIndex] ? (
            <img
              src={images[activeIndex]}
              alt={`${villa.name} — ${activeIndex + 1}`}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-zinc-600">—</div>
          )}

          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 rounded-full border border-white/15 bg-black/50 p-2 text-zinc-200 backdrop-blur-sm transition hover:bg-black/70"
            aria-label={dict.gallery.close}
          >
            <CloseIcon className="h-4 w-4" />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
                disabled={activeIndex === 0}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/50 p-2 text-zinc-200 backdrop-blur-sm transition hover:bg-black/70 disabled:opacity-30"
                aria-label="Previous"
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => setActiveIndex((i) => Math.min(images.length - 1, i + 1))}
                disabled={activeIndex === images.length - 1}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/50 p-2 text-zinc-200 backdrop-blur-sm transition hover:bg-black/70 disabled:opacity-30"
                aria-label="Next"
              >
                <ChevronRightIcon className="h-5 w-5" />
              </button>
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                {images.slice(0, 8).map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`h-1.5 rounded-full transition-all ${
                      index === activeIndex ? "w-5 bg-sand-300" : "w-1.5 bg-white/40"
                    }`}
                    aria-label={`Image ${index + 1}`}
                  />
                ))}
                {images.length > 8 && (
                  <span className="ml-1 self-center text-[10px] text-white/60">+{images.length - 8}</span>
                )}
              </div>
            </>
          )}
        </div>

        <div className="flex flex-col gap-5 overflow-y-auto p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3 className="font-serif text-2xl text-zinc-50 sm:text-3xl">{villa.name}</h3>
              {villaCopy && (
                <p className="mt-1 text-sm text-sand-300/80">{villaCopy.tagline}</p>
              )}
            </div>
            <div className="text-right text-xs uppercase tracking-wide text-zinc-500">
              <p>
                {villa.bedrooms} {dict.gallery.bedrooms}
              </p>
              <p className="mt-0.5">
                {villa.capacity} {dict.gallery.guests}
              </p>
            </div>
          </div>

          {villaCopy && <p className="text-sm leading-relaxed text-zinc-400">{villaCopy.description}</p>}

          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-wide text-zinc-300">
              {dict.gallery.locations[villa.location]}
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-wide text-zinc-300">
              {dict.gallery.types[villa.type]}
            </span>
            {villa.amenities.map((amenityId) => (
              <span
                key={amenityId}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-wide text-zinc-300"
              >
                {dict.gallery.amenities[amenityId]}
              </span>
            ))}
          </div>

          {images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {images.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border transition ${
                    index === activeIndex ? "border-sand-400/70" : "border-white/10 opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={src} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}

          <button
            type="button"
            onClick={handleReserve}
            className="inline-flex w-full items-center justify-center rounded-xl bg-sand-400 px-6 py-3.5 text-sm font-medium text-zinc-950 transition hover:bg-sand-300 sm:w-auto"
          >
            {dict.gallery.checkAvailability}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Gallery({ onRequestConsultation }: GalleryProps) {
  const { dict } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const [capacityFilter, setCapacityFilter] = useState<CapacityTierId | "all">("all");
  const [typeFilter, setTypeFilter] = useState<VillaTypeId | "all">("all");
  const [locationFilter, setLocationFilter] = useState<VillaLocationId | "all">("all");
  const [selectedVilla, setSelectedVilla] = useState<Villa | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const capacityOptions = ["all", "4-6", "6-8", "8plus"] as const;
  const typeOptions = ["all", "oceanfront", "golf", "family", "estate"] as const;
  const locationOptions = [
    "all",
    "puntaAguila",
    "puntaMinitas",
    "canas",
    "golf",
    "elValle",
    "batey",
    "mango",
  ] as const;

  const filteredVillas = useMemo(() => {
    return VILLAS.filter((villa) => {
      if (capacityFilter !== "all" && villa.capacityTier !== capacityFilter) return false;
      if (typeFilter !== "all" && villa.type !== typeFilter) return false;
      if (locationFilter !== "all" && villa.location !== locationFilter) return false;
      return true;
    });
  }, [capacityFilter, typeFilter, locationFilter]);

  const hasActiveFilters =
    capacityFilter !== "all" || typeFilter !== "all" || locationFilter !== "all";

  const scrollToSlide = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children[index] as HTMLElement | undefined;
    if (!slide) return;
    track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: "smooth" });
    setActiveSlide(index);
  }, []);

  useEffect(() => {
    setActiveSlide(0);
    trackRef.current?.scrollTo({ left: 0 });
  }, [filteredVillas.length, capacityFilter, typeFilter, locationFilter]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    function onScroll() {
      const slides = Array.from(track.children) as HTMLElement[];
      if (!slides.length) return;
      const scrollLeft = track.scrollLeft;
      let closest = 0;
      let minDistance = Infinity;
      slides.forEach((slide, index) => {
        const distance = Math.abs(slide.offsetLeft - track.offsetLeft - scrollLeft);
        if (distance < minDistance) {
          minDistance = distance;
          closest = index;
        }
      });
      setActiveSlide(closest);
    }

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [filteredVillas.length]);

  function clearFilters() {
    setCapacityFilter("all");
    setTypeFilter("all");
    setLocationFilter("all");
  }

  function getFilterLabel(filter: FilterKey, option: string): string {
    if (option === "all") return dict.gallery.filters.all;
    if (filter === "capacity") return dict.gallery.capacityTiers[option as CapacityTierId];
    if (filter === "type") return dict.gallery.types[option as VillaTypeId];
    return dict.gallery.locations[option as VillaLocationId];
  }

  return (
    <section id="portafolio" className="border-t border-white/5 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="mb-4 block text-xs uppercase tracking-widest2 text-sand-300/80">
              {dict.gallery.badge}
            </span>
            <h2 className="font-serif text-3xl text-zinc-50 sm:text-4xl">{dict.gallery.title}</h2>
          </div>
          <p className="max-w-sm text-sm text-zinc-500">{dict.gallery.note}</p>
        </div>

        <div className="mb-10 grid gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:grid-cols-3 sm:p-6">
          <FilterPills
            label={dict.gallery.filters.capacity}
            options={capacityOptions}
            value={capacityFilter}
            onChange={setCapacityFilter}
            getLabel={(option) => getFilterLabel("capacity", option)}
          />
          <FilterPills
            label={dict.gallery.filters.type}
            options={typeOptions}
            value={typeFilter}
            onChange={setTypeFilter}
            getLabel={(option) => getFilterLabel("type", option)}
          />
          <FilterPills
            label={dict.gallery.filters.location}
            options={locationOptions}
            value={locationFilter}
            onChange={setLocationFilter}
            getLabel={(option) => getFilterLabel("location", option)}
          />
        </div>

        {filteredVillas.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-white/10 py-16 text-center">
            <p className="text-zinc-500">{dict.gallery.noResults}</p>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="mt-4 text-sm text-sand-300 underline-offset-4 hover:underline"
              >
                {dict.gallery.clearFilters}
              </button>
            )}
          </div>
        ) : (
          <div className="relative">
            <div
              ref={trackRef}
              className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
            >
              {filteredVillas.map((villa) => {
                const cover = getVillaCoverImage(villa);
                const villaCopy = dict.gallery.villas[villa.id as keyof typeof dict.gallery.villas];

                return (
                  <article
                    key={villa.id}
                    className="group w-[min(100%,320px)] shrink-0 snap-start sm:w-[340px]"
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedVilla(villa)}
                      className="relative w-full overflow-hidden rounded-2xl border border-white/10 text-left transition hover:border-white/20"
                    >
                      <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900">
                        {cover ? (
                          <img
                            src={cover}
                            alt={villa.name}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-950 text-zinc-600">
                            {villa.name}
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute right-3 top-3 rounded-full border border-white/15 bg-black/40 p-2 text-zinc-200 opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
                          <ExpandIcon className="h-4 w-4" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                          <div className="flex flex-wrap gap-1.5">
                            {villa.amenities.slice(0, 2).map((amenityId) => (
                              <span
                                key={amenityId}
                                className="rounded-full border border-white/15 bg-black/30 px-2 py-0.5 text-[10px] uppercase tracking-wide text-zinc-200 backdrop-blur-sm"
                              >
                                {dict.gallery.amenities[amenityId]}
                              </span>
                            ))}
                          </div>
                          <h3 className="mt-3 font-serif text-xl text-zinc-50">{villa.name}</h3>
                          {villaCopy && (
                            <p className="mt-1 line-clamp-1 text-xs text-zinc-400">{villaCopy.tagline}</p>
                          )}
                          <p className="mt-2 text-[10px] uppercase tracking-wide text-zinc-400">
                            {villa.bedrooms} {dict.gallery.bedrooms} · {villa.capacity}{" "}
                            {dict.gallery.guests}
                          </p>
                        </div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedVilla(villa)}
                      className="mt-3 w-full rounded-xl border border-white/10 py-2.5 text-xs uppercase tracking-wide text-zinc-300 transition hover:border-sand-400/40 hover:text-sand-200"
                    >
                      {dict.gallery.viewGallery}
                    </button>
                  </article>
                );
              })}
            </div>

            {filteredVillas.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => scrollToSlide(Math.max(0, activeSlide - 1))}
                  disabled={activeSlide === 0}
                  className="absolute -left-3 top-[38%] hidden -translate-y-1/2 rounded-full border border-white/15 bg-zinc-950/90 p-2.5 text-zinc-200 shadow-lg transition hover:bg-zinc-900 disabled:opacity-30 sm:flex"
                  aria-label="Previous"
                >
                  <ChevronLeftIcon className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    scrollToSlide(Math.min(filteredVillas.length - 1, activeSlide + 1))
                  }
                  disabled={activeSlide === filteredVillas.length - 1}
                  className="absolute -right-3 top-[38%] hidden -translate-y-1/2 rounded-full border border-white/15 bg-zinc-950/90 p-2.5 text-zinc-200 shadow-lg transition hover:bg-zinc-900 disabled:opacity-30 sm:flex"
                  aria-label="Next"
                >
                  <ChevronRightIcon className="h-5 w-5" />
                </button>

                <div className="mt-6 flex items-center justify-center gap-2">
                  {filteredVillas.map((villa, index) => (
                    <button
                      key={villa.id}
                      type="button"
                      onClick={() => scrollToSlide(index)}
                      className={`h-1.5 rounded-full transition-all ${
                        index === activeSlide ? "w-6 bg-sand-300" : "w-1.5 bg-white/25 hover:bg-white/40"
                      }`}
                      aria-label={villa.name}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {selectedVilla && (
        <VillaModal
          villa={selectedVilla}
          onClose={() => setSelectedVilla(null)}
          onRequestConsultation={onRequestConsultation}
        />
      )}
    </section>
  );
}
