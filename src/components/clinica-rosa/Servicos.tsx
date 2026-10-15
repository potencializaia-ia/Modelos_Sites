import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/catalogo/Reveal";
import { servicos } from "./content";
import { Icone } from "./Icones";
import s from "./clinica.module.css";

export default function Servicos() {
  return (
    <section id="servicos" className={s.services} aria-labelledby="servicos-titulo">
      <div className={s.container}>
        <h2 id="servicos-titulo" className={`${s.h2} ${s.center}`}>
          Nossos serviços
        </h2>
        <p className={s.sectionIntro}>{servicos.descricao}</p>

        <div className={s.servicesGrid}>
          <span className={`${s.ring} ${s.servicesRing}`} aria-hidden />
          <ul className={s.serviceCards}>
            {servicos.itens.map((sv, i) => (
              <li key={sv.titulo}>
                <Reveal delay={i * 80} className="h-full">
                  <article className={`${s.card} ${s.service}`}>
                    <Icone nome={sv.icone} size={54} className={s.lineIcon} />
                    <h3 className={s.h3}>{sv.titulo}</h3>
                    <p>{sv.texto}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
          <Reveal delay={120} className={s.servicesPhotoWrap}>
            <div className={`${s.photo} ${s.servicesPhoto}`}>
              <Image
                src={servicos.foto.src}
                alt={servicos.foto.alt}
                fill
                sizes="(min-width: 1024px) 420px, 100vw"
                style={{ objectPosition: "50% 40%" }}
              />
            </div>
            <div className={`${s.gradBadge} ${s.servicesBadge}`}>
              <strong>{servicos.destaque}</strong>
              <a href="#servicos">
                Ver todos os serviços <ArrowRight size={13} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
