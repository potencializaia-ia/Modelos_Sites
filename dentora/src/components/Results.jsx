import { useState } from 'react'
import { ArrowLeft, ArrowRight, Star } from './Icons.jsx'

const bars = [
  { month: 'Mar', value: 62 },
  { month: 'Apr', value: 88 },
  { month: 'May', value: 74 },
]

const testimonials = [
  {
    quote: 'Personalized dental treatments and gentle care from the first visit. I finally feel confident smiling in photos again.',
    name: 'Jenny Wilson',
    detail: 'Teeth Cleaning · 2 visits',
    avatar: `${import.meta.env.BASE_URL}images/avatar-review.jpg`,
  },
  {
    quote: 'My kids actually look forward to their check-ups. The team explains every step and never rushes anything.',
    name: 'Marcus Reed',
    detail: 'Family Checkups · 3 years',
    avatar: `${import.meta.env.BASE_URL}images/patient-man.jpg`,
  },
  {
    quote: 'The retainer plan was clear, affordable and fast. Modern technology, but it still feels personal.',
    name: 'Sofia Martins',
    detail: 'Retainers · 6 months',
    avatar: `${import.meta.env.BASE_URL}images/patient-woman.jpg`,
  },
]

export default function Results() {
  const [index, setIndex] = useState(0)
  const t = testimonials[index]
  const go = (dir) => setIndex((i) => (i + dir + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="results container" aria-labelledby="results-title">
      <div className="results__head">
        <div>
          <span className="tag">Patient Results</span>
          <h2 id="results-title" className="section-title">
            Healthy smiles, <span className="muted">measured one visit at a time.</span>
          </h2>
        </div>
        <div className="arrows">
          <button type="button" className="arrow-btn" onClick={() => go(-1)} aria-label="Previous testimonial">
            <ArrowLeft width={14} height={14} />
          </button>
          <button type="button" className="arrow-btn arrow-btn--accent" onClick={() => go(1)} aria-label="Next testimonial">
            <ArrowRight width={14} height={14} />
          </button>
        </div>
      </div>

      <div className="results__grid">
        <figure className="results__photo">
          <img src={`${import.meta.env.BASE_URL}images/results-smile.jpg`} alt="Close-up of a woman with a bright, healthy smile" loading="lazy" />
        </figure>

        <article className="stat-card">
          <p className="stat-card__value">98%</p>
          <p className="stat-card__label">Positive Oral Health<br />Experience</p>
          <div className="bars" role="img" aria-label="Positive experience by month: March 62%, April 88%, May 74%">
            {bars.map((b) => (
              <div key={b.month} className="bars__col">
                <span className="bars__bar" style={{ '--h': `${b.value}%` }} />
                <span className="bars__month">{b.month}</span>
              </div>
            ))}
          </div>
        </article>

        <figure className="quote-card" aria-live="polite">
          <blockquote>
            <p>
              &ldquo;{t.quote}&rdquo;
            </p>
          </blockquote>
          <figcaption>
            <img src={t.avatar} alt="" loading="lazy" />
            <span>
              <b>{t.name}</b>
              <small>{t.detail}</small>
            </span>
            <span className="quote-card__stars" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} width={11} height={11} className="star" />
              ))}
            </span>
          </figcaption>
          <p className="quote-card__count">
            {String(index + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
          </p>
        </figure>
      </div>
    </section>
  )
}
