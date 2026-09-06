{relatedPosts.length > 0 && (
  <section className="mt-16 border-t border-border pt-10">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-muted-foreground">
          Keep reading
        </p>

        <h2 className="mt-2 text-2xl font-bold tracking-tight">
          Similar Posts
        </h2>
      </div>

      <Link
        href="/posts"
        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        View all →
      </Link>
    </div>

    <div className="mt-8 grid gap-6 md:grid-cols-2">
      {relatedPosts.map((relatedPost) => (
        <Link
          key={relatedPost.id}
          href={`/posts/${relatedPost.slug}`}
          className="group overflow-hidden rounded-xl border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          {relatedPost.image && (
            <div className="aspect-video overflow-hidden">
              <img
                src={relatedPost.image}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          )}

          <div className="p-5">
            <div className="text-sm text-muted-foreground">
              {relatedPost.category} • {relatedPost.readingTime}
            </div>

            <h3 className="mt-3 text-xl font-bold tracking-tight">
              {relatedPost.title}
            </h3>

            <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted-foreground">
              {relatedPost.excerpt}
            </p>

            <div className="mt-5 text-sm font-semibold transition-transform duration-300 group-hover:translate-x-1">
              Read article →
            </div>
          </div>
        </Link>
      ))}
    </div>
  </section>
)}
