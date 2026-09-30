/**
 * Dados institucionais do D'Gustame — fonte única para todo o site
 * (cabeçalho, localização, rodapé e dados estruturados de SEO).
 *
 * ⚠️ CONFIRMAR ANTES DE PUBLICAR
 * - Endereço: o cardápio impresso informa "Rua Teixeira Soares, 849", mas há
 *   cadastros externos com outro número. Confirme com o restaurante e ajuste aqui.
 * - Horários: deixe `null` até o restaurante confirmar. Com `null`, nada é exibido.
 * - Preço do buffet: deixe `null` até confirmar. Com `null`, nenhum valor é exibido.
 */
export const restaurant = {
  name: "D'Gustame Restaurante",
  shortName: "D'gustame",
  city: 'Passo Fundo',
  state: 'RS',

  address: {
    street: 'Rua Teixeira Soares, 849',
    district: 'Centro',
    city: 'Passo Fundo',
    state: 'RS',
    postalCode: '99010-080',
  },

  phone: {
    display: '(54) 3311-3786',
    tel: '+555433113786',
  },

  mapsUrl: 'https://maps.app.goo.gl/VhFDrYZ4SJyCsujt8',

  // Ex.: 'Segunda a sábado, das 11h às 14h'. `null` = não exibir.
  lunchHours: null,

  // Ex.: [{ days: 'Segunda a sexta', hours: '07h às 20h' }]. `null` = não exibir.
  openingHours: null,

  // Ex.: { livre: 39.9, quilo: 69.9 }. `null` = não exibir valores.
  buffetPrices: null,
}

export const fullAddress = (a = restaurant.address) =>
  `${a.street} — ${a.district}, ${a.city} — ${a.state}, ${a.postalCode}`
