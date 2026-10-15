import { Check } from "lucide-react";
import Reveal from "@/components/catalogo/Reveal";
import { fotos, pilates, whatsappUrl } from "./content";
import Foto from "./Foto";
import { WhatsAppIcon } from "./Icons";
import s from "./pilates.module.css";

export default function Pilates() {
  return (
    <section id="pilates" className={`${s.section} ${s.pilatesBand}`}>
      <div className={s.container}>
        <div className={s.sectionHead}>
          <Reveal>
            <span className={s.eyebrow}>O centro do meu trabalho</span>
            <h2 className={s.h2}>
              Aulas particulares <em>de pilates</em>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className={s.lead}>{pilates.intro}</p>
          </Reveal>
        </div>

        <div className={s.pilatesFeature}>
          <Reveal>
            <Foto
              {...fotos.pilates}
              className={`${s.pilatesPhoto} ${s.shapeSoft}`}
              sizes="(min-width: 1240px) 1160px, 100vw"
            />
          </Reveal>
          <ol className={s.pillars}>
            {pilates.pilares.map((p, i) => (
              <li key={p.titulo} className={s.pillar}>
                <Reveal delay={i * 80}>
                  <span className={s.pillarNum} aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className={s.h3}>{p.titulo}</h3>
                  <p>{p.texto}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <div className={s.forWhom}>
          <Reveal>
            <Foto
              {...fotos.pilates2}
              className={`${s.forWhomPhoto} ${s.shapeLeaf}`}
              sizes="(min-width: 900px) 40vw, 100vw"
            />
          </Reveal>
          <div>
            <Reveal>
              <span className={s.eyebrow}>Para quem é</span>
              <h2 className={s.h2} style={{ marginTop: 16 }}>
                Um começo possível <em>para cada corpo</em>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <ul className={s.checkList}>
                {pilates.paraQuem.map((item) => (
                  <li key={item}>
                    <span className={s.checkMark}>
                      <Check size={15} strokeWidth={2} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className={`${s.btn} ${s.btnPrimary}`}>
                <WhatsAppIcon /> Quero agendar minha aula
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
