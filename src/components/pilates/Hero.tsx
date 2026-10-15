import { User } from "lucide-react";
import Reveal from "@/components/catalogo/Reveal";
import { fotos, whatsappUrl } from "./content";
import Foto from "./Foto";
import { Blob, WhatsAppIcon } from "./Icons";
import s from "./pilates.module.css";

export default function Hero() {
  return (
    <section id="topo" className={s.hero}>
      <Blob className={`${s.heroBlob} ${s.heroBlobA}`} />
      <Blob className={`${s.heroBlob} ${s.heroBlobB}`} variant={2} />

      <div className={`${s.container} ${s.heroGrid}`}>
        <div className={s.heroText}>
          <Reveal>
            <span className={s.eyebrow}>Aulas particulares de pilates</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className={s.h1}>
              Pilates com atenção ao <em>seu movimento</em>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className={s.lead}>
              Aulas individuais, planejadas para o seu corpo e o seu momento. Um tempo só seu para se movimentar com
              calma, presença e orientação próxima.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className={s.heroActions}>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className={`${s.btn} ${s.btnPrimary} ${s.btnLarge}`}
              >
                <WhatsAppIcon /> Agendar pelo WhatsApp
              </a>
              <a href="#pilates" className={`${s.btn} ${s.btnGhost} ${s.btnLarge}`}>
                Conhecer as aulas
              </a>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <p className={s.heroNote}>
              Também atendo com <strong>fisioterapia</strong> e <strong>massoterapia</strong>.
            </p>
          </Reveal>
        </div>

        <Reveal delay={120} className={s.heroVisual}>
          <span className={s.heroRing} aria-hidden />
          <Foto
            {...fotos.hero}
            className={`${s.heroPhoto} ${s.shapeBlob}`}
            sizes="(min-width: 900px) 45vw, 100vw"
            preload
          />
          <div className={s.heroBadge}>
            <span className={s.heroBadgeDot}>
              <User size={20} strokeWidth={1.6} />
            </span>
            <span>
              <strong>Uma pessoa por vez</strong>
              Atenção do início ao fim
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
