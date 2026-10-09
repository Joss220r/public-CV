import type { Project } from '../types/cv'
import { SectionHeading } from './SectionHeading'

interface ProjectsSectionProps {
  items: Project[]
  number: string
}

export function ProjectsSection({ items, number }: ProjectsSectionProps) {
  const visibleItems = items.filter((item) => item.name && item.description)

  if (visibleItems.length === 0) {
    return null
  }

  return (
    <section id="proyectos" className="section-shell scroll-mt-24">
      <SectionHeading eyebrow={`${number} / Proyectos`} title="Productos y exploraciones." />
      <div className="grid gap-10 lg:grid-cols-[12rem_1fr]">
        <div className="hidden lg:block" />
        <div className="grid gap-4 md:grid-cols-2">
          {visibleItems.map((project, index) => {
            const technologies = project.technologies?.filter(Boolean) ?? []

            return (
              <article className="content-card flex min-h-72 flex-col" key={project.name}>
                <div className="mb-10 flex items-start justify-between">
                  <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">
                    Proyecto {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="size-2 rounded-full bg-violet-400 shadow-[0_0_18px_rgba(169,120,255,0.75)]" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.035em] text-white">{project.name}</h3>
                <p className="mt-4 text-base leading-7 text-zinc-400">{project.description}</p>
                {technologies.length > 0 && (
                  <ul className="mt-7 flex flex-wrap gap-2" aria-label={`Tecnologías de ${project.name}`}>
                    {technologies.map((technology) => (
                      <li className="tech-pill" key={technology}>{technology}</li>
                    ))}
                  </ul>
                )}
                {(project.liveUrl || project.repositoryUrl) && (
                  <div className="mt-auto flex flex-wrap gap-5 pt-8">
                    {project.liveUrl && (
                      <a className="text-link" href={project.liveUrl} target="_blank" rel="noreferrer">
                        Ver proyecto
                      </a>
                    )}
                    {project.repositoryUrl && (
                      <a className="text-link" href={project.repositoryUrl} target="_blank" rel="noreferrer">
                        Ver código
                      </a>
                    )}
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
