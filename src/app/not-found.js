import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-5 py-24">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-sm font-medium text-muted-foreground">
          404
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Post not found
        </h1>

        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          The article you’re looking for doesn’t exist or may have been moved.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/posts"
            className="rounded-lg bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            Browse posts
          </Link>

          <Link
            href="/"
            className="rounded-lg border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-muted"
          >
            Go home
          </Link>
        </div>
      </div>
    </main>
  )
}