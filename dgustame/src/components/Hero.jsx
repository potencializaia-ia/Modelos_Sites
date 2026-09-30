import Photo from './Photo.jsx'
import Curve from './Curve.jsx'
import { Pin } from './Icons.jsx'
import { photos } from '../data/photos.js'
import { restaurant } from '../config/restaurant.js'

export default function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero__inner container">
        <div className="hero__copy">
          <p className="hero__place">
            <Pin width={16} height={16} /> Centro de {restaurant.city}, {restaurant.state}
          </p>
          <h1 id="hero-title" className="hero__title">
            O sabor de se sentir em casa, <em>no coração de Passo&nbsp;Fundo.</em>
          </h1>
          <p className="hero__lead">
            Restaurante familiar e tradicional, com comida caseira feita com cuidado.
            No almoço, escolha entre o <strong>buffet livre</strong> e o <strong>buffet por quilo</strong>.
          </p>
          <div className="hero__actions">
            <a href="#buffet" className="btn btn--gold">Conhecer o buffet</a>
            <a href="#cardapio" className="btn btn--ghost-light">Ver cardápio</a>
          </div>
        </div>

        <div className="hero__visual">
          <Photo photo={photos.hero} className="hero__photo" priority />
          <div className="seal" aria-hidden="true">
            <span className="seal__top">No almoço</span>
            <span className="seal__mid">Buffet</span>
            <span className="seal__bot">livre e quilo</span>
          </div>
        </div>
      </div>
      <Curve className="hero__curve" />
    </section>
  )
}
