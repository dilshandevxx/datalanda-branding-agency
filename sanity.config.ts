'use client'

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import { apiVersion, dataset, projectId } from './src/sanity/env'
import { schema } from './src/sanity/schemaTypes'
import { myTheme } from './src/sanity/theme'
import { StudioLogo } from './src/sanity/components/StudioLogo'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  theme: myTheme,
  studio: {
    components: {
      logo: StudioLogo,
    },
  },
  plugins: [
    structureTool({
      // We can customize the structure here
      structure: (S) =>
        S.list()
          .title('Content Management')
          .items([
            // Singleton: Home Page Settings
            S.listItem()
              .title('Home Page Settings')
              .id('homePageSettings')
              .child(
                S.document()
                  .schemaType('homePage')
                  .documentId('homePageSettings')
              ),
            // Singleton: Site Settings
            S.listItem()
              .title('Site Settings')
              .id('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            S.divider(),
            // Regular document types
            S.documentTypeListItem('project').title('Projects'),
            S.documentTypeListItem('post').title('Posts'),
          ]),
    }),
  ],
})
