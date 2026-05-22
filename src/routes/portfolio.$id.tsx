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
          <strong className="text-accent-mode font-normal">{["Beylerbeyi Sport Complex", "Impasse Library", "Survey Of Sultan Reşad Khan Tomb", "Project 4", "Project 5", "Project 6", "Project 7", "Project 8"][n - 1]}</strong>
        </p>
        <p className="mt-6 text-base leading-[1.9] text-foreground/80">
          {[
            "The study began with the investigation of the meanings that the word sport has been given throughout the ages. Etymologically, sport \"des\" away + porter \"to carry\" means \"keep the mind away from serious issues\". It includes both exercises related to the body and mind, and activities carried out individually or collectively within certain rules.",
            "Taksim Square is a landmark from past to now with its geographic character, settlement texture, socio-cultural structure and socio economical roles that it untertook. This square which is physically adjacent to project space has played an effective role in the production process.\n\nThe analysis section of the project focuses on two main questions regarding the square. The first of these questions is as follows: \"Does the square have a border?\"; in other words, \"Can it be said that the effect of the square is limited to the structures and/or areas surrounding it?\". The second question can be asked as follows: \"Is the square a political representation tool fed by the cycle of destruction, reconstruction and new additions of the structures that characterize it throughout history?\"\n\nIn the context of these questions, the analysis section examines how the areas and structures surrounding Taksim have historically transformed together with the breaking points. Then, the structure formed by the breaking points is expressed through a collage within the framework of the conditions of the coming together of certain visuals. In the final product, Taksim Square is approached holistically. The project area is focused on as one of the design decisions taken at the square scale.\n\nThe name of the design is called by the adjacent street to the project area (Approximate translation is Impasse Library). In this context, project is an extension of the existing library. The mass design references the characteristic features of the existing structure in a way that links to the idea of the module.",
            "This project includes the survey drawings of the Sultan Reşad Han Tomb located in the Eyüpsultan district. It is the Tomb of the Ottoman Sultan Mehmed V. Measurements were taken during weekly tomb visits and transferred to the digital environment. In the presentation flow, plans, section views and detail drawings were shared.",
            "Project 4 description.",
            "Project 5 description.",
            "Project 6 description.",
            "Project 7 description.",
            "Project 8 description.",
          ][n - 1].split("\n\n").map((paragraph, i) => (
            <span key={i} className="block mt-6 first:mt-0">{paragraph}</span>
          ))}
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
