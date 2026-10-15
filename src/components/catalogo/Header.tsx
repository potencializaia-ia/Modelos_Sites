"use client";

import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { contatoUrl } from "@/data/modelos";

const links = [
  { href: "#modelos", label: "Modelos" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#contato", label: "Contato" },
];

export function Marca({ claro = false }: { claro?: boolean }) {
  return (
    <a href="#topo" className={`text-lg font-extrabold tracking-tight ${claro ? "text-white" : "text-[#0F172A]"}`}>
      Potencializa<span className="text-[#FF851B]">.ai</span>
    </a>
  );
}

export default function Header() {
  const [aberto, setAberto] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <div className="mx-auto max-w-[1280px] rounded-2xl border border-white/60 bg-white/90 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.25)] backdrop-blur-xl">
        <div className="flex h-16 items-center justify-between gap-4 px-5">
          <Marca />

          <nav aria-label="Principal" className="hidden md:block">
            <ul className="flex items-center gap-8 text-[15px] font-medium text-[#2D2D4A]">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-[#FF851B]">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={contatoUrl}
              target="_blank"
              rel="noopener"
              className="hidden items-center gap-2 rounded-xl bg-[#FF851B] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_-8px_rgba(255,133,27,0.7)] transition hover:-translate-y-0.5 hover:bg-[#E07316] sm:inline-flex"
            >
              Quero meu site
              <ArrowRight className="size-4" aria-hidden />
            </a>
            <button
              type="button"
              onClick={() => setAberto((v) => !v)}
              aria-expanded={aberto}
              aria-controls="menu-mobile"
              aria-label={aberto ? "Fechar menu" : "Abrir menu"}
              className="grid size-11 place-items-center rounded-xl text-[#0F172A] transition hover:bg-[#F5F5F7] md:hidden"
            >
              {aberto ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {aberto && (
          <nav id="menu-mobile" aria-label="Principal" className="border-t border-[#0F172A]/10 px-3 pt-2 pb-4 md:hidden">
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setAberto(false)}
                    className="block rounded-xl px-3 py-3 font-medium text-[#2D2D4A] hover:bg-[#F5F5F7]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={contatoUrl}
              target="_blank"
              rel="noopener"
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#FF851B] px-5 py-3 font-semibold text-white hover:bg-[#E07316]"
            >
              Quero meu site
              <ArrowRight className="size-4" aria-hidden />
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
