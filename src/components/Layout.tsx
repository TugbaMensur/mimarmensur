import { Link, useLocation, Outlet } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/thesis", label: "Thesis and Publications" },
  { to: "/documents", label: "Documents and Diplomas" },
  { to: "/contact", label: "Contact" },
] as const;

const academicRoutes = ["/research", "/thesis", "/publications", "/documents"];

const SIDEBAR_WIDTH = "16rem";

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  const location = useLocation();

  return (
    <nav className="flex flex-col gap-6">
      {nav.map((n) => {
        const isActive =
          n.to === "/thesis"
            ? location.pathname === "/thesis" || location.pathname === "/publications"
            : location.pathname === n.to || location.pathname.startsWith(n.to);

        return (
          <Link
            key={n.to}
            to={n.to}
            onClick={onNavigate}
            className={cn(
              "font-display text-base tracking-[0.2em] uppercase transition-colors",
              isActive
                ? "text-accent-mode"
                : "text-muted-foreground hover:text-accent-mode"
            )}
          >
            {n.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function Layout() {
  const location = useLocation();
  const isAcademic = academicRoutes.some((r) => location.pathname.startsWith(r));
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.mode = isAcademic ? "academic" : "creative";
  }, [isAcademic]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Desktop sidebar */}
      <aside
        className="hidden md:flex fixed inset-y-0 left-0 z-40 flex-col justify-between border-r border-border bg-background px-10 py-12"
        style={{ width: SIDEBAR_WIDTH }}
      >
        <div className="flex flex-col gap-16">
          <Link to="/" className="font-display tracking-[0.25em] text-sm uppercase leading-relaxed">
            Tuğba<br />Menşur
          </Link>
          <NavList />
        </div>
        <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
          Architect<br />Researcher
        </div>
      </aside>

      {/* Mobile top bar */}
      <header className="md:hidden sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="px-6 py-5 flex items-center justify-between">
          <Link to="/" className="font-display tracking-[0.25em] text-sm uppercase">
            Tuğba Menşur
          </Link>
          <button
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="text-foreground hover:text-accent-mode transition-colors"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-background/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative ml-auto h-full w-[80%] max-w-xs bg-background border-l border-border flex flex-col justify-between px-8 py-10 animate-in slide-in-from-right duration-300">
            <div className="flex flex-col gap-12">
              <div className="flex items-center justify-between">
                <span className="font-display tracking-[0.25em] text-sm uppercase">Menu</span>
                <button
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                  className="text-foreground hover:text-accent-mode transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <NavList onNavigate={() => setMobileOpen(false)} />
            </div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
              Architect · Researcher
            </div>
          </div>
        </div>
      )}

      {/* Main content + footer offset for sidebar */}
      <div className="md:pl-[16rem] flex flex-col min-h-screen">
        <main className="flex-1">
          <Outlet />
        </main>
        <footer className="border-t border-border mt-32">
          <div className="max-w-[1400px] mx-auto px-8 py-10 flex flex-col md:flex-row items-center justify-center md:justify-between gap-3 text-xs tracking-widest uppercase text-muted-foreground">
            <span>tugbamensur@outlook.com</span>
            <span>© {new Date().getFullYear()} Tuğba Menşur</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
