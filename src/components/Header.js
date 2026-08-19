import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-border">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">

        <Link
          href="/"
          className="font-serif text-2xl font-bold tracking-tight"
        >
          Sudeep<span className="text-muted-foreground"></span>
        </Link>

        <div className="flex items-center gap-6 text-sm text-muted-foreground">

          <Link
            href="/"
            className="transition-colors hover:text-foreground"
          >
            Home
          </Link>

          <Link
            href="/posts"
            className="transition-colors hover:text-foreground"
          >
            Posts
          </Link>

          <a
            href="https://sudeepsilwal.com.np"
            className="transition-colors hover:text-foreground"
          >
            Portfolio
          </a>

        </div>

      </nav>
    </header>
  )
}