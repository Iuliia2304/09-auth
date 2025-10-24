import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found — NoteHub",
  description: "The page you are looking for does not exist.",
  openGraph: {
    title: "Page not found — NoteHub",
    description: "The page you are looking for does not exist.",
    url: "https://your-project-name.vercel.app/not-found",
    images: [
      "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
    ],
  },
};

export default function NotFound() {
  return (
    <main style={{ textAlign: "center", padding: "40px" }}>
      <h1>404 — Page not found</h1>
      <p>The page you tried to open does not exist.</p>
    </main>
  );
}

