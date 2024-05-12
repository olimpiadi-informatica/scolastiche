import { NoAuth } from "@olinfo/quizms/student";

import Contest from "./contest/contest.mdx";
import Header from "./contest/header.md";

export const metadata = {
  title: "Scolastiche 2023",
  description: "Olimpiadi Italiane di Informatica 2023/2024 - Selezione scolastica",
};

export default function App() {
  return (
    <NoAuth
      contestName="Olimpiadi di Informatica"
      contestLongName={metadata.description}
      duration={90}>
      <Header />
      <Contest />
    </NoAuth>
  );
}
