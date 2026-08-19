import Header from '@/components/Header'
import BlogCard from '@/components/BlogCard'
import { posts } from '@/data/posts'

export const metadata = {
  title: 'All Posts',
  description:
    'Browse all articles by Sudeep Silwal.',
}

export default function PostsPage() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-5xl px-6 pb-24 pt-28">

        <header className="mb-12">

          <p className="text-sm uppercase tracking-widest text-muted-foreground">
            Blog
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            All posts
          </h1>

          <p className="mt-4 max-w-2xl text-muted-foreground">
            Articles, tutorials, notes and things I'm learning.
          </p>

        </header>

        <div className="grid gap-6 md:grid-cols-2">

          {posts.map(post => (
            <BlogCard
              key={post.id}
              post={post}
            />
          ))}

        </div>

      </main>
    </>
  )
}