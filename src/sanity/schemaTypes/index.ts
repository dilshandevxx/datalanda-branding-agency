import { type SchemaTypeDefinition } from 'sanity'
import { projectType } from './projectType'
import { postType } from './postType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, postType],
}
