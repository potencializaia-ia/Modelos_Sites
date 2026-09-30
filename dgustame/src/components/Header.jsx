import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'
import { Close, Menu } from './Icons.jsx'

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Buffet', href: '#buffet' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Cardápio', href: '#cardapio' },
  { label: 'Localização', href: '#localizacao' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth > 900 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`header${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <div className="header__inner container">
        <Logo />

        <nav className="header__nav" aria-label="Principal">
          <ul>
            {links.map((l) => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </nav>

        <a href="#cardapio" className="btn btn--gold btn--sm header__cta">Ver cardápio</a>

        <button
          type="button"
          className="header__toggle"
          aria-expanded={open}
          aria-controls="menu-movel"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>

      <nav id="menu-movel" className="mobile-nav" aria-label="Menu móvel" hidden={!open}>
        <ul className="container">
          {links.map((l) => (
            <li key={l.href}><a href={l.href} onClick={close}>{l.label}</a></li>
          ))}
          <li><a href="#cardapio" className="btn btn--gold" onClick={close}>Ver cardápio</a></li>
        </ul>
      </nav>
    </header>
  )
}
