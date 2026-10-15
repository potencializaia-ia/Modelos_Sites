"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { depoimentos } from "./content";
import s from "./clinica.module.css";

export default function Depoimentos() {
  const trilho = useRef<HTMLUListElement>(null);
  const [atual, setAtual] = useState(0);
  const [posicoes, setPosicoes] = useState(depoimentos.itens.length - 1);

  const medir = useCallback(() => {
    const el = trilho.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    const passo = card.offsetWidth + (parseFloat(getComputedStyle(el).columnGap) || 0);
    const porTela = Math.max(1, Math.round((el.clientWidth + 1) / passo));
    setPosicoes(Math.max(1, depoimentos.itens.length - porTela + 1));
    setAtual(Math.round(el.scrollLeft / passo));
  }, []);

  useEffect(() => {
    const el = trilho.current;
    if (!el) return;
    medir();
    el.addEventListener("scroll", medir, { passive: true });
    window.addEventListener("resize", medir);
    return () => {
      el.removeEventListener("scroll", medir);
      window.removeEventListener("resize", medir);
    };
  }, [medir]);

  const irPara = (i: number) => {
    const el = trilho.current;
    const card = el?.children[i] as HTMLElement | undefined;
    if (el && card) el.scrollTo({ left: card.offsetLeft - el.offsetLeft });
  };

  return (
    <section id="depoimentos" className={s.testimonials} aria-labelledby="depoimentos-titulo">
      <div className={s.testiPhoto}>
        <Image src={depoimentos.foto.src} alt={depoimentos.foto.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" />
      </div>
      <div className={`${s.container} ${s.testiContent}`}>
        <div className={s.testiInner}>
          <div className={s.testiHead}>
            <h2 id="depoimentos-titulo" className={s.h2}>
              Depoimentos
            </h2>
            <p>{depoimentos.descricao}</p>
          </div>
          <div className={s.slider} role="region" aria-roledescription="carrossel" aria-label="Depoimentos">
            <ul ref={trilho} className={s.slides}>
              {depoimentos.itens.map((d, i) => (
                <li key={i} aria-label={`Depoimento ${i + 1} de ${depoimentos.itens.length}`}>
                  <figure className={`${s.card} ${s.review}`}>
                    <figcaption className={s.reviewHead}>
                      <span className={s.avatar}>
                        <Image src={d.foto} alt="" fill sizes="56px" />
                      </span>
                      <span>
                        <span className={s.stars} aria-label="5 de 5 estrelas" role="img">
                          {Array.from({ length: 5 }, (_, k) => (
                            <Star key={k} size={12} fill="currentColor" strokeWidth={0} />
                          ))}
                        </span>
                        <span className={s.reviewName}>{d.nome}</span>
                        <span className={s.reviewRole}>{d.papel}</span>
                      </span>
                    </figcaption>
                    <blockquote>{d.texto}</blockquote>
                  </figure>
                </li>
              ))}
            </ul>
            <div className={s.dots}>
              {Array.from({ length: posicoes }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Mostrar depoimentos a partir do ${i + 1}º`}
                  aria-current={atual === i ? "true" : undefined}
                  onClick={() => irPara(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
