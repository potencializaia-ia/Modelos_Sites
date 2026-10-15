import Cartao from "./Cartao";
import { conteudos } from "./content";
import s from "./editorial.module.css";

export default function Conteudos() {
  return (
    <section id="conteudos" className={s.latest} aria-labelledby="conteudos-titulo">
      <div className={s.container}>
        <h2 id="conteudos-titulo" className={s.h2}>
          Últimos conteúdos de Pilates
        </h2>
        <ul className={s.grid}>
          {conteudos.map((c) => (
            <li key={c.id}>
              <Cartao item={c} mostrarTipo sizes="(min-width: 900px) 300px, (min-width: 600px) 50vw, 100vw" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
