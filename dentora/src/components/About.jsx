const metrics = [
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '2k+', label: 'Smiles Transformed' },
  { value: '4.9*', label: 'Customer Rating' },
]

export default function About() {
  return (
    <section id="about" className="about container" aria-labelledby="about-title">
      <span className="tag about__tag">About Us</span>

      <h2 id="about-title" className="about__title">
        We deliver personalized dental treatments with modern{' '}
        <span className="muted">technology and gentle care ensuring healthy confident smiles for every patient.</span>
      </h2>

      <div className="about__portraits">
        <img src="/images/patient-man.jpg" alt="Smiling male patient" loading="lazy" />
        <img src="/images/patient-woman.jpg" alt="Laughing female patient" loading="lazy" />
      </div>

      <div className="about__metrics">
        <p className="about__caption">Thousands Trust Us for Smiles!</p>
        <dl className="metrics">
          {metrics.map((m) => (
            <div key={m.label} className="metric">
              <dt>{m.label}</dt>
              <dd>{m.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <figure className="about__photo">
        <img src="/images/patient-chair.jpg" alt="Patient smiling in the dental chair during a check-up" loading="lazy" />
      </figure>
    </section>
  )
}
