import rss from '@astrojs/rss'
import type { APIContext } from 'astro'
import { getCollection } from 'astro:content'

export async function GET(context: APIContext) {
  const posts = await getCollection('blog')

  return rss({
    stylesheet: '/rss/styles.xsl',
    title: 'Welcome to Blog.',
    description: 'Your digital journal.',
    site: context.site!,
    items: posts.map((post) => ({
      link: `/blog/${post.slug}`,
      title: post.data.title,
      pubDate: new Date(post.data.publishedDate),
      description: post.data.description,
      customData: `<author>${post.data.author}</author>`,
    })),
  })
}
