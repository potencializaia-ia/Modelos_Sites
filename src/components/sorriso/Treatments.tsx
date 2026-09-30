import { Plus, ShieldPlus, Stethoscope } from "lucide-react";
import { AlignerIcon, ImplantIcon, ToothSparkIcon } from "./Icons";
import s from "./sorriso.module.css";

export default function Treatments() {
  return (
    <section id="tratamentos" aria-labelledby="trat-title" className={s.treatments}>
      <h2 id="trat-title" className={s.sectionTitle}>
        Explore nossos principais
        <br /> tratamentos e conquistas
      </h2>
      <a href="#saude" className={s.ghostBtn}>
        Explorar agora
      </a>

      <div className={s.mosaic}>
        <div className={s.mosaicCol1}>
          <a href="#contato" className={`${s.tile} ${s.tileA}`}>
            <Stethoscope className={s.tileIcon} strokeWidth={1.4} aria-hidden="true" />
            <span>Clínica geral</span>
          </a>
          <a href="#contato" className={`${s.tile} ${s.tileB}`}>
            <ShieldPlus className={s.tileIcon} strokeWidth={1.4} aria-hidden="true" />
            <span>Prevenção</span>
          </a>
        </div>

        <div className={s.mosaicCol2}>
          <a href="#contato" className={`${s.tile} ${s.tileMain}`}>
            <AlignerIcon className={s.tileIconMain} />
            <span>Alinhadores</span>
          </a>
          <div className={s.mosaicNote}>
            <a href="#contato" className={s.plusBtn} aria-label="Quero saber mais sobre alinhadores">
              <Plus aria-hidden="true" />
            </a>
            <p className={s.noteCard}>
              Alinhadores transparentes e removíveis, planejados digitalmente para corrigir o sorriso com
              conforto e discrição.
            </p>
          </div>
        </div>

        <div className={s.mosaicCol3}>
          <a href="#contato" className={`${s.tile} ${s.tileC}`}>
            <ImplantIcon className={s.tileIcon} />
            <span>Implantes</span>
          </a>
          <a href="#contato" className={`${s.tile} ${s.tileD}`}>
            <ToothSparkIcon className={s.tileIcon} />
            <span>Estética dental</span>
          </a>
        </div>
      </div>
    </section>
  );
}
