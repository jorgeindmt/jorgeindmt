type IconProps = { className?: string };

const base = "1.5";

export function ChefIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={base}>
      <path d="M6 10a3 3 0 0 1 1.2-5.7A3.5 3.5 0 0 1 12 3a3.5 3.5 0 0 1 4.8 1.3A3 3 0 0 1 18 10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 10h12v2a6 6 0 0 1-6 6 6 6 0 0 1-6-6v-2Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 21h6M12 18v3" strokeLinecap="round" />
    </svg>
  );
}

export function GolfCartIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={base}>
      <path d="M4 16V9a1 1 0 0 1 1-1h5l3 3h5a1 1 0 0 1 1 1v4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 16h16M8 16v2M16 16v2" strokeLinecap="round" />
      <circle cx="7" cy="19" r="1.4" />
      <circle cx="17" cy="19" r="1.4" />
      <path d="M9 8V5h4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function YachtIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={base}>
      <path d="M3 15h18l-2 4a2 2 0 0 1-1.8 1.1H6.8A2 2 0 0 1 5 19l-2-4Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 15V4" strokeLinecap="round" />
      <path d="M12 4l6 6-6 1.5V4Z" strokeLinejoin="round" />
      <path d="M12 6l-4.5 5.4L12 12.5V6Z" strokeLinejoin="round" />
    </svg>
  );
}

export function TransferIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={base}>
      <path d="M4 17V10a1 1 0 0 1 1-1h3l2-3h4l2 3h3a1 1 0 0 1 1 1v7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 17h18" strokeLinecap="round" />
      <circle cx="8" cy="17" r="1.6" />
      <circle cx="16" cy="17" r="1.6" />
    </svg>
  );
}

export function CalendarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={base}>
      <rect x="3.5" y="5" width="17" height="16" rx="1.5" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" strokeLinecap="round" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={base}>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-1.3-.6-2.1-1.1-3-2.5-.2-.3 0-.4.1-.6.2-.2.5-.5.6-.7.1-.2.1-.4 0-.5-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.4-.2.2-.9.9-.9 2.2s.9 2.6 1.1 2.8c1.5 2 3.2 2.9 5.4 3.5.5.2.9.1 1.2 0 .4-.1 1.1-.5 1.3-.9.2-.5.2-.9.1-1-.1-.1-.2-.1-.4-.2Z" />
    </svg>
  );
}

export function ChevronLeftIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={base}>
      <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={base}>
      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={base}>
      <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
    </svg>
  );
}

export function ExpandIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={base}>
      <path d="M9 3H5a2 2 0 0 0-2 2v4M15 3h4a2 2 0 0 1 2 2v4M9 21H5a2 2 0 0 1-2-2v-4M15 21h4a2 2 0 0 0 2-2v-4" strokeLinecap="round" />
    </svg>
  );
}
