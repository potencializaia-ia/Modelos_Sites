"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import type { Service } from "@/data/content";
import BookButton from "../appointment/BookButton";
import { buttonClasses } from "../ui/button";

export default function ServicesAccordion({ items }: { items: Service[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);
  const headerRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Navegação por teclado entre cabeçalhos (padrão WAI-ARIA Accordion)
  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = items.length - 1;
    const map: Record<string, number> = {
      ArrowDown: index === last ? 0 : index + 1,
      ArrowUp: index === 0 ? last : index - 1,
      Home: 0,
      End: last,
    };
    if (e.key in map) {
      e.preventDefault();
      headerRefs.current[map[e.key]]?.focus();
    }
  };

  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => {
        const open = openId === item.id;
        const headerId = `servico-${item.id}-titulo`;
        const panelId = `servico-${item.id}-painel`;
        return (
          <li
            key={item.id}
            className={`overflow-hidden rounded-[12px] transition-colors duration-200 ${open ? "bg-[#EAF2FA]" : "bg-mist hover:bg-[#EAF1F8]"}`}
          >
            <h3>
              <button
                ref={(el) => {
                  headerRefs.current[i] = el;
                }}
                id={headerId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenId(open ? null : item.id)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className="flex min-h-12 w-full items-center gap-5 rounded-[12px] px-4 py-3 text-left sm:gap-8 sm:px-5"
              >
                <span className="w-5 text-[13px] font-medium tabular-nums text-muted">{item.number}</span>
                <span className="flex-1 text-[14.5px] font-medium text-ink">{item.title}</span>
                <ChevronDown
                  className={`size-[18px] shrink-0 text-ink/70 transition-transform duration-[250ms] ${open ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              inert={!open}
              className={`grid transition-[grid-template-rows,opacity] duration-[250ms] ease-out ${
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="flex flex-col gap-5 px-3 pb-3 sm:flex-row sm:items-center sm:gap-6 sm:px-3">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[14px] sm:w-[52%]">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 420px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 px-2 pb-3 sm:px-0 sm:pb-0 sm:pr-4">
                    <p className="text-[14px] leading-relaxed text-muted">{item.description}</p>
                    <p className="mt-5 text-[13px] text-muted">
                      A partir de <span className="text-[20px] font-bold tracking-tight text-ink">{item.price}</span>
                    </p>
                    <BookButton serviceId={item.id} className={buttonClasses("primary", "sm", "mt-4 px-6")}>
                      Saiba mais
                    </BookButton>
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
