import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'
import { ArrowRight, ArrowUpRight, Close, Menu, Star } from './Icons.jsx'

const links = [
  { label: 'Home', href: '#top' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

const treatments = ['Dental Checkups', 'Teeth Cleaning', 'Tooth Filling', 'Gum Treatment', 'Retainers']

const pad = (n) => String(n).padStart(2, '0')

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const step = (dir) => setActive((i) => (i + dir + treatments.length) % treatments.length)

  return (
    <header id="top" className="hero-wrap container">
      <div className="hero">
        <img
          className="hero__photo"
          src={`${import.meta.env.BASE_URL}images/hero-patient.jpg`}
          alt="Smiling patient in the dental chair while a gloved dentist examines her teeth with a mirror"
          fetchPriority="high"
        />
        <div className="hero__shade" aria-hidden="true" />

        <nav className="hero__nav" aria-label="Main">
          <Logo className="logo--light" />

          <ul className="nav-pills">
            {links.map((l, i) => (
              <li key={l.href}>
                <a href={l.href} className={`pill pill--glass${i === 0 ? ' is-active' : ''}`} aria-current={i === 0 ? 'page' : undefined}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn-call">Book a Call</a>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <Close width={18} height={18} /> : <Menu width={18} height={18} />}
          </button>

          <div id="mobile-menu" className={`mobile-menu${menuOpen ? ' is-open' : ''}`} hidden={!menuOpen}>
            <ul>
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn-dark" onClick={() => setMenuOpen(false)}>Book a Call</a>
          </div>
        </nav>

        <div className="hero__content">
          <h1 className="hero__title">
            Family-Friendly
            <span>Dental Care</span>
          </h1>
          <p className="hero__lead">
            Permanent, comfortable and affordable care that restores missing teeth and keeps every smile in the family confident and healthy.
          </p>
          <a href="#contact" className="btn-appointment">
            Book an Appointment
            <span className="btn-appointment__icon"><ArrowRight width={14} height={14} /></span>
          </a>
        </div>

        <a href="#about" className="hero-card">
          <img src={`${import.meta.env.BASE_URL}images/hero-card.jpg`} alt="" />
          <span className="hero-card__text">Restore natural health and a confident smile.</span>
          <span className="hero-card__meta">
            <span className="hero-card__rating">
              <Star width={11} height={11} className="star" /> 4.9 <small>(Rating)</small>
            </span>
            <ArrowUpRight width={13} height={13} />
          </span>
        </a>

        <ul className="hero__tags" aria-label="Treatments">
          {treatments.map((t, i) => (
            <li key={t}>
              <button
                type="button"
                className={`pill pill--glass pill--sm${i === active ? ' is-active' : ''}`}
                aria-pressed={i === active}
                onClick={() => setActive(i)}
              >
                {t}
              </button>
            </li>
          ))}
        </ul>

        <div className="hero__bar">
          <span className="hero__bar-left">Your Teeth Our Science</span>
          <div className="hero__pager">
            <button type="button" onClick={() => step(-1)}>Previous</button>
            <span aria-live="polite">
              <b>{pad(active + 1)}</b> / {pad(treatments.length)}
            </span>
            <button type="button" onClick={() => step(1)}>Next</button>
          </div>
          <a href="#about" className="hero__bar-right">Scroll for More</a>
        </div>
      </div>
    </header>
  )
}
