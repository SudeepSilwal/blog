import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">

        <Link
          href="/"
          className="text-xl font-bold tracking-tight transition-opacity hover:opacity-70 sm:text-2xl"
        >
          Sudeep<span className="text-muted-foreground">.</span>
        </Link>

        <div className="flex items-center gap-4 text-sm sm:gap-7">

          <Link
            href="/"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>

          <Link
            href="/posts"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Posts
          </Link>

          <a
            href="https://sudeepsilwal.com.np"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-3 py-1.5 text-muted-foreground transition-all hover:border-foreground hover:text-foreground sm:px-4"
          >
            Portfolio <span className="hidden sm:inline">↗</span>
          </a>

        </div>

      </nav>
    </header>
  )
}
