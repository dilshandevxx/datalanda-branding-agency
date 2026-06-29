import { defineField, defineType } from 'sanity'

export const homePageType = defineType({
  name: 'homePage',
  title: 'Home Page Settings',
  type: 'document',
  fieldsets: [
    { name: 'hero', title: 'Hero Section' },
    { name: 'cinematic', title: 'Cinematic Accordion Videos' },
    { name: 'media', title: 'Other Video Sections' },
    { name: 'studio', title: 'Studio Section Images' },
    { name: 'cta', title: 'Footer CTAs' },
  ],
  fields: [
    // Hero Section
    defineField({
      name: 'heroCaption',
      title: 'Hero Caption Text',
      type: 'text',
      description: 'Example: "CRAFTING DIGITAL... DRIVEN BY DATA & DESIGN."',
      fieldset: 'hero',
    }),
    defineField({
      name: 'heroVideo',
      title: 'Hero Video URL',
      type: 'url',
      description: 'URL to the Hero background video (e.g. Cloudinary/Vimeo)',
      fieldset: 'hero',
    }),

    // Cinematic Accordion
    defineField({
      name: 'cinematicStrategyVideo',
      title: 'Strategy Video URL',
      type: 'url',
      fieldset: 'cinematic',
    }),
    defineField({
      name: 'cinematicDesignVideo',
      title: 'Design Video URL',
      type: 'url',
      fieldset: 'cinematic',
    }),
    defineField({
      name: 'cinematicExecutionVideo',
      title: 'Execution Video URL',
      type: 'url',
      fieldset: 'cinematic',
    }),

    // Media Sections
    defineField({
      name: 'appShowcaseVideo',
      title: 'App Showcase Video URL',
      type: 'url',
      fieldset: 'media',
    }),
    defineField({
      name: 'spotlightVideo',
      title: 'Spotlight Video URL',
      type: 'url',
      fieldset: 'media',
    }),

    // Studio Section Images
    defineField({
      name: 'studioImage1',
      title: 'Studio Image 1',
      type: 'image',
      options: { hotspot: true },
      fieldset: 'studio',
    }),
    defineField({
      name: 'studioImage2',
      title: 'Studio Image 2',
      type: 'image',
      options: { hotspot: true },
      fieldset: 'studio',
    }),
    defineField({
      name: 'studioImage3',
      title: 'Studio Image 3',
      type: 'image',
      options: { hotspot: true },
      fieldset: 'studio',
    }),
    defineField({
      name: 'studioImage4',
      title: 'Studio Image 4',
      type: 'image',
      options: { hotspot: true },
      fieldset: 'studio',
    }),

    // CTAs
    defineField({
      name: 'projectInMindCaption',
      title: 'Got a Project in Mind Caption',
      type: 'text',
      description: 'Text under GOT A PROJECT IN MIND?',
      fieldset: 'cta',
    }),
    defineField({
      name: 'footerCtaCaption',
      title: 'Footer CTA Caption',
      type: 'text',
      description: 'Text in the blue/inspiration section above the footer',
      fieldset: 'cta',
    }),
  ],
})
