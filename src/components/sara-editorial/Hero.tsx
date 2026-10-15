import Image from "next/image";
import { hero, whatsappUrl } from "./content";
import Mandala from "./Mandala";
import s from "./editorial.module.css";

export default function Hero() {
  return (
    <section id="inicio" className={s.hero} aria-labelledby="hero-titulo">
      <div className={`${s.container} ${s.heroGrid}`}>
        <div className={s.heroText}>
          <h1 id="hero-titulo" className={s.h1}>
            <span>{hero.titulo[0]}</span>
            <span>
              {hero.titulo[1]}
              <i className={s.caret} aria-hidden />
            </span>
          </h1>
          <p className={s.heroP}>{hero.texto}</p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={s.btn}>
            {hero.botao}
          </a>
          <ul className={s.stats}>
            {hero.indicadores.map((i) => (
              <li key={i.legenda} className={s.stat}>
                <span className={s.statNum}>{i.numero}</span>
                <span className={s.statLabel}>{i.legenda}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={s.heroMedia}>
          <Image
            src={hero.foto.src}
            alt={hero.foto.alt}
            fill
            preload
            sizes="(min-width: 900px) 50vw, 100vw"
            style={{ objectPosition: "48% 60%" }}
          />
          <Mandala className={`${s.mandala} ${s.heroMandala}`} />
        </div>
      </div>
    </section>
  );
}
