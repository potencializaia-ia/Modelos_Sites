"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { links, perfil, whatsappUrl } from "./content";
import { WhatsAppIcon } from "./Icons";
import s from "./pilates.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className={`${s.header} ${scrolled || open ? s.headerScrolled : ""}`}>
        <div className={`${s.container} ${s.headerInner}`}>
          <a href="#topo" className={s.brand} onClick={close}>
            <span className={s.brandName}>{perfil.nome}</span>
            <span className={s.brandTag}>{perfil.assinatura}</span>
          </a>

          <nav className={s.nav} aria-label="Principal">
            {links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={`${s.btn} ${s.btnPrimary} ${s.headerCta}`}
          >
            Agendar
          </a>

          <button
            type="button"
            className={s.menuBtn}
            aria-expanded={open}
            aria-controls="menu-celular"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <div id="menu-celular" className={`${s.drawer} ${open ? s.drawerOpen : ""}`} inert={!open}>
        <nav aria-label="Menu do celular">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className={`${s.btn} ${s.btnPrimary} ${s.btnLarge}`}
          onClick={close}
        >
          <WhatsAppIcon /> Agendar pelo WhatsApp
        </a>
      </div>
    </>
  );
}
