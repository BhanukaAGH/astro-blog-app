import type { CollectionEntry } from 'astro:content'

export const recentBlogPosts = (
  posts: CollectionEntry<'blog'>[],
  { count = 4 }: { count?: number }
) => {
  const sortedPosts = posts.sort((a, b) => {
    const dateA = new Date(a.data.publishedDate) as any
    const dateB = new Date(b.data.publishedDate) as any
    return dateB - dateA
  })

  return sortedPosts.slice(0, count).filter((post) => !post.data.draft)
}
