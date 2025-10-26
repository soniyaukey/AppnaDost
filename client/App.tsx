import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Placeholder from "@/components/Placeholder";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-background text-foreground">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/explore" element={<Placeholder title="Explore" description="Discover trending creators, hashtags, and location-based content. Ask me to build this page next." />} />
              <Route path="/reels" element={<Placeholder title="Reels" description="Short, music-powered videos with AI auto-cut. Ask me to build this page next." />} />
              <Route path="/messages" element={<Placeholder title="Messages" description="Real-time chats, calls, and smart replies. Ask me to build this page next." />} />
              <Route path="/shop" element={<Placeholder title="Shop" description="Tag products, visual search, and checkout. Ask me to build this page next." />} />
              <Route path="/profile" element={<Placeholder title="Profile" description="Your bio, posts, reels, and themes. Ask me to build this page next." />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
