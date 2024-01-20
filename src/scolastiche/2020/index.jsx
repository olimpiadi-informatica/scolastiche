import { OlinfoAuth } from "../../utils/olinfo-auth";

import Contest from "./contest/contest.mdx";

export const title = "Scolastiche 2020";
export const description = "Olimpiadi Italiane di Informatica 2020/2021 - Selezione scolastica";

export function App() {
  return (
    <OlinfoAuth contestName={description} questionCount={20} duration={90}>
      <Contest />
    </OlinfoAuth>
  );
}
