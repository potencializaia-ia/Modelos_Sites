import { FloralSprig, HeartMini, Reveal } from './ui'

export default function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="overflow-hidden bg-cream py-20 lg:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative mx-auto w-full max-w-[480px] lg:order-1">
          <FloralSprig className="pointer-events-none absolute -top-10 -right-8 z-10 w-32 rotate-[25deg] sm:w-40" />
          {/* Foto ilustrativa: substitua por uma foto real da fundadora trabalhando. */}
          <img
            src={`${import.meta.env.BASE_URL}images/sobre-maos.jpg`}
            alt="Mãos preparando chocolate em uma tigela de vidro para a produção dos doces"
            loading="lazy"
            decoding="async"
            width={900}
            height={1100}
            className="aspect-[4/4.8] w-full rounded-[28px] object-cover shadow-lift"
          />
          <div className="absolute -bottom-6 -left-3 max-w-[260px] rounded-[20px] border border-line bg-white px-5 py-4 shadow-soft sm:-left-8">
            <p className="font-script text-[23px] leading-tight text-rose-ink">feito com carinho</p>
            <p className="mt-1 text-[14px] text-muted">Produção artesanal, sob encomenda.</p>
          </div>
        </Reveal>

        <Reveal className="lg:order-2" delay={100}>
          <p className="eyebrow">
            <HeartMini className="size-3 text-blush" /> Sobre nós
          </p>
          <h2 id="sobre-title" className="mt-3 text-[34px] leading-[1.1] sm:text-[42px] lg:text-[48px]">
            Uma história feita de amor e sabor
          </h2>
          <p className="mt-6 text-[18px] leading-relaxed text-muted">
            A Delícias e Sabores da Mamãe nasceu do cuidado de uma mãe que transformou seu talento para a confeitaria
            em uma forma de adoçar momentos especiais.
          </p>
          <p className="mt-4 text-[18px] leading-relaxed text-muted">
            Cada encomenda é preparada artesanalmente, com atenção aos detalhes e o carinho que só uma receita feita
            com amor consegue transmitir.
          </p>
          <blockquote className="mt-8 border-l-2 border-blush pl-5">
            <p className="font-serif text-[26px] leading-snug text-choco-dark italic">
              Feito por uma mãe. Pensado para a sua família.
            </p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}
