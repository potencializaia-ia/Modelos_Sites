import { CalendarClock } from 'lucide-react'
import { orderSteps } from '../data/content'
import { site } from '../data/site'
import { messages, whatsappLink } from '../lib/whatsapp'
import { Reveal, SectionHeading, WhatsAppIcon } from './ui'

export default function OrderSteps() {
  return (
    <section id="como-encomendar" aria-labelledby="como-title" className="bg-white py-20 lg:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="como-title"
            eyebrow="Como encomendar"
            title="Seu pedido em quatro passos"
            text="Tudo é combinado diretamente pelo WhatsApp, com atendimento próximo do começo ao fim."
          />
        </Reveal>

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {orderSteps.map(({ title, text, icon: Icon }, i) => (
            <Reveal as="li" key={title} delay={i * 80} className="relative rounded-[24px] border border-line bg-cream p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <span className="font-serif text-[44px] leading-none text-blush" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="grid size-11 place-items-center rounded-full bg-white text-rose-ink">
                  <Icon className="size-5" strokeWidth={1.6} aria-hidden="true" />
                </span>
              </div>
              <h3 className="mt-5 text-[24px] leading-tight">
                <span className="sr-only">Passo {i + 1}: </span>
                {title}
              </h3>
              <p className="mt-2 text-[16px] leading-relaxed text-muted">{text}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-10 flex flex-col items-center justify-between gap-5 rounded-[24px] bg-rose-light/70 px-6 py-6 sm:flex-row sm:px-8">
          <p className="flex items-center gap-3 text-[17px] font-semibold text-choco-dark">
            <CalendarClock className="size-6 shrink-0 text-rose-ink" strokeWidth={1.6} aria-hidden="true" />
            Pedidos com no mínimo {site.advanceDays} dias de antecedência.
          </p>
          <a href={whatsappLink(messages.order)} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full sm:w-auto">
            <WhatsAppIcon className="size-5" /> Começar meu pedido
          </a>
        </Reveal>
      </div>
    </section>
  )
}
