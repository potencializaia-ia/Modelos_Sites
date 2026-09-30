import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

/** Símbolo do logotipo: círculo lilás com brilhos. */
export function LogoMark(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="sorriso-logo" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#A98BF6" />
          <stop offset="1" stopColor="#6974E8" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="16" fill="url(#sorriso-logo)" />
      <path d="M16 7.5l1.6 4.3 4.4 1.7-4.4 1.7L16 19.5l-1.6-4.3-4.4-1.7 4.4-1.7z" fill="#fff" />
      <circle cx="22.5" cy="21" r="1.6" fill="#fff" opacity=".85" />
      <circle cx="10.5" cy="21.5" r="1.1" fill="#fff" opacity=".7" />
      <circle cx="22" cy="9.5" r="0.9" fill="#fff" opacity=".7" />
    </svg>
  );
}

/** Alinhador transparente (vista superior do arco). */
export function AlignerIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 20.5V11a8 8 0 0 1 16 0v9.5h-4.5V11a3.5 3.5 0 0 0-7 0v9.5z" />
      <path d="M4 15.5h4.5M15.5 15.5H20M5.2 7.5l3.9 1.9M18.8 7.5l-3.9 1.9M12 3v4.5" />
    </svg>
  );
}

/** Implante: coroa sobre pino rosqueado. */
export function ImplantIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5.5 2.5c2-.8 4.4-.4 6.5.5 2.1-.9 4.5-1.3 6.5-.5 1.9.8 1.9 3.6 1 6.5h-15c-.9-2.9-.9-5.7 1-6.5z" />
      <path d="M8 9v2.5h8V9" />
      <path d="M8.5 11.5 9 20.5l3 2 3-2 .5-9" />
      <path d="M8.2 14.5h7.6M8.5 17.5h7" />
    </svg>
  );
}

/** Dente com brilho, para estética dental. */
export function ToothSparkIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6.2 4.2c1.9-1 3.8-.6 5.3.2 1.5-.8 3.4-1.2 5.3-.2 2.3 1.3 2 5.1 1 8.1-.8 2.6-1 7.7-3 7.7-1.6 0-1.3-4.8-3.3-4.8S9.8 20 8.2 20c-2 0-2.2-5.1-3-7.7-1-3-1.3-6.8 1-8.1z" />
      <path d="M19.5 1.8l.5 1.4 1.4.5-1.4.5-.5 1.4-.5-1.4-1.4-.5 1.4-.5z" fill="currentColor" stroke="none" />
    </svg>
  );
}
