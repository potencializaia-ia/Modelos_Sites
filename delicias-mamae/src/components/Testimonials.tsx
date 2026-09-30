import { Quote } from 'lucide-react'
import { testimonials, testimonialsAreDemo } from '../data/content'
import { Reveal, SectionHeading } from './ui'

/**
 * ⚠️ Enquanto `testimonialsAreDemo` for true, os textos são DEMONSTRATIVOS e exibem
 * um aviso visível. Substitua por avaliações reais (com autorização) antes de publicar.
 */
export default function Testimonials() {
  return (
    <section aria-labelledby="depoimentos-title" className="bg-rose-soft py-20 lg:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading id="depoimentos-title" eyebrow="Depoimentos" title="O que dizem sobre nossos doces" />
          {testimonialsAreDemo && (
            <p className="mx-auto mt-4 w-fit rounded-full border border-dashed border-rose-deep/60 px-4 py-1.5 text-center text-[13px] font-semibold text-rose-ink">
              Textos demonstrativos — serão substituídos por avaliações reais
            </p>
          )}
        </Reveal>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={t.quote} delay={i * 80}>
              <figure className="flex h-full flex-col rounded-[24px] border border-line bg-white p-7 shadow-soft">
                <Quote className="size-8 text-blush" strokeWidth={1.4} aria-hidden="true" />
                <blockquote className="mt-4 flex-1">
                  <p className="font-serif text-[22px] leading-snug text-choco-dark">{t.quote}</p>
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-4 text-[15px]">
                  <span className="font-semibold text-choco">{t.author}</span>
                  <span className="text-muted"> · {t.occasion}</span>
                  {testimonialsAreDemo && <span className="mt-1 block text-[13px] text-muted">Depoimento demonstrativo</span>}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
