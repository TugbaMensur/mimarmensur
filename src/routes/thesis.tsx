import { createFileRoute } from "@tanstack/react-router";
import { BackButton } from "@/components/BackButton";

const THESIS_DRIVE_URL =
  "https://drive.google.com/file/d/1oQpUZNCwFvShz8vLU_sRYHXoK6RJU4KL/view?usp=drive_link";
const THESIS_PREVIEW_URL =
  "https://drive.google.com/file/d/1oQpUZNCwFvShz8vLU_sRYHXoK6RJU4KL/preview";

export const Route = createFileRoute("/thesis")({
  head: () => ({
    meta: [
      { title: "Thesis and Publications — Tuğba Menşur" },
      {
        name: "description",
        content:
          "Master thesis presentation and selected publications by Tuğba Menşur.",
      },
    ],
  }),
  component: Thesis,
});

function Thesis() {
  return (
    <>
      <BackButton />
      <section className="max-w-[1200px] mx-auto px-8 py-24">
        {/* Hero */}
        <p className="text-xs uppercase tracking-[0.4em] text-accent-mode mb-6">
          Master Thesis
        </p>
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-8">
            <h1 className="font-display text-5xl md:text-6xl leading-[1.05]">
              Spatial Thresholds<br />in Post-Seismic Urbanism
            </h1>
            <p className="mt-8 text-sm uppercase tracking-[0.25em] text-muted-foreground">
              Department of Architecture · Master Thesis Presentation
            </p>
            <p className="mt-10 text-lg leading-[1.9] text-foreground/80 max-w-2xl">
              This thesis investigates how architecture mediates the relationship
              between memory, rupture, and reconstruction in post-seismic
              territories. Through drawings, mappings, and case studies, it
              proposes spatial thresholds as instruments for reading the city —
              moments where structure, void, and inhabitation negotiate a fragile
              continuity between what was, what remains, and what is becoming.
            </p>
          </div>

          {/* Architectural sketch thumbnail */}
          <div className="md:col-span-4">
            <div className="aspect-[3/4] border border-border bg-secondary/40 flex items-center justify-center">
              <svg
                viewBox="0 0 120 160"
                className="w-2/3 h-2/3 text-accent-mode opacity-70"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
              >
                <rect x="20" y="40" width="80" height="100" />
                <line x1="20" y1="70" x2="100" y2="70" />
                <line x1="20" y1="100" x2="100" y2="100" />
                <line x1="60" y1="40" x2="60" y2="140" />
                <line x1="20" y1="40" x2="60" y2="20" />
                <line x1="100" y1="40" x2="60" y2="20" />
                <line x1="0" y1="140" x2="120" y2="140" />
              </svg>
            </div>
            <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground text-right">
              Sketch · Threshold Study
            </p>
          </div>
        </div>

        {/* Primary action — external file */}
        <div className="mt-24">
          <a
            href={THESIS_DRIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group block border-2 px-10 py-12 transition-all duration-500 ease-out"
            style={{ borderColor: "#091BFE" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#39E75F";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#091BFE";
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-3">
                  Primary Document · 61 MB · External
                </p>
                <h2 className="font-display text-3xl md:text-4xl group-hover:text-[#39E75F] transition-colors duration-500">
                  View Full Thesis Presentation
                </h2>
              </div>
              <span
                aria-hidden
                className="font-display text-3xl group-hover:text-[#39E75F] transition-colors duration-500"
                style={{ color: "#091BFE" }}
              >
                ↗
              </span>
            </div>
          </a>

          {/* Inline preview (iframe) */}
          <div className="mt-8 border border-border bg-secondary/30">
            <div className="aspect-[16/10] w-full">
              <iframe
                src={THESIS_PREVIEW_URL}
                title="Thesis Presentation Preview"
                className="w-full h-full"
                allow="autoplay"
              />
            </div>
            <p className="px-6 py-4 text-[11px] uppercase tracking-[0.3em] text-muted-foreground border-t border-border">
              Preview · Hosted on Google Drive
            </p>
          </div>
        </div>

        {/* Secondary action — summary PDF */}
        <div className="mt-24 grid md:grid-cols-12 gap-10 border-t border-border pt-16">
          <div className="md:col-span-5">
            <h3 className="font-display text-2xl md:text-3xl leading-tight">
              Detailed Thesis<br />Summary
            </h3>
            <p className="mt-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              ~2000 Words · PDF
            </p>
          </div>
          <div className="md:col-span-7 flex flex-col gap-6">
            <p className="text-base leading-[1.9] text-foreground/75">
              A condensed academic summary of the thesis — its framework,
              methodology, and conclusions — intended for readers who prefer a
              concise written overview before engaging with the full presentation.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-3 self-start font-body text-xs tracking-[0.3em] uppercase border-b border-foreground/30 pb-2 hover-neon transition-colors"
            >
              <span>Download PDF</span>
              <span aria-hidden>↓</span>
            </a>
            <p className="text-[11px] italic text-muted-foreground">
              Placeholder: link to the 2000-word summary PDF will be provided here.
            </p>
          </div>
        </div>

        {/* Publications */}
        <div className="mt-32 border-t border-border pt-16">
          <p className="text-xs uppercase tracking-[0.4em] text-accent-mode mb-6">
            Writings
          </p>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05]">
            Publications & Essays
          </h2>

          <div className="mt-16 space-y-20">
            {[
              { id: "isarc", name: "Isarc", desc: "Conference proceedings" },
              { id: "aura", name: "AURA", desc: "Peer-reviewed journal" },
              { id: "utopia", name: "Utopia", desc: "Independent essays" },
            ].map((s) => (
              <div key={s.id} className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-3">
                  <h3 className="font-display text-2xl text-accent-mode">
                    {s.name}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-2">
                    {s.desc}
                  </p>
                </div>
                <div className="md:col-span-8 md:col-start-5 space-y-6">
                  <p className="font-display text-lg leading-relaxed">
                    <strong className="text-accent-mode font-normal">Note:</strong>{" "}
                    Actual academic text for {s.name} will be inserted here.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
