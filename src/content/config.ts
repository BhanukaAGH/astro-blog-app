import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date().transform((date) =>
      new Date(date).toLocaleDateString('en-US', {
        timeZone: 'UTC',
        dateStyle: 'medium',
      })
    ),
    author: z.enum([
      'Alec Whitten',
      'Demi WIlkinson',
      'Candice Wu',
      'Orlando Diggs',
      'Drew Cano',
      'Natali Craig',
    ]),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    draft: z.boolean().default(true),
    category: z.array(
      z.enum([
        'Design',
        'Frameworks',
        'Product',
        'Management',
        'Leadership',
        'Research',
      ])
    ),
  }),
})

export const collections = { blog }
