import { OlinfoAuth } from "~/utils/olinfo-auth";

import Contest from "./contest/contest.mdx";

export const metadata = {
  title: "Scolastiche 2019",
  description: "Olimpiadi Italiane di Informatica 2019/2020 - Selezione scolastica",
};

export default function App() {
  return (
    <OlinfoAuth contestName={metadata.description} duration={90}>
      <Contest />
    </OlinfoAuth>
  );
}
