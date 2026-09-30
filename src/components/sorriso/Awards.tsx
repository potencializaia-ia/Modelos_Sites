import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Eye, Heart, Award } from "lucide-react";
import s from "./sorriso.module.css";

const secondary = ["Selo de Excelência em Biossegurança", "Clínica do Ano em Atendimento ao Paciente"];

export default function Awards() {
  return (
    <section id="reconhecimento" aria-labelledby="awards-title" className={s.awards}>
      <div className={s.awardsHead}>
        <h2 id="awards-title" className={s.awardsTitle}>
          Prêmios e reconhecimento
        </h2>
        <p>
          Temos orgulho dos reconhecimentos que destacam a qualidade do nosso atendimento e os resultados que
          entregamos aos nossos pacientes.
        </p>
      </div>

      <div className={s.awardsGrid}>
        <figure className={s.teamPhoto}>
          <Image
            src="/images/sorriso/equipe.jpg"
            alt="Dois profissionais de jaleco branco analisando exames de imagem em monitores"
            fill
            sizes="(max-width: 860px) 100vw, 540px"
          />
          <span className={s.teamBubbles} aria-hidden="true">
            <span>
              <Heart />
            </span>
            <span>
              <Award />
            </span>
          </span>
          <figcaption className={s.teamTag}>
            Saiba mais
            <Eye aria-hidden="true" />
          </figcaption>
        </figure>

        <ul className={s.awardList}>
          <li className={s.awardMain}>
            <div>
              <h3>Referência em cuidado odontológico</h3>
              <p>Reconhecidos pelo cuidado contínuo e humano com a saúde bucal de milhares de famílias.</p>
            </div>
            <a href="#saude" className={s.awardMainBtn}>
              <ArrowUpRight aria-hidden="true" />
              <span className={s.srOnly}>Ver mais sobre nosso cuidado</span>
            </a>
          </li>
          {secondary.map((title) => (
            <li key={title}>
              <a href="#saude" className={s.awardItem}>
                <h3>{title}</h3>
                <ArrowDownRight aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
