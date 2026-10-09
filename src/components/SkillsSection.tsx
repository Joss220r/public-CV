import type { SkillGroup } from '../types/cv'
import { SectionHeading } from './SectionHeading'

interface SkillsSectionProps {
  groups: SkillGroup[]
  number: string
}

export function SkillsSection({ groups, number }: SkillsSectionProps) {
  const visibleGroups = groups
    .map((group) => ({ ...group, skills: group.skills.filter(Boolean) }))
    .filter((group) => group.name && group.skills.length > 0)

  if (visibleGroups.length === 0) {
    return null
  }

  return (
    <section id="habilidades" className="section-shell scroll-mt-24">
      <SectionHeading
        eyebrow={`${number} / Habilidades`}
        title="Herramientas para construir en iOS."
      />
      <div className="grid gap-10 lg:grid-cols-[12rem_1fr]">
        <div className="hidden lg:block" />
        <div className="grid gap-4 md:grid-cols-2">
          {visibleGroups.map((group, groupIndex) => (
            <article className="content-card overflow-hidden" key={group.name}>
              <div className="mb-10 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{group.name}</h3>
                <span className="font-mono text-xs text-zinc-600">0{groupIndex + 1}</span>
              </div>
              <ul className="flex flex-wrap gap-2.5" aria-label={`Tecnologías de ${group.name}`}>
                {group.skills.map((skill) => (
                  <li className="tech-pill text-sm" key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
