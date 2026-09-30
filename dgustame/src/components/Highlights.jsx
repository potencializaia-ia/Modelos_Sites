import Photo from './Photo.jsx'
import { Arrow, Star } from './Icons.jsx'
import { photos } from '../data/photos.js'
import { findItem, formatPrice, menu } from '../data/menu.js'

const xis = findItem('xis-dgustame')
const bacon = findItem('xis-bacon')
const minuta = findItem('a-la-minuta')
const lanches = menu.find((c) => c.id === 'lanches')

const cards = [
  {
    key: 'buffet',
    title: 'Buffet do almoço',
    text: 'Comida caseira ao meio-dia, no buffet livre ou por quilo.',
    href: '#buffet',
    cta: 'Conhecer o buffet',
    tag: 'Almoço',
  },
  {
    key: 'xis-dgustame',
    title: xis.name,
    text: xis.desc,
    price: xis.price,
    href: '#cat-xis',
    cta: 'Ver todos os xis',
    tag: 'Especialidade da casa',
    featured: true,
    photo: photos.xis,
  },
  {
    key: 'xis-bacon',
    title: bacon.name,
    text: bacon.desc,
    price: bacon.price,
    href: '#cat-xis',
    cta: 'Ver todos os xis',
    tag: 'Xis',
  },
  {
    key: 'minuta',
    title: minuta.name,
    text: minuta.desc,
    price: minuta.price,
    note: minuta.category.notice,
    href: '#cat-pratos',
    cta: 'Ver pratos',
    tag: 'Pratos',
  },
  {
    key: 'lanches',
    title: 'Lanches',
    text: 'Pastéis, coxinha, pão de queijo, sanduíches, torradas e omelete.',
    href: '#cat-lanches',
    cta: `Ver os ${lanches.items.length} lanches`,
    tag: 'Lanches',
  },
]

export default function Highlights() {
  return (
    <section id="destaques" className="highlights section" aria-labelledby="destaques-title">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow">Destaques</p>
          <h2 id="destaques-title" className="section-title">Os favoritos da casa</h2>
        </header>

        <ul className="highlights__grid">
          {cards.map((c) => (
            <li key={c.key} className={`hl-card hl-card--${c.key}${c.featured ? ' is-featured' : ''}`}>
              {c.photo && <Photo photo={c.photo} className="hl-card__photo" />}
              <div className="hl-card__body">
                <span className="hl-card__tag">
                  {c.featured && <Star width={13} height={13} />} {c.tag}
                </span>
                <h3>{c.title}</h3>
                <p className="hl-card__text">{c.text}</p>
                {c.note && <p className="notice notice--sm">{c.note}</p>}
                <div className="hl-card__foot">
                  {c.price != null && <span className="price">{formatPrice(c.price)}</span>}
                  <a
                    href={c.href}
                    className="hl-card__link"
                    onClick={() => {
                      // Mesmo hash clicado de novo não dispara "hashchange"; reaplica o filtro.
                      if (window.location.hash === c.href) window.dispatchEvent(new HashChangeEvent('hashchange'))
                    }}
                  >
                    {c.cta} <Arrow width={15} height={15} />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
