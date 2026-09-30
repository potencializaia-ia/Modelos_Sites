import Image from "next/image";
import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";
import s from "./sorriso.module.css";

const articles = [
  {
    tag: "Prevenção",
    title: "Escovação e fio dental: a rotina que protege",
    text: "Pequenos hábitos diários evitam cáries, sangramento gengival e tratamentos mais longos.",
    image: "/images/servico-limpeza.jpg",
    alt: "Escovas de dente de bambu em um copo de vidro",
  },
  {
    tag: "Alinhadores",
    title: "Sorriso alinhado sem aparelho aparente",
    text: "Entenda como os alinhadores transparentes funcionam e quem pode usar.",
    image: "/images/servico-ortodontia.jpg",
    alt: "Pessoa encaixando um alinhador dental transparente",
  },
  {
    tag: "Clínica",
    title: "Tecnologia que deixa a consulta mais leve",
    text: "Exames digitais e planejamento preciso para tratamentos mais rápidos e confortáveis.",
    image: "/images/clinica-consultorio.jpg",
    alt: "Consultório odontológico branco e iluminado",
  },
];

export default function HealthWorld() {
  return (
    <>
      <section id="saude" aria-labelledby="saude-title" className={s.world}>
        <h2 id="saude-title" className={s.sectionTitle}>
          Mundo da saúde
        </h2>
        <p className={s.worldLead}>Conteúdos curtos da nossa equipe para cuidar do seu sorriso todos os dias.</p>

        <ul className={s.articles}>
          {articles.map((a) => (
            <li key={a.title} className={s.article}>
              <div className={s.articleImg}>
                <Image src={a.image} alt={a.alt} fill sizes="(max-width: 860px) 100vw, 380px" />
                <span className={s.articleTag}>{a.tag}</span>
              </div>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="contato" aria-labelledby="contato-title" className={s.contact}>
        <div className={s.contactText}>
          <h2 id="contato-title">Agende sua consulta</h2>
          <p>Fale com nossa equipe e encontre o melhor horário para você. Respondemos em poucos minutos.</p>
          <div className={s.contactActions}>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer" className={s.contactBtn}>
              Agendar pelo WhatsApp
            </a>
            <a href="tel:+5511999999999" className={`${s.btn} ${s.btnLight} ${s.btnOutline}`}>
              <span className={s.btnIconDark}>
                <Phone aria-hidden="true" />
              </span>
              Ligar agora
            </a>
          </div>
        </div>
        <ul className={s.contactInfo}>
          <li>
            <MapPin aria-hidden="true" />
            <span>
              <strong>Endereço</strong>
              Rua das Flores, 250 — São Paulo, SP
            </span>
          </li>
          <li>
            <Clock aria-hidden="true" />
            <span>
              <strong>Horário</strong>
              Atendimento 24 horas, todos os dias
            </span>
          </li>
          <li>
            <Phone aria-hidden="true" />
            <span>
              <strong>Telefone</strong>
              (11) 99999-9999
            </span>
          </li>
          <li className={s.contactMap}>
            <a href="https://www.google.com/maps/search/?api=1&query=S%C3%A3o+Paulo" target="_blank" rel="noreferrer">
              Ver no mapa
              <ArrowUpRight aria-hidden="true" />
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
