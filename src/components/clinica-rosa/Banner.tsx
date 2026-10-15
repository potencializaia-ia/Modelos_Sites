import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { banner, whatsappUrl } from "./content";
import s from "./clinica.module.css";

const bolhas = [s.bubble1, s.bubble2, s.bubble3];

export default function Banner() {
  return (
    <div className={s.ctaWrap}>
      <section className={s.cta} aria-labelledby="banner-titulo">
        <div className={`${s.container} ${s.ctaInner}`}>
          <div className={s.ctaText}>
            <h2 id="banner-titulo" className={s.h2}>
              {banner.titulo}
            </h2>
            <p className={s.lead}>{banner.texto}</p>
            <div className={s.actions}>
              <a href="#agendar" className={s.btn}>
                Agendar avaliação
              </a>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className={s.link}>
                Falar no WhatsApp <ArrowRight size={14} />
              </a>
            </div>
          </div>
          <div className={s.ctaVisual}>
            {banner.palavras.map((p, i) => (
              <span key={p} className={`${s.bubble} ${bolhas[i]}`}>
                {p}
              </span>
            ))}
            <div className={s.ctaPerson}>
              <Image src={banner.foto.src} alt={banner.foto.alt} fill sizes="340px" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
