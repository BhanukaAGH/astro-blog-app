import { config, fields, collection } from '@keystatic/core'

export default config({
  storage: {
    kind: 'github',
    repo: {
      name: 'astro-blog-app',
      owner: 'BhanukaAGH',
    },
  },

  collections: {
    blog: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        publishedDate: fields.date({
          label: 'Published date',
          validation: { isRequired: true },
          defaultValue: { kind: 'today' },
        }),
        author: fields.select({
          label: 'Author',
          options: [
            { label: 'Alec Whitten', value: 'Alec Whitten' },
            { label: 'Demi WIlkinson', value: 'Demi WIlkinson' },
            { label: 'Candice Wu', value: 'Candice Wu' },
            { label: 'Orlando Diggs', value: 'Orlando Diggs' },
            { label: 'Drew Cano', value: 'Drew Cano' },
            { label: 'Natali Craig', value: 'Natali Craig' },
          ],
          defaultValue: 'Alec Whitten',
        }),
        description: fields.text({
          label: 'Description',
          validation: {
            isRequired: true,
            length: { max: 300 },
          },
        }),
        image: fields.cloudImage({
          label: 'Hero Image',
          validation: { isRequired: true },
        }),
        draft: fields.checkbox({ label: 'Draft', defaultValue: true }),
        tags: fields.multiselect({
          label: 'Tags',
          options: [
            { label: 'Design', value: 'Design' },
            { label: 'Frameworks', value: 'Frameworks' },
            { label: 'Product', value: 'Product' },
            { label: 'Management', value: 'Management' },
            { label: 'Leadership', value: 'Leadership' },
            { label: 'Research', value: 'Research' },
          ],
        }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
  },
})
