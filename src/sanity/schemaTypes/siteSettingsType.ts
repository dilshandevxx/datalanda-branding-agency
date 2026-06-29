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
      name: 'logoBank',
      title: 'Logo Bank (Drag to switch!)',
      description: 'Upload all your logos here. The logo at the VERY TOP of the list is your active logo. Simply drag and drop to reorder and switch logos instantly.',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }]
    }),
  ],
})
