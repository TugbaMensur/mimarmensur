import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { BackButton } from "@/components/BackButton";
import { useState, useEffect } from "react";
import { ZoomIn, ZoomOut, X } from "lucide-react";
import project8_1 from "@/assets/project8-1.png";
import project8_2 from "@/assets/project8-2.png";
import project8_3 from "@/assets/project8-3.png";
import project8_4 from "@/assets/project8-4.png";
import project8_5 from "@/assets/project8-5.png";
import project7_1 from "@/assets/project7-1.jpg";
import project7_2 from "@/assets/project7-2.jpg";
import project7_3 from "@/assets/project7-3.jpg";
import project7_4 from "@/assets/project7-4.jpg";
import project7_5 from "@/assets/project7-5.jpg";
import project7_6 from "@/assets/project7-6.jpg";
import project7_7 from "@/assets/project7-7.jpg";
import project7_8 from "@/assets/project7-8.jpg";
import project7_9 from "@/assets/project7-9.jpg";
import project6_1 from "@/assets/project6-1.jpg";
import project6_2 from "@/assets/project6-2.jpg";
import project6_3 from "@/assets/project6-3.jpg";
import project6_4 from "@/assets/project6-4.jpg";
import project6_5 from "@/assets/project6-5.jpg";
import project6_6 from "@/assets/project6-6.jpg";
import project6_7 from "@/assets/project6-7.jpg";
import project6_8 from "@/assets/project6-8.jpg";
import project6_9 from "@/assets/project6-9.jpg";
import project5_1 from "@/assets/project5-1.jpg";
import project5_2 from "@/assets/project5-2.jpg";
import project5_3 from "@/assets/project5-3.jpg";
import project5_4 from "@/assets/project5-4.jpg";
import project5_5 from "@/assets/project5-5.jpg";
import project5_6 from "@/assets/project5-6.jpg";
import project5_7 from "@/assets/project5-7.jpg";
import project4_1 from "@/assets/project4-1.png";
import project4_2 from "@/assets/project4-2.png";
import project4_3 from "@/assets/project4-3.png";
import project3_1 from "@/assets/project3-1.png";
import project3_2 from "@/assets/project3-2.jpg";
import project3_3 from "@/assets/project3-3.png";
import project3_4 from "@/assets/project3-4.png";
import project3_5 from "@/assets/project3-5.png";
import project3_6 from "@/assets/project3-6.png";
import project3_7 from "@/assets/project3-7.png";
import project3_8 from "@/assets/project3-8.png";

