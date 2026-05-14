import { Link, useLocation, Outlet } from "@tanstack/react-router";
import { useEffect } from "react";

const nav = [
  { to: "/", label: "Index" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/research", label: "Research" },
  { to: "/thesis", label: "Thesis" },
  { to: "/publications", label: "Publications" },
  { to: "/documents", label: "Documents" },
  { to: "/contact", label: "Contact" },
] as const;

const academicRoutes = ["/research", "/thesis", "/publications", "/documents"];

export function Layout() {
  const location = useLocation();
  const isAcademic = academicRoutes.some((r) => location.pathname.startsWith(r));

  useEffect(() => {
    document.documentElement.dataset.mode = isAcademic ? "academic" : "creative";
  }, [isAcademic]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-[1600px] mx-auto px-8 py-6 flex items-center justify-between">
          <Link to="/" className="font-display tracking-[0.25em] text-sm uppercase">
            Tuğba Menşur
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {nav.slice(1).map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-xs uppercase tracking-[0.2em] font-body text-muted-foreground hover:text-accent-mode transition-colors"
                activeProps={{ className: "text-accent-mode" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-border mt-32">
        <div className="max-w-[1600px] mx-auto px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-2 text-xs tracking-widest uppercase text-muted-foreground">
          <span>tugbamensur@outlook.com</span>
          <span>© {new Date().getFullYear()} Tuğba Menşur</span>
        </div>
      </footer>
    </div>
  );
}
