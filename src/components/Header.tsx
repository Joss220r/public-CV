'use client'

import { useEffect, useState } from 'react'
import type { Language, SiteCopy } from '../types/cv'

interface NavigationItem {
  label: string
  href: string
}

interface HeaderProps {
  name: string
  items: NavigationItem[]
  language: Language
  languageOptions: Array<{ label: string; value: Language }>
  copy: SiteCopy['header']
  onLanguageChange: (language: Language) => void
}

interface LanguageSelectorProps {
  language: Language
  options: Array<{ label: string; value: Language }>
  label: string
  onChange: (language: Language) => void
}

function LanguageSelector({ language, options, label, onChange }: LanguageSelectorProps) {
  return (
    <label className="relative inline-flex items-center">
      <span className="sr-only">{label}</span>
      <select
        className="min-h-10 cursor-pointer appearance-none rounded-lg border border-white/10 bg-white/[0.035] py-2 pl-3 pr-9 text-sm text-zinc-200 outline-none transition-colors hover:border-violet-400/40 hover:bg-violet-500/10 focus-visible:ring-2 focus-visible:ring-violet-400"
        value={language}
        onChange={(event) => onChange(event.target.value as Language)}
      >
        {options.map((option) => (
          <option className="bg-panel text-white" key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-3 text-[0.65rem] text-violet-300" aria-hidden="true">⌄</span>
    </label>
  )
}

export function Header({ name, items, language, languageOptions, copy, onLanguageChange }: HeaderProps) {
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
          aria-label={`${name}, ${copy.home}`}
        >
          <span className="grid size-8 place-items-center rounded-lg border border-violet-400/40 bg-violet-500/10 font-mono text-xs text-violet-300 transition-colors group-hover:bg-violet-500/20">
            JA
          </span>
          <span>{name}</span>
        </a>

        <div className="hidden items-center gap-6 xl:flex">
          <nav className="flex items-center gap-5" aria-label={copy.mainNavigation}>
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
          <LanguageSelector
            language={language}
            options={languageOptions}
            label={copy.language}
            onChange={onLanguageChange}
          />
        </div>

        <button
          className="grid size-10 place-items-center rounded-lg border border-white/10 text-white transition-colors hover:border-violet-400/50 hover:bg-violet-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 xl:hidden"
          type="button"
          aria-label={isOpen ? copy.closeMenu : copy.openMenu}
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
        className={`border-t border-white/5 bg-panel px-5 py-4 xl:hidden ${isOpen ? 'block' : 'hidden'}`}
        aria-label={copy.mobileNavigation}
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
          <div className="mt-3 flex items-center justify-between border-t border-white/10 px-3 pt-4">
            <span className="text-sm text-zinc-500">{copy.language}</span>
            <LanguageSelector
              language={language}
              options={languageOptions}
              label={copy.language}
              onChange={onLanguageChange}
            />
          </div>
        </div>
      </nav>
    </header>
  )
}
