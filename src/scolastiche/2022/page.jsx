import { NoAuth } from "@olinfo/quizms/student";

import Contest from "./contest/contest.mdx";
import Header from "./header.md";

export const metadata = {
  title: "Scolastiche 2022",
  description: "Olimpiadi Italiane di Informatica 2022/2023 - Selezione scolastica",
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
