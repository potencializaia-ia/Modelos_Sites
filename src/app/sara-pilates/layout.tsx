import type { Metadata, Viewport } from "next";
import { Afacad, Belleza } from "next/font/google";

// Títulos: Belleza, sem serifa mas com traços que se abrem nas pontas (na linha da Optima).
const belleza = Belleza({
  variable: "--font-belleza",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

// Texto corrido: Afacad, humanista e arredondada, conversa bem com a Belleza.
const afacad = Afacad({
  variable: "--font-afacad",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sara Scapini — Pilates com atenção ao seu movimento",
  description:
    "Aulas particulares de pilates, planejadas para o seu corpo e o seu momento. Também atendimentos de fisioterapia e massoterapia.",
};

export const viewport: Viewport = {
  themeColor: "#FBF7F1",
};

export default function SaraPilatesLayout({ children }: LayoutProps<"/sara-pilates">) {
  return <div className={`${belleza.variable} ${afacad.variable}`}>{children}</div>;
}
