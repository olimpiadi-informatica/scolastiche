import { NoAuth } from "@olinfo/quizms/student";

import Contest from "./contest/contest.mdx";
import Header from "./header.md";

export const metadata = {
  title: "Demo Scolastiche 2022",
  description: "Olimpiadi Italiane di Informatica 2022/2023 - Selezione scolastica (demo)",
};

export default function App() {
  return (
    <NoAuth
      contestName="Olimpiadi di Informatica"
      contestLongName={metadata.description}
      duration={45}>
      <Header />
      <Contest />
    </NoAuth>
  );
}
