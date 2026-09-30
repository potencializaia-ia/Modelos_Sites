import Logo from './Logo.jsx'
import Curve from './Curve.jsx'
import { restaurant } from '../config/restaurant.js'

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Buffet', href: '#buffet' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Cardápio', href: '#cardapio' },
  { label: 'Localização', href: '#localizacao' },
]

export default function Footer() {
  const { address, phone, mapsUrl } = restaurant

  return (
    <footer className="footer">
      <Curve className="footer__curve" />
      <div className="footer__inner container">
        <div className="footer__brand">
          <Logo />
          <p>Restaurante familiar e tradicional no Centro de Passo Fundo. Buffet no almoço, xis, lanches, pratos e cafés.</p>
        </div>

        <nav aria-label="Rodapé">
          <p className="footer__label">Navegue</p>
          <ul className="footer__links">
            {links.map((l) => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
          </ul>
        </nav>

        <div>
          <p className="footer__label">Visite</p>
          <address className="footer__address">
            <p>{address.street} — {address.district}</p>
            <p>{address.city} — {address.state}, {address.postalCode}</p>
            <p><a href={`tel:${phone.tel}`}>{phone.display}</a></p>
            <p><a href={mapsUrl} target="_blank" rel="noopener noreferrer">Ver rota no mapa ↗</a></p>
          </address>
        </div>
      </div>
      <div className="footer__bottom container">
        <p>&copy; {new Date().getFullYear()} {restaurant.name}. Passo Fundo — RS.</p>
      </div>
    </footer>
  )
}
