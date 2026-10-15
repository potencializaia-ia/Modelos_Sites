"use client";

import { useState } from "react";
import { clinica, rodape } from "./content";
import { Logo, Redes } from "./Marca";
import s from "./clinica.module.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [aviso, setAviso] = useState("");

  // Sem backend: prepara um e-mail de inscrição para a clínica.
  const inscrever = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
      setAviso("Informe um e-mail válido.");
      return;
    }
    const assunto = encodeURIComponent("Quero receber a newsletter");
    const corpo = encodeURIComponent(`Olá! Quero receber novidades no e-mail ${email.trim()}.`);
    window.location.href = `mailto:${clinica.email}?subject=${assunto}&body=${corpo}`;
    setAviso("Abrimos seu aplicativo de e-mail com a inscrição pronta para enviar.");
  };

  return (
    <footer id="contato" className={s.footer}>
      <div className={s.container}>
        <div className={s.footerTop}>
          <div className={s.footerAbout}>
            <Logo />
            <p>{clinica.resumo}</p>
            <Redes />
          </div>
          <div>
            <form className={s.newsletter} onSubmit={inscrever} noValidate>
              <label htmlFor="newsletter">Receba nossas novidades</label>
              <div className={s.newsRow}>
                <input
                  id="newsletter"
                  type="email"
                  placeholder="Seu e-mail"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setAviso("");
                  }}
                />
                <button type="submit">Inscrever</button>
              </div>
              {aviso && (
                <p className={s.newsNote} role="status">
                  {aviso}
                </p>
              )}
            </form>
            <nav aria-label="Rodapé">
              <ul className={s.footerLinks}>
                {rodape.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <p className={s.copy}>
          © {clinica.nome} · {clinica.descricao} · Fotos: Unsplash
        </p>
      </div>
    </footer>
  );
}
