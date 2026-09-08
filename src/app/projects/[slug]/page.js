import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/data/projects'
import ScrollToTop from '@/components/ScrollToTop'

const SITE_URL = 'https://blog.sudeepsilwal.com.np'
const AUTHOR_URL = 'https://sudeepsilwal.com.np'

export async function generateMetadata({ params }) {
  const { slug } = await params

  const project = projects.find((project) => project.slug === slug)

  if (!project || project.draft) {
    return {
      title: 'Project Not Found',
      robots: {
        index: false,
        follow: false,
      },
    }
  }

  const projectUrl = `${SITE_URL}/projects/${project.slug}`

  const imageUrl = project.image?.startsWith('http')
    ? project.image
    : `${SITE_URL}${project.image}`

  return {
    title: project.title,

    description: project.excerpt,

    alternates: {
      canonical: projectUrl,
    },

    openGraph: {
      title: project.title,
      description: project.excerpt,
      url: projectUrl,
      siteName: 'Sudeep Blog',
      type: 'article',

      publishedTime: project.date,
      modifiedTime: project.modifiedDate || project.date,

      images: project.image
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: project.imageAlt || project.title,
            },
          ]
        : [],
    },

    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.excerpt,

      images: project.image ? [imageUrl] : [],
    },

    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function ProjectPage({ params }) {
  const { slug } = await params

  const project = projects.find((project) => project.slug === slug)

  if (!project || project.draft) {
    notFound()
  }

  const projectUrl = `${SITE_URL}/projects/${project.slug}`

  const imageUrl = project.image?.startsWith('http')
    ? project.image
    : `${SITE_URL}${project.image}`

  // Find projects with similar tags
  const relatedProjects = projects
    .filter(
      (item) =>
        item.id !== project.id &&
        !item.draft &&
        item.tags &&
        project.tags &&
        item.tags.some((tag) => project.tags.includes(tag))
    )
    .slice(0, 3)

  /*
   * Article structured data
   */
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',

    '@id': `${projectUrl}#article`,

    headline: project.title,

    description: project.excerpt,

    image: project.image ? [imageUrl] : [],

    datePublished: project.date,

    dateModified: project.modifiedDate || project.date,

    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': projectUrl,
    },

    author: {
      '@type': 'Person',
      name: 'Sudeep Silwal',
      url: AUTHOR_URL,
    },

    publisher: {
      '@type': 'Person',
      name: 'Sudeep Silwal',
      url: AUTHOR_URL,
    },

    isPartOf: {
      '@type': 'Blog',
      name: 'Sudeep Blog',
      url: SITE_URL,
    },
  }

  /*
   * Breadcrumb structured data
   */
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',

    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },

      {
        '@type': 'ListItem',
        position: 2,
        name: 'Projects',
        item: `${SITE_URL}/projects`,
      },

      {
        '@type': 'ListItem',
        position: 3,
        name: project.title,
        item: projectUrl,
      },
    ],
  }

  return (
    <>
      {/* Article structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      {/* Breadcrumb structured data */}
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

              <time dateTime={project.date}>
                {project.date}
              </time>

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
                <Image
                  src={project.image}
                  alt={project.imageAlt || project.title}
                  width={1200}
                  height={630}
                  priority
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
                  <span aria-hidden="true">🚀</span>
                  Live Demo
                </a>
              )}
            </div>

            {/* Related Projects */}
            {relatedProjects.length > 0 && (
              <section
                className="mt-16 border-t border-border pt-10"
                aria-labelledby="similar-projects-heading"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Keep exploring
                    </p>

                    <h2
                      id="similar-projects-heading"
                      className="mt-1 text-2xl font-bold tracking-tight"
                    >
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
                        <Image
                          src={relatedProject.image}
                          alt=""
                          width={1200}
                          height={630}
                          aria-hidden="true"
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

          </article>
        </div>
      </main>

      {/* Scroll to top button */}
      <ScrollToTop />
    </>
  )
}