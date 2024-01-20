import { OlinfoAuth } from "../../utils/olinfo-auth";

import Contest from "./contest/contest.mdx";

export const title = "Scolastiche 2021";
export const description = "Olimpiadi Italiane di Informatica 2021/2022 - Selezione scolastica";

export function App() {
  return (
    <OlinfoAuth contestName={description} questionCount={20} duration={90}>
      <Contest />
    </OlinfoAuth>
  );
}
