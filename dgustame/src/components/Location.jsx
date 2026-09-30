import { Clock, Phone, Pin, Route } from './Icons.jsx'
import { fullAddress, restaurant } from '../config/restaurant.js'

export default function Location() {
  const { address, phone, mapsUrl, openingHours } = restaurant

  return (
    <section id="localizacao" className="location section" aria-labelledby="localizacao-title">
      <div className="location__inner container">
        <div className="location__copy">
          <p className="eyebrow eyebrow--light">Localização e contato</p>
          <h2 id="localizacao-title" className="section-title">Estamos no Centro de Passo Fundo</h2>
          <p className="location__lead">
            Bem no Centro, perto de quem trabalha e circula pela região. Venha nos visitar ou ligue para tirar suas dúvidas.
          </p>

          <div className="location__actions">
            <a href={mapsUrl} className="btn btn--gold" target="_blank" rel="noopener noreferrer">
              <Route width={17} height={17} /> Como chegar
              <span className="sr-only"> (abre o Google Maps em nova aba)</span>
            </a>
            <a href={`tel:${phone.tel}`} className="btn btn--ghost-light">
              <Phone width={17} height={17} /> Ligar agora
            </a>
          </div>
        </div>

        <div className="info-card">
          <address className="info-card__list">
            <div className="info-card__row">
              <Pin />
              <div>
                <p className="info-card__label">Endereço</p>
                <p>{address.street} — {address.district}</p>
                <p>{address.city} — {address.state}, {address.postalCode}</p>
              </div>
            </div>
            <div className="info-card__row">
              <Phone />
              <div>
                <p className="info-card__label">Telefone</p>
                <p><a href={`tel:${phone.tel}`}>{phone.display}</a></p>
              </div>
            </div>
            {openingHours?.length > 0 && (
              <div className="info-card__row">
                <Clock />
                <div>
                  <p className="info-card__label">Horários</p>
                  {openingHours.map((h) => (
                    <p key={h.days}>{h.days}: {h.hours}</p>
                  ))}
                </div>
              </div>
            )}
          </address>
          <a href={mapsUrl} className="info-card__map" target="_blank" rel="noopener noreferrer" aria-label={`Abrir ${fullAddress()} no Google Maps`}>
            <span className="info-card__map-pin"><Pin width={22} height={22} /></span>
            <span>Abrir no Google Maps</span>
          </a>
        </div>
      </div>
    </section>
  )
}
