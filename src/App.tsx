'use client'

import { useEffect, useState } from 'react'
import { ContactSection, hasVisibleContact } from './components/ContactSection'
import { EducationSection } from './components/EducationSection'
import { ExperienceSection } from './components/ExperienceSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { ProjectsSection } from './components/ProjectsSection'
import { SectionHeading } from './components/SectionHeading'
import { SkillsSection } from './components/SkillsSection'
import { cvData } from './content/cv'
import { detectLanguage, isSupportedLanguage, siteCopy, supportedLanguages } from './content/translations'
import type { Language } from './types/cv'

const languageStorageKey = 'jose-ayala-portfolio-language'

function easeInOutCubic(progress: number) {
  return progress < 0.5
    ? 4 * progress * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 3) / 2
}

function focusDestination(destination: HTMLElement) {
  const hadTabIndex = destination.hasAttribute('tabindex')

  if (!hadTabIndex) {
    destination.setAttribute('tabindex', '-1')
  }

  destination.focus({ preventScroll: true })

  if (!hadTabIndex) {
    destination.addEventListener('blur', () => destination.removeAttribute('tabindex'), { once: true })
  }
}

function App() {
  const [language, setLanguage] = useState<Language>('en')
  const data = cvData[language]
  const copy = siteCopy[language]

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem(languageStorageKey)
    setLanguage(isSupportedLanguage(savedLanguage) ? savedLanguage : detectLanguage(window.navigator.language))
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  useEffect(() => {
    let animationFrame = 0

    const cancelAnimation = () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame)
        animationFrame = 0
      }
    }

    const navigateToSection = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return
      }

      const source = event.target

      if (!(source instanceof Element)) {
        return
      }

      const anchor = source.closest<HTMLAnchorElement>('a[href^="#"]')
      const hash = anchor?.getAttribute('href')

      if (!anchor || !hash || hash === '#' || anchor.classList.contains('skip-link')) {
        return
      }

      const destination = document.getElementById(decodeURIComponent(hash.slice(1)))

      if (!destination) {
        return
      }

      event.preventDefault()
      cancelAnimation()

      if (window.location.hash !== hash) {
        window.history.pushState(null, '', hash)
      }

      const startPosition = window.scrollY
      const scrollMargin = Number.parseFloat(window.getComputedStyle(destination).scrollMarginTop) || 0
      const destinationPosition = Math.max(
        0,
        destination.getBoundingClientRect().top + startPosition - scrollMargin,
      )

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        window.scrollTo({ top: destinationPosition, behavior: 'auto' })
        focusDestination(destination)
        return
      }

      const distance = destinationPosition - startPosition
      const duration = Math.min(1300, Math.max(800, Math.abs(distance) * 0.25))
      let startedAt: number | undefined

      const move = (timestamp: number) => {
        startedAt ??= timestamp
        const progress = Math.min((timestamp - startedAt) / duration, 1)
        window.scrollTo(0, startPosition + distance * easeInOutCubic(progress))

        if (progress < 1) {
          animationFrame = window.requestAnimationFrame(move)
        } else {
          animationFrame = 0
          focusDestination(destination)
        }
      }

      animationFrame = window.requestAnimationFrame(move)
    }

    document.addEventListener('click', navigateToSection)
    window.addEventListener('wheel', cancelAnimation, { passive: true })
    window.addEventListener('touchstart', cancelAnimation, { passive: true })

    return () => {
      cancelAnimation()
      document.removeEventListener('click', navigateToSection)
      window.removeEventListener('wheel', cancelAnimation)
      window.removeEventListener('touchstart', cancelAnimation)
    }
  }, [])

  const changeLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage)
    window.localStorage.setItem(languageStorageKey, nextLanguage)
  }

  const sections = [
    { id: 'perfil', label: copy.navigation.profile, visible: true },
    { id: 'experiencia', label: copy.navigation.experience, visible: data.experience.length > 0 },
    { id: 'estudios', label: copy.navigation.education, visible: data.education.length > 0 },
    { id: 'habilidades', label: copy.navigation.skills, visible: data.skillGroups.length > 0 },
    { id: 'proyectos', label: copy.navigation.projects, visible: data.projects.length > 0 },
    { id: 'contacto', label: copy.navigation.contact, visible: hasVisibleContact(data.contact) },
  ].filter((section) => section.visible)

  const navigation = sections.map((section) => ({
    label: section.label,
    href: `#${section.id}`,
  }))

  const sectionNumber = (id: string) =>
    String(sections.findIndex((section) => section.id === id) + 1).padStart(2, '0')

  return (
    <div className="min-h-screen overflow-hidden bg-ink text-zinc-100">
      <a className="skip-link" href="#contenido">
        {copy.skipToContent}
      </a>
      <Header
        name={data.shortName}
        items={navigation}
        language={language}
        languageOptions={supportedLanguages.map((value) => ({ value, label: siteCopy[value].languageName }))}
        copy={copy.header}
        onLanguageChange={changeLanguage}
      />

      <main id="contenido">
        <section
          id="inicio"
          className="relative isolate flex min-h-screen items-center overflow-hidden border-b border-white/5 px-5 pb-16 pt-28 sm:px-8 lg:px-12"
        >
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-grid" aria-hidden="true" />
          <div className="relative mx-auto grid w-full max-w-7xl gap-16 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-center">
            <div className="max-w-4xl">
              <p className="reveal reveal-1 mb-7 inline-flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">
                <span className="h-px w-10 bg-violet-400" aria-hidden="true" />
                {data.role} · {data.country}
              </p>
              <h1 className="reveal reveal-2 text-balance text-[clamp(3.4rem,10vw,8.5rem)] font-semibold leading-[0.86] tracking-[-0.075em] text-white">
                {data.name}
              </h1>
              <p className="reveal reveal-3 mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
                {copy.hero.description}
              </p>
              <div className="reveal reveal-4 mt-10 flex flex-wrap gap-3">
                <a className="primary-link" href="#perfil">
                  {copy.hero.profileAction}
                </a>
                <a className="secondary-link" href="#habilidades">
                  {copy.hero.skillsAction}
                </a>
              </div>
            </div>

            <div className="reveal reveal-4 relative hidden min-h-[26rem] lg:block" aria-hidden="true">
              <div className="absolute right-0 top-1/2 w-full -translate-y-1/2 rounded-[2rem] border border-white/10 bg-white/[0.025] p-5 shadow-glow backdrop-blur-sm">
                <div className="mb-16 flex items-center justify-between font-mono text-[0.7rem] uppercase tracking-[0.18em] text-zinc-500">
                  <span>ios.dev</span>
                  <span>gt</span>
                </div>
                <p className="font-mono text-7xl font-semibold tracking-[-0.08em] text-white">JA</p>
                <div className="mt-5 h-px bg-gradient-to-r from-violet-400 to-transparent" />
                <div className="mt-5 flex items-end justify-between">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-violet-300">{copy.hero.nativeLabel}</p>
                  <span className="size-3 rounded-full bg-violet-400 shadow-[0_0_20px_rgba(169,120,255,0.8)]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="perfil" className="section-shell scroll-mt-24">
          <SectionHeading eyebrow={`${sectionNumber('perfil')} / ${copy.navigation.profile}`} title={copy.profile.title} />
          <div className="grid gap-10 lg:grid-cols-[12rem_1fr]">
            <div className="hidden lg:block" />
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(15rem,0.6fr)]">
              <p className="max-w-3xl text-balance text-2xl leading-[1.45] tracking-[-0.025em] text-zinc-200 sm:text-3xl">
                {data.profile}
              </p>
              <dl className="grid content-start gap-5 border-l border-white/10 pl-6">
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">{copy.profile.specialty}</dt>
                  <dd className="mt-2 text-base text-white">{data.role}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">{copy.profile.location}</dt>
                  <dd className="mt-2 text-base text-white">{data.country}</dd>
                </div>
                {data.availability && (
                  <div>
                    <dt className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">{copy.profile.availability}</dt>
                    <dd className="mt-2 text-base text-white">{data.availability}</dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        </section>

        <ExperienceSection
          items={data.experience}
          number={sectionNumber('experiencia')}
          label={copy.navigation.experience}
          copy={copy.experience}
        />
        <EducationSection
          items={data.education}
          number={sectionNumber('estudios')}
          label={copy.navigation.education}
          copy={copy.education}
        />
        <SkillsSection
          groups={data.skillGroups}
          number={sectionNumber('habilidades')}
          label={copy.navigation.skills}
          copy={copy.skills}
        />
        <ProjectsSection
          items={data.projects}
          number={sectionNumber('proyectos')}
          label={copy.navigation.projects}
          copy={copy.projects}
        />
        <ContactSection
          contact={data.contact}
          number={sectionNumber('contacto')}
          label={copy.navigation.contact}
          copy={copy.contact}
        />
      </main>

      <Footer name={data.shortName} role={data.role} country={data.country} />
    </div>
  )
}

export default App
