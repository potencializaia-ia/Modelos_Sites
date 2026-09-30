import { useEffect, useMemo, useRef, useState } from 'react'
import { Close, Search, Star } from './Icons.jsx'
import { formatPrice, menu, menuNotice } from '../data/menu.js'

const ALL = 'todas'

const normalize = (s = '') =>
  s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[’']/g, '').toLowerCase()

export default function Menu() {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(ALL)
  const sectionRef = useRef(null)

  // Links como "#cat-xis" (vindos dos destaques) filtram a categoria e rolam até o cardápio.
  useEffect(() => {
    const applyHash = () => {
      const match = window.location.hash.match(/^#cat-(.+)$/)
      if (!match || !menu.some((c) => c.id === match[1])) return
      setQuery('')
      setActive(match[1])
      requestAnimationFrame(() => sectionRef.current?.scrollIntoView({ block: 'start' }))
    }
    applyHash()
    window.addEventListener('hashchange', applyHash)
    return () => window.removeEventListener('hashchange', applyHash)
  }, [])

  const results = useMemo(() => {
    const q = normalize(query.trim())
    return menu
      .filter((c) => active === ALL || c.id === active)
      .map((c) => ({
        ...c,
        items: q
          ? c.items.filter((i) => normalize(`${i.name} ${i.desc ?? ''} ${c.title}`).includes(q))
          : c.items,
      }))
      .filter((c) => c.items.length > 0)
  }, [query, active])

  const count = results.reduce((n, c) => n + c.items.length, 0)
  const filtering = query.trim() !== '' || active !== ALL

  const reset = () => {
    setQuery('')
    setActive(ALL)
  }

  return (
    <section id="cardapio" ref={sectionRef} className="menu section" aria-labelledby="cardapio-title">
      <div className="container">
        <header className="section-head section-head--center">
          <p className="eyebrow">Cardápio</p>
          <h2 id="cardapio-title" className="section-title">Cardápio completo</h2>
          <p className="section-lead">
            Lanches, xis, pratos, filés e bebidas. Busque pelo nome ou escolha uma categoria.
          </p>
        </header>

        <div className="menu__toolbar">
          <div className="menu__search">
            <Search className="menu__search-icon" />
            <label htmlFor="busca-cardapio" className="sr-only">Buscar no cardápio</label>
            <input
              id="busca-cardapio"
              type="search"
              placeholder="Buscar: xis, filé, café…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoComplete="off"
            />
            {query && (
              <button type="button" className="menu__clear" onClick={() => setQuery('')} aria-label="Limpar busca">
                <Close width={16} height={16} />
              </button>
            )}
          </div>

          <div className="menu__chips" role="group" aria-label="Filtrar por categoria">
            {[{ id: ALL, title: 'Todas' }, ...menu].map((c) => (
              <button
                key={c.id}
                type="button"
                className={`chip${active === c.id ? ' is-active' : ''}`}
                aria-pressed={active === c.id}
                onClick={() => setActive(c.id)}
              >
                {c.title}
              </button>
            ))}
          </div>
        </div>

        <p className="menu__status" aria-live="polite">
          {filtering ? `${count} ${count === 1 ? 'item encontrado' : 'itens encontrados'}` : ''}
          {filtering && count > 0 && (
            <button type="button" className="link-btn" onClick={reset}>Limpar filtros</button>
          )}
        </p>

        {results.length === 0 ? (
          <div className="menu__empty">
            <p>Nenhum item encontrado para &ldquo;{query}&rdquo;.</p>
            <button type="button" className="btn btn--outline" onClick={reset}>Ver cardápio completo</button>
          </div>
        ) : (
          <div className="menu__cats">
            {results.map((cat) => (
              <section key={cat.id} id={`cat-${cat.id}`} className="menu-cat" aria-labelledby={`cat-title-${cat.id}`}>
                <header className="menu-cat__head">
                  <h3 id={`cat-title-${cat.id}`}>{cat.title}</h3>
                  {cat.notice && <p className="notice">{cat.notice}</p>}
                </header>
                <ul className="menu-cat__list">
                  {cat.items.map((item) => (
                    <li key={item.id} className={`menu-item${item.featured ? ' is-featured' : ''}`}>
                      {item.featured && (
                        <span className="menu-item__badge"><Star width={12} height={12} /> Especialidade da casa</span>
                      )}
                      <div className="menu-item__row">
                        <span className="menu-item__name">{item.name}</span>
                        <span className="menu-item__dots" aria-hidden="true" />
                        <span className="menu-item__price">{formatPrice(item.price)}</span>
                      </div>
                      {item.desc && <p className="menu-item__desc">{item.desc}</p>}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        )}

        <p className="menu__notice">{menuNotice}</p>
      </div>
    </section>
  )
}
