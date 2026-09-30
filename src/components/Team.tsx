"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { team } from "@/data/content";
import SectionTitle from "./ui/SectionTitle";

export default function Team() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const sync = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < max - 4);
    const card = el.firstElementChild as HTMLElement | null;
    if (card) {
      const step = card.offsetWidth + parseFloat(getComputedStyle(el).columnGap || "0");
      setActive(Math.min(team.length - 1, Math.round(el.scrollLeft / step)));
    }
  }, []);

  useEffect(() => {
    sync();
    const el = trackRef.current;
    el?.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      el?.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    el.scrollBy({ left: dir * (card.offsetWidth + 16), behavior: "smooth" });
  };

  const scrollToCard = (i: number) => {
    const el = trackRef.current;
    const card = el?.children[i] as HTMLElement | undefined;
    if (el && card) el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
  };

  const hasOverflow = canPrev || canNext;

  return (
    <section id="equipe" aria-labelledby="equipe-titulo" className="mx-auto max-w-[1240px] pt-24 lg:pt-32">
      <div className="flex items-end justify-between gap-4 px-5 md:px-8">
        <SectionTitle id="equipe-titulo">Nossa equipe</SectionTitle>
        <a
          href="#contato"
          className="group inline-flex items-center gap-2 text-[13.5px] font-semibold text-brand-600 transition-colors duration-200 hover:text-brand-700"
        >
          Conheça todos
          <ArrowRight
            className="size-4 transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </a>
      </div>

      <ul
        ref={trackRef}
        aria-label="Especialistas da clínica"
        className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-4 md:scroll-px-8 md:px-8 lg:grid lg:grid-cols-4 lg:overflow-visible lg:gap-5"
      >
        {team.map((p) => (
          <li
            key={p.name}
            className="group relative w-[76%] shrink-0 snap-start overflow-hidden rounded-[18px] bg-mist shadow-[0_1px_0_rgba(40,91,140,0.06)] transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-soft sm:w-[46%] md:w-[34%] lg:w-auto"
          >
            <div className="relative aspect-[4/4.6] overflow-hidden">
              <Image
                src={p.image}
                alt={p.imageAlt}
                fill
                sizes="(min-width: 1024px) 290px, (min-width: 640px) 46vw, 76vw"
                className="object-cover object-top transition-transform duration-[400ms] ease-out group-hover:scale-[1.04]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/80 to-transparent"
              />
            </div>
            <div className="absolute inset-x-2 bottom-2 rounded-[14px] bg-white/80 px-4 py-3 backdrop-blur-md">
              <h3 className="text-[14px] font-semibold text-ink">{p.name}</h3>
              <p className="mt-0.5 text-[12.5px] text-muted">{p.role}</p>
              <p className="mt-1.5 text-[11.5px] font-medium tracking-wide text-muted">{p.cro}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex items-center justify-center gap-4" aria-label="Controles do carrossel">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          disabled={!canPrev}
          aria-label="Especialista anterior"
          className="grid size-8 place-items-center rounded-full text-ink transition-colors duration-200 hover:bg-mist disabled:opacity-35 disabled:hover:bg-transparent"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
        </button>
        <div className="flex items-center gap-1.5">
          {team.map((p, i) => (
            <button
              key={p.name}
              type="button"
              onClick={() => scrollToCard(i)}
              aria-label={`Ver ${p.name}`}
              aria-current={hasOverflow && active === i ? "true" : undefined}
              className={`h-1.5 rounded-full transition-all duration-200 ${
                hasOverflow && active === i ? "w-4 bg-brand" : "w-1.5 bg-[#b9cde3] hover:bg-brand-mid"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          disabled={!canNext}
          aria-label="Próximo especialista"
          className="grid size-8 place-items-center rounded-full text-ink transition-colors duration-200 hover:bg-mist disabled:opacity-35 disabled:hover:bg-transparent"
        >
          <ArrowRight className="size-4" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
