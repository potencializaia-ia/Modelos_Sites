import Image from "next/image";
import { ArrowRight, CalendarDays } from "lucide-react";
import BookButton from "../appointment/BookButton";
import { buttonClasses } from "../ui/button";

const avatars = [
  { src: "/images/avatar-1.jpg", alt: "" },
  { src: "/images/avatar-2.jpg", alt: "" },
  { src: "/images/avatar-3.jpg", alt: "" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative -mt-[72px] overflow-hidden bg-hero pt-[72px] lg:-mt-[82px] lg:pt-[82px]"
    >
      {/* imagem de fundo: dente à direita, área clara à esquerda para o texto */}
      <Image
        src="/images/hero-dente.png"
        alt="Dente branco saudável envolto por fitas de luz, com um ramo verde"
        fill
        preload
        sizes="100vw"
        className="object-cover object-[72%_center] lg:object-right"
      />
      {/* véu claro no mobile para garantir leitura do texto sobre a imagem */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/10 lg:hidden"
      />

      <div className="relative mx-auto grid max-w-[1240px] items-center gap-4 px-5 pb-10 pt-8 md:px-8 md:pt-10 lg:min-h-[600px] lg:grid-cols-[46fr_54fr] lg:gap-2 lg:pb-12 lg:pt-4">
        {/* Texto */}
        <div className="relative z-10 max-w-[560px]">
          <h1
            id="hero-title"
            className="text-[40px] font-semibold leading-[1.06] tracking-[-0.025em] text-ink sm:text-[48px] lg:text-[54px] xl:text-[58px] lg:tracking-[-0.03em]"
          >
            Dentes saudáveis&nbsp;—
            <br />
            confiança para
            <br />
            todos os dias
          </h1>
          <p className="mt-6 max-w-[330px] text-[16px] leading-relaxed text-ink/75">
            Odontologia moderna para toda a família. Cuidado, conforto e atenção em cada detalhe.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <BookButton className={buttonClasses("dark", "lg", "w-full sm:w-auto group")}>
              Agendar consulta
              <ArrowRight
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </BookButton>
            <a href="#servicos" className={buttonClasses("outline", "lg", "w-full sm:w-auto")}>
              Conhecer serviços
            </a>
          </div>

          <div className="mt-9 flex items-center gap-3">
            <div className="flex -space-x-2.5">
              {avatars.map((a, i) => (
                <Image
                  key={a.src}
                  src={a.src}
                  alt={a.alt}
                  width={36}
                  height={36}
                  className="size-9 rounded-full object-cover ring-2 ring-white"
                  style={{ zIndex: avatars.length - i }}
                />
              ))}
            </div>
            <p className="text-[13px] leading-tight text-ink/80">
              <strong className="font-semibold text-ink">Mais de 5.000</strong>
              <br />
              pacientes atendidos
            </p>
          </div>
        </div>

        {/* Card flutuante (a imagem do dente fica no fundo da seção) */}
        <div className="relative h-[300px] sm:h-[360px] lg:h-full lg:min-h-[560px]">
          <div className="absolute inset-x-0 bottom-0 z-10 flex items-center gap-3 rounded-2xl bg-white/95 p-3 pr-3 shadow-float backdrop-blur sm:left-auto sm:right-0 sm:w-[300px]">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-sky text-brand">
              <CalendarDays className="size-5" strokeWidth={1.8} aria-hidden="true" />
            </span>
            <p className="flex-1 text-[13px] font-medium leading-snug text-ink">
              Horários flexíveis e<br />
              lembretes da consulta
            </p>
            <BookButton className="grid size-9 shrink-0 place-items-center rounded-full border border-line text-brand transition-colors duration-200 hover:bg-brand hover:text-white">
              <ArrowRight className="size-4" aria-hidden="true" />
              <span className="sr-only">Agendar com horário flexível</span>
            </BookButton>
          </div>
        </div>
      </div>
    </section>
  );
}
