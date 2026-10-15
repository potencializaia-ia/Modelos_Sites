import Image from "next/image";
import { FileText, Play } from "lucide-react";
import type { Conteudo } from "./content";
import s from "./editorial.module.css";

type Props = { item: Conteudo; sizes: string; className?: string; mostrarTipo?: boolean };

export default function Cartao({ item, sizes, className = "", mostrarTipo }: Props) {
  const verde = item.cor === "verde";
  return (
    <article id={`conteudo-${item.id}`} className={`${s.card} ${className}`}>
      <div className={s.cardMedia}>
        <Image src={item.foto} alt={item.alt} fill sizes={sizes} style={{ objectPosition: item.posicao }} />
        {mostrarTipo && item.tipo && (
          <span
            className={`${s.badge} ${verde ? s.badgeVerde : s.badgeTerracota}`}
            title={item.tipo === "video" ? "Vídeo" : "Texto"}
          >
            {item.tipo === "video" ? (
              <Play size={10} fill="currentColor" strokeWidth={0} aria-label="Vídeo" />
            ) : (
              <FileText size={11} strokeWidth={2} aria-label="Texto" />
            )}
          </span>
        )}
      </div>
      <div className={s.cardBody}>
        <span className={`${s.tag} ${verde ? s.tagVerde : s.tagTerracota}`}>{item.categoria}</span>
        <h3 className={s.cardTitle}>{item.titulo}</h3>
        <p className={s.date}>
          <time>{item.data}</time>
        </p>
      </div>
    </article>
  );
}
