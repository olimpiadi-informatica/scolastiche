import { OlinfoAuth } from "../../utils/olinfo-auth";

import Contest from "./contest/contest.mdx";
import Header from "./contest/header.md";

export const title = "Scolastiche 2023";
export const description = "Olimpiadi Italiane di Informatica 2023/2024 - Selezione scolastica";

export function App() {
  return (
    <OlinfoAuth contestName={description} questionCount={20} duration={90}>
      <Header />
      <Contest />
    </OlinfoAuth>
  );
}
