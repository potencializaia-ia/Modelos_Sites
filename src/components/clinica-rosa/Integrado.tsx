import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/catalogo/Reveal";
import { integrado } from "./content";
import { Icone } from "./Icones";
import s from "./clinica.module.css";

export default function Integrado() {
  return (
    <section className={s.integrated} aria-labelledby="integrado-titulo">
      <div className={`${s.container} ${s.integratedGrid}`}>
        <Reveal className={s.intPhotoWrap}>
          <span className={`${s.ring} ${s.intRing}`} aria-hidden />
          <div className={`${s.photo} ${s.intPhoto}`}>
            <Image
              src={integrado.foto.src}
              alt={integrado.foto.alt}
              fill
              sizes="(min-width: 1024px) 454px, 100vw"
              style={{ objectPosition: "62% 50%" }}
            />
          </div>
          <blockquote className={s.quote}>{integrado.citacao}</blockquote>
        </Reveal>

        <div className={s.intText}>
          <Reveal>
            <h2 id="integrado-titulo" className={s.h2}>
              {integrado.titulo}
            </h2>
          </Reveal>
          <ul className={s.benefits}>
            {integrado.beneficios.map((b, i) => (
              <li key={b.titulo}>
                <Icone nome={b.icone} size={40} />
                <Reveal delay={i * 80}>
                  <h3 className={s.h3}>{b.titulo}</h3>
                  <p>{b.texto}</p>
                </Reveal>
              </li>
            ))}
          </ul>
          <div className={s.actions}>
            <a href="#agendar" className={s.btn}>
              Agendar avaliação
            </a>
            <a href="#equipe" className={s.link}>
              Conheça a equipe <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
