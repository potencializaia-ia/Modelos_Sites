import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import BenefitsBar from './components/BenefitsBar'
import FeaturedProducts from './components/FeaturedProducts'
import MenuTabs from './components/MenuTabs'
import About from './components/About'
import OrderSteps from './components/OrderSteps'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import type { MenuCategoryId } from './data/menu'

export default function App() {
  // Compartilhado entre os cards de destaque ("Ver opções") e as abas do cardápio.
  const [menuTab, setMenuTab] = useState<MenuCategoryId>('tradicionais')

  return (
    <>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-choco focus:px-5 focus:py-3 focus:text-white">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <BenefitsBar />
        <FeaturedProducts onSelectTab={setMenuTab} />
        <MenuTabs active={menuTab} onChange={setMenuTab} />
        <About />
        <OrderSteps />
        <Gallery />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
