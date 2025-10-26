import { Brain, Camera, Rocket, MessageSquare, Shield, ShoppingBag, Sparkles, Users } from "lucide-react";

const features = [
  { icon: Camera, title: "Posts & Reels", desc: "Upload photos and short videos with smart editing, AI filters, and carousel posts." },
  { icon: Brain, title: "AI Everything", desc: "Caption generator, smart feed ranking, friend suggestions, and mood-aware discovery." },
  { icon: MessageSquare, title: "Realtime Messaging", desc: "1:1 and group chats with calls, smart replies, and disappearing messages." },
  { icon: Users, title: "Clubs & Live", desc: "Join communities, host live rooms, run polls and weekly challenges." },
  { icon: ShoppingBag, title: "Shopping", desc: "Tag products, visual search, and in-app checkout with recommendations." },
  { icon: Shield, title: "Safety First", desc: "Moderation, reporting, 2FA, device controls, and E2EE chats." },
  { icon: Sparkles, title: "NFT Badges", desc: "Verified digital collectibles and custom profile themes including neon." },
  { icon: Rocket, title: "Fast & Modern", desc: "Optimized, lazy-loaded, and production-ready with React and Tailwind." },
];

export default function Features() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight">Built for the creative era</h2>
        <p className="mt-3 text-muted-foreground">
          Everything you love about social, elevated by intelligence.
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-xl border bg-card p-6 shadow-sm transition hover:shadow-md">
            <div className="flex size-10 items-center justify-center rounded-md bg-gradient-to-br from-brand to-fuchsia-500 text-white shadow-md">
              <Icon className="size-5" />
            </div>
            <h3 className="mt-4 font-semibold">{title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
