import { createFileRoute } from "@tanstack/react-router";
import { BackButton } from "@/components/BackButton";

export const Route = createFileRoute("/documents")({
  head: () => ({
    meta: [
      { title: "Documents — Tuğba Menşur" },
      { name: "description", content: "CV, certificates, and additional courses." },
    ],
  }),
  component: Documents,
});



function Documents() {
  return (
    <>
      <BackButton />
    <section className="max-w-[1200px] mx-auto px-8 py-24">
      <p className="text-xs uppercase tracking-[0.4em] text-accent-mode mb-6">Archive</p>
      <h1 className="font-display text-5xl md:text-6xl leading-[1.05]">Documents</h1>

      <div className="mt-20 grid md:grid-cols-2 gap-6">
        {[
          { title: "Curriculum Vitae", type: "CV", url: "https://drive.google.com/file/d/1WOCKdj4dsMcyT0Bdd0efzy1kjpME_NiQ/view?usp=share_link" },
          { title: "Undergraduate & Graduate", type: "Degrees", url: "https://drive.google.com/file/d/1pGFhDPa4YcGTuF9V6q4s6xT_vD2-eaDZ/view?usp=share_link" },
          { title: "Undergraduate & Graduate", type: "Relevant Coursework", url: "https://drive.google.com/file/d/1ns3-Jb6_MQSJeweadsMuqkR0tljKBgSj/view?usp=share_link" },
          { title: "Portfolio (PDF)", type: "Portfolio", url: "https://drive.google.com/file/d/12MI8gEvYQCQc6fqZunRVsANTQa8p8wPF/view?usp=share_link" },
        ].map((d) => (
          <a
            key={`${d.type}-${d.title}`}
            href={d.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-border p-8 hover:border-accent-mode transition-colors cursor-pointer block"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{d.type}</p>
            <h3 className="font-display text-2xl mt-3 group-hover:text-accent-mode transition-colors">{d.title}</h3>
            <p className="mt-6 text-xs italic text-muted-foreground">
              Opens in Google Drive
            </p>
          </a>
        ))}
      </div>

    </section>
    </>
  );
}

