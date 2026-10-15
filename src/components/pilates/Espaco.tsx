import { MapPin } from "lucide-react";
import Reveal from "@/components/catalogo/Reveal";
import { fotosEspaco, perfil } from "./content";
import Foto from "./Foto";
import s from "./pilates.module.css";

export default function Espaco() {
  if (fotosEspaco.length === 0) return null;

  return (
    <section id="espaco" className={`${s.section} ${s.spaceBand}`}>
      <div className={s.container}>
        <div className={s.sectionHead}>
          <Reveal>
            <span className={s.eyebrow}>Onde acontecem as aulas</span>
            <h2 className={s.h2}>
              Um ambiente <em>calmo e reservado</em>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className={s.lead}>
              Os atendimentos acontecem em um espaço que reservo para as nossas aulas, pensado para você se concentrar
              no seu corpo e no seu movimento.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className={s.spaceGrid}>
            {fotosEspaco.map((f, i) => (
              <Foto
                key={f.legenda}
                {...f}
                className={`${s.spaceItem} ${s.shapeSoft}`}
                sizes={i === 0 ? "(min-width: 768px) 60vw, 82vw" : "(min-width: 768px) 40vw, 82vw"}
              />
            ))}
          </div>
          <p className={s.spaceNote}>
            <MapPin size={18} strokeWidth={1.6} /> {perfil.bairroCidade}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
