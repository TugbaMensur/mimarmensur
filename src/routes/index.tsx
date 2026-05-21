import { createFileRoute, Link } from "@tanstack/react-router";
import mainVisual from "@/assets/main-visual.png";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="relative max-w-[1600px] w-full mx-auto px-8 md:px-16 py-24 grid md:grid-cols-12 gap-12 items-center">
        {/* Text column */}
        <div className="md:col-span-5 md:col-start-1 order-2 md:order-1">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-10">
            Architect · Researcher
          </p>
          <h1 className="font-display font-light text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
            Architecture begins<br />
            where space<br />
            becomes <em className="not-italic text-accent-mode">legible</em>.
          </h1>
          <p className="mt-10 max-w-md text-base leading-relaxed text-muted-foreground">
            Drawings, research, and reflections on architecture and city.
          </p>
          <div className="mt-14 flex gap-10 text-xs uppercase tracking-[0.3em]">
            <Link
              to="/portfolio"
              className="border-b border-foreground pb-1 hover-neon"
            >
              View Work
            </Link>
            <Link to="/about" className="text-muted-foreground hover-neon">
              About →
            </Link>
          </div>
        </div>

        {/* Visual column */}
        <div className="md:col-span-7 md:col-start-6 order-1 md:order-2 relative">
          <img
            src={mainVisual}
            alt="Architectural structural study — handdrawn linework in terracotta and green"
            className="w-full h-auto select-none pointer-events-none mix-blend-multiply"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
