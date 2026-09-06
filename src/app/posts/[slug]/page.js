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

      <main className="min-h-screen px-5 pb-24 pt-16 sm:px-6">
        <div className="mx-auto max-w-3xl">

          <Link
            href="/posts"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Back to posts
          </Link>

          <article className="mt-10">

            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span>{post.category}</span>
              <span>•</span>
              <time>{post.date}</time>
              <span>•</span>
              <span>{post.readingTime}</span>
            </div>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              {post.title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {post.excerpt}
            </p>

            {/* HERO IMAGE */}
            {post.image && (
              <div className="mt-10 w-full">
                <img
                  src={post.image}
                  className="h-auto w-full rounded-xl border border-border"
                />
              </div>
            )}

            {/* FULL BLOG CONTENT */}
            <div
              className="prose mt-12 max-w-none"
              dangerouslySetInnerHTML={{
                __html: post.content,
              }}
            />

            {/* YOUTUBE VIDEO - LAST */}
            {post.youtubeId && (
              <div className="mt-12 w-full overflow-hidden rounded-xl border border-border">
                <iframe
                  className="aspect-video w-full"
                  src={`https://www.youtube.com/embed/${post.youtubeId}`}
                  title={post.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}

            {/* TAGS */}
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
        </div>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:px-6">
          <p>
            © {new Date().getFullYear()} Sudeep Silwal. All rights reserved.
          </p>

          <Link
            href="/"
            className="transition-colors hover:text-foreground"
          >
            Back to home ↑
          </Link>
        </div>
      </footer>
    </>
  )
}
