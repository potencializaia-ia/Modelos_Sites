"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import AppointmentModal from "./AppointmentModal";

type AppointmentContextValue = {
  openAppointment: (serviceId?: string) => void;
};

const AppointmentContext = createContext<AppointmentContextValue | null>(null);

export function AppointmentProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [serviceId, setServiceId] = useState<string | undefined>();

  const openAppointment = useCallback((id?: string) => {
    setServiceId(id);
    setOpen(true);
  }, []);

  const value = useMemo(() => ({ openAppointment }), [openAppointment]);

  return (
    <AppointmentContext.Provider value={value}>
      {children}
      {open && (
        <AppointmentModal key={serviceId ?? "geral"} initialService={serviceId} onClose={() => setOpen(false)} />
      )}
    </AppointmentContext.Provider>
  );
}

export function useAppointment() {
  const ctx = useContext(AppointmentContext);
  if (!ctx) throw new Error("useAppointment deve ser usado dentro de <AppointmentProvider>");
  return ctx;
}
