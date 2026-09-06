import Link from 'next/link'
import Header from '@/components/Header'
import { posts } from '@/data/posts'

export const metadata = {
  title: 'All Posts',
  description: 'Explore all articles and blog posts.',
}

export default function PostsPage() {
  return (
    <>
      <Header />

      <main className="mx-auto min-h-screen max-w-5xl px-5 pb-24 pt-16 sm:px-6">
        <Link
          href="/"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Back to home
        </Link>

        <section className="mt-10">
          <p className="text-sm font-medium text-muted-foreground">
            Blog
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            All Posts
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            Explore articles about health, technology, web development,
            projects, and other interesting topics.
          </p>
        </section>

        <section className="mt-14 grid gap-6 border-t border-border pt-10 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/posts/${post.slug}`}
              className="group overflow-hidden rounded-2xl border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {post.image && (
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                  <span>{post.category}</span>

                  <span>•</span>

                  <time>{post.date}</time>

                  <span>•</span>

                  <span>{post.readingTime}</span>
                </div>

                <h2 className="mt-4 text-2xl font-bold tracking-tight">
                  {post.title}
                </h2>

                <p className="mt-3 leading-7 text-muted-foreground">
                  {post.excerpt}
                </p>

                <div className="mt-6 text-sm font-semibold transition-transform duration-300 group-hover:translate-x-1">
                  Read article →
                </div>
              </div>
            </Link>
          ))}
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-5xl px-5 py-8 text-center text-sm text-muted-foreground sm:px-6">
          © {new Date().getFullYear()} Sudeep Silwal. All rights reserved.
        </div>
      </footer>
    </>
  )
}
