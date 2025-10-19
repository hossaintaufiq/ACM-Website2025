
import ChapterOfficersTab from "./ChapterOfficersTab";

export default function RootLayout({ children }) {
  return (
    <main className="">
      <ChapterOfficersTab />
      {children}
    </main>
  );
}
