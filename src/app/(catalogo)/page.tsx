import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check, MousePointerClick, Palette, Rocket, PenLine } from "lucide-react";
import Header, { Marca } from "@/components/catalogo/Header";
import Reveal from "@/components/catalogo/Reveal";
import { contatoUrl, modelosPublicos as modelos } from "@/data/modelos";

const fundoEscuro = "bg-[linear-gradient(135deg,#0F172A_0%,#1E293B_55%,#163B5B_100%)]";

const etapas = [
  {
    icone: MousePointerClick,
    titulo: "Escolha o modelo",
    texto: "Navegue pelos modelos e veja cada um funcionando, no computador e no celular.",
  },
  {
    icone: Palette,
    titulo: "Personalizamos",
    texto: "Aplicamos suas cores, logo, fotos e textos para o site ter a cara do seu negócio.",
  },
  {
    icone: PenLine,
    titulo: "Você revisa",
    texto: "Ajustamos os detalhes com você até tudo ficar do jeito certo.",
  },
  {
    icone: Rocket,
    titulo: "Site no ar",
    texto: "Publicamos no seu domínio, rápido, seguro e pronto para receber clientes.",
  },
];

function Brilhos() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 -left-32 size-[520px] rounded-full bg-[#FF851B]/20 blur-[120px]" />
      <div className="absolute -right-40 bottom-[-160px] size-[560px] rounded-full bg-[#71D7FF]/15 blur-[130px]" />
    </div>
  );
}

function Selo({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#0F172A]/10 bg-white px-4 py-1.5 text-sm font-semibold text-[#2D2D4A] shadow-[0_2px_10px_-4px_rgba(15,23,42,0.15)]">
      <span className="size-2 rounded-full bg-[#FF851B]" />
      {children}
    </span>
  );
}

