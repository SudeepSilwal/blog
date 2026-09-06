import { posts } from '@/data/posts'

export default function sitemap() {
  const baseUrl = 'https://blog.sudeepsilwal.com.np'

  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [
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

    ...postUrls,
  ]
}