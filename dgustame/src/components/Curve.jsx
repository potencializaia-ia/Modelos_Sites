/* Divisão curva entre áreas bordô e creme, inspirada no cardápio impresso */
export default function Curve({ className = '' }) {
  return (
    <svg
      className={`curve ${className}`}
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M0 0h1440v34C1180 92 940 96 720 70S260 20 0 62z" fill="currentColor" />
    </svg>
  )
}
