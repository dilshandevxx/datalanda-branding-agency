import { defineField, defineType } from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'cardImageUrl',
      title: 'Card Image URL (Override)',
      type: 'url',
      description: 'Optional: Use an external image URL for the card instead of uploading to Sanity',
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
    defineField({
      name: 'challenge',
      title: 'Challenge',
      type: 'text',
    }),
    defineField({
      name: 'solution',
      title: 'Solution',
      type: 'text',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
    }),
    defineField({
      name: 'websiteUrl',
      title: 'Website URL',
      type: 'url',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'string',
    }),
    defineField({
      name: 'ratioClass',
      title: 'Aspect Ratio Class (Legacy)',
      type: 'string',
      initialValue: 'ratioStandard',
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image' }],
    }),
  ],
})
