import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-5 py-24">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-sm font-medium text-muted-foreground">
          404
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Post not found
        </h1>

        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          The article you’re looking for doesn’t exist or may have been moved.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
  href="/posts"
  className="rounded-lg bg-black px-5 py-3 text-sm font-medium !text-white transition-colors hover:bg-gray-800 dark:bg-white dark:!text-black dark:hover:bg-gray-200"
>
  Browse posts
</Link>

          <Link
            href="/"
            className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
          >
            Go home
          </Link>
        </div>
      </div>
    </main>
  )
}