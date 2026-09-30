import Hero from './components/Hero.jsx'
import StepsStrip from './components/StepsStrip.jsx'
import About from './components/About.jsx'
import Treatments from './components/Treatments.jsx'
import Results from './components/Results.jsx'
import Services from './components/Services.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Hero />
      <main id="main">
        <StepsStrip />
        <About />
        <Treatments />
        <Results />
        <Services />
      </main>
      <Footer />
    </>
  )
}
