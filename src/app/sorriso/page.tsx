import Header from "@/components/sorriso/Header";
import Hero from "@/components/sorriso/Hero";
import Treatments from "@/components/sorriso/Treatments";
import Awards from "@/components/sorriso/Awards";
import HealthWorld from "@/components/sorriso/HealthWorld";
import Footer from "@/components/sorriso/Footer";
import s from "@/components/sorriso/sorriso.module.css";

export default function SorrisoPage() {
  return (
    <div className={s.page}>
      <a href="#conteudo" className={s.skip}>
        Pular para o conteúdo
      </a>
      <div className={s.panel}>
        <Header />
        <main id="conteudo">
          <Hero />
          <Treatments />
          <Awards />
          <HealthWorld />
        </main>
        <Footer />
      </div>
    </div>
  );
}
