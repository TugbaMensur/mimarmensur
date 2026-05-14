import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Tuğba Menşur" },
      { name: "description", content: "Get in touch with Tuğba Menşur." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <section className="max-w-[1100px] mx-auto px-8 py-32 min-h-[70vh] flex flex-col justify-center">
      <p className="text-xs uppercase tracking-[0.4em] text-accent-mode mb-8">Contact</p>
      <h1 className="font-display text-4xl md:text-6xl leading-[1.1] max-w-3xl">
        For projects, collaborations,<br />or quiet conversations.
      </h1>

      <div className="mt-16 grid md:grid-cols-2 gap-12 max-w-2xl">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Email</p>
          <a
            href="mailto:tugbamensur@outlook.com"
            className="font-display text-xl hover:text-accent-mode transition-colors border-b border-foreground hover:border-accent-mode pb-1"
          >
            tugbamensur@outlook.com
          </a>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Studio</p>
          <p className="font-display text-xl">By appointment</p>
        </div>
      </div>
    </section>
  );
}
