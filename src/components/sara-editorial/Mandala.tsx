// Ornamento floral geométrico em SVG (cor via currentColor).
const petala = (r0: number, r1: number, largura: number) =>
  `M0 ${-r0} C ${largura} ${-(r0 + (r1 - r0) * 0.35)} ${largura * 0.6} ${-(r1 - 4)} 0 ${-r1} C ${-largura * 0.6} ${-(r1 - 4)} ${-largura} ${-(r0 + (r1 - r0) * 0.35)} 0 ${-r0} Z`;

const aneis = [
  { n: 8, r0: 10, r1: 36, w: 11 },
  { n: 12, r0: 40, r1: 72, w: 13 },
  { n: 16, r0: 78, r1: 112, w: 13 },
  { n: 24, r0: 118, r1: 146, w: 9 },
  { n: 32, r0: 152, r1: 186, w: 8 },
];

export default function Mandala({ className }: { className?: string }) {
  return (
    <svg
      viewBox="-200 -200 400 400"
      className={className}
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="0.9"
    >
      {[6, 38, 76, 116, 150, 192].map((r) => (
        <circle key={r} r={r} />
      ))}
      {aneis.map((a, i) =>
        Array.from({ length: a.n }, (_, k) => (
          <path
            key={`${i}-${k}`}
            d={petala(a.r0, a.r1, a.w)}
            transform={`rotate(${(360 / a.n) * k + (i % 2 ? 180 / a.n : 0)})`}
          />
        )),
      )}
      {Array.from({ length: 48 }, (_, k) => (
        <circle
          key={`p${k}`}
          r="1.6"
          cx="0"
          cy="-196"
          transform={`rotate(${7.5 * k})`}
          fill="currentColor"
          stroke="none"
        />
      ))}
    </svg>
  );
}
