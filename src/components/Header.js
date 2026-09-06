import Link from 'next/link'
import ThemeToggle from '@/components/ThemeToggle'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">

        <Link
          href="/"
          className="text-xl font-bold tracking-tight transition-opacity hover:opacity-70 sm:text-2xl"
        >
          Sudeep
          <span className="text-muted-foreground">.</span>
        </Link>

        <div className="flex items-center gap-4">

          <Link
            href="/"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>

          <Link
            href="/posts"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Posts
          </Link>

          <a
            href="https://sudeepsilwal.com.np"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground transition-all hover:border-foreground hover:text-foreground sm:block"
          >
            Portfolio ↗
          </a>

          <ThemeToggle />

        </div>

      </nav>
    </header>
  )
}
