import { defineConfig } from 'sanity'
import { structureTool, type StructureResolver } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/sanity/schemas'
import { apiVersion, dataset, projectId } from './src/sanity/env'

const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Stories')
        .schemaType('story')
        .child(S.documentTypeList('story').title('Stories')),
      S.divider(),
      S.listItem()
        .title('Tour packages')
        .schemaType('tourPackage')
        .child(S.documentTypeList('tourPackage').title('Tour packages')),
      S.listItem()
        .title('Destinations')
        .schemaType('destination')
        .child(S.documentTypeList('destination').title('Destinations')),
      S.listItem()
        .title('Experiences')
        .schemaType('experience')
        .child(S.documentTypeList('experience').title('Experiences')),
    ])

export default defineConfig({
  name: 'masterpolo-studio',
  title: 'MasterPolo Safaris',
  basePath: '/studio',
  projectId,
  dataset,
  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
  schema: { types: schemaTypes },
})
