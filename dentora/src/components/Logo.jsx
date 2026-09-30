import { Tooth } from './Icons.jsx'

export default function Logo({ href = '#top', className = '' }) {
  return (
    <a href={href} className={`logo ${className}`} aria-label="Dentora — back to top">
      <Tooth width={18} height={18} />
      <span>Dentora</span>
    </a>
  )
}
