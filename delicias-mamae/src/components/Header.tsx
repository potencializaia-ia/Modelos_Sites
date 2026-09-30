import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, site } from '../data/site'
import { whatsappLink } from '../lib/whatsapp'
import { InstagramIcon, Logo, WhatsAppIcon } from './ui'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const drawerRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Drawer: trava a rolagem, fecha com Esc e mantém o foco dentro dele.
  useEffect(() => {
    if (!open) return
    const drawer = drawerRef.current
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    drawer?.querySelector<HTMLElement>('a, button')?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
        return
      }
      if (e.key !== 'Tab' || !drawer) return
      const focusables = drawer.querySelectorAll<HTMLElement>('a, button')
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    const onResize = () => window.innerWidth >= 1024 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        scrolled ? 'border-line bg-cream/95 backdrop-blur-sm' : 'border-transparent bg-cream'
      }`}
    >
      <div className="container-page flex h-[76px] items-center gap-4">
        <Logo />

        <nav aria-label="Principal" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-3 py-2 text-[15px] font-medium text-choco transition hover:bg-rose-light hover:text-choco-dark xl:px-3.5"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-2">
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da Delícias e Sabores da Mamãe (abre em nova aba)"
            className="hidden size-11 place-items-center rounded-full border border-line text-choco transition hover:border-blush hover:bg-rose-light sm:grid"
          >
            <InstagramIcon className="size-5" />
          </a>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary hidden !min-h-11 !px-5 sm:inline-flex">
            <WhatsAppIcon className="size-[18px]" /> Fazer encomenda
          </a>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="menu-lateral"
            aria-label="Abrir menu"
            className="grid size-11 place-items-center rounded-full border border-line text-choco-dark transition hover:bg-rose-light lg:hidden"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>
    </header>

      {/* Drawer móvel — fora do <header> para não herdar o contexto do backdrop-blur */}
      <div className={`fixed inset-0 z-50 lg:hidden ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
        <div
          className={`absolute inset-0 bg-choco-dark/35 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
          onClick={close}
        />
        <div
          ref={drawerRef}
          id="menu-lateral"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          inert={!open}
          className={`absolute inset-y-0 right-0 flex w-[min(88vw,380px)] flex-col bg-cream shadow-lift transition-transform duration-300 ease-out ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex h-[76px] items-center justify-between border-b border-line px-5">
            <Logo />
            <button
              type="button"
              onClick={() => {
                close()
                toggleRef.current?.focus()
              }}
              aria-label="Fechar menu"
              className="grid size-11 place-items-center rounded-full border border-line text-choco-dark hover:bg-rose-light"
            >
              <X className="size-5" />
            </button>
          </div>
          <nav aria-label="Menu móvel" className="flex-1 overflow-y-auto px-5 py-4">
            <ul>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={close}
                    className="flex min-h-14 items-center border-b border-line font-serif text-[24px] text-choco-dark transition hover:text-rose-ink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-3 border-t border-line p-5">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full" onClick={close}>
              <WhatsAppIcon className="size-5" /> Fazer encomenda
            </a>
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline w-full" onClick={close}>
              <InstagramIcon className="size-5" /> Ver no Instagram
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
