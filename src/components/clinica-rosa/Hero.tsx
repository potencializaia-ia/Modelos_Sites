import Image from "next/image";
import Agendamento from "./Agendamento";
import { hero } from "./content";
import s from "./clinica.module.css";

export default function Hero() {
  const [p1, p2] = hero.profissionais;
  return (
    <section id="inicio" className={s.hero} aria-labelledby="hero-titulo">
      <div className={`${s.container} ${s.heroGrid}`}>
        <div className={s.heroText}>
          <h1 id="hero-titulo" className={s.h1}>
            {hero.titulo}
          </h1>
          <p className={s.lead}>{hero.texto}</p>
          <a href="#sobre" className={s.btnOutline}>
            Saiba mais
          </a>
        </div>

        <div className={s.heroVisual}>
          <div className={s.heroShape} aria-hidden />
          <div className={s.heroPeople}>
            <div className={`${s.heroPerson} ${s.heroPerson1}`}>
              <Image src={p1.src} alt={p1.alt} fill preload sizes="(min-width: 1024px) 300px, 50vw" />
            </div>
            <div className={`${s.heroPerson} ${s.heroPerson2}`}>
              <Image src={p2.src} alt={p2.alt} fill preload sizes="(min-width: 1024px) 300px, 50vw" />
            </div>
          </div>
          {hero.circulos.map((c, i) => (
            <div key={c.src} className={`${s.dotCircle} ${i === 0 ? s.dotCircle1 : s.dotCircle2}`}>
              <span>
                <Image src={c.src} alt={c.alt} fill sizes="121px" />
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className={s.container}>
        <Agendamento />
      </div>
      <div className={s.heroBottom} aria-hidden />
    </section>
  );
}
