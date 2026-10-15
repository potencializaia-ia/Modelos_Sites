import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/catalogo/Reveal";
import { outrosCuidados, whatsappUrl } from "./content";
import s from "./pilates.module.css";

export default function Cuidados() {
  return (
    <section id="cuidados" className={s.careBand}>
      <svg className={s.careWave} viewBox="0 0 1440 56" preserveAspectRatio="none" aria-hidden>
        <path d="M0 0h1440v20c-240 40-480 40-720 18S240 0 0 30Z" fill="currentColor" />
      </svg>
      <div className={`${s.container} ${s.section} ${s.care}`} style={{ paddingTop: "calc(var(--section) * 0.7)" }}>
        <Reveal>
          <span className={s.eyebrow}>Outros cuidados</span>
          <h2 className={s.h2}>
            Além do pilates, <em>cuidado individual</em>
          </h2>
          <p className={s.lead}>
            Atendimentos que podem caminhar junto com as aulas ou acontecer separadamente, conforme o que você precisa.
          </p>
        </Reveal>

        <div className={s.careCards}>
          {outrosCuidados.map((c, i) => (
            <Reveal key={c.titulo} delay={i * 100} className={s.careCard}>
              <h3 className={s.h3}>{c.titulo}</h3>
              <p>{c.texto}</p>
              <a href={whatsappUrl(c.mensagem)} target="_blank" rel="noopener noreferrer" className={s.textLink}>
                Conversar sobre {c.titulo.toLowerCase()} <ArrowUpRight size={16} />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
