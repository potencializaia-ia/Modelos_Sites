import { useState } from 'react'
import Logo from './Logo.jsx'
import { Facebook, Instagram, Mail, XLogo, Youtube } from './Icons.jsx'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const socials = [
  { label: 'Facebook', Icon: Facebook },
  { label: 'Instagram', Icon: Instagram },
  { label: 'X', Icon: XLogo },
  { label: 'YouTube', Icon: Youtube },
]

const nav = [
  { label: 'Home', href: '#top' },
  { label: 'About Us', href: '#about' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState({ type: 'idle', message: '' })

  const onSubmit = (e) => {
    e.preventDefault()
    if (!EMAIL_RE.test(email.trim())) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' })
      return
    }
    setStatus({ type: 'success', message: 'Thanks! Your first oral health tips are on the way.' })
    setEmail('')
  }

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer__cta">
          <div className="footer__cta-copy">
            <span className="tag">Contact</span>
            <h2 className="section-title">
              Ready for a healthier smile? <span className="muted">Book a free assessment today.</span>
            </h2>
          </div>

          <div className="newsletter">
            <p>Join our newsletter to receive the latest oral health tips, special offers and clinic updates.</p>
            <form className="newsletter__form" onSubmit={onSubmit} noValidate>
              <label htmlFor="newsletter-email" className="sr-only">Your email address</label>
              <Mail width={14} height={14} className="newsletter__icon" />
              <input
                id="newsletter-email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (status.type === 'error') setStatus({ type: 'idle', message: '' })
                }}
                aria-invalid={status.type === 'error'}
                aria-describedby="newsletter-status"
              />
              <button type="submit" className="btn-subscribe">Subscribe</button>
            </form>
            <p id="newsletter-status" className={`newsletter__status is-${status.type}`} role="status">
              {status.message}
            </p>
          </div>
        </div>

        <div className="footer__main">
          <div className="footer__brand">
            <Logo />
            <p>Family-friendly dental care with modern technology and a gentle touch.</p>
          </div>

          <nav className="footer__nav" aria-label="Footer">
            <p className="footer__label">Explore</p>
            <ul>
              {nav.map((n) => (
                <li key={n.href}><a href={n.href}>{n.label}</a></li>
              ))}
            </ul>
          </nav>

          <div className="footer__contact">
            <p className="footer__label">We&rsquo;d love to help you with care</p>
            <a className="footer__email" href="mailto:hello@dentora.com">hello@dentora.com</a>
            <p className="footer__label footer__label--follow">Follow Us</p>
            <ul className="socials">
              {socials.map(({ label, Icon }) => (
                <li key={label}>
                  <a href="#top" aria-label={label}><Icon width={13} height={13} /></a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="footer__word" aria-hidden="true">Dentora</p>

        <div className="footer__bottom">
          <span>&copy; {new Date().getFullYear()} Dentora. All rights reserved.</span>
          <span>Terms &amp; Policy</span>
        </div>
      </div>
    </footer>
  )
}
