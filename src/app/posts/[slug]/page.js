import { notFound } from 'next/navigation'
import Link from 'next/link'
import { posts } from '@/data/posts'
import ScrollToTop from '@/components/ScrollToTop'

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

    alternates: {
      canonical: `/posts/${post.slug}`,
    },

    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/posts/${post.slug}`,
      siteName: 'Sudeep Blog',
      type: 'article',
      publishedTime: post.date,

      images: [
        {
          url: post.image,
          alt: post.title,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default async function PostPage({ params }) {
  const { slug } = await params

  const post = posts.find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = posts
    .filter(
      (item) =>
        item.id !== post.id &&
        item.tags &&
        post.tags &&
        item.tags.some((tag) => post.tags.includes(tag))
    )
    .slice(0, 3)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    dateModified: post.modifiedDate || post.date,

    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://blog.sudeepsilwal.com.np/posts/${post.slug}`,
    },

    author: {
      '@type': 'Person',
      name: 'Sudeep Silwal',
      url: 'https://sudeepsilwal.com.np',
    },

    publisher: {
      '@type': 'Person',
      name: 'Sudeep Silwal',
      url: 'https://sudeepsilwal.com.np',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',

    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://blog.sudeepsilwal.com.np',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Posts',
        item: 'https://blog.sudeepsilwal.com.np/posts',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://blog.sudeepsilwal.com.np/posts/${post.slug}`,
      },
    ],
  }

  return (
    <>
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <main className="min-h-screen px-5 pb-24 pt-16 sm:px-6">
        <div className="mx-auto max-w-3xl">

          {/* Back button */}
          <Link
            href="/posts"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Back to posts
          </Link>

          <article className="mt-10">

            {/* Post information */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span>{post.category}</span>
              <span>•</span>
              <time>{post.date}</time>
              <span>•</span>
              <span>{post.readingTime}</span>
            </div>

            {/* Title */}
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {post.excerpt}
            </p>

            {/* Hero image */}
            {post.image && (
              <div className="mt-10 w-full">
                <img
                  src={post.image}
                  alt={project.imageAlt || project.title}
                  className="h-auto w-full rounded-xl border border-border"
                />
              </div>
            )}

            {/* Blog content */}
            <div
              className="prose mt-12 max-w-none"
              dangerouslySetInnerHTML={{
                __html: post.content,
              }}
            />

            {/* YouTube video */}
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

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="mt-16 border-t border-border pt-10">

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Keep reading
                  </p>

                  <h2 className="mt-1 text-2xl font-bold tracking-tight">
                    Similar posts
                  </h2>
                </div>

                <Link
                  href="/posts"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  View all →
                </Link>
              </div>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/posts/${relatedPost.slug}`}
                    className="group relative min-h-[260px] overflow-hidden rounded-xl border border-border"
                  >
                    {/* Background image */}
                    {relatedPost.image && (
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="absolute inset-0 h-full w-full object-cover opacity-40 transition duration-500 group-hover:scale-105 group-hover:opacity-50"
                      />
                    )}

                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/20" />

                    {/* Card content */}
                    <div className="relative z-10 flex h-full flex-col justify-end p-6">

                      <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                        <span>{relatedPost.category}</span>
                        <span>•</span>
                        <span>{relatedPost.readingTime}</span>
                      </div>

                      <h3 className="mt-3 text-xl font-bold tracking-tight">
                        {relatedPost.title}
                      </h3>

                      <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted-foreground">
                        {relatedPost.excerpt}
                      </p>

                      <span className="mt-5 text-sm font-semibold transition-transform duration-300 group-hover:translate-x-1">
                        Read article →
                      </span>

                    </div>
                  </Link>
                ))}
              </div>

            </section>
          )}

        </div>
      </main>

      {/* Scroll to top */}
      <ScrollToTop />
    </>
  )
}