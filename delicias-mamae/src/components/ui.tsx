import { useEffect, useRef, useState, type ElementType, type ReactNode, type SVGProps } from 'react'

/* ---------- Ícones de marca (Lucide não inclui logotipos de marcas) ---------- */
export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...props}>
      <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.97L2 22l5.17-1.5A9.9 9.9 0 1 0 12.04 2zm0 18.1a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.07.9.9-3-.2-.31a8.2 8.2 0 1 1 6.85 3.74zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.55.12-.16.25-.63.8-.78.97-.14.16-.29.18-.53.06a6.7 6.7 0 0 1-3.34-2.92c-.25-.43.25-.4.72-1.34.08-.16.04-.3-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47a.9.9 0 0 0-.65.3 2.73 2.73 0 0 0-.85 2.03 4.74 4.74 0 0 0 1 2.52 10.86 10.86 0 0 0 4.16 3.68c1.55.67 2.16.73 2.93.61.47-.07 1.46-.6 1.66-1.17.2-.58.2-1.07.14-1.17-.06-.1-.22-.16-.47-.28z" />
    </svg>
  )
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function HeartMini({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M12 20.5s-7.5-4.6-9.3-9.2C1.4 8 3.4 4.5 6.9 4.5c2 0 3.5 1.1 5.1 3 1.6-1.9 3.1-3 5.1-3 3.5 0 5.5 3.5 4.2 6.8-1.8 4.6-9.3 9.2-9.3 9.2z" />
    </svg>
  )
}

/* ---------- Ramo floral delicado (usado só em cantos de algumas seções) ---------- */
export function FloralSprig({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 160" className={className} fill="none" aria-hidden="true" focusable="false">
      <path d="M20 150C50 120 70 90 88 40" stroke="#879078" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M52 112c-14-2-24-10-28-22 14 0 24 8 28 22zM66 88c12-8 16-20 14-32-11 7-16 19-14 32zM44 128c-10 6-22 6-32 0 9-8 21-9 32 0z" fill="#879078" opacity=".55" />
      <path d="M76 70c-12-4-19-13-20-24 12 2 19 11 20 24z" fill="#879078" opacity=".4" />
      <g fill="#E8A8B5">
        <circle cx="88" cy="38" r="7" />
        <circle cx="98" cy="30" r="6" opacity=".85" />
        <circle cx="80" cy="28" r="6" opacity=".85" />
        <circle cx="92" cy="22" r="5" opacity=".7" />
      </g>
      <circle cx="89" cy="31" r="3" fill="#C97F91" />
      <g fill="#F8DDE3">
        <circle cx="104" cy="54" r="4" />
        <circle cx="70" cy="50" r="3.5" />
      </g>
    </svg>
  )
}

/* ---------- Logotipo ---------- */
export function Logo({ tone = 'dark', className = '' }: { tone?: 'dark' | 'light'; className?: string }) {
  const light = tone === 'light'
  return (
    <a href="#inicio" className={`group inline-flex items-center gap-2.5 rounded-lg ${className}`} aria-label="Delícias e Sabores da Mamãe — início">
      <span className={`grid size-11 shrink-0 place-items-center rounded-full ${light ? 'bg-white/10' : 'bg-rose-light'} transition group-hover:scale-105`}>
        <svg viewBox="0 0 32 32" className="size-8" aria-hidden="true">
          <circle cx="16" cy="13" r="7.5" fill={light ? '#FFF4F6' : '#5A332A'} />
          <g fill={light ? '#E8A8B5' : '#B9784D'}>
            <circle cx="13" cy="10.5" r="1.1" /><circle cx="17.5" cy="9" r="1.1" /><circle cx="19.5" cy="13" r="1.1" /><circle cx="14" cy="14.5" r="1.1" /><circle cx="16.5" cy="17" r="1" />
          </g>
          <path d="M7.5 16h17l-2.3 9.5H9.8z" fill="#E8A8B5" />
          <path d="M10.5 16l.9 9.5M14.3 16l.3 9.5M17.7 16l-.3 9.5M21.5 16l-.9 9.5" stroke="#C97F91" strokeWidth=".9" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`text-[10.5px] font-bold tracking-[0.2em] uppercase ${light ? 'text-blush' : 'text-rose-ink'}`}>
          Delícias e Sabores
        </span>
        <span className={`mt-1 font-serif text-[22px] ${light ? 'text-white' : 'text-choco-dark'}`}>da Mamãe</span>
      </span>
    </a>
  )
}

/* ---------- Título de seção ---------- */
export function SectionHeading({
  eyebrow,
  title,
  text,
  align = 'center',
  id,
}: {
  eyebrow?: string
  title: ReactNode
  text?: ReactNode
  align?: 'center' | 'left'
  id?: string
}) {
  const center = align === 'center'
  return (
    <header className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p className={`eyebrow ${center ? 'justify-center' : ''}`}>
          <HeartMini className="size-3 text-blush" /> {eyebrow}
        </p>
      )}
      <h2 id={id} className="mt-3 text-[34px] leading-[1.1] sm:text-[42px] lg:text-[48px]">
        {title}
      </h2>
      {text && <p className="mt-4 text-[17px] leading-relaxed text-muted">{text}</p>}
    </header>
  )
}

/* ---------- Entrada suave ao rolar ---------- */
export function Reveal({
  as: Tag = 'div',
  className = '',
  delay = 0,
  children,
}: {
  as?: ElementType
  className?: string
  delay?: number
  children: ReactNode
}) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </Tag>
  )
}
