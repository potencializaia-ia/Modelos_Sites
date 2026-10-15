import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export default function CatalogoLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${inter.className} bg-white text-[#2D2D4A]`}>{children}</div>;
}
