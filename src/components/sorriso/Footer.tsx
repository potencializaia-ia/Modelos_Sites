import Logo from "./Logo";
import s from "./sorriso.module.css";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Nossa missão", href: "#reconhecimento" },
  { label: "Mundo da saúde", href: "#saude" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer className={s.footer}>
      <Logo />
      <nav aria-label="Rodapé">
        <ul>
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <p>© 2026 Sorriso Odontologia · Resp. técnico: CRO-SP 00000</p>
    </footer>
  );
}
