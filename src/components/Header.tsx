"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import BookButton from "./appointment/BookButton";
import { buttonClasses } from "./ui/button";
import { contact, navItems } from "@/data/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const toggle = toggleRef.current;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKey);
      toggle?.focus();
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-200 ${
          scrolled ? "bg-white/85 shadow-[0_1px_0_rgba(40,91,140,0.08)] backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between gap-4 px-5 md:px-8 lg:h-[82px]">
          <Logo />

          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex items-center gap-8 xl:gap-10">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="relative text-[13.5px] font-medium text-ink/85 transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-brand after:transition-[width] after:duration-200 hover:text-brand hover:after:w-full"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <BookButton className={buttonClasses("primary", "md", "h-10 px-6 text-[13px] max-sm:hidden")}>
              Agendar consulta
            </BookButton>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="menu-painel"
              aria-label="Abrir menu"
              className="grid size-10 place-items-center rounded-full border border-line bg-white text-ink shadow-[0_4px_14px_-8px_rgba(16,36,62,0.35)] transition-colors duration-200 hover:bg-sky"
            >
              <Menu className="size-[18px]" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Painel de navegação (drawer) — usado em todas as larguras */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-200 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-ink/30 backdrop-blur-[2px]" onClick={close} />
        <div
          id="menu-painel"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
          inert={!open}
          className={`absolute right-0 top-0 flex h-dvh w-[min(360px,88vw)] flex-col bg-white p-6 shadow-float transition-transform duration-[250ms] ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              onClick={close}
              aria-label="Fechar menu"
              className="grid size-10 place-items-center rounded-full bg-mist text-ink transition-colors duration-200 hover:bg-sky"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Menu" className="mt-8">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={close}
                    className="flex items-center justify-between rounded-xl px-4 py-3.5 text-[17px] font-semibold text-ink transition-colors duration-200 hover:bg-mist hover:text-brand"
                  >
                    {item.label}
                    <ArrowRight className="size-4 text-brand/60" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto space-y-3 pt-6">
            <BookButton onClick={close} className={buttonClasses("primary", "lg", "w-full")}>
              Agendar consulta
            </BookButton>
            <a
              href={contact.phoneHref}
              className="flex items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold text-brand-700 transition-colors hover:text-brand"
            >
              <Phone className="size-4" aria-hidden="true" />
              {contact.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
