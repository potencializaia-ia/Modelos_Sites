import { Clock, Info } from 'lucide-react'
import { navLinks, site } from '../data/site'
import { whatsappLink } from '../lib/whatsapp'
import { InstagramIcon, Logo, WhatsAppIcon } from './ui'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-rose-soft pb-24 sm:pb-10">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1.1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-[16px] text-muted">Doces artesanais preparados com carinho.</p>
          <p className="mt-2 font-script text-[22px] text-rose-ink">feito com carinho de mãe</p>
        </div>

        <nav aria-label="Navegação rápida">
          <p className="text-xs font-bold tracking-[0.16em] text-rose-ink uppercase">Navegação</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 md:grid-cols-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="inline-flex min-h-11 items-center text-[16px] text-choco hover:text-rose-ink hover:underline">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-bold tracking-[0.16em] text-rose-ink uppercase">Contato</p>
          <ul className="mt-4 space-y-2">
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2.5 text-[17px] font-semibold text-choco-dark hover:text-rose-ink">
                <WhatsAppIcon className="size-5 text-rose-ink" /> {site.whatsapp.display}
              </a>
            </li>
            <li>
              <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2.5 text-[16px] text-choco hover:text-rose-ink">
                <InstagramIcon className="size-5 text-rose-ink" /> Instagram
              </a>
            </li>
            <li className="flex items-start gap-2.5 pt-2 text-[15px] text-muted">
              <Clock className="mt-0.5 size-5 shrink-0 text-rose-ink" strokeWidth={1.6} aria-hidden="true" />
              Atendimento mediante contato pelo WhatsApp
            </li>
            <li className="flex items-start gap-2.5 text-[15px] text-muted">
              <Info className="mt-0.5 size-5 shrink-0 text-rose-ink" strokeWidth={1.6} aria-hidden="true" />
              Pedidos sujeitos à confirmação de disponibilidade.
            </li>
          </ul>
        </div>
      </div>
      <div className="container-page border-t border-line py-6 text-[14px] text-muted">
        © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
      </div>
    </footer>
  )
}
