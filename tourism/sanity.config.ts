import {defineConfig} from 'sanity'
import {structureTool, type StructureResolver} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {DarkLayout} from './components/DarkLayout'

const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem().title('Stories').schemaType('story').child(S.documentTypeList('story').title('Stories')),
      S.divider(),
      S.listItem().title('Tour packages').schemaType('tourPackage').child(S.documentTypeList('tourPackage').title('Tour packages')),
      S.listItem().title('Destinations').schemaType('destination').child(S.documentTypeList('destination').title('Destinations')),
      S.listItem().title('Experiences').schemaType('experience').child(S.documentTypeList('experience').title('Experiences')),
    ])

export default defineConfig({
  name: 'default',
  title: 'Still Wild Safaris',

  projectId: 'peu1shme',
  dataset: 'production',

  plugins: [structureTool({structure}), visionTool()],

  schema: {
    types: schemaTypes,
  },

  studio: {
    components: {
      layout: DarkLayout,
    },
  },
})
