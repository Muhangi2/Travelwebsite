import { defineConfig } from 'sanity'
import { structureTool, type StructureResolver } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/sanity/schemas'
import { apiVersion, dataset, projectId } from './src/sanity/env'

const PAGE_HEROES = [
  { id: 'pageHero-about',      title: 'About — Our Story' },
  { id: 'pageHero-collections', title: 'Safari Collections' },
  { id: 'pageHero-stories',    title: 'Stories / Journal' },
  { id: 'pageHero-team',       title: 'Meet the Team' },
  { id: 'pageHero-knowBefore', title: 'Know Before You Go' },
  { id: 'pageHero-workWithUs', title: 'Work With Us' },
]

const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Page Heroes')
        .icon(() => '🏔')
        .child(
          S.list()
            .title('Page Heroes')
            .items(
              PAGE_HEROES.map(({ id, title }) =>
                S.listItem()
                  .title(title)
                  .id(id)
                  .child(
                    S.document()
                      .schemaType('pageHero')
                      .documentId(id)
                      .title(title),
                  ),
              ),
            ),
        ),

      S.divider(),

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
  name: 'still-wild-studio',
  title: 'Still Wild Safaris',
  basePath: '/studio',
  projectId,
  dataset,
  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
  schema: { types: schemaTypes },
})
