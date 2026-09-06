import { notFound } from 'next/navigation'
import Link from 'next/link'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

import { posts } from '@/data/posts'

export async function generateMetadata({ params }) {
  const { slug } = await params

  const post = posts.find(post => post.slug === slug)

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

  const post = posts.find(post => post.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <Header />

      <main className="min-h-screen px-5 pb-24 pt-16 sm:px-6">

        {/* POST HEADER */}

        <div className="mx-auto max-w-5xl">

          <Link
            href="/posts"
            className="inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Back to posts
          </Link>

          <article className="mt-10">

            {/* META */}

            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
              <span>{post.category}</span>

              <span className="hidden sm:inline">•</span>

              <time>{post.date}</time>

              <span className="hidden sm:inline">•</span>

              <span>{post.readingTime}</span>
            </div>

            {/* TITLE */}

            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>

            {/* EXCERPT */}

            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
              {post.excerpt}
            </p>

            {/* HERO IMAGE */}

            {post.image && (
              <div className="mt-8 overflow-hidden rounded-2xl border border-border">

                <img
                  src={post.image}
                  alt={post.imageAlt || post.title}
                  className="h-[220px] w-full object-cover sm:h-[300px] lg:h-[350px]"
                />

              </div>
            )}

          </article>
        </div>

        {/* ARTICLE CONTENT */}

        <article
          className="prose prose-lg mx-auto mt-8 max-w-3xl prose-neutral dark:prose-invert"
          dangerouslySetInnerHTML={{
            __html: post.content,
          }}
        />

        {/* YOUTUBE VIDEO */}

        {post.youtubeId && (
          <section className="mx-auto mt-16 max-w-4xl">

            <div className="aspect-video overflow-hidden rounded-2xl border border-border">

              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${post.youtubeId}`}
                title={post.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

            </div>

          </section>
        )}

      </main>

      <Footer />
    </>
  )
}