export default function Catalogo() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section id="topo" className={`relative overflow-hidden ${fundoEscuro} px-4 pt-36 pb-20 sm:px-6 sm:pt-44 sm:pb-28`}>
        <Brilhos />
        <div className="relative mx-auto max-w-[1280px] text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur">
              <span className="size-2 rounded-full bg-[#71D7FF]" />
              {modelos.length} modelos prontos para personalizar
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mx-auto mt-6 max-w-4xl text-4xl leading-[1.08] font-extrabold tracking-[-0.03em] text-white sm:text-6xl">
              Escolha o <span className="text-[#FF851B]">modelo ideal</span> para o{" "}
              <span className="text-[#71D7FF]">site do seu negócio</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              Veja nossos modelos funcionando de verdade. Escolha o seu ponto de partida e a Potencializa adapta tudo à
              identidade da sua empresa.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#modelos"
                className="inline-flex h-13 items-center justify-center gap-2 rounded-xl bg-[#FF851B] px-7 font-semibold text-white shadow-[0_12px_30px_-10px_rgba(255,133,27,0.75)] transition hover:-translate-y-0.5 hover:bg-[#E07316] hover:shadow-[0_16px_36px_-10px_rgba(255,133,27,0.85)]"
              >
                Ver modelos
                <ArrowRight className="size-4" aria-hidden />
              </a>
              <a
                href="#como-funciona"
                className="inline-flex h-13 items-center justify-center rounded-xl border border-white/25 bg-white/5 px-7 font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Como funciona
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mx-auto mt-16 max-w-5xl rounded-[32px] border border-white/10 bg-white/[0.06] p-3 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:p-5">
              <div className="grid gap-3 sm:grid-cols-3 sm:gap-5">
                {modelos.map((m, i) => (
                  <a
                    key={m.slug}
                    href={`/${m.slug}`}
                    target="_blank"
                    rel="noopener"
                    className={`group overflow-hidden rounded-2xl border border-white/10 bg-[#0F172A] transition hover:-translate-y-1 ${i > 0 ? "hidden sm:block" : ""}`}
                  >
                    <div className="flex gap-1.5 px-3 py-2" aria-hidden>
                      <span className="size-2 rounded-full bg-[#FF851B]" />
                      <span className="size-2 rounded-full bg-white/25" />
                      <span className="size-2 rounded-full bg-[#71D7FF]" />
                    </div>
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={`/previews/${m.slug}.jpg`}
                        alt={`Prévia do modelo ${m.nome}`}
                        fill
                        priority
                        sizes="(min-width: 640px) 320px, 100vw"
                        className="object-cover object-top"
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Modelos */}
      <section id="modelos" className="bg-white px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-[1280px]">
          <Reveal className="text-center">
            <Selo>Modelos</Selo>
            <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.02em] text-[#2D2D4A] sm:text-5xl">
              Sites <span className="text-[#FF851B]">prontos</span> para o seu negócio
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#2D2D4A]/70">
              Clique em um modelo para abrir o site completo em uma nova aba.
            </p>
          </Reveal>

          <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {modelos.map((m, i) => (
              <li key={m.slug}>
                <Reveal delay={i * 100} className="h-full">
                  <a
                    href={`/${m.slug}`}
                    target="_blank"
                    rel="noopener"
                    className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-[#0F172A]/[0.07] bg-[#F5F5F7] p-3 transition hover:-translate-y-1 hover:shadow-[0_24px_50px_-20px_rgba(15,23,42,0.3)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF851B]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] border border-[#0F172A]/[0.06] bg-white">
                      <Image
                        src={`/previews/${m.slug}.jpg`}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
                        className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col px-3 pt-5 pb-3">
                      <span className="self-start rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#163B5B]">
                        {m.segmento}
                      </span>
                      <h3 className="mt-3 text-xl font-bold text-[#2D2D4A]">{m.nome}</h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-[#2D2D4A]/70">{m.descricao}</p>
                      <ul className="mt-4 space-y-1.5 text-sm text-[#2D2D4A]/80">
                        {m.destaques.map((d) => (
                          <li key={d} className="flex items-center gap-2">
                            <Check className="size-4 shrink-0 text-[#71D7FF]" strokeWidth={3} aria-hidden />
                            {d}
                          </li>
                        ))}
                      </ul>
                      <span className="mt-auto inline-flex items-center gap-1.5 pt-6 font-semibold text-[#FF851B] transition-colors group-hover:text-[#E07316]">
                        Ver modelo
                        <ArrowUpRight
                          className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden
                        />
                        <span className="sr-only">(abre em nova aba)</span>
                      </span>
                    </div>
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="bg-[#F5F5F7] px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-[1280px]">
          <Reveal className="text-center">
            <Selo>Como funciona</Selo>
            <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.02em] text-[#2D2D4A] sm:text-5xl">
              Do modelo ao <span className="text-[#FF851B]">site no ar</span>
            </h2>
          </Reveal>

          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {etapas.map((e, i) => (
              <li key={e.titulo}>
                <Reveal delay={i * 100} className="h-full">
                  <div className="h-full rounded-[28px] border border-[#0F172A]/[0.06] bg-white p-7 shadow-[0_10px_30px_-18px_rgba(15,23,42,0.25)]">
                    <div className="flex items-center justify-between">
                      <span className="grid size-12 place-items-center rounded-2xl bg-[#FF851B]/10">
                        <e.icone className="size-6 text-[#FF851B]" strokeWidth={1.75} aria-hidden />
                      </span>
                      <span className="text-sm font-bold text-[#71D7FF]">0{i + 1}</span>
                    </div>
                    <h3 className="mt-6 text-lg font-bold text-[#2D2D4A]">{e.titulo}</h3>
                    <p className="mt-2 leading-relaxed text-[#2D2D4A]/70">{e.texto}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Chamada final + rodapé */}
      <section id="contato" className={`relative overflow-hidden ${fundoEscuro} px-4 pt-20 sm:px-6 sm:pt-28`}>
        <Brilhos />
        <div className="relative mx-auto max-w-[1280px]">
          <Reveal className="text-center">
            <h2 className="mx-auto max-w-3xl text-3xl font-extrabold tracking-[-0.02em] text-white sm:text-5xl">
              Gostou de algum <span className="text-[#FF851B]">modelo</span>?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/75">
              Fale com a gente, conte qual modelo chamou sua atenção e receba uma proposta para o seu site.
            </p>
            <a
              href={contatoUrl}
              target="_blank"
              rel="noopener"
              className="mt-10 inline-flex h-13 items-center justify-center gap-2 rounded-xl bg-[#FF851B] px-8 font-semibold text-white shadow-[0_12px_30px_-10px_rgba(255,133,27,0.75)] transition hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-[#E07316]"
            >
              Quero meu site
              <ArrowRight className="size-4" aria-hidden />
            </a>
          </Reveal>

          <footer className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-sm text-white/60 sm:mt-28 sm:flex-row">
            <Marca claro />
            <p>© {new Date().getFullYear()} Potencializa. Todos os direitos reservados.</p>
          </footer>
        </div>
      </section>
    </>
  );
}
