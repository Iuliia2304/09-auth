import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import AuthProvider from "@/components/AuthProvider/AuthProvider"; // 🟢 додай цей імпорт

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NoteHub — Smart Notes App",
  description:
    "NoteHub is a simple and efficient note-taking app that helps you organize, edit, and manage your ideas in one place — fast, clean, and accessible anywhere.",
  openGraph: {
    title: "NoteHub — Smart Notes App",
    description:
      "Capture your thoughts, manage your tasks, and organize your life with NoteHub — a smart and elegant web app for writing and storing notes online.",
    url: "https://your-vercel-project.vercel.app",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "NoteHub app preview",
      },
    ],
  },
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <TanStackProvider>
          {/* 🟢 AuthProvider повинен обгортати Header, main, Footer і модалки */}
          <AuthProvider>
            <Header />
            <main>{children}</main>
            {modal}
            <Footer />
          </AuthProvider>
        </TanStackProvider>
      </body>
    </html>
  );
}

