import Link from 'next/link'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'

export const metadata = {
  title: 'Projects | Sudeep Silwal\'s Blog',
  description: 'Explore my projects including web applications, AI tools, and more.',
}

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured)
  const allProjects = projects

  return (
    <main className="min-h-screen px-5 py-16 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            My Projects
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A collection of my work, side projects, and things I've built.
          </p>
        </div>

        {featuredProjects.length > 0 && (
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold tracking-tight">
              Featured Projects
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}

        <section>
          <h2 className="mb-6 text-2xl font-bold tracking-tight">
            All Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {allProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}