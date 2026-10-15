"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navegacao } from "./content";
import { Logo, Redes } from "./Marca";
import s from "./clinica.module.css";

export default function Header() {
  const [aberto, setAberto] = useState(false);
  const [ativo, setAtivo] = useState("#inicio");

  // Destaca no menu a seção visível.
  useEffect(() => {
    const alvos = navegacao.map((n) => document.querySelector(n.href)).filter((el): el is Element => el !== null);
    const obs = new IntersectionObserver(
      (entries) => {
        const visivel = entries.find((e) => e.isIntersecting);
        if (visivel) setAtivo(`#${visivel.target.id}`);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    alvos.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!aberto) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setAberto(false);
    const onResize = () => window.innerWidth >= 1024 && setAberto(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [aberto]);

  return (
    <header id="topo" className={s.header}>
      <div className={`${s.container} ${s.headerInner}`}>
        <Logo />
        <nav className={s.nav} aria-label="Principal">
          <ul>
            {navegacao.map((n) => (
              <li key={n.href}>
                <a href={n.href} aria-current={ativo === n.href ? "true" : undefined}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={s.follow}>
          Siga-nos
          <Redes />
        </div>
        <button
          type="button"
          className={s.menuBtn}
          aria-expanded={aberto}
          aria-controls="menu-celular"
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          onClick={() => setAberto((v) => !v)}
        >
          {aberto ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <div id="menu-celular" className={`${s.drawer} ${aberto ? s.drawerOpen : ""}`} inert={!aberto}>
        <div>
          <nav className={s.container} aria-label="Menu do celular">
            <ul>
              {navegacao.map((n) => (
                <li key={n.href}>
                  <a href={n.href} onClick={() => setAberto(false)}>
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
            <Redes />
            <div style={{ height: 20 }} />
          </nav>
        </div>
      </div>
    </header>
  );
}
