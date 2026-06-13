export const projectId = import.meta.env.VITE_SANITY_PROJECT_ID ?? ''
export const dataset = import.meta.env.VITE_SANITY_DATASET ?? 'production'
export const apiVersion = import.meta.env.VITE_SANITY_API_VERSION ?? '2025-01-01'

export const isSanityConfigured = Boolean(projectId)
