import type { SchemaTypeDefinition } from 'sanity'
import { objectTypes } from './objects'
import { storyType } from './story'
import { experienceType } from './experience'
import { destinationType } from './destination'
import { tourPackageType } from './tourPackage'
import { pageHeroType } from './pageHero'

export const schemaTypes: SchemaTypeDefinition[] = [
  ...objectTypes,
  pageHeroType,
  storyType,
  experienceType,
  destinationType,
  tourPackageType,
]
