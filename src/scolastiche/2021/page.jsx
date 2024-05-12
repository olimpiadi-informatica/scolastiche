import { NoAuth } from "@olinfo/quizms/student";

import Contest from "./contest/contest.mdx";

export const metadata = {
  title: "Scolastiche 2021",
  description: "Olimpiadi Italiane di Informatica 2021/2022 - Selezione scolastica",
};

export default function App() {
  return (
    <NoAuth
      contestName="Olimpiadi di Informatica"
      contestLongName={metadata.description}
      duration={90}>
      <Contest />
    </NoAuth>
  );
}
