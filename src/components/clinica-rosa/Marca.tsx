import { clinica, whatsappUrl } from "./content";
import { FacebookIcon, InstagramIcon, LogoIcon, WhatsAppIcon } from "./Icones";
import s from "./clinica.module.css";

export function Logo() {
  return (
    <a href="#inicio" className={s.logo} aria-label={`${clinica.nome}, ir para o início`}>
      <LogoIcon className={s.logoIcon} />
      <span className={s.logoText}>
        <span className={s.logoName}>{clinica.nome}</span>
        <span className={s.logoSub}>{clinica.descricao}</span>
      </span>
    </a>
  );
}

const iconeRede = { instagram: InstagramIcon, facebook: FacebookIcon, whatsapp: WhatsAppIcon } as const;
const nomeRede = { instagram: "Instagram", facebook: "Facebook", whatsapp: "WhatsApp" } as const;

export function Redes() {
  return (
    <div className={s.social}>
      {clinica.redes.map(({ rede, url }) => {
        const Icon = iconeRede[rede as keyof typeof iconeRede];
        const href = rede === "whatsapp" ? whatsappUrl() : url;
        return (
          <a
            key={rede}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={nomeRede[rede as keyof typeof nomeRede]}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
}
