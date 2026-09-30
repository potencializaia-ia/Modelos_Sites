export default function Logo({ tone = 'light', as: Tag = 'a', href = '#inicio' }) {
  return (
    <Tag href={Tag === 'a' ? href : undefined} className={`logo logo--${tone}`} aria-label="D’Gustame Restaurante — início">
      <span className="logo__script">D&rsquo;gustame</span>
      <span className="logo__sub">Restaurante</span>
    </Tag>
  )
}
