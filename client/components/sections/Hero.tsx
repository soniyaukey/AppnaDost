import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70 [background:radial-gradient(600px_circle_at_20%_20%,hsl(var(--gradient-start)/.25),transparent_60%),radial-gradient(600px_circle_at_80%_0%,hsl(var(--neon)/.20),transparent_60%),radial-gradient(800px_circle_at_80%_80%,hsl(var(--gradient-end)/.25),transparent_60%)]" />
      <div className="container mx-auto px-4 py-20 sm:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground">
              <span className="size-2 rounded-full bg-gradient-to-r from-brand to-fuchsia-500" />
              Now launching: AI-powered social media
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="bg-gradient-to-r from-brand via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
                AppnaDost
              </span>{" "}
              – The Next-Gen AI Social
            </h1>
            <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
              Share photos, reels, and stories. Chat in real time. Explore a smart feed powered by AI companions, smart recommendations, and voice-enabled interactions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/profile">
                <Button className="bg-gradient-to-r from-brand to-fuchsia-500 text-white shadow-lg hover:opacity-90">Create account</Button>
              </Link>
              <Link to="/explore">
                <Button variant="outline">Explore trending</Button>
              </Link>
            </div>
            <div className="mt-6 text-xs text-muted-foreground">
              Secure by design • JWT auth • Realtime with Socket.io • MySQL ready
            </div>
          </div>
          <div className="relative">
            <div className="mx-auto w-full max-w-md rounded-[2rem] border bg-card p-3 shadow-2xl sm:max-w-lg">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-brand/10 via-fuchsia-500/10 to-pink-500/10 p-4">
                <div className="rounded-xl border bg-background/80 p-3">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Smart Feed</span>
                    <span>For you</span>
                  </div>
                  <ul className="mt-3 space-y-3">
                    {[1,2,3].map((i) => (
                      <li key={i} className="overflow-hidden rounded-lg border bg-background">
                        <div className="aspect-video w-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700" />
                        <div className="p-3">
                          <div className="flex items-center gap-2 text-sm">
                            <div className="size-6 rounded-full bg-gradient-to-br from-brand to-fuchsia-500" />
                            <span className="font-medium">@creator{i}</span>
                            <span className="ml-auto text-xs text-muted-foreground">AI curated</span>
                          </div>
                          <p className="mt-1 text-sm text-muted-foreground">
                            AI thinks you'll love this. Tap to view more like this.
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
