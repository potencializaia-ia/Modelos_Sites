import Reveal from "@/components/catalogo/Reveal";
import { depoimentos } from "./content";
import s from "./pilates.module.css";

// Só aparece quando houver depoimentos reais em content.ts.
export default function Depoimentos() {
  if (depoimentos.length === 0) return null;

  return (
    <section id="depoimentos" className={s.section}>
      <div className={s.container}>
        <div className={s.sectionHead}>
          <Reveal>
            <span className={s.eyebrow}>Depoimentos</span>
            <h2 className={s.h2}>
              Quem já <em>pratica comigo</em>
            </h2>
          </Reveal>
        </div>
        <div className={s.quotes}>
          {depoimentos.map((d, i) => (
            <Reveal key={d.autor} delay={i * 100}>
              <figure className={s.quote}>
                <blockquote>“{d.texto}”</blockquote>
                <figcaption>{d.autor}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
