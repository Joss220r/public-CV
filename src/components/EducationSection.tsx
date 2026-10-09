import type { Education } from '../types/cv'
import { SectionHeading } from './SectionHeading'

interface EducationSectionProps {
  items: Education[]
  number: string
}

function formatPeriod(startDate?: string, endDate?: string) {
  return [startDate, endDate].filter(Boolean).join(' — ')
}

export function EducationSection({ items, number }: EducationSectionProps) {
  const visibleItems = items.filter((item) => item.degree && item.institution)

  if (visibleItems.length === 0) {
    return null
  }

  return (
    <section id="estudios" className="section-shell scroll-mt-24">
      <SectionHeading eyebrow={`${number} / Estudios`} title="Formación académica." />
      <div className="grid gap-10 lg:grid-cols-[12rem_1fr]">
        <div className="hidden lg:block" />
        <div className="grid gap-4">
          {visibleItems.map((item) => {
            const period = formatPeriod(item.startDate, item.endDate)
            const details = item.details?.filter(Boolean) ?? []

            return (
              <article className="content-card group" key={`${item.degree}-${item.institution}`}>
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">
                      {item.institution}
                    </p>
                    <h3 className="text-xl font-semibold tracking-[-0.025em] text-white sm:text-2xl">
                      {item.degree}
                    </h3>
                  </div>
                  {period && <p className="shrink-0 font-mono text-xs text-zinc-500">{period}</p>}
                </div>
                {details.length > 0 && (
                  <ul className="mt-6 grid gap-3 text-base leading-7 text-zinc-400">
                    {details.map((detail) => (
                      <li className="flex gap-3" key={detail}>
                        <span className="mt-[0.7rem] size-1.5 shrink-0 rounded-full bg-violet-400" aria-hidden="true" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
