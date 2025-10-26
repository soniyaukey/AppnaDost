export default function Footer() {
  return (
    <footer className="border-t bg-background/60">
      <div className="container mx-auto px-4 py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-extrabold tracking-tight">
            <div className="size-8 rounded-md bg-gradient-to-br from-brand to-fuchsia-500 shadow-md" />
            <span>AppnaDost</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            The next-gen AI-powered social platform where creativity meets intelligence.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-2">Product</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>AI Feed</li>
            <li>Reels</li>
            <li>Stories</li>
            <li>Messaging</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-2">Community</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>Clubs</li>
            <li>Live Rooms</li>
            <li>Events</li>
            <li>Challenges</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-2">Legal</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>Privacy</li>
            <li>Terms</li>
            <li>Security</li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} AppnaDost. All rights reserved.
      </div>
    </footer>
  );
}
