"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "./Logo";
import s from "./sorriso.module.css";

const leftLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Nossa missão", href: "#reconhecimento" },
];

const dropdowns = [
  {
    id: "solucoes",
    label: "Soluções",
    items: [
      { label: "Clínica geral", href: "#tratamentos" },
      { label: "Alinhadores", href: "#tratamentos" },
      { label: "Implantes", href: "#tratamentos" },
      { label: "Estética dental", href: "#tratamentos" },
    ],
  },
  {
    id: "projetos",
    label: "Projetos",
    items: [
      { label: "Mundo da saúde", href: "#saude" },
      { label: "Prêmios", href: "#reconhecimento" },
    ],
  },
];

export default function Header() {
  const [openDrop, setOpenDrop] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Fecha dropdown/menu com Esc ou clique fora
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenDrop(null);
        setMenuOpen(false);
      }
    }
    function onClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenDrop(null);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  const closeAll = () => {
    setOpenDrop(null);
    setMenuOpen(false);
  };

  return (
    <header className={s.header}>
      <nav aria-label="Principal" className={s.navLeft}>
        {leftLinks.map((l, i) => (
          <a key={l.label} href={l.href} className={`${s.pill} ${i === 0 ? s.pillActive : ""}`}>
            {l.label}
          </a>
        ))}
      </nav>

      <Logo className={s.headerLogo} />

      <div className={s.navRight} ref={navRef}>
        {dropdowns.map((d) => {
          const open = openDrop === d.id;
          return (
            <div key={d.id} className={s.dropWrap}>
              <button
                type="button"
                className={s.pill}
                aria-expanded={open}
                aria-controls={`drop-${d.id}`}
                onClick={() => setOpenDrop(open ? null : d.id)}
              >
                {d.label}
                <ChevronDown className={`${s.chev} ${open ? s.chevOpen : ""}`} aria-hidden="true" />
              </button>
              {open && (
                <ul id={`drop-${d.id}`} className={s.dropMenu}>
                  {d.items.map((item) => (
                    <li key={item.label}>
                      <a href={item.href} onClick={closeAll}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
        <a href="#contato" className={s.contactBtn}>
          Contato
        </a>
      </div>

      {/* Mobile */}
      <div className={s.mobileActions}>
        <a href="#contato" className={s.contactBtn}>
          Contato
        </a>
        <button
          type="button"
          className={s.menuBtn}
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          <span className={s.srOnly}>{menuOpen ? "Fechar menu" : "Abrir menu"}</span>
        </button>
      </div>

      {menuOpen && (
        <nav id="menu-mobile" aria-label="Menu móvel" className={s.mobileMenu}>
          <ul>
            {leftLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} onClick={closeAll}>
                  {l.label}
                </a>
              </li>
            ))}
            {dropdowns.map((d) => (
              <li key={d.id}>
                <span className={s.mobileGroup}>{d.label}</span>
                <ul>
                  {d.items.map((item) => (
                    <li key={item.label}>
                      <a href={item.href} onClick={closeAll}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
