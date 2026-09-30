/**
 * Cardápio transcrito do material da marca.
 * Preços e disponibilidade devem ser confirmados no momento da encomenda.
 * Para atualizar valores, edite `priceCents` (em centavos, para evitar erros de arredondamento).
 */
export type MenuCategoryId = 'tradicionais' | 'especiais' | 'gourmet' | 'trufas'

export type MenuCategory = {
  id: MenuCategoryId
  name: string
  /** Peso por unidade, ex.: "20g". Ausente quando não informado. */
  weight?: string
  /** Valor do cento em centavos. Ausente quando sob consulta. */
  priceCents?: number
  /** Quantidade mínima por sabor. */
  minPerFlavor?: number
  flavors: string[]
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'tradicionais',
    name: 'Tradicionais',
    weight: '20g',
    priceCents: 13000,
    minPerFlavor: 20,
    flavors: [
      'Brigadeiro',
      'Beijinho',
      'Ninho',
      'Doce de leite',
      'Nesquik',
      'Cajuzinho',
      'Ovomaltine',
      'Limão',
      'Cacau',
      'Paçoca',
      'Café',
      'Brigadeiro branco',
      'Maracujá',
    ],
  },
  {
    id: 'especiais',
    name: 'Especiais',
    weight: '25g',
    priceCents: 16000,
    minPerFlavor: 20,
    flavors: [
      'Caramelo',
      'Charge',
      'Dois amores',
      'Nozes',
      'Brûlée',
      'Sensação',
      'Cacau Black',
      'Prestígio',
      'Olho de sogra',
      'Coco queimado',
      'Cappuccino',
      'Churros',
      'Napolitano',
      'Damasco',
    ],
  },
  {
    id: 'gourmet',
    name: 'Gourmet',
    weight: '25g',
    priceCents: 18000,
    minPerFlavor: 20,
    flavors: [
      'Ninho com Nutella',
      'Ferrero Rocher',
      'Stikadinho',
      'Kinder',
      'Oreo',
      'Camafeu de nozes',
      'Camafeu de amendoim',
      'Camafeu de coco',
      'Camafeu de damasco',
      'Confete',
      'Red Velvet',
      'Romeu e Julieta',
      'Ouro Branco',
      'Nesquik com Nutella',
      'Brigadeiro em formato de flor',
      'Brigadeiro colorido (cor escolhida pelo cliente)',
    ],
  },
  {
    // Sabores, pesos e valores das trufas não foram informados: exibidos como "sob consulta".
    id: 'trufas',
    name: 'Trufas recheadas',
    flavors: [],
  },
]

const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

export const formatCents = (cents: number) => brl.format(cents / 100)

export const priceLabel = (c: MenuCategory) =>
  c.priceCents != null ? `${formatCents(c.priceCents)} o cento` : undefined
