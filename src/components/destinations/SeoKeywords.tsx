export default function SeoKeywords({ keywords }: { keywords: string }) {
  return (
    <section className="pb-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-md bg-brand-green/5 px-6 py-4 text-center text-xs italic text-brand-green/80">
          {keywords}
        </div>
      </div>
    </section>
  )
}
