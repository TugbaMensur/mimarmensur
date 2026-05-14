import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publications — Tuğba Menşur" },
      { name: "description", content: "Essays and publications: Isarc, AURA, Utopia." },
    ],
  }),
  component: Publications,
});

const sections = [
  { id: "isarc", name: "Isarc", desc: "Conference proceedings" },
  { id: "aura", name: "AURA", desc: "Peer-reviewed journal" },
  { id: "utopia", name: "Utopia", desc: "Independent essays" },
];

function Publications() {
  return (
    <section className="max-w-[1200px] mx-auto px-8 py-24">
      <p className="text-xs uppercase tracking-[0.4em] text-accent-mode mb-6">Writings</p>
      <h1 className="font-display text-5xl md:text-6xl leading-[1.05]">Publications<br />& Essays</h1>

      <div className="mt-20 space-y-24">
        {sections.map((s) => (
          <div key={s.id} className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <h2 className="font-display text-3xl text-accent-mode">{s.name}</h2>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-2">{s.desc}</p>
            </div>
            <div className="md:col-span-8 md:col-start-5 space-y-8">
              <p className="font-display text-lg leading-relaxed">
                <strong className="text-accent-mode font-normal">Note:</strong> Actual
                academic text for {s.name} will be inserted here.
              </p>
              {[1, 2].map((i) => (
                <article key={i} className="border-t border-border pt-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    202{i + 1}
                  </p>
                  <h3 className="font-display text-xl mt-2">Essay Title {i} — Placeholder</h3>
                  <p className="mt-3 text-sm leading-[1.85] text-foreground/75">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
