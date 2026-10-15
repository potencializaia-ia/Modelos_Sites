import Banner from "@/components/clinica-rosa/Banner";
import Depoimentos from "@/components/clinica-rosa/Depoimentos";
import Diferenciais from "@/components/clinica-rosa/Diferenciais";
import Equipe from "@/components/clinica-rosa/Equipe";
import Etapas from "@/components/clinica-rosa/Etapas";
import Footer from "@/components/clinica-rosa/Footer";
import Header from "@/components/clinica-rosa/Header";
import Hero from "@/components/clinica-rosa/Hero";
import Integrado from "@/components/clinica-rosa/Integrado";
import Parceiros from "@/components/clinica-rosa/Parceiros";
import Servicos from "@/components/clinica-rosa/Servicos";
import Sobre from "@/components/clinica-rosa/Sobre";
import s from "@/components/clinica-rosa/clinica.module.css";

export default function ClinicaRosaPage() {
  return (
    <div className={s.page}>
      <a href="#conteudo" className={s.skip}>
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Diferenciais />
        <Sobre />
        <Parceiros />
        <Servicos />
        <Depoimentos />
        <Integrado />
        <Equipe />
        <Etapas />
        <Banner />
      </main>
      <Footer />
    </div>
  );
}
