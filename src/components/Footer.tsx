interface FooterProps {
  name: string
  role: string
  country: string
}

export function Footer({ name, role, country }: FooterProps) {
  return (
    <footer className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-5 py-10 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
      <p>{name}</p>
      <p>{role} · {country}</p>
    </footer>
  )
}
