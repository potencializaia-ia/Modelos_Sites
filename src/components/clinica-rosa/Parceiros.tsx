import { parceiros } from "./content";
import s from "./clinica.module.css";

// Marcas genéricas desenhadas em SVG; troque pelos logotipos reais dos parceiros.
const marcas = [
  <circle key="a" cx="9" cy="9" r="7" fill="none" stroke="currentColor" strokeWidth="2.4" />,
  <rect key="b" x="2" y="2" width="14" height="14" rx="4" fill="currentColor" />,
  <path key="c" d="M2 16 9 2l7 14Z" fill="currentColor" />,
  <path key="d" d="M2 9a7 7 0 0 1 14 0v7H2Z" fill="currentColor" />,
  <path key="e" d="M9 2c4 3 7 6 7 9a7 7 0 0 1-14 0c0-3 3-6 7-9Z" fill="none" stroke="currentColor" strokeWidth="2.4" />,
];

export default function Parceiros() {
  return (
    <section className={s.partners} aria-labelledby="parceiros-titulo">
      <div className={s.container}>
        <div className={s.partnersLine} />
        <h2 id="parceiros-titulo" className={s.h2}>
          Parceiros que confiam em nós
        </h2>
        <ul className={s.logos}>
          {parceiros.map((p, i) => (
            <li key={p}>
              <svg width="20" height="20" viewBox="0 0 18 18" aria-hidden>
                {marcas[i % marcas.length]}
              </svg>
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
