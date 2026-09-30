"use client";

import type { ReactNode } from "react";
import { useAppointment } from "./AppointmentProvider";

type BookButtonProps = {
  children: ReactNode;
  className: string;
  serviceId?: string;
  onClick?: () => void;
};

/** Qualquer CTA de agendamento: abre o modal, opcionalmente com o tratamento pré-selecionado. */
export default function BookButton({ children, className, serviceId, onClick }: BookButtonProps) {
  const { openAppointment } = useAppointment();
  return (
    <button
      type="button"
      className={className}
      aria-haspopup="dialog"
      onClick={() => {
        onClick?.();
        openAppointment(serviceId);
      }}
    >
      {children}
    </button>
  );
}
