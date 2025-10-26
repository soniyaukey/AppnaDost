import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Moon, Sun, MessageCircle, Compass, PlaySquare, ShoppingBag } from "lucide-react";

const navItems = [
  { to: "/explore", label: "Explore", icon: Compass },
  { to: "/reels", label: "Reels", icon: PlaySquare },
  { to: "/messages", label: "Messages", icon: MessageCircle },
  { to: "/shop", label: "Shop", icon: ShoppingBag },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<string>(() => {
    if (typeof window === "undefined") return "light";
    return localStorage.getItem("theme") || "light";
  });
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-extrabold tracking-tight">
          <div className="size-8 rounded-md bg-gradient-to-br from-brand to-fuchsia-500 shadow-md" />
          <span className="text-lg sm:text-xl">AppnaDost</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
                  isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground hover:bg-accent/50",
                )
              }
            >
              <Icon className="size-4" />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full">
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </Button>
          <Link to="/profile">
            <Button className="hidden sm:inline-flex bg-gradient-to-r from-brand to-fuchsia-500 text-white hover:opacity-90">
              Get started
            </Button>
          </Link>
          <button
            className="md:hidden rounded-md p-2 text-muted-foreground hover:bg-accent"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t">
          <div className="container mx-auto px-4 py-2 grid gap-1">
            {navItems.map(({ to, label }) => (
              <Link key={to} to={to} className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">
                {label}
              </Link>
            ))}
            <Link to="/profile" className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">
              Get started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
