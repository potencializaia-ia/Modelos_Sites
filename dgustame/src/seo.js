import { restaurant } from './config/restaurant.js'

/**
 * Dados estruturados (schema.org/Restaurant) gerados a partir do arquivo de
 * configuração — assim endereço e telefone ficam em um único lugar.
 * Horários e faixa de preço só entram quando confirmados na configuração.
 */
export function injectStructuredData() {
  const { address, phone, mapsUrl, openingHours } = restaurant
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: restaurant.name,
    servesCuisine: ['Comida caseira', 'Buffet', 'Lanches', 'Brasileira'],
    telephone: phone.tel,
    hasMap: mapsUrl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.postalCode,
      addressCountry: 'BR',
    },
    areaServed: `${address.city} — ${address.state}`,
    hasMenu: `${window.location.origin}/#cardapio`,
  }
  if (openingHours?.length) data.openingHours = openingHours.map((h) => `${h.days} ${h.hours}`)

  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(data)
  document.head.appendChild(script)
}
