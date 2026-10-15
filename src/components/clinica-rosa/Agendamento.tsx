"use client";

import { useState, useSyncExternalStore } from "react";
import { servicosAgendamento, whatsappUrl } from "./content";
import s from "./clinica.module.css";

type Campos = { nome: string; email: string; data: string; servico: string };
type Erros = Partial<Record<keyof Campos, string>>;

const semAssinatura = () => () => {};

const vazio: Campos = { nome: "", email: "", data: "", servico: "" };

function hojeISO() {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
}

function validar(c: Campos): Erros {
  const e: Erros = {};
  if (c.nome.trim().length < 2) e.nome = "Informe seu nome.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(c.email.trim())) e.email = "Informe um e-mail válido.";
  if (!c.data) e.data = "Escolha uma data.";
  else if (c.data < hojeISO()) e.data = "Escolha uma data a partir de hoje.";
  if (!c.servico) e.servico = "Selecione um serviço.";
  return e;
}

// Sem backend: o envio abre o WhatsApp com a mensagem pronta. A confirmação é feita pela clínica.
export default function Agendamento() {
  const [campos, setCampos] = useState<Campos>(vazio);
  const [erros, setErros] = useState<Erros>({});
  const [aviso, setAviso] = useState<{ tipo: "ok" | "info"; texto: string; link?: string } | null>(null);
  // Data mínima só no navegador (o servidor pode estar em outro fuso).
  const minData = useSyncExternalStore(semAssinatura, hojeISO, () => undefined);

  const mudar = (k: keyof Campos) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setCampos((c) => ({ ...c, [k]: e.target.value }));
    if (erros[k]) setErros((er) => ({ ...er, [k]: undefined }));
  };

  const enviar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const er = validar(campos);
    setErros(er);
    const primeiro = Object.keys(er)[0];
    if (primeiro) {
      document.getElementById(`ag-${primeiro}`)?.focus();
      setAviso(null);
      return;
    }
    const data = campos.data.split("-").reverse().join("/");
    const msg = `Olá! Gostaria de agendar uma avaliação.\nNome: ${campos.nome.trim()}\nE-mail: ${campos.email.trim()}\nData desejada: ${data}\nServiço: ${campos.servico}`;
    const link = whatsappUrl(msg);
    // Com "noopener" o navegador devolve null; por isso o opener é zerado à mão.
    const janela = window.open(link, "_blank");
    if (janela) janela.opener = null;
    setAviso(
      janela
        ? {
            tipo: "ok",
            texto: "Abrimos o WhatsApp com sua mensagem pronta. O horário é confirmado pela equipe na conversa.",
          }
        : { tipo: "info", texto: "Não conseguimos abrir o WhatsApp automaticamente.", link },
    );
  };

  const campo = (k: keyof Campos) => ({
    id: `ag-${k}`,
    name: k,
    value: campos[k],
    onChange: mudar(k),
    "aria-invalid": erros[k] ? true : undefined,
    "aria-describedby": erros[k] ? `ag-${k}-erro` : undefined,
  });

  return (
    <div id="agendar" className={s.booking}>
      <h2 className={s.h2}>Agende sua avaliação</h2>
      <form className={s.form} onSubmit={enviar} noValidate>
        <div className={s.field}>
          <label htmlFor="ag-nome" className={s.srOnly}>
            Nome
          </label>
          <input {...campo("nome")} type="text" placeholder="Nome" autoComplete="name" />
          {erros.nome && (
            <span id="ag-nome-erro" className={s.error}>
              {erros.nome}
            </span>
          )}
        </div>
        <div className={s.field}>
          <label htmlFor="ag-email" className={s.srOnly}>
            E-mail
          </label>
          <input {...campo("email")} type="email" placeholder="E-mail" autoComplete="email" />
          {erros.email && (
            <span id="ag-email-erro" className={s.error}>
              {erros.email}
            </span>
          )}
        </div>
        <div className={s.field}>
          <label htmlFor="ag-data" className={s.srOnly}>
            Data desejada
          </label>
          <input {...campo("data")} type="date" min={minData} aria-label="Data desejada" />
          {erros.data && (
            <span id="ag-data-erro" className={s.error}>
              {erros.data}
            </span>
          )}
        </div>
        <div className={s.field}>
          <label htmlFor="ag-servico" className={s.srOnly}>
            Serviço
          </label>
          <select {...campo("servico")}>
            <option value="">Serviço</option>
            {servicosAgendamento.map((sv) => (
              <option key={sv}>{sv}</option>
            ))}
          </select>
          {erros.servico && (
            <span id="ag-servico-erro" className={s.error}>
              {erros.servico}
            </span>
          )}
        </div>
        <button type="submit" className={s.btn}>
          Agendar
        </button>
      </form>
      <p className={s.formNote} role="status" data-tipo={aviso?.tipo}>
        {aviso ? (
          <>
            {aviso.texto}{" "}
            {aviso.link && (
              <a href={aviso.link} target="_blank" rel="noopener noreferrer">
                Abrir conversa
              </a>
            )}
          </>
        ) : (
          "Ao enviar, abrimos o WhatsApp com sua mensagem pronta para a equipe confirmar o horário."
        )}
      </p>
    </div>
  );
}
