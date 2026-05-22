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
          <Meta label="Location" value={["İstanbul", "Istanbul", "Istanbul", "Istanbul", "Istanbul", "Istanbul", "Istanbul", "Istanbul"][n - 1]} />
          <Meta label="Type" value={["Sport Complex", "Library", "Survey", "Residential", "Installation", "Installation", "Installation", "Concept"][n - 1]} />
          <Meta label="Status" value={["Student Project", "Student Project", "Student Project", "Student Project", "Student Project", "Student Project", "Student Project", "Student Project"][n - 1]} />
        </div>
      </header>

      <div className="mt-16 max-w-2xl">
        <p className="font-display text-xl leading-relaxed">
          <strong className="text-accent-mode font-normal">{["Beylerbeyi Sport Complex", "Impasse Library", "Project 3", "Project 4", "Project 5", "Project 6", "Project 7", "Project 8"][n - 1]}</strong>
        </p>
        <p className="mt-6 text-base leading-[1.9] text-foreground/80">
          The study began with the investigation of the meanings that the word sport has been given throughout the ages. Etymologically, sport "des" away + porter "to carry" means "keep the mind away from serious issues". It includes both exercises related to the body and mind, and activities carried out individually or collectively within certain rules.
        </p>
        <p className="mt-6 text-base leading-[1.9] text-foreground/80">
          Historically, it is associated with issues such as survival, defense and attack, and cooperation in the context of fighting against nature. Due to the multitude of concepts and phrases that can be included in the content of sports activities, a network map was created that is grouped into three categories to refer to the history of sports, their nature, and the relationship they establish with the body and mind. The purpose of this network is to show the breadth of the place that sports have acquired in our lives.
        </p>
        <p className="mt-6 text-base leading-[1.9] text-foreground/80">
          The sports complex was designed in Beylerbeyi, one of the districts of the Bosphorus. It was examined how this area has transformed throughout history. This place, which was a transition area in the pre-Byzantine period, has maintained its introverted character throughout history. The complex aims to combine this character with sports that can be played individually and collectively. In this context, the sports complex design is a center that includes indoor and outdoor sports areas and an Olympic pool with a capacity of approximately 2,500 spectators.
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