const project8Images = [project8_1, project8_2, project8_3, project8_4, project8_5];
const project7Images = [project7_1, project7_2, project7_3, project7_4, project7_5, project7_6, project7_7, project7_8, project7_9];
const project6Images = [project6_1, project6_2, project6_3, project6_4, project6_5, project6_6, project6_7, project6_8, project6_9];
const project5Images = [project5_1, project5_2, project5_3, project5_4, project5_5, project5_6, project5_7];
const project4Images = [project4_1, project4_2, project4_3];
const project3Images = [project3_1, project3_2, project3_3, project3_4, project3_5, project3_6, project3_7, project3_8];

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

  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  useEffect(() => {
    if (!lightboxSrc) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightboxSrc(null); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [lightboxSrc]);
  const openLightbox = (src: string) => { setZoom(1); setLightboxSrc(src); };

  const isArchive = n === 8 || n === 7 || n === 6 || n === 5 || n === 4 || n === 3;
  const archiveConfig = n === 8
    ? {
        no: "08",
        titleLines: ["Active", "Thought"],
        sublabel: "Sketches · 5 min – 4 hours",
        lede: "A series of sketches focused on the relationship between the process of searching for form and active thought.",
        body: "These drawings, which take approximately 5 minutes to 4 hours, are considered components of the flow of thought specific to that time. They are productions that accompany thoughts not directly related to design — such as reminiscing about a memory or a character — rather than questions like where the entrance should be or how the circulation route should be planned.",
        images: project8Images,
        endLabel: "End of archive · Active Thought",
        altPrefix: "Active Thought",
      }
    : n === 7
    ? {
        no: "07",
        titleLines: ["Sea Horse", "& Secret", "Underwater Cave"],
        sublabel: "Story Book · Illustrated by Mira Nur Yılmaz",
        lede: "The digital transference of a story written by a 9-year-old child, along with its accompanying visuals.",
        body: "Since transferring the entire book would exceed the limits of the portfolio, only the parts related to the visuals were included in the study. The original drawings were shared at the end of this part.",
        images: project7Images,
        endLabel: "End of archive · Sea Horse and Secret Underwater Cave",
        altPrefix: "Sea Horse and Secret Underwater Cave",
      }
    : n === 6
    ? {
        no: "06",
        titleLines: ["Instant", "Installation"],
        sublabel: "Istanbul Technical University · Fall 2019–2020",
        lede: "A two-part study exploring the relationship between matter, form, and meaning — first through an architect's monograph, then through an installation in the vacant room of the city.",
        body: "The first part discusses the relationship between matter, form, and meaning through the monograph of a selected architect. In the second part, the conceptual base is integrated with the city: a selected area is perceived as the empty room of the city, and an installation study is carried out in this area within the scope of the discussions.",
        images: project6Images,
        endLabel: "End of archive · Instant Installation",
        altPrefix: "Instant Installation",
      }
    : n === 5
    ? {
        no: "05",
        titleLines: ["Losing Home:", "Metropolis,", "Dwelling, Body"],
        sublabel: "AURA Istanbul · Fall 2018 · Supervised by Sinan Logie & Hande Tomboz",
        lede: "A study pointing to the pains of the first physical contact with professional working life after architecture & city and regional planning education.",
        body: "The metropolis is located at the center of a complex network of relationships that cannot be divided into home, work, transportation, and leisure time. What is the situation of a body in the time-performance interval covered by working life? Is there a family home left to return to? What else can home be but a place where the body feels relatively safe for 8–12 hours a day? Which of the 9 houses moved within the borders of the same metropolis was the most home-like? The method of the work is the use of representational tools of architecture and urbanism through bodily experiences — a series produced using different types of materials and techniques, including digital and analog collage.",
        images: project5Images,
        endLabel: "End of archive · Losing Home: Metropolis, Dwelling, Body",
        altPrefix: "Losing Home",
      }
    : n === 4
    ? {
        no: "04",
        titleLines: ["Implementation", "Project of a", "Photographer House"],
        sublabel: "Mimar Sinan Fine Art University · Spring 2015–2016 · Supervised by Ayşegül Kuruç",
        lede: "The design of a space combining a photographer's office and living quarters, resolved across three floors with a connecting gallery.",
        body: "Within the scope of the Implementation Project, the design of a space that includes a photographer's office and living space has been offered. A dark room and a studio in the basement, an office on the ground floor, and a living space on the first floor have been solved. A gallery space that connects the floors and allows the interior of the space to receive light has been designed. The basement floor has a masonry system, the ground floor and the first floor have a steel system. The staircase plans and sections containing these solutions have been presented.",
        images: project4Images,
        endLabel: "End of archive · Implementation Project of a Photographer House",
        altPrefix: "Implementation Project of a Photographer House",
      }
    : {
        no: "03",
        titleLines: ["Survey of", "Sultan Reşad", "Khan Tomb"],
        sublabel: "Mimar Sinan Fine Arts University · Spring 2013–2014 · Supervised by Adile Binnur Kıraç",
        lede: "Survey drawings of the Sultan Reşad Han Tomb in Eyüpsultan — the resting place of Ottoman Sultan Mehmed V.",
        body: "This project includes the survey drawings of the Sultan Reşad Han Tomb located in the Eyüpsultan district. Measurements were taken during weekly tomb visits and transferred to the digital environment. The presentation flow brings together plans, section views, elevations, and detail drawings. This study was carried out by a two-person team (Ayşegül Özkarslıoğlu & Tuğba Menşur).",
        images: project3Images,
        endLabel: "End of archive · Survey of Sultan Reşad Khan Tomb",
        altPrefix: "Survey of Sultan Reşad Khan Tomb",
      };
  const titles = ["Beylerbeyi Sport Complex", "Impasse Library", "Survey Of Sultan Reşad Khan Tomb", "Implementation Project Of A Photographer House", "Losing Home: Metropolis, Dwelling, Body", "Instant Installation", "Sea Horse and Secret Underwater Cave", "Active Thought"];

  return (
    <>
      <BackButton to="/portfolio" label="Portfolio" />
    <article className={isArchive ? "max-w-[1600px] mx-auto px-6 md:px-16 py-24" : "max-w-[1200px] mx-auto px-8 py-24"}>

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

      {isArchive ? (
        <>
          {/* Title + intro paragraph as an editorial spread */}
          <section className="mt-24 grid md:grid-cols-12 gap-x-12 gap-y-10">
            <div className="md:col-span-5 md:sticky md:top-24 self-start">
              <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-6">— Archive No. {archiveConfig.no}</p>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-accent-mode">
                {archiveConfig.titleLines.map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </h2>
              <p className="mt-10 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                {archiveConfig.sublabel}
              </p>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <p className="font-display text-2xl md:text-3xl leading-[1.45] text-foreground/90">
                {archiveConfig.lede}
              </p>
              <p className="mt-10 text-base leading-[1.95] text-foreground/70 max-w-prose">
                {archiveConfig.body}
              </p>
            </div>
          </section>

          {/* Plates — uniform presentation with generous breathing room */}
          <section className="mt-40 space-y-32 md:space-y-40 px-4 sm:px-8 md:px-16 lg:px-24">
            {archiveConfig.images.map((src, i) => (
              <figure key={i} className="max-w-[900px] mx-auto py-8 md:py-12">
                <div className="px-4 sm:px-8 md:px-12">
                  <button
                    type="button"
                    onClick={() => (n === 4 || n === 5 || n === 6 || n === 7 || n === 8) && openLightbox(src)}
                    className={`block w-full ${(n === 4 || n === 5 || n === 6 || n === 7 || n === 8) ? "cursor-zoom-in group relative" : ""}`}
                    aria-label={(n === 4 || n === 5 || n === 6 || n === 7 || n === 8) ? "Zoom image" : undefined}
                    disabled={n !== 4 && n !== 5 && n !== 6 && n !== 7 && n !== 8}
                  >
                    <img
                      src={src}
                      alt={`${archiveConfig.altPrefix} — Plate ${String(i + 1).padStart(2, "0")}`}
                      className="w-full h-auto object-contain"
                    />
                    {(n === 4 || n === 5 || n === 6 || n === 7 || n === 8) && (
                      <span className="absolute top-2 right-2 inline-flex items-center gap-1 rounded-full bg-background/80 backdrop-blur px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                        <ZoomIn size={12} /> Zoom
                      </span>
                    )}
                  </button>
                </div>
                <figcaption className="mt-10 md:mt-14 text-[10px] uppercase tracking-[0.4em] text-muted-foreground text-center">
                  Plate {String(i + 1).padStart(2, "0")}
                </figcaption>
              </figure>
            ))}
          </section>

          <p className="mt-32 text-center text-[10px] uppercase tracking-[0.5em] text-muted-foreground">
            {archiveConfig.endLabel}
          </p>

        </>
      ) : (
      <>
      <div className="mt-16 max-w-2xl">
        <p className="font-display text-xl leading-relaxed">
          <strong className="text-accent-mode font-normal">{titles[n - 1]}</strong>
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
            "This section, which consists of a series of sketches, basically focuses on the relationship between the process of searching for form and active thought. These drawings, which take approximately 5 minutes to 4 hours, are considered components of the flow of thought specific to that time. These drawings are productions that accompany thoughts not directly related to design, such as reminiscing about a memory or a character, rather than questions like where the entrance should be or how the circulation route should be planned.",
          ][n - 1].split("\n\n").map((paragraph, i) => (
            <span key={i} className="block mt-6 first:mt-0">{paragraph}</span>
          ))}
        </p>
      </div>

      <div className="mt-20 space-y-12">
        {Array.from({ length: { 1: 12, 2: 12, 3: 8, 4: 3 }[n as 1|2|3|4] ?? 7 }, (_, idx) => idx + 1).map((i) => (
          <figure key={i} className="aspect-[16/10] bg-muted relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground/60">
                Image {i.toString().padStart(2, "0")} — Placeholder
              </span>
            </div>
          </figure>
        ))}
      </div>
      </>
      )}


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
    {lightboxSrc && (
      <div
        className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center"
        onClick={() => setLightboxSrc(null)}
      >
        <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setZoom((z) => Math.max(0.5, +(z - 0.25).toFixed(2))); }}
            className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-border bg-background/80 hover:bg-accent hover:text-accent-foreground transition"
            aria-label="Zoom out"
          >
            <ZoomOut size={18} />
          </button>
          <span className="min-w-[3rem] text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {Math.round(zoom * 100)}%
          </span>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setZoom((z) => Math.min(5, +(z + 0.25).toFixed(2))); }}
            className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-border bg-background/80 hover:bg-accent hover:text-accent-foreground transition"
            aria-label="Zoom in"
          >
            <ZoomIn size={18} />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setLightboxSrc(null); }}
            className="ml-2 h-10 w-10 inline-flex items-center justify-center rounded-full border border-border bg-background/80 hover:bg-accent hover:text-accent-foreground transition"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>
        <div
          className="w-full h-full overflow-auto flex items-center justify-center p-8"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={lightboxSrc}
            alt="Zoomed plate"
            style={{ transform: `scale(${zoom})`, transformOrigin: "center center" }}
            className="max-w-none transition-transform duration-150 select-none"
            draggable={false}
          />
        </div>
      </div>
    )}
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
