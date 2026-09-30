import { useRef, type KeyboardEvent } from 'react'
import { CalendarClock, Info, Scale, Users } from 'lucide-react'
import { menuCategories, priceLabel, type MenuCategoryId } from '../data/menu'
import { site } from '../data/site'
import { messages, whatsappLink } from '../lib/whatsapp'
import { FloralSprig, HeartMini, Reveal, SectionHeading, WhatsAppIcon } from './ui'

type Props = { active: MenuCategoryId; onChange: (id: MenuCategoryId) => void }

export default function MenuTabs({ active, onChange }: Props) {
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  // Navegação por teclado entre as abas (padrão WAI-ARIA).
  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = menuCategories.length - 1
    let next: number | null = null
    if (e.key === 'ArrowRight') next = index === last ? 0 : index + 1
    if (e.key === 'ArrowLeft') next = index === 0 ? last : index - 1
    if (e.key === 'Home') next = 0
    if (e.key === 'End') next = last
    if (next === null) return
    e.preventDefault()
    const id = menuCategories[next].id
    onChange(id)
    tabRefs.current[id]?.focus()
  }

  return (
    <section id="cardapio" aria-labelledby="cardapio-title" className="relative overflow-hidden bg-rose-soft py-20 lg:py-28">
      <FloralSprig className="pointer-events-none absolute -top-6 -left-8 hidden w-40 opacity-80 md:block" />
      <FloralSprig className="pointer-events-none absolute -right-6 bottom-10 hidden w-36 rotate-180 opacity-70 md:block" />

      <div className="container-page relative">
        <Reveal>
          <SectionHeading
            id="cardapio-title"
            eyebrow="Cardápio"
            title="Escolha os sabores da sua festa"
            text="Valores por cento, com mínimo de 20 unidades por sabor. Preços e disponibilidade são confirmados no momento da encomenda."
          />
        </Reveal>

        {/* Abas */}
        <div className="-mx-5 mt-10 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
          <div role="tablist" aria-label="Categorias do cardápio" className="mx-auto flex w-max gap-2 rounded-full border border-line bg-white p-1.5 shadow-soft">
            {menuCategories.map((c, i) => {
              const selected = c.id === active
              return (
                <button
                  key={c.id}
                  ref={(el) => {
                    tabRefs.current[c.id] = el
                  }}
                  role="tab"
                  type="button"
                  id={`tab-${c.id}`}
                  aria-selected={selected}
                  aria-controls={`painel-${c.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => onChange(c.id)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                  className={`min-h-11 rounded-full px-5 text-[15px] font-semibold whitespace-nowrap transition ${
                    selected ? 'bg-choco text-white shadow-soft' : 'text-choco hover:bg-rose-light'
                  }`}
                >
                  {c.name}
                </button>
              )
            })}
          </div>
        </div>

        {/* Painéis */}
        {menuCategories.map((c) => {
          const price = priceLabel(c)
          const hidden = c.id !== active
          return (
            <div
              key={c.id}
              role="tabpanel"
              id={`painel-${c.id}`}
              aria-labelledby={`tab-${c.id}`}
              hidden={hidden}
              tabIndex={0}
              className="mt-8 rounded-[28px] border border-line bg-white p-6 shadow-soft sm:p-10"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                {/* Título em faixa rosa (fita) */}
                <h3 className="relative inline-flex self-start">
                  <span className="relative z-10 rounded-r-full rounded-l-md bg-rose-light py-2 pr-8 pl-5 font-serif text-[32px] leading-none text-choco-dark sm:text-[38px]">
                    {c.name}
                  </span>
                  <span className="absolute top-full left-0 h-3 w-3 bg-blush [clip-path:polygon(0_0,100%_0,100%_100%)]" aria-hidden="true" />
                </h3>

                {price ? (
                  <dl className="flex flex-wrap gap-2.5">
                    <div className="flex items-center gap-2 rounded-full bg-cream px-4 py-2">
                      <Scale className="size-4 text-rose-ink" aria-hidden="true" />
                      <dt className="sr-only">Peso</dt>
                      <dd className="font-semibold">{c.weight}</dd>
                    </div>
                    <div className="flex items-center gap-2 rounded-full bg-choco px-4 py-2 text-white">
                      <dt className="sr-only">Valor</dt>
                      <dd className="font-bold">{price}</dd>
                    </div>
                    <div className="flex items-center gap-2 rounded-full bg-cream px-4 py-2">
                      <Users className="size-4 text-rose-ink" aria-hidden="true" />
                      <dt className="sr-only">Pedido mínimo</dt>
                      <dd className="font-semibold">Mín. {c.minPerFlavor} un. por sabor</dd>
                    </div>
                  </dl>
                ) : (
                  <p className="self-start rounded-full bg-rose-light px-4 py-2 font-semibold">Valores e sabores sob consulta</p>
                )}
              </div>

              {c.flavors.length > 0 ? (
                <ul className="mt-8 grid grid-cols-1 gap-x-5 gap-y-1 min-[360px]:grid-cols-2 sm:gap-x-8 lg:grid-cols-3" aria-label={`Sabores ${c.name}`}>
                  {c.flavors.map((f) => (
                    <li key={f} className="flex items-start gap-3 border-b border-dashed border-line py-3 text-[16px] text-choco sm:text-[17px]">
                      <HeartMini className="mt-1.5 size-3 shrink-0 text-blush" />
                      {f}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="mt-8 rounded-[20px] bg-rose-soft px-6 py-10 text-center">
                  <p className="font-serif text-[26px] text-choco-dark">Consulte os sabores e valores disponíveis pelo WhatsApp.</p>
                  <p className="mx-auto mt-3 max-w-md text-muted">
                    As trufas recheadas são preparadas sob encomenda. Fale com a gente para conhecer as opções do momento.
                  </p>
                </div>
              )}

              <div className="mt-8 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="flex items-start gap-2 text-[15px] text-muted">
                  <Info className="mt-0.5 size-4 shrink-0 text-rose-ink" aria-hidden="true" />
                  Preços e disponibilidade confirmados no momento da encomenda.
                </p>
                <a
                  href={whatsappLink(c.flavors.length ? messages.category(c.name, price) : messages.truffles)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <WhatsAppIcon className="size-5" />
                  {c.flavors.length ? 'Pedir esta categoria' : 'Consultar trufas disponíveis'}
                </a>
              </div>
            </div>
          )
        })}

        {/* Aviso de antecedência */}
        <Reveal className="mt-8 flex flex-col items-center gap-3 rounded-[24px] border border-blush/60 bg-rose-light/60 px-6 py-5 text-center sm:flex-row sm:text-left">
          <span className="grid size-12 shrink-0 place-items-center rounded-full bg-white text-rose-ink">
            <CalendarClock className="size-6" strokeWidth={1.6} aria-hidden="true" />
          </span>
          <p className="text-[17px] font-semibold text-choco-dark">
            Para garantir todo o cuidado na produção, faça seu pedido com no mínimo {site.advanceDays} dias de antecedência.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
