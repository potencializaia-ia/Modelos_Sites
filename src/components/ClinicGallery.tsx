import Image from "next/image";
import { clinicGallery } from "@/data/content";
import SectionTitle from "./ui/SectionTitle";
import { buttonClasses } from "./ui/button";

export default function ClinicGallery() {
  const [featured, ...rest] = clinicGallery;
  return (
    <section
      id="clinica"
      aria-labelledby="clinica-titulo"
      className="mx-auto max-w-[1240px] px-5 pt-24 md:px-8 lg:pt-32"
    >
      <div className="grid items-center gap-8 lg:grid-cols-[34fr_66fr] lg:gap-10">
        <div>
          <SectionTitle id="clinica-titulo">Sobre a clínica</SectionTitle>
          <p className="mt-5 max-w-[380px] text-[14px] leading-relaxed text-muted">
            Combinamos tecnologia, conforto e atendimento humano para proporcionar uma experiência odontológica
            tranquila. Nossa missão é cuidar da saúde e da beleza do seu sorriso em todas as fases da vida.
          </p>
          <a href="#contato" className={buttonClasses("primary", "md", "mt-7 h-10 px-7 text-[13px]")}>
            Conheça nossa estrutura
          </a>
        </div>

        <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-[1.25fr_1fr_1fr]">
          <li className="group relative col-span-2 aspect-[16/10] overflow-hidden rounded-[18px] md:col-span-1 md:aspect-[4/4.3]">
            <Image
              src={featured.src}
              alt={featured.alt}
              fill
              sizes="(min-width: 1024px) 340px, (min-width: 768px) 40vw, 100vw"
              className="object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.04]"
            />
          </li>
          {rest.map((img) => (
            <li key={img.src} className="group relative aspect-[4/5] overflow-hidden rounded-[18px] md:aspect-auto">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 270px, (min-width: 768px) 30vw, 50vw"
                className="object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.04]"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
