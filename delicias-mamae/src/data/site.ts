export const site = {
  name: 'Delícias e Sabores da Mamãe',
  whatsapp: {
    number: '5555996265321',
    display: '(55) 9 9626-5321',
  },
  // Link fornecido pela cliente (publicação do Instagram).
  instagramUrl: 'https://www.instagram.com/p/Dctn-d1EUY7/',
  advanceDays: 20,
  minPerFlavor: 20,
} as const

export type NavLink = { label: string; href: string }

export const navLinks: NavLink[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Nossos doces', href: '#doces' },
  { label: 'Cardápio', href: '#cardapio' },
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Como encomendar', href: '#como-encomendar' },
  { label: 'Contato', href: '#contato' },
]
