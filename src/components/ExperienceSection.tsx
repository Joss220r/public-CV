import type { Experience } from '../types/cv'
import { SectionHeading } from './SectionHeading'

interface ExperienceSectionProps {
  items: Experience[]
  number: string
}

function formatPeriod(startDate?: string, endDate?: string) {
  return [startDate, endDate].filter(Boolean).join(' — ')
}

export function ExperienceSection({ items, number }: ExperienceSectionProps) {
  const visibleItems = items.filter((item) => item.company && item.role)

  if (visibleItems.length === 0) {
    return null
  }

  return (
    <section id="experiencia" className="section-shell scroll-mt-24">
      <SectionHeading eyebrow={`${number} / Experiencia`} title="Trabajo y evolución profesional." />
      <div className="grid gap-10 lg:grid-cols-[12rem_1fr]">
        <div className="hidden lg:block" />
        <div className="relative grid gap-5 before:absolute before:bottom-8 before:left-[0.38rem] before:top-8 before:w-px before:bg-white/10 sm:before:left-[0.48rem]">
          {visibleItems.map((item) => {
            const period = formatPeriod(item.startDate, item.endDate)
            const description = item.description?.filter(Boolean) ?? []
            const technologies = item.technologies?.filter(Boolean) ?? []

            return (
              <article className="relative grid grid-cols-[1rem_1fr] gap-5 sm:grid-cols-[1.25rem_1fr] sm:gap-7" key={`${item.company}-${item.role}`}>
                <span className="relative z-10 mt-8 size-3 rounded-full border-2 border-violet-400 bg-ink shadow-[0_0_0_5px_#08070d] sm:size-4" aria-hidden="true" />
                <div className="content-card">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">
                        {item.company}
                      </p>
                      <h3 className="text-xl font-semibold tracking-[-0.025em] text-white sm:text-2xl">{item.role}</h3>
                      {item.location && <p className="mt-2 text-sm text-zinc-500">{item.location}</p>}
                    </div>
                    {period && <p className="shrink-0 font-mono text-xs text-zinc-500">{period}</p>}
                  </div>
                  {description.length > 0 && (
                    <ul className="mt-6 grid gap-3 text-base leading-7 text-zinc-400">
                      {description.map((detail) => (
                        <li className="flex gap-3" key={detail}>
                          <span className="mt-[0.7rem] size-1.5 shrink-0 rounded-full bg-violet-400" aria-hidden="true" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {technologies.length > 0 && (
                    <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tecnologías utilizadas">
                      {technologies.map((technology) => (
                        <li className="tech-pill" key={technology}>{technology}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
