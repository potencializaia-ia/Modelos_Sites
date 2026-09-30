import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lumident Odontologia — Odontologia moderna para toda a família",
  description:
    "Clínica odontológica em São Paulo. Clínica geral, implantes, ortodontia, estética e clareamento com tecnologia moderna e atendimento humano.",
};

export const viewport: Viewport = {
  themeColor: "#DCECF9",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
