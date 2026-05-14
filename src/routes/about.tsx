import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Tuğba Menşur" },
      { name: "description", content: "Biography of architect Tuğba Menşur." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <section className="max-w-[1200px] mx-auto px-8 py-24 md:py-32 grid md:grid-cols-12 gap-12">
      <div className="md:col-span-4">
        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">About</p>
        <h1 className="font-display text-4xl md:text-5xl mt-6 leading-tight">
          Tuğba<br />Menşur
        </h1>
        <div className="mt-8 h-px w-16 bg-accent-mode" />
      </div>
      <div className="md:col-span-7 md:col-start-6 space-y-6 text-base leading-[1.9] text-foreground/85">
        <p className="font-display text-xl leading-relaxed">
          <strong className="text-accent-mode font-normal">Note:</strong> Actual biographical
          text will be inserted here.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Architect and
          researcher working at the intersection of structural clarity and
          phenomenological experience. Practice rooted in the Japanese principle
          of <em>Ma</em>, exploring negative space as a generative force in
          contemporary architecture.
        </p>
        <p>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Influences include Toyo Ito's fluid lightness, Arata Isozaki's formal
          rigor, and Steven Holl's investigations of light and material.
        </p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </section>
  );
}
