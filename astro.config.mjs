import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import icon from 'astro-icon'
import markdoc from '@astrojs/markdoc'
import keystatic from '@keystatic/astro'
import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  site: 'https://astroblogs.vercel.app',
  integrations: [tailwind(), react(), icon(), markdoc(), keystatic()],
  output: 'hybrid',
  adapter: vercel(),
})
