import Image from "next/image";
import { ArrowDown, ArrowUpRight, CalendarDays, Smile, Star, Stethoscope, Sparkles } from "lucide-react";
import s from "./sorriso.module.css";

const avatars = ["/images/avatar-1.jpg", "/images/avatar-2.jpg", "/images/avatar-3.jpg"];

export default function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className={s.heroWrap}>
      <div className={s.hero}>
        <Image
          src="/images/sorriso/hero-paciente.jpg"
          alt="Paciente sorrindo na cadeira odontológica enquanto a dentista, de luvas azuis, examina seus dentes com instrumentos"
          fill
          preload
          sizes="(max-width: 1340px) 100vw, 1280px"
          className={s.heroImg}
        />
        <div className={s.heroShade} aria-hidden="true" />

        <ul className={s.social} aria-label="Redes sociais">
          <li>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className={s.socialDark}>
              in<span className={s.srOnly}> LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <span className={s.socialRing} aria-hidden="true" />
              <span className={s.srOnly}>Instagram</span>
            </a>
          </li>
          <li>
            <a href="https://x.com/" target="_blank" rel="noreferrer">
              X<span className={s.srOnly}> (antigo Twitter)</span>
            </a>
          </li>
        </ul>

        <div className={s.heroContent}>
          <p className={s.heroTagRow}>
            <span className={s.heroTagLine} aria-hidden="true" />
            <span className={s.heroTag}>
              <Star aria-hidden="true" />
              Atendimento 24/7
            </span>
          </p>
          <h1 id="hero-title" className={s.heroTitle}>
            Cuidado diário para um sorriso saudável
          </h1>
          <div className={s.heroActions}>
            <a href="#reconhecimento" className={`${s.btn} ${s.btnDark}`}>
              <span className={s.btnIconLight}>
                <ArrowDown aria-hidden="true" />
              </span>
              Conheça a clínica
            </a>
            <a href="#contato" className={`${s.btn} ${s.btnLight}`}>
              <span className={s.btnIconDark}>
                <CalendarDays aria-hidden="true" />
              </span>
              Agendar uma consulta
            </a>
          </div>
        </div>

        {/* Indicador translúcido (alto à direita) */}
        <div className={s.insight} aria-label="Exemplo de relatório de saúde bucal">
          <div className={s.insightHead}>
            <span>Indicadores</span>
            <span className={s.insightChip}>
              <ArrowUpRight aria-hidden="true" />
              20%
            </span>
          </div>
          <div className={s.insightPerson}>
            <Image src="/images/avatar-2.jpg" alt="" width={28} height={28} />
            <p>
              Juliana
              <small>32 anos · paciente</small>
            </p>
          </div>
          <div className={s.insightBarLabel}>
            <span>Saúde gengival</span>
            <span>Out</span>
          </div>
          <div className={s.insightBar} aria-hidden="true">
            <span />
          </div>
          <p className={s.insightValue}>
            90<small>% índice</small>
          </p>
        </div>

        {/* Profissionais (canto inferior esquerdo) */}
        <div className={s.doctors}>
          <div className={s.doctorsTop}>
            <div className={s.avatars}>
              {avatars.map((src) => (
                <Image key={src} src={src} alt="" width={30} height={30} />
              ))}
            </div>
            <a href="#reconhecimento" className={s.doctorsArrow}>
              <ArrowUpRight aria-hidden="true" />
              <span className={s.srOnly}>Conheça nossa equipe</span>
            </a>
          </div>
          <p>Mais de 20 dentistas cuidando do seu sorriso</p>
        </div>

        {/* Especialistas (canto inferior direito) */}
        <div className={s.specialists}>
          <span className={s.bubble} aria-hidden="true">
            <Stethoscope />
          </span>
          <span className={s.bubble} aria-hidden="true">
            <Smile />
          </span>
          <span className={s.bubble} aria-hidden="true">
            <Sparkles />
          </span>
          <span className={s.specTag}>
            <Star aria-hidden="true" />
            Nossos especialistas
          </span>
        </div>

        {/* Recortes brancos da borda inferior */}
        <div className={s.notchLeft}>
          <p>
            Estamos prontos para cuidar de você com <span>atenção e agilidade</span>
          </p>
        </div>
        <div className={s.notchRight} aria-hidden="true" />
      </div>
      <p className={s.mobileLead}>
        Estamos prontos para cuidar de você com <span>atenção e agilidade</span>
      </p>
    </section>
  );
}
