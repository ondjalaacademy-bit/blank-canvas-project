import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ondjala Academy" },
      { name: "description", content: "Ondjala Academy — projeto em branco." },
      { property: "og:title", content: "Ondjala Academy" },
      { property: "og:description", content: "Ondjala Academy — projeto em branco." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return <div className="min-h-screen bg-background" />;
}
