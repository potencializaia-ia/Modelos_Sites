import { Clock, MapPin } from "lucide-react";
import Reveal from "@/components/catalogo/Reveal";
import { instagramUrl, mapaUrl, perfil, whatsappUrl } from "./content";
import { Blob, InstagramIcon, WhatsAppIcon } from "./Icons";
import s from "./pilates.module.css";

export default function Contato() {
  return (
    <section id="contato" className={s.section} style={{ paddingBottom: 0 }}>
      <div className={s.container}>
        <div className={s.contact}>
          <Blob className={s.contactBlob} />
          <Blob className={s.contactBlob2} variant={2} />

          <div className={s.contactGrid}>
            <Reveal>
              <span className={s.eyebrow}>Contato</span>
              <h2 className={s.h2}>
                Vamos cuidar do <em>seu movimento?</em>
              </h2>
              <p className={s.lead}>
                Me conte um pouco sobre você e o que procura. Respondo pelo WhatsApp para combinarmos sua primeira aula.
              </p>
              <div className={s.contactActions}>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${s.btn} ${s.btnPrimary} ${s.btnLarge}`}
                >
                  <WhatsAppIcon size={22} /> Agendar pelo WhatsApp
                </a>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${s.btn} ${s.btnGhost} ${s.btnLarge}`}
                >
                  <InstagramIcon /> @{perfil.instagram}
                </a>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <ul className={s.infoList}>
                <li>
                  <MapPin size={20} strokeWidth={1.6} />
                  <span>
                    <span className={s.infoLabel}>Endereço</span>
                    {perfil.enderecoMapa ? (
                      <a
                        href={mapaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={s.mapLink}
                        aria-label={`${perfil.endereco}, ${perfil.bairroCidade} — abrir no Google Maps`}
                      >
                        {perfil.endereco}
                        <br />
                        {perfil.bairroCidade}
                      </a>
                    ) : (
                      <>
                        {perfil.endereco}
                        <br />
                        {perfil.bairroCidade}
                      </>
                    )}
                  </span>
                </li>
                <li>
                  <Clock size={20} strokeWidth={1.6} />
                  <span>
                    <span className={s.infoLabel}>Atendimento</span>
                    {perfil.horarios}
                  </span>
                </li>
                <li>
                  <InstagramIcon />
                  <span>
                    <span className={s.infoLabel}>Instagram</span>
                    <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                      @{perfil.instagram}
                    </a>
                  </span>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
