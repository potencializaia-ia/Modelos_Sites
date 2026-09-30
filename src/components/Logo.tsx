type LogoProps = { inverted?: boolean; className?: string };

/** Marca Lumident: dente estilizado com arco de sorriso. */
export default function Logo({ inverted = false, className = "" }: LogoProps) {
  const main = inverted ? "#FFFFFF" : "#2A5D97";
  const accent = inverted ? "rgba(255,255,255,0.7)" : "#5B91CA";
  return (
    <a
      href="#inicio"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="Lumident Odontologia — início"
    >
      <svg viewBox="0 0 40 40" className="size-9 shrink-0" aria-hidden="true">
        <path
          d="M13.2 7.5c-4.3 0-6.7 3.6-6 8.2.5 3.1 2 4.9 2.6 7.6.7 3.2.5 7.7 2.2 9.9 1.3 1.6 3 .7 3.4-1.4.6-2.9.9-6.4 4.6-6.4s4 3.5 4.6 6.4c.4 2.1 2.1 3 3.4 1.4"
          fill="none"
          stroke={main}
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <path
          d="M13.2 7.5c2.4 0 3.8 1.3 6.8 1.3s4.4-1.3 6.8-1.3c4.3 0 6.7 3.6 6 8.2"
          fill="none"
          stroke={main}
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <path d="M4 22.5c5.5 7 26.5 7 32-3" fill="none" stroke={accent} strokeWidth="2.2" strokeLinecap="round" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`text-[17px] font-bold tracking-[0.06em] ${inverted ? "text-white" : "text-ink"}`}>
          LUMIDENT
        </span>
        <span
          className={`mt-1 text-[9.5px] font-medium tracking-[0.22em] ${inverted ? "text-white/90" : "text-muted"}`}
        >
          ODONTOLOGIA
        </span>
      </span>
    </a>
  );
}
