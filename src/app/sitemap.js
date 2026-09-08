import { posts } from '@/data/posts'
import { projects } from '@/data/projects'

const baseUrl = 'https://blog.sudeepsilwal.com.np'

export default function sitemap() {
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/posts`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  const postRoutes = posts
    .filter((post) => !post.draft)
    .map((post) => ({
      url: `${baseUrl}/posts/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly',
      priority: 0.8,
    }))

  const projectRoutes = projects
    .filter((project) => !project.draft)
    .map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: new Date(
        project.modifiedDate || project.date || new Date()
      ),
      changeFrequency: 'monthly',
      priority: 0.7,
    }))

  return [...staticRoutes, ...postRoutes, ...projectRoutes]
}