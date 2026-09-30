import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { contact, navItems } from "@/data/content";

/* Ícones de marca (Lucide não inclui logotipos de marcas) */
function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.3-.4.8-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7a2.8 2.8 0 0 0 1.8-1.3 2.3 2.3 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3Z" />
    </svg>
  );
}
function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4a20 20 0 0 0-2.2-.1c-2.2 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21h3Z" />
    </svg>
  );
}

const socials = [
  { label: "WhatsApp", href: contact.whatsapp, Icon: WhatsAppIcon },
  { label: "Instagram", href: contact.instagram, Icon: InstagramIcon },
  { label: "Facebook", href: contact.facebook, Icon: FacebookIcon },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      id="contato"
      className="mt-24 rounded-t-[28px] bg-[linear-gradient(120deg,#3a78b8_0%,#3674b4_100%)] text-white lg:mt-32"
    >
      <div className="mx-auto max-w-[1240px] px-5 pb-8 pt-8 md:px-8 md:pt-9">
        {/* Faixa de contato */}
        <div className="grid gap-5 border-b border-white/20 pb-8 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_auto] lg:items-center lg:gap-0 lg:divide-x lg:divide-white/20">
          <address className="flex items-center gap-3 not-italic lg:pr-6">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white/15">
              <MapPin className="size-[18px]" aria-hidden="true" />
            </span>
            <span className="text-[14px]">
              {contact.address}
              <a
                href={contact.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-0.5 flex items-center gap-1 text-[12.5px] font-semibold text-white underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                Ver no mapa <ArrowUpRight className="size-3.5" aria-hidden="true" />
                <span className="sr-only">(abre em nova aba)</span>
              </a>
            </span>
          </address>
          <p className="flex items-center gap-3 text-[14px] lg:px-6">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white/15">
              <Clock className="size-[18px]" aria-hidden="true" />
            </span>
            {contact.hours}
          </p>
          <a
            href={contact.phoneHref}
            className="flex items-center gap-3 text-[14px] transition-opacity hover:opacity-85 lg:px-6"
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white/15">
              <Phone className="size-[18px]" aria-hidden="true" />
            </span>
            {contact.phone}
          </a>
          <ul className="flex items-center gap-2.5 lg:pl-6">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} (abre em nova aba)`}
                  className="grid size-10 place-items-center rounded-full border border-white/35 transition-colors duration-200 hover:bg-white hover:text-brand"
                >
                  <Icon className="size-[18px]" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Logo + links */}
        <div className="flex flex-col gap-6 pt-8 md:flex-row md:items-center md:justify-between">
          <Logo inverted />
          <nav aria-label="Links rápidos">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-[13.5px] text-white transition-colors hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-2 text-[12px] text-white md:flex-row md:justify-between">
          <p>© {year} Lumident Odontologia. Todos os direitos reservados.</p>
          <p>Site demonstrativo: nomes, registros CRO, preços e contatos são fictícios.</p>
        </div>
      </div>
    </footer>
  );
}
