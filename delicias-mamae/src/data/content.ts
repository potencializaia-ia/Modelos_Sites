import type { LucideIcon } from 'lucide-react'
import { CakeSlice, CalendarHeart, ChefHat, Gift, HandHeart, MessageCircleHeart, PackageCheck, Sparkles, Wheat } from 'lucide-react'
import type { MenuCategoryId } from './menu'

/* ---------- Benefícios ---------- */
export type Benefit = { title: string; icon: LucideIcon }

export const benefits: Benefit[] = [
  { title: 'Feitos artesanalmente', icon: ChefHat },
  { title: 'Ingredientes selecionados', icon: Wheat },
  { title: 'Sabores para todos os gostos', icon: Sparkles },
  { title: 'Perfeitos para festas e eventos', icon: CakeSlice },
]

/* ---------- Produtos em destaque ---------- */
/**
 * Fotos ilustrativas (Unsplash). Substitua pelas fotos reais dos doces da marca
 * antes da publicação definitiva.
 */
export type FeaturedProduct = {
  id: string
  category: string
  title: string
  description: string
  flavors: string[]
  image: { src: string; alt: string; position?: string }
  /** Aba do cardápio aberta pelo botão "Ver opções". */
  menuTab: MenuCategoryId
  priceNote?: string
}

export const featuredProducts: FeaturedProduct[] = [
  {
    id: 'tradicionais',
    category: 'Tradicionais',
    title: 'Docinhos tradicionais',
    description: 'Os sabores afetivos que não podem faltar em uma boa festa.',
    flavors: ['Brigadeiro', 'Beijinho', 'Ninho', 'Doce de leite'],
    image: {
      src: '/images/tradicionais.jpg',
      alt: 'Brigadeiro tradicional coberto de granulado de chocolate, em primeiro plano',
    },
    menuTab: 'tradicionais',
  },
  {
    id: 'especiais-gourmet',
    category: 'Especiais e gourmet',
    title: 'Docinhos especiais e gourmet',
    description: 'Combinações marcantes para surpreender seus convidados.',
    flavors: ['Caramelo', 'Prestígio', 'Churros', 'Ninho com Nutella', 'Romeu e Julieta', 'Brigadeiro formato flor'],
    image: {
      src: '/images/gourmet.jpg',
      alt: 'Brigadeiro gourmet partido ao meio mostrando o recheio cremoso',
      position: '50% 45%',
    },
    menuTab: 'especiais',
  },
  {
    id: 'trufas',
    category: 'Trufas',
    title: 'Trufas recheadas',
    description: 'Cascas de chocolate com recheios cremosos e muito sabor.',
    flavors: [],
    image: {
      src: '/images/trufas.jpg',
      alt: 'Trufas de chocolate em forminhas de papel',
    },
    menuTab: 'trufas',
    priceNote: 'Valores e sabores sob consulta',
  },
]

/* ---------- Como encomendar ---------- */
export type OrderStep = { title: string; text: string; icon: LucideIcon }

export const orderSteps: OrderStep[] = [
  { title: 'Escolha seus doces', text: 'Confira as categorias e selecione seus sabores preferidos.', icon: Gift },
  { title: 'Informe os detalhes', text: 'Conte a data, quantidade, sabores e estilo da sua comemoração.', icon: CalendarHeart },
  { title: 'Confirme o orçamento', text: 'Receba as informações de disponibilidade e pagamento pelo WhatsApp.', icon: MessageCircleHeart },
  { title: 'Aguarde a produção', text: 'Seu pedido será preparado artesanalmente para a data combinada.', icon: PackageCheck },
]

/* ---------- Galeria ---------- */
/** Fotos ilustrativas (Unsplash). Substitua pelas fotos reais do trabalho da marca. */
export type GalleryItem = { src: string; alt: string; caption: string; tall?: boolean }

export const gallery: GalleryItem[] = [
  { src: '/images/g-brigadeiros.jpg', alt: 'Brigadeiros tradicionais enrolados à mão', caption: 'Brigadeiros tradicionais', tall: true },
  { src: '/images/g-bombons.jpg', alt: 'Docinhos gourmet com cobertura de chocolate em forminhas', caption: 'Docinhos gourmet' },
  { src: '/images/g-recheio.jpg', alt: 'Doce aberto mostrando o recheio cremoso', caption: 'Recheios cremosos' },
  { src: '/images/g-mesa2.jpg', alt: 'Mesa de festa com doces servidos em taça de cristal', caption: 'Mesas de festa', tall: true },
  { src: '/images/g-presente.jpg', alt: 'Caixa de doces para presente decorada com flor rosa', caption: 'Caixas para presente' },
  { src: '/images/g-personalizadas.jpg', alt: 'Docinhos de chocolate branco e ao leite servidos em um pequeno suporte', caption: 'Encomendas personalizadas' },
]

/* ---------- Depoimentos ---------- */
/**
 * ⚠️ DEPOIMENTOS DEMONSTRATIVOS — NÃO SÃO AVALIAÇÕES REAIS.
 * Substitua por avaliações reais de clientes (com autorização) antes da publicação definitiva
 * e então altere `testimonialsAreDemo` para `false`.
 */
export const testimonialsAreDemo = true

export type Testimonial = { quote: string; author: string; occasion: string }

export const testimonials: Testimonial[] = [
  { quote: 'Os doces chegaram lindos e fizeram muito sucesso na nossa festa.', author: 'Nome da cliente', occasion: 'Aniversário' },
  { quote: 'Além de deliciosos, vieram preparados com muito cuidado.', author: 'Nome da cliente', occasion: 'Chá de bebê' },
  { quote: 'Atendimento carinhoso e doces maravilhosos. Todo mundo elogiou.', author: 'Nome da cliente', occasion: 'Casamento' },
]

/* ---------- Perguntas frequentes ---------- */
export type Faq = { question: string; answer: string }

export const faqs: Faq[] = [
  { question: 'Qual é a antecedência mínima para encomendas?', answer: 'Recomendamos fazer o pedido com no mínimo 20 dias de antecedência.' },
  { question: 'Existe uma quantidade mínima?', answer: 'Para os docinhos do cardápio, o pedido mínimo é de 20 unidades por sabor.' },
  { question: 'Posso escolher mais de um sabor?', answer: 'Sim. A quantidade mínima deve ser respeitada para cada sabor escolhido.' },
  { question: 'É possível personalizar as cores?', answer: 'O brigadeiro colorido pode ser produzido na cor escolhida pelo cliente, mediante confirmação de disponibilidade.' },
  { question: 'Como confirmo preços e disponibilidade?', answer: 'Todos os detalhes são confirmados pelo WhatsApp no momento da encomenda.' },
  { question: 'Vocês fazem entregas?', answer: 'Consulte pelo WhatsApp as opções disponíveis para sua localização.' },
]

export const heroHighlights = [
  { label: 'Produção artesanal', icon: HandHeart },
  { label: 'Feito sob encomenda', icon: CalendarHeart },
  { label: 'Atendimento personalizado', icon: MessageCircleHeart },
]
