import { defineField, defineType } from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
    }),
    defineField({
      name: 'logos',
      title: 'Logo Bank',
      description: 'Upload all your logos here. Turn ON the switch for the one you want to use actively on the site.',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Logo Name' },
            { name: 'image', type: 'image', title: 'Logo Image' },
            { name: 'isActive', type: 'boolean', title: 'Use this logo? (Check only one)' }
          ],
          preview: {
            select: { title: 'name', media: 'image', isActive: 'isActive' },
            prepare({ title, media, isActive }: any) {
              return { title: `${title || 'Logo'} ${isActive ? '✅ (ACTIVE)' : ''}`, media }
            }
          }
        }
      ]
    }),
  ],
})
