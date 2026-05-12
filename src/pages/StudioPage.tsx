import { Studio } from 'sanity'
import config from '../../sanity.config'
import { isSanityConfigured } from '@/sanity/env'

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, fontFamily: 'system-ui, sans-serif' }}>
        <div style={{ maxWidth: 560 }}>
          <h1 style={{ fontSize: 24, marginBottom: 12 }}>Sanity Studio is not configured</h1>
          <p style={{ color: '#555', lineHeight: 1.5 }}>
            Set <code>VITE_SANITY_PROJECT_ID</code> (and optionally <code>VITE_SANITY_DATASET</code>) in
            a <code>.env.local</code> file at the project root, then restart <code>npm run dev</code>.
          </p>
          <p style={{ color: '#555', lineHeight: 1.5, marginTop: 12 }}>
            See <code>.env.example</code> for the full template.
          </p>
        </div>
      </div>
    )
  }

  return <Studio config={config} />
}
