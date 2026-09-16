// import.meta.env is populated by Vite; fall back to process.env for contexts that
// evaluate this module directly under Node (e.g. `sanity deploy`'s manifest step).
const viteEnv = typeof import.meta !== 'undefined' ? import.meta.env : undefined
const nodeEnv = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env

export const projectId = viteEnv?.VITE_SANITY_PROJECT_ID ?? nodeEnv?.VITE_SANITY_PROJECT_ID ?? ''
export const dataset = viteEnv?.VITE_SANITY_DATASET ?? nodeEnv?.VITE_SANITY_DATASET ?? 'production'
export const apiVersion = viteEnv?.VITE_SANITY_API_VERSION ?? nodeEnv?.VITE_SANITY_API_VERSION ?? '2025-01-01'

export const isSanityConfigured = Boolean(projectId)
