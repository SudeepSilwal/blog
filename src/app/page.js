import Link from 'next/link'
import Header from '@/components/Header'
import BlogCard from '@/components/BlogCard'
import { posts } from '@/data/posts'

export const metadata = {
  title: 'Blog',
  description:
    'Articles about web development, programming, technology and projects by Sudeep Silwal.',
}

export default function Home() {
  const featuredPosts = posts.filter(post => post.featured)
  const recentPosts = posts.slice(0, 6)

  return (
    <>
      <Header />

      <main>

        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 pb-20 pt-28">

          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Sudeep Silwal
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            Thoughts, tutorials and things I learn.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            I write about web development, programming, technology,
            projects and things I discover while learning.
          </p>

        </section>

        {/* Featured */}
        {featuredPosts.length > 0 && (
          <section className="mx-auto max-w-5xl px-6 pb-20">

            <div className="mb-8 flex items-end justify-between">
              <h2 className="text-2xl font-semibold">
                Featured
              </h2>
            </div>

            <div className="grid gap-6">
              {featuredPosts.map(post => (
                <BlogCard
                  key={post.id}
                  post={post}
                />
              ))}
            </div>

          </section>
        )}

        {/* Recent Posts */}
        <section className="mx-auto max-w-5xl px-6 pb-24">

          <div className="mb-8 flex items-center justify-between">

            <h2 className="text-2xl font-semibold">
              Recent posts
            </h2>

            <Link
              href="/posts"
              className="text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
            >
              View all
            </Link>

          </div>

          <div className="grid gap-6 md:grid-cols-2">

            {recentPosts.map(post => (
              <BlogCard
                key={post.id}
                post={post}
              />
            ))}

          </div>

        </section>

      </main>
    </>
  )
}