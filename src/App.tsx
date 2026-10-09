import { ContactSection, hasVisibleContact } from './components/ContactSection'
import { EducationSection } from './components/EducationSection'
import { ExperienceSection } from './components/ExperienceSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { ProjectsSection } from './components/ProjectsSection'
import { SectionHeading } from './components/SectionHeading'
import { SkillsSection } from './components/SkillsSection'
import { cvData } from './content/cv'

function App() {
  const sections = [
    { id: 'perfil', label: 'Perfil', visible: true },
    { id: 'experiencia', label: 'Experiencia', visible: cvData.experience.length > 0 },
    { id: 'estudios', label: 'Estudios', visible: cvData.education.length > 0 },
    { id: 'habilidades', label: 'Habilidades', visible: cvData.skillGroups.length > 0 },
    { id: 'proyectos', label: 'Proyectos', visible: cvData.projects.length > 0 },
    { id: 'contacto', label: 'Contacto', visible: hasVisibleContact(cvData.contact) },
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
        Ir al contenido
      </a>
      <Header name={cvData.shortName} items={navigation} />

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
                {cvData.role} · {cvData.country}
              </p>
              <h1 className="reveal reveal-2 text-balance text-[clamp(3.4rem,10vw,8.5rem)] font-semibold leading-[0.86] tracking-[-0.075em] text-white">
                {cvData.name}
              </h1>
              <p className="reveal reveal-3 mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
                Desarrollo experiencias nativas para el ecosistema Apple con una atención especial al detalle y la claridad.
              </p>
              <div className="reveal reveal-4 mt-10 flex flex-wrap gap-3">
                <a className="primary-link" href="#perfil">
                  Conocer mi perfil
                </a>
                <a className="secondary-link" href="#habilidades">
                  Ver tecnologías
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
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-violet-300">Swift native</p>
                  <span className="size-3 rounded-full bg-violet-400 shadow-[0_0_20px_rgba(169,120,255,0.8)]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="perfil" className="section-shell scroll-mt-24">
          <SectionHeading eyebrow={`${sectionNumber('perfil')} / Perfil`} title="Código nativo, experiencias claras." />
          <div className="grid gap-10 lg:grid-cols-[12rem_1fr]">
            <div className="hidden lg:block" />
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(15rem,0.6fr)]">
              <p className="max-w-3xl text-balance text-2xl leading-[1.45] tracking-[-0.025em] text-zinc-200 sm:text-3xl">
                {cvData.profile}
              </p>
              <dl className="grid content-start gap-5 border-l border-white/10 pl-6">
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">Especialidad</dt>
                  <dd className="mt-2 text-base text-white">{cvData.role}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">Ubicación</dt>
                  <dd className="mt-2 text-base text-white">{cvData.country}</dd>
                </div>
                {cvData.availability && (
                  <div>
                    <dt className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">Disponibilidad</dt>
                    <dd className="mt-2 text-base text-white">{cvData.availability}</dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        </section>

        <ExperienceSection items={cvData.experience} number={sectionNumber('experiencia')} />
        <EducationSection items={cvData.education} number={sectionNumber('estudios')} />
        <SkillsSection groups={cvData.skillGroups} number={sectionNumber('habilidades')} />
        <ProjectsSection items={cvData.projects} number={sectionNumber('proyectos')} />
        <ContactSection contact={cvData.contact} number={sectionNumber('contacto')} />
      </main>

      <Footer name={cvData.shortName} role={cvData.role} country={cvData.country} />
    </div>
  )
}

export default App
