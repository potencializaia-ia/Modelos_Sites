"use client";

import { useEffect, useState } from "react";
import { whatsappUrl } from "./content";
import { WhatsAppIcon } from "./Icons";
import s from "./pilates.module.css";

// Atalho de agendamento no celular: aparece depois da abertura e some perto do contato.
export default function WhatsFlutuante() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const contato = document.getElementById("contato");
    const onScroll = () => {
      const passouHero = window.scrollY > window.innerHeight * 0.8;
      const noContato = contato ? contato.getBoundingClientRect().top < window.innerHeight : false;
      setVisivel(passouHero && !noContato);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className={`${s.floatWa} ${visivel ? s.floatWaVisible : ""}`}
      tabIndex={visivel ? 0 : -1}
      aria-hidden={!visivel}
    >
      <WhatsAppIcon size={22} /> Agendar
    </a>
  );
}
