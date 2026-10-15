import { ArrowRight } from "lucide-react";
import Reveal from "@/components/catalogo/Reveal";
import { diferenciais } from "./content";
import { Icone } from "./Icones";
import s from "./clinica.module.css";

export default function Diferenciais() {
  return (
    <section className={s.features} aria-label="Diferenciais">
      <div className={s.container}>
        <ul className={s.featureGrid}>
          {diferenciais.map((d, i) => (
            <li key={d.titulo}>
              <Reveal delay={i * 90} className="h-full">
                <article className={`${s.card} ${s.feature}`}>
                  <Icone nome={d.icone} size={52} className={s.lineIcon} />
                  <h3 className={s.h3}>{d.titulo}</h3>
                  <p>{d.texto}</p>
                  <a href="#sobre" className={s.arrowCircle} aria-label={`Saiba mais: ${d.titulo}`}>
                    <ArrowRight size={16} strokeWidth={1.6} />
                  </a>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
