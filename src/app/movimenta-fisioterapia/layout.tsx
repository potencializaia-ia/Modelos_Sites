import type { Metadata, Viewport } from "next";
import { Allura, Jost, Marcellus } from "next/font/google";

const marcellus = Marcellus({ variable: "--font-marcellus", subsets: ["latin"], weight: "400", display: "swap" });
const jost = Jost({ variable: "--font-jost", subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" });
const allura = Allura({ variable: "--font-allura", subsets: ["latin"], weight: "400", display: "swap" });

export const metadata: Metadata = {
  title: "Movimenta — Pilates e fisioterapia",
  description:
    "Clínica de Pilates clínico e fisioterapia: avaliação cuidadosa, plano individual e acompanhamento em cada etapa do tratamento.",
};

export const viewport: Viewport = {
  themeColor: "#F3F3F3",
};

export default function MovimentaLayout({ children }: LayoutProps<"/movimenta-fisioterapia">) {
  return <div className={`${marcellus.variable} ${jost.variable} ${allura.variable}`}>{children}</div>;
}
