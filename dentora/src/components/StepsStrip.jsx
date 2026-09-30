const steps = ['Smile Assessment', 'Care Planning', 'Treatment Process', 'Dental Maintenance']

export default function StepsStrip() {
  return (
    <section className="steps container" aria-label="Our care process">
      <ol className="steps__list">
        {steps.map((step) => (
          <li key={step} className="steps__item">
            <span className="steps__hatch" aria-hidden="true" />
            <span className="steps__label">{step}</span>
          </li>
        ))}
        <li className="steps__tail" aria-hidden="true"><span className="steps__hatch" /></li>
      </ol>
    </section>
  )
}
