import { links, perfil } from "./content";
import s from "./pilates.module.css";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.footerInner}>
          <a href="#topo" className={s.brand}>
            <span className={s.brandName}>{perfil.nome}</span>
            <span className={s.brandTag}>{perfil.assinatura}</span>
          </a>
          <nav className={s.footerNav} aria-label="Rodapé">
            {links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
