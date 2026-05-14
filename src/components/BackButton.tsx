import { Link } from "@tanstack/react-router";

export function BackButton({ to = "/", label = "Back" }: { to?: string; label?: string }) {
  return (
    <div className="max-w-[1600px] mx-auto px-8 pt-8">
      <Link
        to={to}
        className="inline-flex items-center gap-2 font-body text-xs tracking-[0.25em] uppercase text-muted-foreground hover:text-accent-mode transition-colors"
      >
        <span aria-hidden>←</span>
        <span>{label}</span>
      </Link>
    </div>
  );
}
