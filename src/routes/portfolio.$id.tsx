import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { BackButton } from "@/components/BackButton";

export const Route = createFileRoute("/portfolio/$id")({
  component: ProjectDetail,
  loader: ({ params }) => {
    const n = parseInt(params.id, 10);
    if (isNaN(n) || n < 1 || n > 8) throw notFound();
    return { n };
  },
});

function ProjectDetail() {
  const { n } = Route.useLoaderData();
  const prev = n > 1 ? String(n - 1) : null;
  const next = n < 8 ? String(n + 1) : null;

  return (
    <>
      <BackButton to="/portfolio" label="Portfolio" />
    <article className="max-w-[1200px] mx-auto px-8 py-24">

      <header className="mt-12 grid md:grid-cols-12 gap-8 pb-16 border-b border-border">
        <div className="md:col-span-7">
          <p className="text-xs uppercase tracking-[0.4em] text-accent-mode mb-4">Project {String(n).padStart(2, "0")}</p>
          <h1 className="font-display text-5xl md:text-6xl leading-[1.05]">Project {n}</h1>
        </div>
        <div className="md:col-span-4 md:col-start-9 space-y-3 text-sm">
          <Meta label="Year" value={`${[2017, 2016, 2014, 2015, 2018, 2019, 2023, 2025][n - 1]}`} />
          <Meta label="Location" value={["İstanbul", "ISTANBUL", "ISTANBUL", "ISTANBUL", "ISTANBUL", "ISTANBUL", "ISTANBUL", "ISTANBUL"][n - 1]} />
          <Meta label="Type" value={["Sport Complex", "LIBRARY", "SURVEY", "RESIDENTIAL", "INSTALLATION", "INSTALLATION", "INSTALLATION", "CONCEPT"][n - 1]} />
          <Meta label="Status" value={["Student Project", "STUDENT PROJECT", "STUDENT PROJECT", "STUDENT PROJECT", "STUDENT PROJECT", "STUDENT PROJECT", "STUDENT PROJECT", "STUDENT PROJECT"][n - 1]} />
        </div>
      </header>

      <div className="mt-16 max-w-2xl">
        <p className="font-display text-xl leading-relaxed">
          <strong className="text-accent-mode font-normal">Behlerbeyi Sport Complex</strong>
        </p>
        <p className="mt-6 text-base leading-[1.9] text-foreground/80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
      </div>

      <div className="mt-20 space-y-12">
        {[1, 2, 3, 4].map((i) => (
          <figure key={i} className="aspect-[16/10] bg-muted relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground/60">
                Image {i.toString().padStart(2, "0")} — Placeholder
              </span>
            </div>
          </figure>
        ))}
      </div>

      <nav className="mt-24 pt-12 border-t border-border flex items-center justify-between text-xs uppercase tracking-[0.3em]">
        {prev ? (
          <Link to="/portfolio/$id" params={{ id: prev }} className="hover:text-accent-mode">
            ← Project {prev}
          </Link>
        ) : <span />}
        {next ? (
          <Link to="/portfolio/$id" params={{ id: next }} className="hover:text-accent-mode">
            Project {next} →
          </Link>
        ) : <span />}
      </nav>
    </article>
    </>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b border-border pb-2">
      <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{label}</span>
      <span>{value}</span>
    </div>
  );
}
