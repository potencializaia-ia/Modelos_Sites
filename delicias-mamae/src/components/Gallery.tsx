import { ArrowUpRight } from 'lucide-react'
import { gallery } from '../data/content'
import { site } from '../data/site'
import { InstagramIcon, Reveal, SectionHeading } from './ui'

export default function Gallery() {
  return (
    <section id="galeria" aria-labelledby="galeria-title" className="bg-cream py-20 lg:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading id="galeria-title" eyebrow="Galeria" title="Um pouquinho do nosso trabalho" />
        </Reveal>

        {/* Grade editorial: itens "tall" ocupam duas linhas no desktop */}
        <ul className="mt-12 grid auto-rows-[170px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:gap-4 lg:grid-cols-4 lg:auto-rows-[240px]">
          {gallery.map((g, i) => (
            <Reveal
              as="li"
              key={g.src}
              delay={(i % 4) * 70}
              className={`group relative overflow-hidden rounded-[22px] bg-rose-light ${g.tall ? 'row-span-2' : ''}`}
            >
              <figure className="h-full">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <figcaption className="absolute inset-x-2 bottom-2 rounded-full bg-white/90 px-2 py-1 text-center text-[12px] leading-tight font-semibold text-choco-dark sm:inset-x-auto sm:left-3 sm:bottom-3 sm:px-4 sm:text-[14px]">
                  {g.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <InstagramIcon className="size-5" /> Veja mais no Instagram <ArrowUpRight className="size-4" />
            <span className="sr-only">(abre em nova aba)</span>
          </a>
        </div>
      </div>
    </section>
  )
}
