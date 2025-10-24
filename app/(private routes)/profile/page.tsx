import type { Metadata } from "next";
import css from "./ProfilePage.module.css";

// ✅ SEO та OpenGraph мета-теги
export const metadata: Metadata = {
  title: "Profile — NoteHub",
  description: "View and manage your NoteHub profile details.",
  openGraph: {
    title: "Profile — NoteHub",
    description: "View and manage your NoteHub profile details.",
    url: "https://your-vercel-domain.vercel.app/profile",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
      },
    ],
  },
};

export default function ProfilePage() {
  // ⚠️ Пізніше тут можна буде отримувати користувача через Zustand або getMe()
  const user = {
    username: "your_username",
    email: "your_email@example.com",
    avatar: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
  };

  return (
    <main className={css.mainContent}>
      <div className={css.profileCard}>
        <div className={css.header}>
          <h1 className={css.formTitle}>Profile Page</h1>
          <a href="/profile/edit" className={css.editProfileButton}>
            Edit Profile
          </a>
        </div>

        <div className={css.avatarWrapper}>
          <img
            src={user.avatar}
            alt="User Avatar"
            width={120}
            height={120}
            className={css.avatar}
          />
        </div>

        <div className={css.profileInfo}>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      </div>
    </main>
  );
}
