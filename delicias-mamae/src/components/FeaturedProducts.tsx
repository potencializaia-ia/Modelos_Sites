import { ArrowRight } from 'lucide-react'
import { featuredProducts } from '../data/content'
import type { MenuCategoryId } from '../data/menu'
import { HeartMini, Reveal, SectionHeading } from './ui'

export default function FeaturedProducts({ onSelectTab }: { onSelectTab: (id: MenuCategoryId) => void }) {
  return (
    <section id="doces" aria-labelledby="doces-title" className="bg-white py-20 lg:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="doces-title"
            eyebrow="Nossos doces"
            title="Doces que tornam momentos inesquecíveis"
            text="Escolha os sabores que mais combinam com a sua comemoração."
          />
        </Reveal>

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-7">
          {featuredProducts.map((p, i) => (
            <Reveal
              as="li"
              key={p.id}
              delay={i * 90}
              className={`group flex flex-col overflow-hidden rounded-[24px] border border-line bg-cream shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift ${
                i === 2 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="overflow-hidden">
                <img
                  src={p.image.src}
                  alt={p.image.alt}
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={600}
                  style={{ objectPosition: p.image.position }}
                  className={`aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.04] ${i === 2 ? 'md:aspect-[16/7] lg:aspect-[4/3]' : ''}`}
                />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className="text-xs font-bold tracking-[0.16em] text-rose-ink uppercase">{p.category}</p>
                <h3 className="mt-2 text-[28px] leading-tight">{p.title}</h3>
                <p className="mt-2 text-[16px] leading-relaxed text-muted">{p.description}</p>

                {p.flavors.length > 0 ? (
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Exemplos de sabores: ${p.title}`}>
                    {p.flavors.map((f) => (
                      <li key={f} className="rounded-full border border-line bg-white px-3 py-1.5 text-[14px] font-medium text-choco">
                        {f}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-5 inline-flex items-center gap-2 self-start rounded-full bg-rose-light px-4 py-2 text-[14px] font-semibold text-choco">
                    <HeartMini className="size-3.5 text-rose-deep" /> {p.priceNote}
                  </p>
                )}

                <a
                  href="#cardapio"
                  onClick={() => onSelectTab(p.menuTab)}
                  className="btn btn-outline mt-auto self-start !mt-7"
                >
                  Ver opções <ArrowRight className="size-4" />
                  <span className="sr-only">de {p.title}</span>
                </a>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
