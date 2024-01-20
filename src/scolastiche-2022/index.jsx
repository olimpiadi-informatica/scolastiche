import { OlinfoAuth } from "../utils/olinfoAuth";

import Contest from "./contest/contest.mdx";
import Header from "./contest/header.md";

export const title = "Scolastiche 2022";
export const description = "Olimpiadi Italiane di Informatica 2022/2023 - Selezione scolastica";

export function App() {
  return (
    <OlinfoAuth contestName={description} questionCount={20} duration={90}>
      <Header />
      <Contest />
    </OlinfoAuth>
  );
}
