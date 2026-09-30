import { PlateCutlery } from './Icons.jsx'

/**
 * Mostra a foto real quando `photo.src` existe; caso contrário, um espaço
 * temporário claramente identificado para substituição (ver src/data/photos.js).
 */
export default function Photo({ photo, className = '', priority = false }) {
  if (photo.src) {
    return (
      <div className={`photo ${className}`}>
        <img
          src={photo.src}
          alt={photo.alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : undefined}
          decoding="async"
        />
      </div>
    )
  }

  return (
    <div className={`photo photo--placeholder ${className}`} role="img" aria-label={`Foto temporária: ${photo.hint}`}>
      <div className="photo__ph">
        <PlateCutlery className="photo__icon" />
        <span className="photo__badge">Foto temporária</span>
        <span className="photo__hint">{photo.hint}</span>
      </div>
    </div>
  )
}
