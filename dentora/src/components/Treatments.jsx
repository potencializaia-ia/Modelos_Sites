import { Star } from './Icons.jsx'

const SEGMENTS = 32
const PROGRESS = 60

export default function Treatments() {
  const filled = Math.round((SEGMENTS * PROGRESS) / 100)

  return (
    <section id="treatments" className="treatments container" aria-labelledby="treatments-title">
      <div className="treatments__intro">
        <span className="tag">Explore Treatment</span>
        <h2 id="treatments-title" className="section-title">
          Advanced Dental Care <br />for a Healthier Smile
        </h2>
        <p className="section-lead">
          Join hundreds of patients achieving healthier, brighter smiles through expert dental care and personalized treatments.
        </p>

        <article className="doctor">
          <div className="doctor__photo">
            <img src="/images/doctor-daniel.jpg" alt="Portrait of Dr. Daniel Carter" loading="lazy" />
            <img className="doctor__inset" src="/images/clinic-room.jpg" alt="" loading="lazy" />
          </div>
          <div className="doctor__body">
            <h3>Dr. Daniel Carter</h3>
            <p className="doctor__role">Lead Dental Specialist</p>
            <p className="doctor__rating">
              <Star width={12} height={12} className="star" /> 4.9 <span>(45+ reviews)</span>
            </p>
            <p className="doctor__bio">
              Join hundreds of patients achieving healthier, brighter smiles through expert care. Daniel leads our restorative team with 12 years of gentle, evidence-based practice.
            </p>
          </div>
        </article>
      </div>

      <div className="treatments__visual">
        <img
          className="treatments__photo"
          src="/images/clinic-room.jpg"
          alt="Bright modern dental room with treatment chair, overhead light and natural daylight"
          loading="lazy"
        />

        <div className="stats-panel" role="group" aria-label="Clinic statistics">
          <div className="stats-panel__row">
            <div>
              <p className="stats-panel__label">Recommended<br />Checkups per Year</p>
              <p className="stats-panel__value">2 <small>Visits</small></p>
            </div>
            <div>
              <p className="stats-panel__label">Average<br />Treatment Time</p>
              <p className="stats-panel__value">40 <small>Mins</small></p>
            </div>
          </div>
          <div className="stats-panel__progress">
            <p>
              <span>Today&rsquo;s Appointment Progress</span>
              <b>{PROGRESS}%</b>
            </p>
            <div className="ticks" role="progressbar" aria-valuenow={PROGRESS} aria-valuemin={0} aria-valuemax={100} aria-label="Today's appointment progress">
              {Array.from({ length: SEGMENTS }, (_, i) => (
                <span key={i} className={i < filled ? 'is-on' : undefined} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
