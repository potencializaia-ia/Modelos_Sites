import { useEffect, useState } from 'react'
import { whatsappLink } from '../lib/whatsapp'
import { WhatsAppIcon } from './ui'

/** Botão flutuante: aparece após o hero para não competir com os botões principais. */
export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fazer encomenda pelo WhatsApp (abre em nova aba)"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={`fixed right-4 bottom-4 z-30 grid size-14 place-items-center rounded-full bg-choco text-white shadow-lift ring-4 ring-white transition duration-300 hover:scale-105 hover:bg-choco-dark sm:right-6 sm:bottom-6 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <WhatsAppIcon className="size-7" />
    </a>
  )
}
