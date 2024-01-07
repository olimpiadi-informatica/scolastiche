import { OlinfoAuth } from "../utils/olinfoAuth";
import "quizms/css";

import Contest from "./contest/contest.mdx";
import Header from "./contest/header.md";

export const title = "Scolastiche 2020";
export const description = "Selezione scolastica delle Olimpiadi di Informatica Italiane 2020";

export function App() {
  return (
    <OlinfoAuth questionCount={20} duration={90}>
      <Header />
      <Contest />
    </OlinfoAuth>
  );
}
