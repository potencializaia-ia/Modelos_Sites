const base = {
  width: 16,
  height: 16,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
}

export const ArrowRight = (p) => (
  <svg {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)

export const ArrowLeft = (p) => (
  <svg {...base} {...p}><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
)

export const ArrowUpRight = (p) => (
  <svg {...base} {...p}><path d="M7 17 17 7M8 7h9v9" /></svg>
)

export const Star = (p) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <path d="M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3-4.6-4.4 6.3-.9z" />
  </svg>
)

export const Menu = (p) => (
  <svg {...base} {...p}><path d="M4 8h16M4 16h16" /></svg>
)

export const Close = (p) => (
  <svg {...base} {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>
)

export const Tooth = (p) => (
  <svg {...base} viewBox="0 0 24 24" fill="currentColor" stroke="none" {...p}>
    <path d="M7.4 3C4.9 3 3.3 5 3.5 7.6c.2 2.2 1.2 3.9 1.8 6.2.5 2 .9 4.2 2.3 4.2 1.5 0 1.5-3.2 2.2-4.8.4-.8.8-1.3 2.2-1.3s1.8.5 2.2 1.3c.7 1.6.7 4.8 2.2 4.8 1.4 0 1.8-2.2 2.3-4.2.6-2.3 1.6-4 1.8-6.2C20.7 5 19.1 3 16.6 3c-1.9 0-2.8.9-4.6.9S9.3 3 7.4 3z" />
  </svg>
)

export const Mail = (p) => (
  <svg {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
)

export const Facebook = (p) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21z" />
  </svg>
)

export const Instagram = (p) => (
  <svg {...base} {...p}><rect x="4" y="4" width="16" height="16" rx="4.5" /><circle cx="12" cy="12" r="3.6" /><circle cx="16.9" cy="7.1" r=".6" fill="currentColor" /></svg>
)

export const XLogo = (p) => (
  <svg {...base} {...p}><path d="M5 4l14 16M19 4 5 20" /></svg>
)

export const Youtube = (p) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <path d="M21.6 7.2a2.6 2.6 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4a2.6 2.6 0 0 0-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.8a2.6 2.6 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3z" />
  </svg>
)
