import { useId, useState } from 'react'
import { Plus } from 'lucide-react'
import { faqs } from '../data/content'
import { Reveal, SectionHeading } from './ui'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  const baseId = useId()

  return (
    <section id="duvidas" aria-labelledby="faq-title" className="bg-white py-20 lg:py-28">
      <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <SectionHeading
            align="left"
            id="faq-title"
            eyebrow="Dúvidas"
            title="Perguntas frequentes"
            text="Não encontrou o que procurava? Fale com a gente pelo WhatsApp."
          />
        </Reveal>

        <Reveal as="div" delay={80} className="divide-y divide-line border-y border-line">
          {faqs.map((f, i) => {
            const isOpen = open === i
            const buttonId = `${baseId}-q${i}`
            const panelId = `${baseId}-a${i}`
            return (
              <div key={f.question}>
                <h3 className="font-sans">
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex min-h-16 w-full items-center justify-between gap-4 py-4 text-left text-[17px] font-semibold text-choco-dark transition hover:text-rose-ink"
                  >
                    {f.question}
                    <span
                      className={`grid size-9 shrink-0 place-items-center rounded-full border border-line transition duration-300 ${
                        isOpen ? 'rotate-45 border-blush bg-rose-light' : ''
                      }`}
                    >
                      <Plus className="size-4" aria-hidden="true" />
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="pr-12 pb-5 text-[16px] leading-relaxed text-muted"
                >
                  {f.answer}
                </div>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
