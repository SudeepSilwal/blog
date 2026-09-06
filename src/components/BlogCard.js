import Link from 'next/link'

export default function BlogCard({ post }) {
  return (
    <Link
      href={`/posts/${post.slug}`}
      className="group relative block min-h-[280px] overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1"
    >

      {/* FADED BACKGROUND IMAGE */}

      {post.image && (
        <img
          src={post.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20 transition duration-500 group-hover:scale-105 group-hover:opacity-30"
        />
      )}

      {/* OVERLAY */}

      <div className="absolute inset-0 bg-background/75" />

      {/* CONTENT */}

      <div className="relative z-10 flex h-full flex-col p-6 sm:p-8">

        <div className="flex items-center gap-2 text-xs text-muted-foreground">

          <span>{post.category}</span>

          <span>•</span>

          <span>{post.readingTime}</span>

        </div>

        <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
          {post.title}
        </h2>

        <p className="mt-4 leading-7 text-muted-foreground">
          {post.excerpt}
        </p>

        <div className="mt-auto pt-6 text-sm font-medium transition-transform group-hover:translate-x-1">
          Read article →
        </div>

      </div>
    </Link>
  )
}
