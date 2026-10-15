import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import Reveal from "@/components/catalogo/Reveal";
import { clinica, etapas } from "./content";
import s from "./clinica.module.css";

export default function Etapas() {
  return (
    <section id="etapas" className={s.steps} aria-labelledby="etapas-titulo">
      <div className={`${s.container} ${s.stepsGrid}`}>
        <Reveal className={s.stepsText}>
          <h2 id="etapas-titulo" className={s.h2}>
            {etapas.titulo}
          </h2>
          <p className={s.lead}>{etapas.texto}</p>
          <ul className={s.contactMini}>
            <li>
              <span className={s.miniIcon}>
                <MapPin size={18} />
              </span>
              <strong>Onde estamos</strong>
              {clinica.endereco}
            </li>
            <li>
              <span className={s.miniIcon}>
                <Mail size={18} />
              </span>
              <strong>Nosso e-mail</strong>
              <a href={`mailto:${clinica.email}`} style={{ color: "inherit", wordBreak: "break-all" }}>
                {clinica.email}
              </a>
            </li>
          </ul>
          <p className={s.afterLine}>A primeira conversa serve para entender o que você precisa, sem compromisso.</p>
          <a href="#agendar" className={s.btn}>
            Começar agora
          </a>
        </Reveal>

        <div className={s.stepsVisual}>
          <Reveal>
            <div className={`${s.photo} ${s.stepsPhoto}`}>
              <Image
                src={etapas.foto.src}
                alt={etapas.foto.alt}
                fill
                sizes="(min-width: 1024px) 412px, 100vw"
                style={{ objectPosition: "60% 50%" }}
              />
            </div>
          </Reveal>
          <ol className={s.stepList}>
            {etapas.passos.map((p, i) => (
              <li key={p.titulo}>
                <Reveal delay={i * 100} className={s.step}>
                  <span className={s.stepNum} aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className={s.stepBody}>
                    <h3 className={s.h3}>
                      <span className={s.srOnly}>Etapa {i + 1}: </span>
                      {p.titulo}
                    </h3>
                    <p>{p.texto}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
