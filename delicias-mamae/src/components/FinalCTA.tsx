import { messages, whatsappLink } from '../lib/whatsapp'
import { FloralSprig, HeartMini, Reveal, WhatsAppIcon } from './ui'

export default function FinalCTA() {
  return (
    <section id="contato" aria-labelledby="cta-title" className="bg-white px-5 py-16 sm:px-8 lg:py-24">
      <Reveal className="relative mx-auto max-w-[1220px] overflow-hidden rounded-[32px] bg-choco px-6 py-16 text-center sm:px-12 lg:py-20">
        {/* Composição lateral: brigadeiros + flores, afastados do texto */}
        <img
          src="/images/cta-brigadeiros.jpg"
          alt=""
          loading="lazy"
          decoding="async"
          className="pointer-events-none absolute top-1/2 -left-24 hidden size-72 -translate-y-1/2 rounded-full object-cover opacity-90 ring-8 ring-white/10 lg:block xl:-left-16"
        />
        <img
          src="/images/hero-brigadeiros.jpg"
          alt=""
          loading="lazy"
          decoding="async"
          className="pointer-events-none absolute top-1/2 -right-24 hidden size-72 -translate-y-1/2 rounded-full object-cover opacity-90 ring-8 ring-white/10 lg:block xl:-right-16"
        />
        <FloralSprig className="pointer-events-none absolute -top-4 left-[16%] hidden w-28 opacity-70 lg:block" />
        <FloralSprig className="pointer-events-none absolute right-[17%] -bottom-6 hidden w-28 rotate-180 opacity-70 lg:block" />

        <div className="relative mx-auto max-w-xl">
          <HeartMini className="mx-auto size-6 text-blush" />
          <h2 id="cta-title" className="mt-4 text-[36px] leading-[1.1] text-white sm:text-[48px]">
            Vamos adoçar a sua comemoração?
          </h2>
          <p className="mt-4 text-[18px] leading-relaxed text-rose-light">
            Conte para a gente o que você está planejando e receba um atendimento personalizado.
          </p>
          <a href={whatsappLink(messages.quote)} target="_blank" rel="noopener noreferrer" className="btn btn-light mt-8 w-full sm:w-auto">
            <WhatsAppIcon className="size-5" /> Pedir orçamento pelo WhatsApp
          </a>
        </div>
      </Reveal>
    </section>
  )
}
