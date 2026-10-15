"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Cartao from "./Cartao";
import { destaques } from "./content";
import s from "./editorial.module.css";

export default function Destaques() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [inicio, setInicio] = useState(true);
  const [fim, setFim] = useState(false);
  const [pagina, setPagina] = useState({ atual: 1, total: 1 });

  const atualizar = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setInicio(el.scrollLeft <= 4);
    setFim(el.scrollLeft >= max - 4);
    const passo = (el.firstElementChild as HTMLElement | null)?.offsetWidth ?? el.clientWidth;
    const porTela = Math.max(1, Math.round(el.clientWidth / passo));
    setPagina({
      atual: Math.min(destaques.length, Math.round(el.scrollLeft / passo) + porTela),
      total: destaques.length,
    });
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    atualizar();
    el.addEventListener("scroll", atualizar, { passive: true });
    window.addEventListener("resize", atualizar);
    return () => {
      el.removeEventListener("scroll", atualizar);
      window.removeEventListener("resize", atualizar);
    };
  }, [atualizar]);

  const mover = (dir: 1 | -1) => {
    const el = trackRef.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({ left: dir * (card.offsetWidth + gap) });
  };

  return (
    <section id="aulas" className={s.featured} aria-labelledby="aulas-titulo">
      <div className={s.container}>
        <div className={s.sectionHead}>
          <h2 id="aulas-titulo" className={s.h2}>
            Aulas de Pilates em destaque
          </h2>
          <div className={s.rule}>
            <a href="#conteudos" className={s.btnOutline}>
              Ver mais
            </a>
          </div>
        </div>

        <div className={s.carousel} role="region" aria-roledescription="carrossel" aria-label="Aulas em destaque">
          <div className={s.arrowBar}>
            <button
              type="button"
              className={s.arrow}
              onClick={() => mover(-1)}
              disabled={inicio}
              aria-label="Aula anterior"
              aria-controls="trilho-destaques"
            >
              <ChevronLeft size={16} strokeWidth={2} />
            </button>
            <button
              type="button"
              className={s.arrow}
              onClick={() => mover(1)}
              disabled={fim}
              aria-label="Próxima aula"
              aria-controls="trilho-destaques"
            >
              <ChevronRight size={16} strokeWidth={2} />
            </button>
          </div>
          <ul id="trilho-destaques" ref={trackRef} className={s.track}>
            {destaques.map((d) => (
              <li key={d.id}>
                <Cartao item={d} sizes="(min-width: 900px) 320px, (min-width: 600px) 50vw, 85vw" />
              </li>
            ))}
          </ul>
          <p className={s.srOnly} aria-live="polite">
            Mostrando até a aula {pagina.atual} de {pagina.total}
          </p>
        </div>
      </div>
    </section>
  );
}
