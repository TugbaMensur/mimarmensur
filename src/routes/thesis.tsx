import { createFileRoute } from "@tanstack/react-router";
import { BackButton } from "@/components/BackButton";

export const Route = createFileRoute("/thesis")({
  head: () => ({
    meta: [
      { title: "Master Thesis — Tuğba Menşur" },
      { name: "description", content: "Master thesis academic presentation." },
    ],
  }),
  component: Thesis,
});

function Thesis() {
  return (
    <>
      <BackButton />
    <section className="max-w-[1100px] mx-auto px-8 py-24">
      <p className="text-xs uppercase tracking-[0.4em] text-accent-mode mb-6">Master Thesis</p>
      <h1 className="font-display text-5xl md:text-6xl leading-[1.05]">
        Spatial Thresholds<br />in Post-Seismic Urbanism
      </h1>
      <p className="mt-8 text-sm uppercase tracking-[0.25em] text-muted-foreground">
        Placeholder Title · Department of Architecture
      </p>

      <div className="mt-16 space-y-14 max-w-3xl">
        {["Abstract", "Introduction", "Theoretical Framework", "Case Studies", "Findings", "Conclusion"].map((s) => (
          <div key={s}>
            <h2 className="font-display text-2xl mb-5">{s}</h2>
            <p className="font-display text-lg leading-relaxed mb-4">
              <strong className="text-accent-mode font-normal">Note:</strong> Actual
              academic text for {s} will be inserted here.
            </p>
            <p className="text-base leading-[1.9] text-foreground/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}
