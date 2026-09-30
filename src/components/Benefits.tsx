import { benefits } from "@/data/content";
import SectionTitle from "./ui/SectionTitle";

export default function Benefits() {
  return (
    <section
      id="diferenciais"
      aria-labelledby="diferenciais-titulo"
      className="mx-auto max-w-[1240px] px-5 pt-24 md:px-8 lg:pt-32"
    >
      <SectionTitle id="diferenciais-titulo" className="text-center !text-[21px] sm:!text-[24px]">
        Por que escolher a Lumident
      </SectionTitle>

      <ul className="mt-12 grid grid-cols-2 gap-y-12 md:grid-cols-3 lg:grid-cols-5 lg:gap-y-0 lg:divide-x lg:divide-dashed lg:divide-black/30">
        {benefits.map(({ title, text, icon: Icon }, i) => (
          <li
            key={title}
            className={`flex flex-col items-center px-3 py-2 text-center sm:px-5 ${
              i === benefits.length - 1 ? "col-span-2 md:col-span-1" : ""
            }`}
          >
            <div
              aria-hidden="true"
              className="grid size-[112px] place-items-center rounded-full border border-brand/25 bg-hero text-brand"
            >
              <Icon size={29} strokeWidth={1.5} />
            </div>
            <h3 className="mt-7 text-[15px] font-medium leading-snug text-ink">{title}</h3>
            <p className="mt-3 max-w-[190px] text-[13px] leading-relaxed text-muted">{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
