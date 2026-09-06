import Link from 'next/link'
import Header from '@/components/Header'
import { posts } from '@/data/posts'

export default function Home() {
  const featuredPosts = posts.filter((post) => post.featured)

  return (
    <>
      <Header />

      <main className="min-h-screen px-5 pb-24 pt-16 sm:px-6">
        <div className="mx-auto max-w-5xl">

          {/* Hero Section */}
          <section className="py-16 sm:py-24">
            <p className="text-sm font-medium text-muted-foreground">
              Personal Blog
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
              Thoughts, ideas, and things I learn along the way.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Articles about technology, web development, health, lifestyle,
              projects, and interesting things worth sharing.
            </p>
          </section>

          {/* Featured Posts */}
          <section className="border-t border-border pt-12">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight">
                Latest posts
              </h2>

              <Link
                href="/posts"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                View all →
              </Link>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">

              {featuredPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/posts/${post.slug}`}
                  className="group relative min-h-[360px] overflow-hidden rounded-2xl border border-border"
                >
                  {/* Background Image */}
                  {post.image && (
                    <img
                      src={post.image}
                      className="absolute inset-0 h-full w-full object-cover opacity-50 transition duration-500 group-hover:scale-105 group-hover:opacity-60"
                    />
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/10" />

                  {/* Blog Content */}
                  <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-8">

                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                      <span>{post.category}</span>

                      <span>•</span>

                      <span>{post.readingTime}</span>
                    </div>

                    <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                      {post.title}
                    </h2>

                    <p className="mt-3 line-clamp-3 leading-7 text-muted-foreground">
                      {post.excerpt}
                    </p>

                    <div className="mt-6 text-sm font-semibold transition-transform duration-300 group-hover:translate-x-1">
                      Read article →
                    </div>

                  </div>
                </Link>
              ))}

            </div>
          </section>

          {/* More Posts */}
          <section className="mt-20 border-t border-border pt-12">
            <h2 className="text-2xl font-bold tracking-tight">
              All articles
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">

              {posts
                .filter((post) => !post.featured)
                .map((post) => (
                  <Link
                    key={post.id}
                    href={`/posts/${post.slug}`}
                    className="group relative min-h-[320px] overflow-hidden rounded-2xl border border-border"
                  >
                    {/* Background Image */}
                    {post.image && (
                      <img
                        src={post.image}
                        className="absolute inset-0 h-full w-full object-cover opacity-40 transition duration-500 group-hover:scale-105 group-hover:opacity-55"
                      />
                    )}

                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/20" />

                    {/* Content */}
                    <div className="relative z-10 flex h-full flex-col justify-end p-6">

                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{post.category}</span>
                        <span>•</span>
                        <span>{post.readingTime}</span>
                      </div>

                      <h2 className="mt-3 text-xl font-bold tracking-tight sm:text-2xl">
                        {post.title}
                      </h2>

                      <p className="mt-3 line-clamp-3 leading-7 text-muted-foreground">
                        {post.excerpt}
                      </p>

                      <div className="mt-5 text-sm font-semibold transition-transform duration-300 group-hover:translate-x-1">
                        Read article →
                      </div>

                    </div>
                  </Link>
                ))}

            </div>
          </section>

        </div>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:px-6">
          <p>
            © {new Date().getFullYear()} Sudeep Silwal. All rights reserved.
          </p>

          <a
            href="https://sudeepsilwal.com.np"
            className="transition-colors hover:text-foreground"
          >
            Portfolio →
          </a>
        </div>
      </footer>
    </>
  )
}
