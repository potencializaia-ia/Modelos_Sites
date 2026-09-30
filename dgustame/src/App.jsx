import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Buffet from './components/Buffet.jsx'
import About from './components/About.jsx'
import Highlights from './components/Highlights.jsx'
import Menu from './components/Menu.jsx'
import Location from './components/Location.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Buffet />
        <About />
        <Highlights />
        <Menu />
        <Location />
      </main>
      <Footer />
    </>
  )
}
