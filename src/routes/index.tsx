import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span
          className="font-display font-light select-none leading-none"
          style={{
            opacity: 0.1,
            fontSize: "clamp(8rem, 28vw, 28rem)",
            color: "var(--accent-color)",
          }}
        >
          Space
        </span>
      </div>

      <div className="relative max-w-[1600px] w-full mx-auto px-8 grid md:grid-cols-12 gap-8 py-24">
        <div className="md:col-span-7 md:col-start-2">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-8">
            Architect · Researcher
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] tracking-tight">
            Drawing the silence<br />between structures.
          </h1>
          <p className="mt-10 max-w-md text-base leading-relaxed text-muted-foreground">
            A practice grounded in <em>Ma</em> — the negative space that gives
            form its breath. Buildings, research, and writings exploring the
            quiet logic of inhabited geometry.
          </p>
          <div className="mt-12 flex gap-8 text-xs uppercase tracking-[0.3em]">
            <Link to="/portfolio" className="border-b border-foreground pb-1 hover:text-accent-mode hover:border-accent-mode transition-colors">
              View Work
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-accent-mode transition-colors">
              About →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
