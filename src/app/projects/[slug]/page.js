import { notFound } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import { projects } from '@/data/projects'
import ScrollToTop from '@/components/ScrollToTop'

export async function generateMetadata({ params }) {
  const { slug } = await params

  const project = projects.find((project) => project.slug === slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: project.title,
    description: project.excerpt,

    alternates: {
      canonical: `/projects/${project.slug}`,
    },

    openGraph: {
      title: project.title,
      description: project.excerpt,
      url: `/projects/${project.slug}`,
      siteName: 'Sudeep Blog',
      type: 'article',

      publishedTime: project.date,

      images: [
        {
          url: project.image,
          alt: project.title,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.excerpt,
      images: [project.image],
    },
  }
}

export default async function ProjectPage({ params }) {
  const { slug } = await params

  const project = projects.find((project) => project.slug === slug)

  if (!project) {
    notFound()
  }

  // Find projects with similar tags
  const relatedProjects = projects
    .filter(
      (item) =>
        item.id !== project.id &&
        item.tags &&
        project.tags &&
        item.tags.some((tag) => project.tags.includes(tag))
    )
    .slice(0, 3)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',

    headline: project.title,

    description: project.excerpt,

    image: project.image,

    datePublished: project.date,

    dateModified: project.modifiedDate || project.date,

    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://blog.sudeepsilwal.com.np/projects/${project.slug}`,
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
        name: 'Projects',
        item: 'https://blog.sudeepsilwal.com.np/projects',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: project.title,
        item: `https://blog.sudeepsilwal.com.np/projects/${project.slug}`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

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
            href="/projects"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Back to projects
          </Link>

          <article className="mt-10">

            {/* Project information */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span>{project.category}</span>

              <span>•</span>

              <time>{project.date}</time>

              <span>•</span>

              <span>{project.readingTime}</span>
            </div>

            {/* Title */}
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              {project.title}
            </h1>

            {/* Excerpt */}
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {project.excerpt}
            </p>

            {/* Hero image */}
            {project.image && (
              <div className="mt-10 w-full">
                <img
                  src={project.image}
                  className="h-auto w-full rounded-xl border border-border"
                />
              </div>
            )}

            {/* Project content */}
            <div
              className="prose mt-12 max-w-none"
              dangerouslySetInnerHTML={{
                __html: project.content,
              }}
            />

            {/* GitHub and Demo buttons */}
            <div className="mt-12 flex flex-wrap gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  View on GitHub
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition hover:bg-muted"
                >
                  <span>🚀</span> Live Demo
                </a>
              )}
            </div>

            {/* Tags */}
            {project.tags && project.tags.length > 0 && (
              <div className="mt-16 border-t border-border pt-8">
                <h3 className="text-sm font-semibold text-muted-foreground">
                  Tags
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
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

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <section className="mt-16 border-t border-border pt-10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Keep exploring
                  </p>

                  <h2 className="mt-1 text-2xl font-bold tracking-tight">
                    Similar projects
                  </h2>
                </div>

                <Link
                  href="/projects"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  View all →
                </Link>
              </div>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {relatedProjects.map((relatedProject) => (
                  <Link
                    key={relatedProject.id}
                    href={`/projects/${relatedProject.slug}`}
                    className="group relative min-h-[260px] overflow-hidden rounded-xl border border-border"
                  >
                    {/* Background image */}
                    {relatedProject.image && (
                      <img
                        src={relatedProject.image}
                        className="absolute inset-0 h-full w-full object-cover opacity-40 transition duration-500 group-hover:scale-105 group-hover:opacity-50"
                      />
                    )}

                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/20" />

                    {/* Card content */}
                    <div className="relative z-10 flex h-full flex-col justify-end p-6">
                      <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                        <span>{relatedProject.category}</span>

                        <span>•</span>

                        <span>{relatedProject.readingTime}</span>
                      </div>

                      <h3 className="mt-3 text-xl font-bold tracking-tight">
                        {relatedProject.title}
                      </h3>

                      <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted-foreground">
                        {relatedProject.excerpt}
                      </p>

                      <span className="mt-5 text-sm font-semibold transition-transform duration-300 group-hover:translate-x-1">
                        View project →
                      </span>
                    </div>
                  </Link>
                ))}

              </div>
            </section>
          )}

        </div>
      </main>

      {/* Scroll to top button */}
      <ScrollToTop />
    </>
  )
}