import { createFileRoute } from "@tanstack/react-router";
import { BackButton } from "@/components/BackButton";
import thesisFirstPage from "@/assets/thesis-first-page.png.asset.json";

const THESIS_DRIVE_URL =
  "https://drive.google.com/file/d/1eIAX2GWaRhjKx874Dnj7lIRZCAsASbHc/view?usp=share_link";
const THESIS_PREVIEW_URL =
  "https://drive.google.com/file/d/1eIAX2GWaRhjKx874Dnj7lIRZCAsASbHc/preview";
const THESIS_READ_URL =
  "https://drive.google.com/file/d/1HMHY0e9KHIfn66TB0VkWAxu1lITc1SFc/view?usp=share_link";
const THESIS_READ_PREVIEW_URL =
  "https://drive.google.com/file/d/1HMHY0e9KHIfn66TB0VkWAxu1lITc1SFc/preview";

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
              Geometry and Philosophy of Folding:<br />
              <span className="text-accent-mode">Architecture as a Derivative</span>
            </h1>
            <p className="mt-8 text-sm uppercase tracking-[0.25em] text-muted-foreground">
              Department of Architecture · Master Thesis Presentation
            </p>
            <p className="mt-10 text-lg leading-[1.9] text-foreground/80 max-w-2xl">
              This thesis explores the emergence of folding in architecture as
              both a theoretical and practical phenomenon between 1990 and 2006,
              using the concept of the &ldquo;fold&rdquo; as its focal point. As
              Greg Lynn describes in the introduction to his 2004 publication
              &ldquo;Folding in Architecture&rdquo;, early folding projects were
              characterized by &ldquo;happy accidents&rdquo; — designs that
              embraced complexity through experimentation, automatism,
              arbitrariness, and chance. Within this context, the fold has
              appeared in multiple roles: as a metaphor, as a physical mechanism
              of bending and layering, and even as an extension of a kind of
              digital Gothic sensibility.
            </p>
          </div>

          {/* Architectural sketch thumbnail */}
          <div className="md:col-span-4">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={thesisFirstPage.url}
                alt="Thesis presentation first page — Klee 2006 diagram"
                className="w-full h-full object-contain"
              />
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

        {/* Secondary action — Read Thesis PDF */}
        <div className="mt-24">
          <a
            href={THESIS_READ_URL}
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
                  Written Thesis · PDF · External
                </p>
                <h2 className="font-display text-3xl md:text-4xl group-hover:text-[#39E75F] transition-colors duration-500">
                  Read Thesis
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
                src={THESIS_READ_PREVIEW_URL}
                title="Read Thesis Preview"
                className="w-full h-full"
                allow="autoplay"
              />
            </div>
            <p className="px-6 py-4 text-[11px] uppercase tracking-[0.3em] text-muted-foreground border-t border-border">
              Preview · Hosted on Google Drive
            </p>
          </div>
        </div>

        {/* Publications */}
        <div className="mt-32 border-t border-border pt-16">
          <p className="text-xs uppercase tracking-[0.4em] text-accent-mode mb-6">
            Writings
          </p>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05]">
            Publication & Essay
          </h2>

          <div className="mt-16 space-y-20">
            {[
              { id: "isarc", name: "Isarc", desc: "Conference proceedings" },
            ].map((s) => (
              <div key={s.id} className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-3">
                  <h3 className="font-display text-2xl text-accent-mode">
                    <a href="https://www.isarconference.org/_files/ugd/6dc816_3b532e77b09c49c1b276e1ab5abd74c2.pdf" target="_blank" rel="noopener noreferrer" className="underline">
                      {s.name}
                    </a>
                  </h3>
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-2">
                    {s.desc}
                  </p>
                </div>
                <div className="md:col-span-8 md:col-start-5 space-y-6">
                  <p className="font-display text-lg leading-relaxed">
                    <strong className="text-accent-mode font-normal">Note:</strong>{" "}
                    To access the full paper, please navigate to the 'isarc' tab and refer to page 59.
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
