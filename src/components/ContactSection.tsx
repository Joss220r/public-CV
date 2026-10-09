import type { Contact } from '../types/cv'
import { SectionHeading } from './SectionHeading'

interface ContactSectionProps {
  contact: Contact
  number: string
}

interface ContactLink {
  label: string
  value: string
  href: string
  external: boolean
}

export function hasVisibleContact(contact: Contact) {
  return Boolean(contact.email || contact.github || contact.linkedin)
}

export function ContactSection({ contact, number }: ContactSectionProps) {
  const links: ContactLink[] = [
    contact.email
      ? { label: 'Correo', value: contact.email, href: `mailto:${contact.email}`, external: false }
      : null,
    contact.github
      ? { label: 'GitHub', value: 'Perfil de GitHub', href: contact.github, external: true }
      : null,
    contact.linkedin
      ? { label: 'LinkedIn', value: 'Perfil de LinkedIn', href: contact.linkedin, external: true }
      : null,
  ].filter((link): link is ContactLink => link !== null)

  if (links.length === 0) {
    return null
  }

  return (
    <section id="contacto" className="section-shell scroll-mt-24">
      <SectionHeading
        eyebrow={`${number} / Contacto`}
        title="Conectemos y conversemos."
        description="Encontrá mis canales profesionales a continuación."
      />
      <div className="grid gap-10 lg:grid-cols-[12rem_1fr]">
        <div className="hidden lg:block" />
        <ul className="grid gap-3">
          {links.map((link) => (
            <li key={link.label}>
              <a
                className="group flex min-h-20 items-center justify-between rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-4 transition duration-300 hover:border-violet-400/40 hover:bg-violet-500/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 sm:px-7"
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
              >
                <span>
                  <span className="block font-mono text-xs uppercase tracking-[0.18em] text-violet-300">{link.label}</span>
                  <span className="mt-1 block break-all text-base text-zinc-300 group-hover:text-white">{link.value}</span>
                </span>
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/10 font-mono text-xs text-zinc-400 group-hover:border-violet-400/40 group-hover:text-violet-300" aria-hidden="true">
                  {link.label.slice(0, 2).toUpperCase()}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
