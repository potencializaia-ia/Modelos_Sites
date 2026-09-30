import Photo from './Photo.jsx'
import { photos } from '../data/photos.js'

const pillars = [
  { title: 'Comida caseira', text: 'Sabor de almoço de família, preparado no dia a dia.' },
  { title: 'Buffet no almoço', text: 'Buffet livre ou por quilo, do jeito que você preferir.' },
  { title: 'Lanches e xis', text: 'Xis, sanduíches, pastéis e cafés para qualquer hora.' },
]

export default function About() {
  return (
    <section id="sobre" className="about section" aria-labelledby="sobre-title">
      <div className="about__inner container">
        <div className="about__visual">
          <Photo photo={photos.ambiente} className="about__photo" />
          <span className="about__frame" aria-hidden="true" />
        </div>

        <div className="about__copy">
          <p className="eyebrow">Sobre nós</p>
          <h2 id="sobre-title" className="section-title">
            Uma casa de família, com mesa posta no Centro
          </h2>
          <p>
            O D&rsquo;Gustame é um restaurante familiar e tradicional de Passo Fundo. Quem passa por aqui
            encontra comida feita com cuidado, atendimento próximo e aquele clima de almoço em casa.
          </p>
          <p>
            A casa é conhecida pela qualidade da comida, pelo buffet do almoço e pelos lanches,
            com destaque para os xis. Pratos, filés, bebidas e cafés completam o cardápio.
          </p>

          <ul className="pillars">
            {pillars.map((p) => (
              <li key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
