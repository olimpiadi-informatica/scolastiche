import { OlinfoAuth } from "../utils/olinfoAuth";

import Contest from "./contest/contest.mdx";
import Header from "./contest/header.md";

export const title = "Demo Scolastiche 2022";
export const description = "Olimpiadi Italiane di Informatica 2022/2023 - Selezione scolastica (demo)";

export function App() {
  return (
    <OlinfoAuth contestName={description} questionCount={10} duration={45}>
      <Header />
      <Contest />
    </OlinfoAuth>
  );
}
