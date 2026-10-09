interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 grid gap-4 lg:grid-cols-[12rem_1fr] lg:items-start">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">
        {eyebrow}
      </p>
      <div>
        <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
          {title}
        </h2>
        {description && <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">{description}</p>}
      </div>
    </div>
  )
}
