import { Mail } from "lucide-react";
import { contato, instagramUrl, marca, navegacao, whatsappUrl } from "./content";
import { Logo } from "./Header";
import { InstagramIcon, WhatsAppIcon } from "./Icons";
import s from "./editorial.module.css";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.footerGrid}>
          <div id="sobre">
            <Logo />
            <p>{marca.bio}</p>
          </div>
          <nav aria-label="Rodapé">
            <h2 className={s.footerTitle}>Navegação</h2>
            <ul className={s.footerList}>
              {navegacao.map((n) => (
                <li key={n.href}>
                  <a href={n.href}>{n.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div id="contato">
            <h2 className={s.footerTitle}>Contato</h2>
            <ul className={s.footerList}>
              <li>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon /> WhatsApp
                </a>
              </li>
              <li>
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                  <InstagramIcon /> @{contato.instagram}
                </a>
              </li>
              {contato.email && (
                <li>
                  <a href={`mailto:${contato.email}`}>
                    <Mail size={14} /> {contato.email}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className={s.footerBottom}>
          <span>{marca.nome} · Pilates</span>
          <span>Fotos: Unsplash</span>
        </div>
      </div>
    </footer>
  );
}
