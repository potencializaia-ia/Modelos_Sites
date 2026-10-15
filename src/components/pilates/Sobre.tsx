import Reveal from "@/components/catalogo/Reveal";
import { fotos, perfil, sobre } from "./content";
import Foto from "./Foto";
import s from "./pilates.module.css";

export default function Sobre() {
  const credenciais = [perfil.registro, ...sobre.formacao].filter(Boolean);

  return (
    <section id="sobre" className={s.section}>
      <div className={`${s.container} ${s.about}`}>
        <Reveal className={s.aboutPhotoWrap}>
          <span className={s.aboutAccent} aria-hidden />
          <Foto {...fotos.sobre} className={`${s.aboutPhoto} ${s.shapeArch}`} sizes="(min-width: 900px) 40vw, 100vw" />
        </Reveal>

        <div className={s.aboutText}>
          <Reveal>
            <span className={s.eyebrow}>Sobre mim</span>
            <h2 className={s.h2}>{sobre.titulo}</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className={s.lead}>
              {sobre.paragrafos.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
          {credenciais.length > 0 && (
            <Reveal delay={160}>
              <ul className={s.chips}>
                {credenciais.map((c) => (
                  <li key={c} className={s.chip}>
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
          <Reveal delay={200}>
            <p className={s.aboutSign}>{perfil.nome}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
