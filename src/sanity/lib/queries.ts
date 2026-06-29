import { groq } from 'next-sanity'

// Get all projects
export const projectsQuery = groq`*[_type == "project"] | order(_createdAt desc) {
  _id,
  title,
  category,
  client,
  year,
  role,
  challenge,
  solution,
  shortDescription,
  websiteUrl,
  date,
  ratioClass,
  "mainImageUrl": mainImage.asset->url,
  cardImageUrl,
  "galleryUrls": gallery[].asset->url
}`
