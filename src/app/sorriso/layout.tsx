import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sorriso Odontologia — Cuidado diário para um sorriso saudável",
  description:
    "Clínica odontológica com atendimento 24/7: clínica geral, alinhadores, implantes, prevenção e estética dental.",
};

export const viewport: Viewport = {
  themeColor: "#E9E9E9",
};

export default function SorrisoLayout({ children }: LayoutProps<"/sorriso">) {
  return <div className={inter.variable}>{children}</div>;
}
