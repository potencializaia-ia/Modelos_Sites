import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Lumident Odontologia — Odontologia moderna para toda a família",
  description:
    "Clínica odontológica em São Paulo. Clínica geral, implantes, ortodontia, estética e clareamento com tecnologia moderna e atendimento humano.",
};

export const viewport: Viewport = {
  themeColor: "#DCECF9",
};

export default function LumidentLayout({ children }: LayoutProps<"/lumident">) {
  return children;
}
