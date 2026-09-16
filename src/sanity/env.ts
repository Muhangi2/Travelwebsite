// import.meta.env is populated by our own Vite build from .env.local. The hosted Sanity
// Studio (deployed via `sanity deploy`) is bundled by Sanity's own build tool, which never
// sees that file, so these literal fallbacks are what the deployed Studio actually runs on —
// they must stay in sync with sanity.cli.ts.
const viteEnv = typeof import.meta !== 'undefined' ? import.meta.env : undefined

export const projectId = viteEnv?.VITE_SANITY_PROJECT_ID || 'peu1shme'
export const dataset = viteEnv?.VITE_SANITY_DATASET || 'production'
export const apiVersion = viteEnv?.VITE_SANITY_API_VERSION || '2025-01-01'

export const isSanityConfigured = Boolean(projectId)
