import { notFound } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
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

      <main className="mx-auto max-w-3xl px-6 pb-24 pt-28">

        <Link
          href="/posts"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Back to posts
        </Link>

        <article className="mt-10">

          <div className="flex items-center gap-3 text-sm text-muted-foreground">
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

          {/* Advertisement location */}
          <div className="my-10 flex min-h-24 items-center justify-center rounded-lg border border-dashed border-border text-xs text-muted-foreground">
            Advertisement
          </div>

          <div className="prose prose-neutral mt-10 max-w-none dark:prose-invert">
            {post.content.split('\n').map((paragraph, index) => (
              paragraph.trim() && (
                <p key={index}>
                  {paragraph.trim()}
                </p>
              )
            ))}
          </div>

        </article>

      </main>
    </>
  )
}