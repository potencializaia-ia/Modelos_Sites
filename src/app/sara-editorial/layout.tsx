import type { Metadata, Viewport } from "next";
import { Kaushan_Script, Montserrat, Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const kaushan = Kaushan_Script({
  variable: "--font-kaushan",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sara Scapini — Pilates para cuidar do corpo",
  description: "Aulas e conteúdos de Pilates para fortalecer, alongar e respirar melhor, no seu ritmo e no seu espaço.",
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function SaraEditorialLayout({ children }: LayoutProps<"/sara-editorial">) {
  return <div className={`${playfair.variable} ${montserrat.variable} ${kaushan.variable}`}>{children}</div>;
}
