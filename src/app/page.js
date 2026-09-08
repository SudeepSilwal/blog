import Image from 'next/image'
import Link from 'next/link'
import { posts } from '@/data/posts'
import { projects } from '@/data/projects'

export const metadata = {
  title: "Sudeep Silwal's Blog",
  description:
    "Sudeep Silwal's personal blog covering technology, web development, health, lifestyle, projects, books, reviews, and interesting ideas.",

  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: "Sudeep Silwal's Blog",
    description:
      'Articles about technology, web development, health, lifestyle, projects, books, reviews, and interesting ideas.',
    url: '/',
    type: 'website',
     images: [
    {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: "Sudeep Silwal's Blog",
    },
  ],
    
  },

  twitter: {
    card: 'summary_large_image',
    title: "Sudeep Silwal's Blog",
    description:
      'Articles about technology, web development, health, lifestyle, projects, books, reviews, and interesting ideas.',
      images: ['/og-image.png'],
  },
}

export default function Home() {
  const featuredPosts = posts.filter((post) => post.featured)
  const allPosts = posts

  const featuredProjects = projects.filter(
    (project) => project.featured
  )

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',

    name: "Sudeep Silwal's Blog",

    alternateName: [
      'Sudeep Blog',
      'Sudeep Silwal Blog',
      'Sudeep Silwal Blogs',
    ],

    url: 'https://blog.sudeepsilwal.com.np',

    description:
      "Sudeep Silwal's personal blog covering technology, web development, health, lifestyle, projects, books, reviews, and interesting ideas.",

    author: {
      '@type': 'Person',
      name: 'Sudeep Silwal',
      url: 'https://sudeepsilwal.com.np',
    },
  }

  return (
    <>
      <main className="min-h-screen">

        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        <div className="mx-auto max-w-5xl px-5 sm:px-6">

          {/* ================================================== */}
          {/* HERO */}
          {/* ================================================== */}

          <section className="py-20 sm:py-28">
            <p className="text-sm font-medium text-muted-foreground">
              Personal Blog
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
              Thoughts, ideas, and things I learn along the way.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Articles about technology, web development, health,
              lifestyle, projects, books, reviews, and interesting
              things worth sharing.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              {/* Articles Button */}
              <Link
                href="/posts"
                className="inline-block rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Browse articles →
              </Link>

              {/* Projects Button */}
              <Link
                href="/projects"
                className="inline-block rounded-full border border-border px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-muted"
              >
                View projects →
              </Link>

            </div>
          </section>


          {/* ================================================== */}
          {/* FEATURED POSTS */}
          {/* ================================================== */}

          {featuredPosts.length > 0 && (
            <section className="border-t border-border py-12">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm text-muted-foreground">
                    Latest highlights
                  </p>

                  <h2 className="mt-1 text-2xl font-bold tracking-tight">
                    Featured posts
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

                {featuredPosts.map((post) => (
                  <article key={post.id}>

                    <Link
                      href={`/posts/${post.slug}`}
                      className="group relative block min-h-[380px] overflow-hidden rounded-2xl border border-border"
                    >

                      {/* Image */}
                      {post.image && (
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover opacity-50 transition duration-500 group-hover:scale-105 group-hover:opacity-60"
                        />
                      )}

                      {/* Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/10" />

                      {/* Content */}
                      <div className="relative z-10 flex min-h-[380px] flex-col justify-end p-6 sm:p-8">

                        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                          <span>{post.category}</span>

                          <span>•</span>

                          <span>{post.readingTime}</span>
                        </div>

                        <h3 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                          {post.title}
                        </h3>

                        <p className="mt-3 line-clamp-3 leading-7 text-muted-foreground">
                          {post.excerpt}
                        </p>

                        <div className="mt-6 text-sm font-semibold transition-transform duration-300 group-hover:translate-x-1">
                          Read article →
                        </div>

                      </div>

                    </Link>

                  </article>
                ))}

              </div>

            </section>
          )}


          {/* ================================================== */}
          {/* FEATURED PROJECTS */}
          {/* ================================================== */}

          {featuredProjects.length > 0 && (
            <section className="border-t border-border py-12">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm text-muted-foreground">
                    What I've built
                  </p>

                  <h2 className="mt-1 text-2xl font-bold tracking-tight">
                    Featured projects
                  </h2>
                </div>

                <Link
                  href="/projects"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  View all →
                </Link>

              </div>


              <div className="mt-8 grid gap-6 md:grid-cols-2">

                {featuredProjects.map((project) => (
                  <article key={project.id}>

                    <Link
                      href={
                        project.slug
                          ? `/projects/${project.slug}`
                          : '/projects'
                      }
                      className="group relative block min-h-[340px] overflow-hidden rounded-2xl border border-border"
                    >

                      {/* Project Image */}
                      {project.image && (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover opacity-40 transition duration-500 group-hover:scale-105 group-hover:opacity-55"
                        />
                      )}

                      {/* Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/20" />

                      {/* Project Content */}
                      <div className="relative z-10 flex min-h-[340px] flex-col justify-end p-6 sm:p-8">

                        {/* Technologies */}
                        {project.technologies &&
                          project.technologies.length > 0 && (
                            <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">

                              {project.technologies
                                .slice(0, 3)
                                .map((technology) => (
                                  <span
                                    key={technology}
                                    className="rounded-full border border-border bg-background/50 px-3 py-1"
                                  >
                                    {technology}
                                  </span>
                                ))}

                            </div>
                          )}

                        {/* Title */}
                        <h3 className="mt-4 text-2xl font-bold tracking-tight">
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="mt-3 line-clamp-3 leading-7 text-muted-foreground">
                          {project.description}
                        </p>

                        {/* Link */}
                        <div className="mt-6 text-sm font-semibold transition-transform duration-300 group-hover:translate-x-1">
                          View project →
                        </div>

                      </div>

                    </Link>

                  </article>
                ))}

              </div>

            </section>
          )}


          {/* ================================================== */}
          {/* ALL ARTICLES */}
          {/* ================================================== */}

          <section className="border-t border-border py-12">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-muted-foreground">
                  From the blog
                </p>

                <h2 className="mt-1 text-2xl font-bold tracking-tight">
                  All articles
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

              {allPosts.map((post) => (
                <article key={post.id}>

                  <Link
                    href={`/posts/${post.slug}`}
                    className="group relative block min-h-[320px] overflow-hidden rounded-2xl border border-border"
                  >

                    {/* Featured Badge */}
                    {post.featured && (
                      <div className="absolute right-4 top-4 z-20 rounded-full bg-yellow-500 px-3 py-1 text-xs font-semibold text-black shadow-lg">
                        ⭐ Featured
                      </div>
                    )}

                    {/* Image */}
                    {post.image && (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover opacity-40 transition duration-500 group-hover:scale-105 group-hover:opacity-55"
                      />
                    )}

                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/20" />

                    {/* Content */}
                    <div className="relative z-10 flex min-h-[320px] flex-col justify-end p-6">

                      <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">

                        <span>{post.category}</span>

                        <span>•</span>

                        <span>{post.readingTime}</span>

                      </div>

                      <h3 className="mt-3 text-xl font-bold tracking-tight sm:text-2xl">
                        {post.title}
                      </h3>

                      <p className="mt-3 line-clamp-3 leading-7 text-muted-foreground">
                        {post.excerpt}
                      </p>

                      <div className="mt-5 text-sm font-semibold transition-transform duration-300 group-hover:translate-x-1">
                        Read article →
                      </div>

                    </div>

                  </Link>

                </article>
              ))}

            </div>

          </section>


          {/* ================================================== */}
          {/* FINAL CTA */}
          {/* ================================================== */}

          <section className="border-t border-border py-16 text-center">

            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Explore more
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Read my latest articles or take a look at the projects
              I've built.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">

              <Link
                href="/posts"
                className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Browse articles →
              </Link>

              <Link
                href="/projects"
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition hover:bg-muted"
              >
                Explore projects →
              </Link>

            </div>

          </section>

        </div>

      </main>
    </>
  )
}