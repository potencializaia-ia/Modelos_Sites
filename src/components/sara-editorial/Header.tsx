"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Mail, Menu, Search, X } from "lucide-react";
import { contato, conteudos, destaques, instagramUrl, marca, navegacao, whatsappUrl } from "./content";
import { InstagramIcon, WhatsAppIcon } from "./Icons";
import s from "./editorial.module.css";

const todos = [...destaques, ...conteudos];

function Redes({ size = 14 }: { size?: number }) {
  return (
    <>
      <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label={`Instagram @${contato.instagram}`}>
        <InstagramIcon size={size} />
      </a>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <WhatsAppIcon size={size} />
      </a>
      {contato.email && (
        <a href={`mailto:${contato.email}`} aria-label="E-mail">
          <Mail size={size} />
        </a>
      )}
    </>
  );
}

export function Logo({ as: Tag = "a" }: { as?: "a" | "span" }) {
  const props = Tag === "a" ? { href: "#inicio" } : {};
  return (
    <Tag className={s.logo} {...props}>
      <span className={s.logoMark}>
        {marca.logoParte1} <span>{marca.logoParte2}</span>
      </span>
      <span className={s.logoSub}>{marca.subtitulo}</span>
    </Tag>
  );
}

export default function Header() {
  const [painel, setPainel] = useState<"menu" | "busca" | null>(null);
  const [termo, setTermo] = useState("");
  const [ativo, setAtivo] = useState("#inicio");
  const buscaRef = useRef<HTMLInputElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);

  const resultados = useMemo(() => {
    const t = termo.trim().toLowerCase();
    if (!t) return [];
    return todos.filter((c) => `${c.titulo} ${c.categoria}`.toLowerCase().includes(t));
  }, [termo]);

  // Esc fecha, foco vai para o painel aberto e a rolagem da página fica travada.
  useEffect(() => {
    if (!painel) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPainel(null);
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    if (painel === "busca") setTimeout(() => buscaRef.current?.focus(), 50);
    if (painel === "menu") setTimeout(() => menuRef.current?.focus(), 50);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [painel]);

  // Marca no menu a seção visível.
  useEffect(() => {
    const alvos = navegacao.map((n) => document.querySelector(n.href)).filter((el): el is Element => el !== null);
    const obs = new IntersectionObserver(
      (entries) => {
        const visivel = entries.find((e) => e.isIntersecting);
        if (visivel) setAtivo(`#${visivel.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    alvos.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const irPara = (id: string) => {
    setPainel(null);
    setTermo("");
    const el = document.getElementById(`conteudo-${id}`);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "center", inline: "start" });
    el.classList.remove(s.highlight);
    void el.getBoundingClientRect();
    el.classList.add(s.highlight);
  };

  return (
    <>
      <header>
        <div className={s.top}>
          <div className={`${s.container} ${s.topInner}`}>
            <div className={s.socials}>
              <Redes />
            </div>
            <Logo />
            <div className={s.actions}>
              <button
                type="button"
                className={s.iconBtn}
                aria-label="Buscar conteúdos"
                onClick={() => setPainel("busca")}
              >
                <Search size={16} strokeWidth={1.8} />
              </button>
              <button
                type="button"
                className={s.iconBtn}
                aria-label="Abrir menu"
                aria-expanded={painel === "menu"}
                aria-controls="menu-lateral"
                onClick={() => setPainel("menu")}
              >
                <Menu size={18} strokeWidth={1.8} />
              </button>
            </div>
          </div>
        </div>
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
      </header>

      <div className={`${s.overlay} ${painel ? s.overlayOpen : ""}`} onClick={() => setPainel(null)} aria-hidden />

      <aside
        id="menu-lateral"
        className={`${s.drawer} ${painel === "menu" ? s.drawerOpen : ""}`}
        aria-label="Menu"
        inert={painel !== "menu"}
      >
        <div className={s.drawerHead}>
          <Logo as="span" />
          <button
            ref={menuRef}
            type="button"
            className={s.iconBtn}
            aria-label="Fechar menu"
            onClick={() => setPainel(null)}
          >
            <X size={20} />
          </button>
        </div>
        <nav aria-label="Menu lateral">
          <ul>
            {navegacao.map((n) => (
              <li key={n.href}>
                <a href={n.href} onClick={() => setPainel(null)}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={s.drawerSocials}>
          <Redes size={18} />
        </div>
      </aside>

      <div
        className={`${s.search} ${painel === "busca" ? s.searchOpen : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Buscar conteúdos"
        inert={painel !== "busca"}
      >
        <div className={s.container}>
          <div className={s.searchRow}>
            <Search size={20} strokeWidth={1.6} />
            <label htmlFor="busca" className={s.srOnly}>
              Buscar aulas e conteúdos
            </label>
            <input
              ref={buscaRef}
              id="busca"
              type="search"
              className={s.searchInput}
              placeholder="Buscar aulas e conteúdos"
              value={termo}
              onChange={(e) => setTermo(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && resultados[0] && irPara(resultados[0].id)}
              autoComplete="off"
            />
            <button type="button" className={s.iconBtn} aria-label="Fechar busca" onClick={() => setPainel(null)}>
              <X size={20} />
            </button>
          </div>
          {termo.trim() === "" ? (
            <p className={s.searchHint}>Experimente: postura, reformer, alongamento, em casa.</p>
          ) : resultados.length === 0 ? (
            <p className={s.searchHint} role="status">
              Nenhum conteúdo encontrado para “{termo}”.
            </p>
          ) : (
            <ul className={s.results} aria-label={`${resultados.length} resultados`}>
              {resultados.map((r) => (
                <li key={r.id}>
                  <button type="button" onClick={() => irPara(r.id)}>
                    {r.titulo}
                    <ArrowRight size={16} strokeWidth={1.6} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
