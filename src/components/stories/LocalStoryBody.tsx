import type { ArticleBlock } from '@/data/articles'

export default function LocalStoryBody({ value }: { value: ArticleBlock[] }) {
  return (
    <>
      {value.map((block, i) => {
        if (block.kind === 'heading') {
          return block.level === 2 ? (
            <h2 key={i} className="mt-12">{block.text}</h2>
          ) : (
            <h3 key={i} className="mt-8 text-xl">{block.text}</h3>
          )
        }

        if (block.kind === 'list') {
          return (
            <ul key={i} className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-brand-charcoal">
              {block.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          )
        }

        if (block.kind === 'table') {
          return (
            <div key={i} className="mt-10 overflow-x-auto rounded-xl border border-neutral-200 shadow-sm">
              <table className="w-full min-w-[480px] text-sm">
                <thead>
                  <tr className="bg-brand-forest-dark text-white">
                    {block.headers.map((h, j) => (
                      <th key={j} className="px-4 py-3 text-left font-medium">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-brand-charcoal">
                  {block.rows.map((row, ri) => (
                    <tr key={ri} className={`border-t border-neutral-100 ${ri % 2 === 1 ? 'bg-brand-cream/30' : ''}`}>
                      {row.map((cell, ci) => (
                        <td key={ci} className="px-4 py-3 align-top">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        }

        return (
          <p key={i} className="mt-4 leading-relaxed text-brand-charcoal">{block.text}</p>
        )
      })}
    </>
  )
}
