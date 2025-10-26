export default function Showcase() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border bg-card p-6">
          <h3 className="text-xl font-semibold">Smart Explore</h3>
          <p className="mt-1 text-sm text-muted-foreground">Trending by category and region with AI discovery and map-based browsing.</p>
          <div className="mt-4 aspect-[16/10] rounded-xl bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700" />
        </div>
        <div className="rounded-2xl border bg-card p-6">
          <h3 className="text-xl font-semibold">Creator Insights</h3>
          <p className="mt-1 text-sm text-muted-foreground">Track reach, engagement, demographics, and best time to post.</p>
          <div className="mt-4 aspect-[16/10] rounded-xl bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700" />
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-2xl text-center">
        <a href="/reels" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-brand to-fuchsia-500 px-6 py-3 text-sm font-medium text-white shadow hover:opacity-90">
          Try AI Reels →
        </a>
      </div>
    </section>
  );
}
