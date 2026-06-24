import {objectTypes} from './objects'
import {storyType} from './story'
import {experienceType} from './experience'
import {destinationType} from './destination'
import {tourPackageType} from './tourPackage'

export const schemaTypes = [
  ...objectTypes,
  storyType,
  experienceType,
  destinationType,
  tourPackageType,
]
