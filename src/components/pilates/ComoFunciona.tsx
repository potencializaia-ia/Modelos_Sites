import Reveal from "@/components/catalogo/Reveal";
import { etapas } from "./content";
import s from "./pilates.module.css";

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className={s.section}>
      <div className={s.container}>
        <div className={s.sectionHead}>
          <Reveal>
            <span className={s.eyebrow}>Como funciona</span>
            <h2 className={s.h2}>
              Do primeiro contato <em>às aulas</em>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className={s.lead}>Um caminho simples, sem pressa, construído a partir de uma boa conversa.</p>
          </Reveal>
        </div>

        <ol className={s.steps}>
          <svg className={s.stepsPath} viewBox="0 0 1000 56" preserveAspectRatio="none" aria-hidden>
            <path
              d="M0 28C110 -6 220 62 333 28S556 -6 666 28 890 62 1000 28"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeDasharray="4 6"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          {etapas.map((e, i) => (
            <li key={e.titulo} className={s.step}>
              <Reveal delay={i * 120}>
                <span className={s.stepNum}>{i + 1}</span>
              </Reveal>
              <Reveal delay={i * 120 + 60}>
                <h3 className={s.h3}>{e.titulo}</h3>
                <p>{e.texto}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
