import { createFileRoute, Link } from "@tanstack/react-router";
import { BackButton } from "@/components/BackButton";
import cover1 from "@/assets/cover-1.jpg";


export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: [
      { title: "Portfolio — Tuğba Menşur" },
      { name: "description", content: "Selected architectural projects." },
    ],
  }),
  component: Portfolio,
});

const projects = Array.from({ length: 8 }, (_, i) => ({
  id: String(i + 1),
  name: `Project ${i + 1}`,
  year: 2018 + i,
  type: ["Residential", "Public", "Cultural", "Urban", "Pavilion", "Interior", "Mixed-use", "Concept"][i],
  cover: i === 0 ? cover1 : null,
}));



function Portfolio() {
  return (
    <>
      <BackButton />
    <section className="max-w-[1600px] mx-auto px-8 py-24">
      <div className="grid md:grid-cols-12 mb-20">
        <div className="md:col-span-8">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">Selected Works</p>
          <h1 className="font-display text-5xl md:text-6xl leading-tight">Portfolio</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {projects.map((p, i) => (
          <Link
            key={p.id}
            to="/portfolio/$id"
            params={{ id: p.id }}
            className="group block"
          >
            <div className="aspect-[4/5] bg-muted overflow-hidden relative">
              {p.cover ? (
                <img
                  src={p.cover}
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="font-display select-none"
                    style={{ opacity: 0.1, fontSize: "8rem", color: "var(--accent-color)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              )}

              <div className="absolute inset-0 bg-accent-mode opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
            </div>
            <div className="mt-5 flex items-baseline justify-between">
              <h3 className="font-display text-xl group-hover:text-accent-mode transition-colors">
                {p.name}
              </h3>
              <span className="text-xs tracking-widest text-muted-foreground">{p.year}</span>
            </div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-1">
              {p.type}
            </p>
          </Link>
        ))}
      </div>
    </section>
    </>
  );
}
