import Image from "next/image";
import { Camera } from "lucide-react";
import s from "./pilates.module.css";

type FotoProps = {
  src: string;
  alt: string;
  legenda: string;
  className?: string;
  sizes?: string;
  preload?: boolean;
};

// Mostra a foto quando `src` existe; senão, um espaço reservado no tom do site.
export default function Foto({ src, alt, legenda, className = "", sizes = "100vw", preload }: FotoProps) {
  return (
    <div className={`${s.photo} ${className}`}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} preload={preload} />
      ) : (
        <div className={s.placeholder} role="img" aria-label={`Espaço reservado para foto: ${alt}`}>
          <svg className={s.placeholderArt} viewBox="0 0 400 500" preserveAspectRatio="none" aria-hidden>
            <path
              d="M-20 360C60 300 120 420 210 370S330 250 420 300"
              fill="none"
              stroke="rgba(85,103,78,.22)"
              strokeWidth="1.2"
            />
            <path
              d="M-20 400C70 350 140 460 230 410S350 300 420 350"
              fill="none"
              stroke="rgba(85,103,78,.14)"
              strokeWidth="1.2"
            />
          </svg>
          <span className={s.placeholderLabel}>
            <span className={s.placeholderIcon}>
              <Camera size={20} strokeWidth={1.6} />
            </span>
            <strong>{legenda}</strong>
            Foto a inserir
          </span>
        </div>
      )}
    </div>
  );
}
