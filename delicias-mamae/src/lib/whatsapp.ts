import { site } from '../data/site'

/** Monta o link do WhatsApp com a mensagem já preenchida. */
export function whatsappLink(message: string = messages.default): string {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`
}

const intro = 'Olá! Vim pelo site da Delícias e Sabores da Mamãe.'

export const messages = {
  default: 'Olá! Vim pelo site da Delícias e Sabores da Mamãe e gostaria de fazer uma encomenda.',
  order: `${intro} Gostaria de consultar uma encomenda para o dia [DATA], com aproximadamente [QUANTIDADE] doces. Tenho interesse nos sabores [SABORES].`,
  quote: `${intro} Gostaria de pedir um orçamento para a minha comemoração. Data: [DATA]. Quantidade aproximada: [QUANTIDADE] doces.`,
  truffles: `${intro} Gostaria de saber quais sabores e valores de trufas recheadas estão disponíveis.`,
  category: (name: string, priceInfo?: string) =>
    `${intro} Gostaria de consultar uma encomenda de docinhos da categoria ${name}${priceInfo ? ` (${priceInfo})` : ''}. Data: [DATA]. Quantidade aproximada: [QUANTIDADE] doces. Sabores de interesse: [SABORES].`,
}
