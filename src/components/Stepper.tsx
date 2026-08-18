interface StepperProps {
  label: string;
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
}

export default function Stepper({ label, value, min = 0, max = 20, onChange }: StepperProps) {
  return (
    <div>
      <span className="mb-2 block text-xs uppercase tracking-widest2 text-zinc-500">{label}</span>
      <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
        <button
          type="button"
          aria-label={`Reducir ${label}`}
          onClick={() => onChange(Math.max(min, value - 1))}
          className="h-7 w-7 rounded-full border border-white/10 text-zinc-300 transition-colors hover:border-sand-300/50 hover:text-sand-200 disabled:opacity-30"
          disabled={value <= min}
        >
          −
        </button>
        <span className="font-serif text-lg text-zinc-100">{value}</span>
        <button
          type="button"
          aria-label={`Aumentar ${label}`}
          onClick={() => onChange(Math.min(max, value + 1))}
          className="h-7 w-7 rounded-full border border-white/10 text-zinc-300 transition-colors hover:border-sand-300/50 hover:text-sand-200 disabled:opacity-30"
          disabled={value >= max}
        >
          +
        </button>
      </div>
    </div>
  );
}
