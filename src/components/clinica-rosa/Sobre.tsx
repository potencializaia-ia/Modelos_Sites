import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/catalogo/Reveal";
import { indicadores, sobre } from "./content";
import { Icone } from "./Icones";
import s from "./clinica.module.css";

export default function Sobre() {
  return (
    <section id="sobre" className={s.about} aria-labelledby="sobre-titulo">
      <div className={`${s.container} ${s.aboutGrid}`}>
        <Reveal className={s.stats}>
          <ul className={`${s.card} ${s.statsCard}`}>
            {indicadores.map((n) => (
              <li key={n.legenda}>
                <Icone nome={n.icone} size={34} />
                <span>
                  <span className={s.statNum}>{n.numero}</span>
                  <span className={s.statLabel}>{n.legenda}</span>
                </span>
              </li>
            ))}
          </ul>
          <p className={s.seal}>{sobre.selo}</p>
        </Reveal>

        <Reveal delay={100} className={s.aboutPhotoWrap}>
          <span className={`${s.ring} ${s.aboutRing}`} aria-hidden />
          <div className={`${s.photo} ${s.aboutPhoto}`}>
            <Image src={sobre.foto.src} alt={sobre.foto.alt} fill sizes="(min-width: 1024px) 361px, 100vw" />
          </div>
        </Reveal>

        <Reveal delay={180} className={s.aboutText}>
          <h2 id="sobre-titulo" className={s.h2}>
            {sobre.titulo}
          </h2>
          <p className={s.lead}>{sobre.texto}</p>
          <div className={s.bulletRow}>
            <ul className={s.bullets}>
              {sobre.pontos.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <span className={s.signature}>{sobre.assinatura}</span>
          </div>
          <div className={s.actions}>
            <a href="#agendar" className={s.btn}>
              Agendar avaliação
            </a>
            <a href="#servicos" className={s.link}>
              Conheça os serviços <ArrowRight size={14} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
