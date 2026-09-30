import Image from "next/image";
import { services } from "@/data/content";
import ServicesAccordion from "./ServicesAccordion";
import BookButton from "../appointment/BookButton";
import { buttonClasses } from "../ui/button";
import SectionTitle from "../ui/SectionTitle";

export default function Services() {
  return (
    <section
      id="servicos"
      aria-labelledby="servicos-titulo"
      className="mx-auto max-w-[1240px] px-5 pt-24 md:px-8 lg:pt-32"
    >
      <div className="grid gap-6 md:grid-cols-[60fr_40fr] lg:grid-cols-[68fr_32fr] lg:gap-8">
        <div>
          <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:gap-10">
            <SectionTitle id="servicos-titulo">Serviços e valores</SectionTitle>
            <p className="max-w-[240px] text-[13px] leading-snug text-muted sm:pb-1">
              Tratamentos modernos e acessíveis para cuidar do seu sorriso.
            </p>
          </div>
          <ServicesAccordion items={services} />
        </div>

        {/* Card de consulta */}
        <aside
          aria-labelledby="consulta-titulo"
          className="relative flex min-h-[520px] flex-col overflow-hidden rounded-[22px] bg-[linear-gradient(180deg,#e3effa_0%,#eef5fc_55%,#f5f9fd_100%)] md:min-h-0"
        >
          <div className="relative z-10 p-7 lg:p-8">
            <h3
              id="consulta-titulo"
              className="text-[26px] font-semibold leading-[1.15] tracking-[-0.015em] text-ink lg:text-[28px]"
            >
              Consulta e avaliação sem custo
            </h3>
            <p className="mt-4 max-w-[250px] text-[14px] leading-relaxed text-muted">
              Converse com nossa equipe, tire suas dúvidas e receba uma orientação personalizada.
            </p>
            <BookButton serviceId="avaliacao" className={buttonClasses("primary", "md", "mt-6 h-10 px-7 text-[13px]")}>
              Agendar agora
            </BookButton>
          </div>
          <div className="relative mt-auto h-[300px] w-full md:h-auto md:flex-1 md:min-h-[260px]">
            <Image
              src="/images/consulta-clinica.jpg"
              alt="Consultório odontológico moderno, claro e organizado"
              fill
              sizes="(min-width: 1024px) 380px, (min-width: 768px) 40vw, 100vw"
              className="object-cover object-center"
            />
            {/* fusão suave entre imagem e card */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#eaf2fb] to-transparent"
            />
          </div>
        </aside>
      </div>
    </section>
  );
}
