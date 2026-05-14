import { createFileRoute } from "@tanstack/react-router";
import { BackButton } from "@/components/BackButton";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — Tuğba Menşur" },
      { name: "description", content: "Research proposal: Achieve and Earthquake." },
    ],
  }),
  component: Research,
});

function Research() {
  return (
    <>
      <BackButton />
    <section className="max-w-[1100px] mx-auto px-8 py-24">
      <p className="text-xs uppercase tracking-[0.4em] text-accent-mode mb-6">Research Proposal</p>
      <h1 className="font-display text-5xl md:text-6xl leading-[1.05]">
        Achieve <span className="text-muted-foreground">/</span> Earthquake
      </h1>
      <div className="mt-6 h-px w-16 bg-accent-mode" />

      <div className="mt-16 grid md:grid-cols-12 gap-12">
        <aside className="md:col-span-3">
          <ul className="space-y-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <li>01 — Abstract</li>
            <li>02 — Achieve</li>
            <li>03 — Earthquake</li>
            <li>04 — Methodology</li>
          </ul>
        </aside>

        <div className="md:col-span-9 space-y-14">
          <Block title="01 — Abstract" />
          <Block title="02 — Achieve" />
          <Block title="03 — Earthquake" />
          <Block title="04 — Methodology" />
        </div>
      </div>
    </section>
  );
}

function Block({ title }: { title: string }) {
  return (
    <div>
      <h2 className="font-display text-2xl mb-5">{title}</h2>
      <p className="font-display text-lg leading-relaxed mb-4">
        <strong className="text-accent-mode font-normal">Note:</strong> Actual academic
        text for {title.replace(/^\d+\s—\s/, "")} will be inserted here.
      </p>
      <p className="text-base leading-[1.9] text-foreground/80">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div>
  );
}
