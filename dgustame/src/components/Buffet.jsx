import Photo from './Photo.jsx'
import { Arrow, Clock, Phone } from './Icons.jsx'
import { photos } from '../data/photos.js'
import { restaurant } from '../config/restaurant.js'
import { formatPrice } from '../data/menu.js'

const options = [
  {
    key: 'livre',
    title: 'Buffet livre',
    photo: photos.buffetLivre,
    text: 'Você paga um valor único e se serve à vontade entre as opções do dia. Ideal para quem quer almoçar sem pressa e experimentar um pouco de tudo.',
    points: ['Valor fixo por pessoa', 'Sirva-se à vontade'],
  },
  {
    key: 'quilo',
    title: 'Buffet por quilo',
    photo: photos.buffetQuilo,
    text: 'Monte o prato do seu jeito, com a quantidade que preferir, e pague pelo peso. Prático para o almoço do dia a dia no Centro.',
    points: ['Você escolhe a quantidade', 'Paga pelo peso do prato'],
  },
]

export default function Buffet() {
  const prices = restaurant.buffetPrices

  return (
    <section id="buffet" className="buffet section" aria-labelledby="buffet-title">
      <div className="container">
        <header className="section-head section-head--center">
          <p className="eyebrow">Almoço</p>
          <h2 id="buffet-title" className="section-title">
            Seu almoço tem lugar à mesa no D&rsquo;Gustame
          </h2>
          <p className="section-lead">
            Ao meio-dia, a casa serve buffet com comida caseira. Escolha a modalidade que combina com o seu dia.
          </p>
        </header>

        <div className="buffet__grid">
          {options.map((o, i) => (
            <article key={o.key} className="buffet-card">
              <Photo photo={o.photo} className="buffet-card__photo" />
              <div className="buffet-card__body">
                <span className="buffet-card__num" aria-hidden="true">0{i + 1}</span>
                <h3>{o.title}</h3>
                <p>{o.text}</p>
                <ul className="buffet-card__points">
                  {o.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
                {prices?.[o.key] != null && (
                  <p className="buffet-card__price">{formatPrice(prices[o.key])}{o.key === 'quilo' ? ' / kg' : ''}</p>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="lunch-bar">
          <p className="lunch-bar__info">
            <Clock />
            {restaurant.lunchHours ? (
              <span><strong>Horário do almoço:</strong> {restaurant.lunchHours}</span>
            ) : (
              <span>Para confirmar o horário do almoço, ligue para<a href={`tel:${restaurant.phone.tel}`}>{restaurant.phone.display}</a>.</span>
            )}
          </p>
          <div className="lunch-bar__actions">
            <a href="#localizacao" className="btn btn--wine">
              Venha almoçar com a gente <Arrow width={16} height={16} />
            </a>
            <a href={`tel:${restaurant.phone.tel}`} className="btn btn--outline">
              <Phone width={16} height={16} /> Ligar
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
