import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BackButton } from "@/components/BackButton";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Tuğba Menşur" },
      { name: "description", content: "Biography of architect Tuğba Menşur." },
    ],
  }),
  component: About,
});

function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <BackButton />
      <section className="max-w-[1200px] mx-auto px-8 py-24 md:py-32 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
            About
          </p>
          <h1 className="font-display text-4xl md:text-5xl mt-6 leading-tight">
            Tuğba
            <br />
            Menşur
          </h1>
          <div className="mt-8 h-px w-16 bg-accent-mode" />
        </div>

        <div className="md:col-span-7 md:col-start-6 space-y-6 text-base leading-[1.9] text-foreground/85">
          {/* Always visible first paragraph */}
          <p>
            Tuğba Menşur is an architect and urban researcher whose work
            focuses on architectural analysis, spatial thought, urban memory,
            and the relationship between drawing and the built environment. She
            completed her undergraduate education in both Architecture and City
            &amp; Regional Planning at Mimar Sinan Fine Arts University, where she
            developed an interest in the relationship between buildings, cities,
            and larger spatial systems. She later received her master’s degree
            in Architectural Design from Istanbul Technical University. Her
            graduate research explored the role of concepts in architecture,
            examining how ideas shape design processes, construct ideological
            frameworks, and influence architectural production.
          </p>

          {/* Read More button */}
          <button
            onClick={() => setExpanded((v) => !v)}
            className={cn(
              "group inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase transition-colors duration-300 mt-2",
              expanded ? "text-foreground/60 hover:text-[#FF1F06]" : "text-foreground/85 hover:text-[#FF1F06]"
            )}
          >
            <span className="h-px w-6 bg-current transition-all duration-300 group-hover:w-10" />
            {expanded ? "Read Less" : "Read More"}
          </button>

          {/* Hidden paragraphs with fade-in */}
          <div
            className={cn(
              "space-y-6 transition-all duration-700 ease-out overflow-hidden",
              expanded
                ? "opacity-100 translate-y-0 max-h-[2000px]"
                : "opacity-0 translate-y-4 max-h-0"
            )}
          >
            <p>
              She currently works as a researcher at Foundation of Home and
              City (Ev ve Şehir Vakfı), founded by architect, thinker, and urban
              planner Turgut Cansever. Her work involves research on urban
              history, housing, and contemporary urban issues through a broad
              international body of architectural and urban studies literature.
              Alongside editorial contributions to the republication of
              Cansever’s works, she participates in discussions and research that
              seek alternative approaches for more livable cities and healthier
              built environments.
            </p>

            <p>
              Her developing doctoral research also examines how earthquakes
              reshape urban memory, spatial continuity, and the relationship
              between architecture and collective experience. Before turning
              toward conceptual approaches in architecture, she was
              particularly interested in archives and the ways knowledge is
              organized, preserved, and transmitted through spatial and cultural
              structures.
            </p>

            <p>
              Alongside her academic research, she develops a series of drawings
              that she describes as “active thoughts.” Produced through
              continuous lines and intuitive movements, these drawings explore
              unfinished urban forms, spatial relations, and the imaginative
              possibilities of architecture. She approaches drawing not merely
              as a representational act, but as a mode of thinking through space
              before form fully emerges.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
