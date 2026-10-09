import { useEffect, useState } from 'react'

interface NavigationItem {
  label: string
  href: string
}

interface HeaderProps {
  name: string
  items: NavigationItem[]
}

export function Header({ name, items }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a
          className="group inline-flex items-center gap-3 rounded-md text-sm font-semibold tracking-tight text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
          href="#inicio"
          aria-label={`${name}, volver al inicio`}
        >
          <span className="grid size-8 place-items-center rounded-lg border border-violet-400/40 bg-violet-500/10 font-mono text-xs text-violet-300 transition-colors group-hover:bg-violet-500/20">
            JA
          </span>
          <span>{name}</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegación principal">
          {items.map((item) => (
            <a
              className="nav-link rounded-sm text-sm text-zinc-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="grid size-10 place-items-center rounded-lg border border-white/10 text-white transition-colors hover:border-violet-400/50 hover:bg-violet-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 md:hidden"
          type="button"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="relative block h-3.5 w-5" aria-hidden="true">
            <span className={`absolute left-0 top-0 h-px w-5 bg-current transition-transform ${isOpen ? 'translate-y-[6px] rotate-45' : ''}`} />
            <span className={`absolute left-0 top-[6px] h-px w-5 bg-current transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`absolute left-0 top-3 h-px w-5 bg-current transition-transform ${isOpen ? '-translate-y-[6px] -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`border-t border-white/5 bg-panel px-5 py-4 md:hidden ${isOpen ? 'block' : 'hidden'}`}
        aria-label="Navegación móvil"
      >
        <div className="mx-auto flex max-w-7xl flex-col">
          {items.map((item) => (
            <a
              className="rounded-lg px-3 py-3 text-base text-zinc-300 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              href={item.href}
              key={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
