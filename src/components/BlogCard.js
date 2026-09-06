import Link from 'next/link'

export default function BlogCard({ post }) {
  return (
    <Link
      href={`/posts/${post.slug}`}
      className="group relative block overflow-hidden rounded-2xl border border-border bg-card"
    >
      {/* Background Image */}
      {post.image && (
        <img
          src={post.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20 transition duration-500 group-hover:scale-105 group-hover:opacity-30"
        />
      )}

      {/* Dark / light overlay */}
      <div className="absolute inset-0 bg-background/75" />

      {/* Content */}
      <div className="relative z-10 p-6 sm:p-8">

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

        <div className="mt-6 text-sm font-medium transition-transform group-hover:translate-x-1">
          Read article →
        </div>

      </div>
    </Link>
  )
}
