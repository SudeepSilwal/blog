import Link from 'next/link'

export default function BlogCard({ post }) {
  return (
    <article className="group rounded-xl border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:bg-muted/40 hover:shadow-lg">

      <div className="flex items-center gap-3 text-xs text-muted-foreground">
        <span>{post.category}</span>
        <span>•</span>
        <time>{post.date}</time>
      </div>

      <h2 className="mt-4 text-xl font-semibold tracking-tight transition-colors group-hover:text-foreground">
        {post.title}
      </h2>

      <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
        {post.excerpt}
      </p>

      <div className="mt-5 flex items-center justify-between">

        <span className="text-xs text-muted-foreground">
          {post.readingTime}
        </span>

        <Link
          href={`/posts/${post.slug}`}
          className="text-sm font-medium text-muted-foreground underline underline-offset-4 transition-all group-hover:translate-x-1 group-hover:text-foreground"
        >
          Read article →
        </Link>

      </div>

    </article>
  )
}