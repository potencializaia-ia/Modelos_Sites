import Conteudos from "@/components/sara-editorial/Conteudos";
import Depoimento from "@/components/sara-editorial/Depoimento";
import Destaques from "@/components/sara-editorial/Destaques";
import Footer from "@/components/sara-editorial/Footer";
import Header from "@/components/sara-editorial/Header";
import Hero from "@/components/sara-editorial/Hero";
import s from "@/components/sara-editorial/editorial.module.css";

export default function SaraEditorialPage() {
  return (
    <div className={s.page}>
      <a href="#conteudo" className={s.skip}>
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Destaques />
        <Depoimento />
        <Conteudos />
      </main>
      <Footer />
    </div>
  );
}
