import { ArrowRight } from 'lucide-react'
import { heroHighlights } from '../data/content'
import { whatsappLink } from '../lib/whatsapp'
import { FloralSprig, HeartMini, WhatsAppIcon } from './ui'

export default function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden bg-cream">
      <div className="container-page grid items-center gap-10 pt-8 pb-16 sm:pt-12 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:pt-14 lg:pb-24">
        <div>
          <p className="eyebrow">
            <HeartMini className="size-3 text-blush" /> Doces artesanais para momentos especiais
          </p>
          <h1 id="hero-title" className="mt-5 text-[44px] leading-[1.02] sm:text-[58px] lg:text-[68px]">
            Carinho de mãe <br className="hidden sm:block" />
            <em className="text-rose-ink">em cada doce</em>
          </h1>
          <p className="mt-6 max-w-[520px] text-[18px] leading-relaxed text-muted">
            Docinhos de festa, brigadeiros e trufas recheadas preparados artesanalmente para deixar suas
            comemorações ainda mais gostosas.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <WhatsAppIcon className="size-5" /> Fazer minha encomenda
            </a>
            <a href="#cardapio" className="btn btn-outline">
              Conhecer o cardápio <ArrowRight className="size-4" />
            </a>
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-3 sm:gap-4">
            {heroHighlights.map(({ label, icon: Icon }) => (
              <li key={label} className="flex items-center gap-3 text-[15px] font-semibold text-choco">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-rose-light text-rose-ink">
                  <Icon className="size-[18px]" strokeWidth={1.8} />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none">
          <FloralSprig className="pointer-events-none absolute -top-8 -left-10 z-10 hidden w-36 -rotate-12 sm:block" />
          <FloralSprig className="pointer-events-none absolute -right-8 -bottom-10 z-10 w-28 rotate-[160deg] sm:w-36" />
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[28px] bg-rose-light sm:translate-x-5 sm:translate-y-5" aria-hidden="true" />
          <img
            src={`${import.meta.env.BASE_URL}images/hero-brigadeiros.jpg`}
            alt="Brigadeiros artesanais com granulado servidos em uma tigela em formato de coração, ao lado de uma colher de pau"
            width={1100}
            height={1300}
            fetchPriority="high"
            className="relative aspect-[4/4.4] w-full rounded-[28px] object-cover shadow-lift sm:aspect-[4/4.2]"
          />
          <div className="absolute -bottom-5 left-5 z-20 flex items-center gap-2.5 rounded-full border border-line bg-white px-5 py-3 shadow-soft sm:left-8">
            <HeartMini className="size-4 text-rose-deep" />
            <span className="font-script text-[24px] leading-none text-choco">Feitos com amor</span>
          </div>
        </div>
      </div>
    </section>
  )
}
