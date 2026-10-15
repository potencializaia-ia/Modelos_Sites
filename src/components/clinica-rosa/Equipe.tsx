import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/catalogo/Reveal";
import { equipe, whatsappUrl } from "./content";
import s from "./clinica.module.css";

export default function Equipe() {
  return (
    <section id="equipe" className={s.team} aria-labelledby="equipe-titulo">
      <div className={s.container}>
        <h2 id="equipe-titulo" className={`${s.h2} ${s.center}`}>
          Nossa equipe
        </h2>
        <p className={s.sectionIntro}>{equipe.subtitulo}</p>
        <ul className={s.teamGrid}>
          {equipe.pessoas.map((p, i) => (
            <li key={p.src}>
              <Reveal delay={i * 80}>
                <div className={`${s.photo} ${s.teamPhoto}`}>
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 900px) 280px, 50vw"
                    style={{ objectPosition: p.pos }}
                  />
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
        <div className={s.teamLink}>
          <a
            href={whatsappUrl("Olá! Gostaria de conhecer a equipe da clínica.")}
            target="_blank"
            rel="noopener noreferrer"
            className={s.link}
          >
            Conheça toda a equipe <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
