import ComoFunciona from "@/components/pilates/ComoFunciona";
import Contato from "@/components/pilates/Contato";
import Cuidados from "@/components/pilates/Cuidados";
import Depoimentos from "@/components/pilates/Depoimentos";
import Duvidas from "@/components/pilates/Duvidas";
import Espaco from "@/components/pilates/Espaco";
import Footer from "@/components/pilates/Footer";
import Header from "@/components/pilates/Header";
import Hero from "@/components/pilates/Hero";
import Pilates from "@/components/pilates/Pilates";
import Sobre from "@/components/pilates/Sobre";
import WhatsFlutuante from "@/components/pilates/WhatsFlutuante";
import s from "@/components/pilates/pilates.module.css";

export default function SaraPilatesPage() {
  return (
    <div className={s.page}>
      <a href="#conteudo" className={s.skip}>
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Sobre />
        <Pilates />
        <Cuidados />
        <ComoFunciona />
        <Espaco />
        <Depoimentos />
        <Duvidas />
        <Contato />
      </main>
      <Footer />
      <WhatsFlutuante />
    </div>
  );
}
