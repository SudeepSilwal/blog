import { notFound } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import { posts } from '@/data/posts'

export async function generateMetadata({ params }) {
  const { slug } = await params

  const post = posts.find((post) => post.slug === slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function PostPage({ params }) {
  const { slug } = await params

  const post = posts.find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <Header />

      <main className="mx-auto max-w-4xl px-6 pb-24 pt-16">
        {/* Back button */}

        <Link
          href="/posts"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Back to posts
        </Link>

        <article className="mt-10">
          {/* Category, date, reading time */}

          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span>{post.category}</span>

            <span>•</span>

            <time>{post.date}</time>

            <span>•</span>

            <span>{post.readingTime}</span>
          </div>

          {/* Blog title */}

          <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {post.title}
          </h1>

          {/* Excerpt */}

          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            {post.excerpt}
          </p>

          {/* Featured image */}

          {post.image && (
            <div className="mt-10 flex justify-center">
              <img
                src={post.image}
                alt={post.imageAlt || post.title}
                className="w-full max-w-2xl rounded-xl border border-border object-contain"
              />
            </div>
          )}

          {/* YouTube video */}

          {post.youtubeId && (
            <div className="mx-auto mt-10 w-full max-w-2xl">
              <div className="overflow-hidden rounded-xl border border-border">
                <iframe
                  className="block aspect-video w-full"
                  src={`https://www.youtube.com/embed/${post.youtubeId}`}
                  title={post.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          {/* Blog content */}

          <div
            className="prose mt-12 max-w-none"
            dangerouslySetInnerHTML={{
              __html: post.content,
            }}
          />

          {/* Tags */}

          {post.tags && post.tags.length > 0 && (
            <div className="mt-16 border-t border-border pt-8">
              <h3 className="text-sm font-semibold text-muted-foreground">
                Tags
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>

      {/* Footer */}

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} Sudeep Silwal. All rights reserved.
          </p>

          <Link
            href="/"
            className="transition-colors hover:text-foreground"
          >
            Back to home
          </Link>
        </div>
      </footer>
    </>
  )
}
