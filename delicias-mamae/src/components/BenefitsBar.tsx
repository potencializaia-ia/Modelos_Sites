import { benefits } from '../data/content'

export default function BenefitsBar() {
  return (
    <section aria-label="Nossos diferenciais" className="border-y border-line bg-white">
      <ul className="container-page grid grid-cols-2 gap-x-4 gap-y-6 py-8 md:grid-cols-4 md:py-9">
        {benefits.map(({ title, icon: Icon }) => (
          <li key={title} className="flex flex-col items-center gap-3 text-center sm:flex-row sm:text-left">
            <span className="grid size-12 shrink-0 place-items-center rounded-full border border-blush/60 text-rose-ink">
              <Icon className="size-[22px]" strokeWidth={1.5} />
            </span>
            <span className="text-[15px] leading-snug font-semibold text-choco">{title}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
