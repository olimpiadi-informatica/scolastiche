import { OlinfoAuth } from "../utils/olinfoAuth";

import Contest from "./contest/contest.mdx";
import Header from "./contest/header.md";

export const title = "Scolastiche 2021";
export const description = "Selezione scolastica delle Olimpiadi di Informatica Italiane 2021";

export function App() {
  return (
    <OlinfoAuth questionCount={20} duration={90}>
      <Header />
      <Contest />
    </OlinfoAuth>
  );
}
