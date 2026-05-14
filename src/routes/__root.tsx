import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Layout } from "@/components/Layout";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl">404</h1>
        <p className="mt-4 text-sm tracking-widest uppercase text-muted-foreground">Page not found</p>
        <Link to="/" className="mt-8 inline-block text-xs uppercase tracking-[0.3em] border-b border-foreground pb-1">
          Return Home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 text-xs uppercase tracking-[0.3em] border-b border-foreground pb-1"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Tuğba Menşur — Architect" },
      { name: "description", content: "Portfolio of architect Tuğba Menşur — projects, research, and publications." },
      { property: "og:title", content: "Tuğba Menşur — Architect" },
      { property: "og:description", content: "Portfolio of architect Tuğba Menşur — projects, research, and publications." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Tuğba Menşur — Architect" },
      { name: "twitter:description", content: "Portfolio of architect Tuğba Menşur — projects, research, and publications." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ad86713a-9191-4730-8a35-15a5da0576f0/id-preview-70267e10--a63be510-f7e4-431b-a6f1-79e40d4a494e.lovable.app-1778769863288.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ad86713a-9191-4730-8a35-15a5da0576f0/id-preview-70267e10--a63be510-f7e4-431b-a6f1-79e40d4a494e.lovable.app-1778769863288.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Layout />
    </QueryClientProvider>
  );
}
