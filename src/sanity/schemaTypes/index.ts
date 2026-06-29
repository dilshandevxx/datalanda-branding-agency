import { type SchemaTypeDefinition } from 'sanity'
import { projectType } from './projectType'
import { postType } from './postType'
import { siteSettingsType } from './siteSettingsType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, postType, siteSettingsType],
}
