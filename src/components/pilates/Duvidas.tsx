"use client";

import { useId, useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import Reveal from "@/components/catalogo/Reveal";
import { perguntas, whatsappUrl } from "./content";
import s from "./pilates.module.css";

export default function Duvidas() {
  const [aberta, setAberta] = useState<number | null>(0);
  const id = useId();

  return (
    <section id="duvidas" className={s.section}>
      <div className={`${s.container} ${s.faq}`}>
        <Reveal className={s.faqAside}>
          <span className={s.eyebrow}>Perguntas frequentes</span>
          <h2 className={s.h2}>
            Antes de <em>começar</em>
          </h2>
          <p>Não encontrou o que procurava? Me mande uma mensagem e conversamos com calma.</p>
          <a
            href={whatsappUrl("Olá, Sara! Tenho uma dúvida sobre as aulas.")}
            target="_blank"
            rel="noopener noreferrer"
            className={s.textLink}
          >
            Perguntar pelo WhatsApp <ArrowUpRight size={16} />
          </a>
        </Reveal>

        <Reveal delay={100}>
          <div className={s.faqList}>
            {perguntas.map((p, i) => {
              const open = aberta === i;
              return (
                <div key={p.pergunta} className={`${s.faqItem} ${open ? s.faqItemOpen : ""}`}>
                  <h3>
                    <button
                      type="button"
                      className={s.faqQ}
                      aria-expanded={open}
                      aria-controls={`${id}-${i}`}
                      onClick={() => setAberta(open ? null : i)}
                    >
                      {p.pergunta}
                      <span className={s.faqIcon} aria-hidden>
                        <Plus size={18} strokeWidth={1.6} />
                      </span>
                    </button>
                  </h3>
                  <div id={`${id}-${i}`} className={s.faqA} role="region" inert={!open}>
                    <div>
                      <p>{p.resposta}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
