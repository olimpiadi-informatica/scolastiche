import { OlinfoAuth } from "../utils/olinfoAuth";

import Contest from "./contest/contest.mdx";

export const title = "Scolastiche 2019";
export const description = "Olimpiadi Italiane di Informatica 2019/2020 - Selezione scolastica";

export function App() {
  return (
    <OlinfoAuth contestName={description} questionCount={20} duration={90}>
      <Contest />
    </OlinfoAuth>
  );
}
