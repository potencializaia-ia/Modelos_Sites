import Image from "next/image";
import { depoimento } from "./content";
import Mandala from "./Mandala";
import s from "./editorial.module.css";

export default function Depoimento() {
  return (
    <section className={s.band} aria-label="Depoimento">
      <Mandala className={`${s.mandala} ${s.bandMandalaL}`} />
      <Mandala className={`${s.mandala} ${s.bandMandalaR}`} />
      <div className={`${s.container} ${s.bandGrid}`}>
        <div className={s.bandFigure}>
          <Image src={depoimento.foto.src} alt={depoimento.foto.alt} fill sizes="(min-width: 900px) 480px, 90vw" />
        </div>
        <figure className={s.quoteBox}>
          <span className={s.quoteMark} aria-hidden>
            ”
          </span>
          <blockquote>“{depoimento.texto}”</blockquote>
          <figcaption>{depoimento.autor}</figcaption>
        </figure>
      </div>
    </section>
  );
}
