import { NoAuth } from "quizms/student";
import "quizms/css";

import Contest from "./contest/contest.mdx";
import Header from "./contest/header.md";

export const title = "Demo Scolastiche 2022";
export const description =
  "Demo della selezione scolastica delle Olimpiadi di Informatica Italiane";

export function App() {
  return (
    <NoAuth questionCount={10} duration={45}>
      <Header />
      <Contest />
    </NoAuth>
  );
}
