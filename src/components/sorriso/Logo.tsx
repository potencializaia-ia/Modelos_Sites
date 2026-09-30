import { LogoMark } from "./Icons";
import s from "./sorriso.module.css";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#inicio" className={`${s.logo} ${className}`} aria-label="Sorriso Odontologia — início">
      <LogoMark className={s.logoMark} />
      <span>SORRISO</span>
    </a>
  );
}
