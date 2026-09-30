import { ArrowRight, ArrowUpRight } from './Icons.jsx'

const services = [
  {
    image: '/images/service-checkup.jpg',
    alt: 'Dentist examining teeth with a mirror and explorer',
    chip: 'Prevention',
    title: 'Dental Checkups & Early Diagnosis',
    text: 'Digital exams that catch small problems before they become painful ones.',
    meta: '30 min · Every 6 months',
  },
  {
    image: '/images/service-cleaning.jpg',
    alt: 'Hygienist cleaning a smiling patient’s teeth',
    chip: 'Hygiene',
    title: 'Professional Cleaning vs. Regular Brushing',
    text: 'Remove tartar and stains that home brushing can’t reach — gently and quickly.',
    meta: '45 min · Twice a year',
  },
  {
    image: '/images/service-braces.jpg',
    alt: 'Close-up of teeth with orthodontic braces',
    chip: 'Orthodontics',
    title: 'Braces, Aligners & Retainers',
    text: 'Straighter smiles with discreet options planned for kids, teens and adults.',
    meta: 'Custom plan · 6–18 months',
  },
]

export default function Services() {
  return (
    <section id="services" className="services container" aria-labelledby="services-title">
      <div className="services__head">
        <span className="tag">Our Services</span>
        <h2 id="services-title" className="services__title">
          Advanced Dental Care Ensures Precision Comfort{' '}
          <span className="muted">And Long Lasting Healthy Smiles.</span>
        </h2>
      </div>

      <ul className="services__grid">
        {services.map((s) => (
          <li key={s.title}>
            <article className="service-card">
              <div className="service-card__media">
                <img src={s.image} alt={s.alt} loading="lazy" />
                <span className="chip">{s.chip}</span>
              </div>
              <div className="service-card__body">
                <p className="service-card__meta">{s.meta}</p>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <a href="#contact" className="link-more">
                  Learn More <ArrowUpRight width={12} height={12} />
                  <span className="sr-only"> about {s.title}</span>
                </a>
              </div>
            </article>
          </li>
        ))}
      </ul>

      <a href="#contact" className="btn-accent">
        Book an Assessment
        <span className="btn-accent__icon"><ArrowRight width={13} height={13} /></span>
      </a>
    </section>
  )
}
