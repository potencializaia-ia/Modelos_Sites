"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { CalendarDays, CheckCircle2, X } from "lucide-react";
import { services } from "@/data/content";
import { buttonClasses } from "@/components/ui/button";

/**
 * DEMONSTRAÇÃO — este formulário NÃO envia dados para nenhum servidor.
 * Para produção, substitua o trecho marcado em `handleSubmit` por uma chamada
 * real (API própria, CRM, webhook n8n, WhatsApp etc.).
 */

type FormState = { name: string; phone: string; service: string; time: string };
type Errors = Partial<Record<keyof FormState, string>>;

const timeSlots = ["Manhã (8h–12h)", "Tarde (12h–17h)", "Noite (17h–20h)"];

function formatPhone(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

function validate(v: FormState): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 3) e.name = "Informe seu nome completo.";
  const digits = v.phone.replace(/\D/g, "");
  if (digits.length < 10) e.phone = "Informe um telefone com DDD.";
  if (!v.service) e.service = "Escolha um tratamento.";
  if (!v.time) e.time = "Escolha o melhor horário.";
  return e;
}

const fieldBase =
  "h-12 w-full rounded-xl border bg-white px-4 text-[15px] text-ink placeholder:text-muted/60 " +
  "transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand/30";

export default function AppointmentModal({
  initialService,
  onClose,
}: {
  initialService?: string;
  onClose: () => void;
}) {
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const [values, setValues] = useState<FormState>({
    name: "",
    phone: "",
    service: initialService ?? "",
    time: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  // Trava o scroll, foca o primeiro campo, fecha com Esc e mantém o foco dentro do modal.
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    dialogRef.current?.querySelector<HTMLElement>("input, select, button")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, input, select, [href], [tabindex]:not([tabindex="-1"])',
      );
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      previouslyFocused?.focus();
    };
  }, [onClose]);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      const firstInvalid = Object.keys(found)[0];
      dialogRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    setStatus("sending");
    // --- DEMONSTRAÇÃO: simula o envio. Substituir por integração real. ---
    await new Promise((r) => setTimeout(r, 700));
    // ----------------------------------------------------------------------
    setStatus("success");
  };

  const fieldClass = (key: keyof FormState) =>
    `${fieldBase} ${errors[key] ? "border-red-400" : "border-line focus:border-brand"}`;

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6">
      <div
        className="absolute inset-0 bg-ink/40 backdrop-blur-[3px] motion-safe:animate-[fadeIn_200ms_ease-out]"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative max-h-[92dvh] w-full max-w-[480px] overflow-y-auto rounded-t-[24px] bg-white p-6 shadow-float sm:rounded-[24px] sm:p-8 motion-safe:animate-[modalIn_240ms_ease-out]"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-mist text-ink transition-colors duration-200 hover:bg-sky"
          aria-label="Fechar"
        >
          <X className="size-5" aria-hidden="true" />
        </button>

        {status === "success" ? (
          <div className="py-6 text-center" role="status" aria-live="polite">
            <CheckCircle2 className="mx-auto size-14 text-brand" strokeWidth={1.5} aria-hidden="true" />
            <h2 id={titleId} className="mt-4 text-2xl font-bold tracking-tight">
              Solicitação enviada!
            </h2>
            <p className="mx-auto mt-3 max-w-[320px] text-[15px] leading-relaxed text-muted">
              Obrigado, {values.name.trim().split(" ")[0]}. Nossa equipe entrará em contato pelo número {values.phone}{" "}
              para confirmar o horário.
            </p>
            <p className="mt-4 text-xs text-muted">Demonstração: nenhum dado foi enviado.</p>
            <button type="button" onClick={onClose} className={buttonClasses("primary", "md", "mt-6")}>
              Fechar
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3 pr-10">
              <span className="grid size-11 place-items-center rounded-xl bg-sky text-brand">
                <CalendarDays className="size-5" aria-hidden="true" />
              </span>
              <h2 id={titleId} className="text-[22px] font-bold leading-tight tracking-tight">
                Agendar consulta
              </h2>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Preencha os dados e retornaremos para confirmar o melhor horário.
            </p>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
              <Field label="Nome" error={errors.name} htmlFor="ag-name">
                <input
                  id="ag-name"
                  name="name"
                  autoComplete="name"
                  placeholder="Seu nome completo"
                  className={fieldClass("name")}
                  value={values.name}
                  onChange={(e) => update("name", e.target.value)}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "ag-name-err" : undefined}
                />
              </Field>
              <Field label="Telefone" error={errors.phone} htmlFor="ag-phone">
                <input
                  id="ag-phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel-national"
                  placeholder="(11) 99999-9999"
                  className={fieldClass("phone")}
                  value={values.phone}
                  onChange={(e) => update("phone", formatPhone(e.target.value))}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "ag-phone-err" : undefined}
                />
              </Field>
              <Field label="Tratamento de interesse" error={errors.service} htmlFor="ag-service">
                <select
                  id="ag-service"
                  name="service"
                  className={fieldClass("service")}
                  value={values.service}
                  onChange={(e) => update("service", e.target.value)}
                  aria-invalid={!!errors.service}
                  aria-describedby={errors.service ? "ag-service-err" : undefined}
                >
                  <option value="">Selecione</option>
                  <option value="avaliacao">Consulta e avaliação</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </Field>
              <fieldset>
                <legend className="mb-2 text-sm font-semibold">Melhor horário</legend>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                  {timeSlots.map((slot) => (
                    <label
                      key={slot}
                      className={`flex h-11 cursor-pointer items-center justify-center rounded-xl border px-2 text-center text-[13px] font-medium transition-colors duration-200 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand/40 ${
                        values.time === slot
                          ? "border-brand bg-sky text-brand-700"
                          : errors.time
                            ? "border-red-400 text-muted"
                            : "border-line text-muted hover:border-brand/40"
                      }`}
                    >
                      <input
                        type="radio"
                        name="time"
                        value={slot}
                        className="sr-only"
                        checked={values.time === slot}
                        onChange={() => update("time", slot)}
                      />
                      {slot}
                    </label>
                  ))}
                </div>
                {errors.time && <p className="mt-1.5 text-xs font-medium text-red-600">{errors.time}</p>}
              </fieldset>

              <button
                type="submit"
                disabled={status === "sending"}
                className={buttonClasses("primary", "lg", "mt-2 w-full")}
              >
                {status === "sending" ? "Enviando…" : "Solicitar agendamento"}
              </button>
              <p className="text-center text-xs text-muted">Site demonstrativo — os dados não são enviados.</p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  error,
  htmlFor,
  children,
}: {
  label: string;
  error?: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-err`} className="mt-1.5 text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
