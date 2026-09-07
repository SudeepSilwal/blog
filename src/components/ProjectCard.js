import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCard({ project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-2xl border border-border transition hover:border-foreground"
    >
      <div className="relative h-48 w-full overflow-hidden bg-muted">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
            <span className="text-4xl text-white">📁</span>
          </div>
        )}
        {project.featured && (
          <div className="absolute right-3 top-3 rounded-full bg-yellow-500 px-3 py-1 text-xs font-semibold text-black">
            ⭐ Featured
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>{project.category}</span>
          <span>•</span>
          <span>{project.readingTime}</span>
        </div>

        <h3 className="mt-2 text-xl font-bold tracking-tight group-hover:text-blue-600">
          {project.title}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
          {project.excerpt}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-xs text-muted-foreground">
              +{project.tags.length - 3} more
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}