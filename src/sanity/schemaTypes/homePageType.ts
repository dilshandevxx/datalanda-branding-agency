import { defineField, defineType } from 'sanity'

export const homePageType = defineType({
  name: 'homePage',
  title: 'Home Page Settings',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero Section' },
    { name: 'cinematic', title: 'Cinematic Videos' },
    { name: 'showcase', title: 'App Showcase' },
    { name: 'studio', title: 'Studio Section' },
    { name: 'spotlight', title: 'Spotlight' },
    { name: 'cta', title: 'CTAs & Footer' },
  ],
  fields: [
    // Hero Section
    defineField({
      name: 'heroCaption',
      title: 'Hero Caption Text',
      type: 'text',
      description: 'Example: "CRAFTING DIGITAL... DRIVEN BY DATA & DESIGN."',
      group: 'hero',
    }),
    defineField({
      name: 'heroVideo',
      title: 'Hero Background Media URL',
      type: 'url',
      description: 'Paste an Image URL (.jpg, .png, .webp) OR a Video URL (.mp4, .webm). The component will automatically adapt!',
      group: 'hero',
    }),

    // Cinematic Accordion
    defineField({
      name: 'cinematicStrategyVideo',
      title: 'Strategy Video URL',
      type: 'url',
      description: 'Video that plays when hovering "Strategy"',
      group: 'cinematic',
    }),
    defineField({
      name: 'cinematicDesignVideo',
      title: 'Design Video URL',
      type: 'url',
      description: 'Video that plays when hovering "Design"',
      group: 'cinematic',
    }),
    defineField({
      name: 'cinematicExecutionVideo',
      title: 'Execution Video URL',
      type: 'url',
      description: 'Video that plays when hovering "Execution"',
      group: 'cinematic',
    }),

    // Media Sections
    defineField({
      name: 'appShowcaseVideo',
      title: 'Digital Ecosystems Video URL (App Showcase)',
      type: 'url',
      description: 'Video for the "DIGITAL ECOSYSTEMS" section',
      group: 'showcase',
    }),
    defineField({
      name: 'spotlightVideo',
      title: 'Art of Living Video URL (Spotlight)',
      type: 'url',
      description: 'Video for the "ART OF LIVING" text mask section',
      group: 'spotlight',
    }),

    // Studio Section Images
    defineField({
      name: 'studioImage1',
      title: 'Studio Image 1',
      type: 'image',
      options: { hotspot: true },
      group: 'studio',
    }),
    defineField({
      name: 'studioImage2',
      title: 'Studio Image 2',
      type: 'image',
      options: { hotspot: true },
      group: 'studio',
    }),
    defineField({
      name: 'studioImage3',
      title: 'Studio Image 3',
      type: 'image',
      options: { hotspot: true },
      group: 'studio',
    }),
    defineField({
      name: 'studioImage4',
      title: 'Studio Image 4',
      type: 'image',
      options: { hotspot: true },
      group: 'studio',
    }),

    // CTAs
    defineField({
      name: 'projectInMindCaption',
      title: 'Got a Project in Mind Caption',
      type: 'text',
      description: 'Text under GOT A PROJECT IN MIND?',
      group: 'cta',
    }),
    defineField({
      name: 'footerCtaCaption',
      title: 'Footer CTA Caption',
      type: 'text',
      description: 'Text in the blue/inspiration section right above the footer',
      group: 'cta',
    }),
  ],
})
