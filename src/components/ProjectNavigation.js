import Link from 'next/link'

export default function ProjectNavigation({ currentSlug, projects }) {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  return (
    <div className="flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:justify-between">
      <div>
        {prevProject && (
          <Link
            href={`/projects/${prevProject.slug}`}
            className="group flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
          >
            <span className="text-lg">←</span>
            <div>
              <div className="text-xs uppercase tracking-wider">Previous</div>
              <div className="font-medium group-hover:underline">
                {prevProject.title}
              </div>
            </div>
          </Link>
        )}
      </div>

      <Link
        href="/projects"
        className="flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
      >
        <span>📋</span>
        All Projects
      </Link>

      <div className="text-right">
        {nextProject && (
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground sm:flex-row-reverse"
          >
            <span className="text-lg">→</span>
            <div>
              <div className="text-xs uppercase tracking-wider">Next</div>
              <div className="font-medium group-hover:underline">
                {nextProject.title}
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  )
}