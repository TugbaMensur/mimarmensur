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
          <Meta label="Location" value={["İstanbul", "Istanbul", "Istanbul", "Istanbul", "Istanbul", "Istanbul", "Yalova", "Istanbul"][n - 1]} />
          <Meta label="Type" value={["Sport Complex", "Library", "Survey", "Home Office", "Independent Research", "Installation", "Story Book", "Concept"][n - 1]} />
          <Meta label="Status" value={["Student Project", "Student Project", "Student Project", "Student Project", "Researcher", "Student Project", "Professional Work", "Professional Work"][n - 1]} />
        </div>
      </header>

      <div className="mt-16 max-w-2xl">
        <p className="font-display text-xl leading-relaxed">
          <strong className="text-accent-mode font-normal">{["Beylerbeyi Sport Complex", "Impasse Library", "Survey Of Sultan Reşad Khan Tomb", "Implementation Project Of A Photographer House", "Losing Home: Metropolis, Dwelling, Body", "Instant Installation", "Sea Horse and Secret Underwater Cave", "Project 8"][n - 1]}</strong>
        </p>
        <p className="mt-6 text-base leading-[1.9] text-foreground/80">
          {[
            "The study began with the investigation of the meanings that the word sport has been given throughout the ages. Etymologically, sport \"des\" away + porter \"to carry\" means \"keep the mind away from serious issues\". It includes both exercises related to the body and mind, and activities carried out individually or collectively within certain rules.",
            "Taksim Square is a landmark from past to now with its geographic character, settlement texture, socio-cultural structure and socio economical roles that it untertook. This square which is physically adjacent to project space has played an effective role in the production process.\n\nThe analysis section of the project focuses on two main questions regarding the square. The first of these questions is as follows: \"Does the square have a border?\"; in other words, \"Can it be said that the effect of the square is limited to the structures and/or areas surrounding it?\". The second question can be asked as follows: \"Is the square a political representation tool fed by the cycle of destruction, reconstruction and new additions of the structures that characterize it throughout history?\"\n\nIn the context of these questions, the analysis section examines how the areas and structures surrounding Taksim have historically transformed together with the breaking points. Then, the structure formed by the breaking points is expressed through a collage within the framework of the conditions of the coming together of certain visuals. In the final product, Taksim Square is approached holistically. The project area is focused on as one of the design decisions taken at the square scale.\n\nThe name of the design is called by the adjacent street to the project area (Approximate translation is Impasse Library). In this context, project is an extension of the existing library. The mass design references the characteristic features of the existing structure in a way that links to the idea of the module.",
            "This project includes the survey drawings of the Sultan Reşad Khan Tomb located in the Eyüpsultan district. It is the Tomb of the Ottoman Sultan Mehmed V. Measurements were taken during weekly tomb visits and transferred to the digital environment. In the presentation flow, plans, section views and detail drawings were shared.",
            "Within the scope of the Implementation Project, the design of a space that includes a photographer's office and living space has been offered. A dark room and a studio in the basement, an office on the ground floor, and a living space on the first floor have been solved. A gallery space that connects the floors and allows the interior of the space to receive light has been designed. The basement floor has a masonry system, the ground floor and the first floor have a steel system. The staircase plans and sections containing these solutions have been presented.",
            "This study points to the pains of the first physical contact with professional working life after architecture & city and regional planning education. The metropolis is located at the center of a complex network of relationships that cannot be divided into home, work, transportation, and leisure time. What is the situation of a body in the time-performance interval covered by working life? Is there a family home left to return to? What else can home be but a place where the body feels relatively safe for 8-12 hours a day? Which of the 9 houses moved within the borders of the same metropolis was the most home-like?\n\nThe method of the work is the use of representational tools of architecture and urbanism through bodily experiences. It consists of the series produced using different types of materials and techniques, such as digital and analog collage.\n\nThe contents of the series can be listed as follows: Introduction: Home is a Slip of the Tongue, Fragment I. The Minimal Story of the Modern Home: \"This is a Tape Recording\", Fragment II. The Metropolitan Mind from the Rural to the City, Fragment III. Metropolitan Sounds of the Modern, Fragment VI. Inside [Outside] at the Limits of the Digital, Fragment V. The Impressionist Gaze Before Deformation: A Mechanical Eye, Fragment VI. In the Non-Existent Temporary Exhibition (lasted approximately 18 hours due to weather conditions).",
            "This study has two parts. In the first part, the relationship between matter, form, and meaning is discussed through the monograph of a selected architect. In the second part, the conceptual base discussed through the monograph is integrated with the city. A selected area is perceived as the empty room of the city, and an installation study is carried out in this area within the scope of the discussions.",
            "These productions are the digital transference of a story written by a 9-year-old child (Mira Nur Yılmaz), along with its accompanying visuals. Since transferring the entire book would exceed the limits of the portfolio, only the parts related to the visuals were included in the study. The original drawings were shared at the end of this part.",
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
      <span className="text-right">{value}</span>
    </div>
  );
}
