import { OlinfoAuth } from "~/utils/olinfo-auth";

import Contest from "./contest/contest.mdx";

export const metadata = {
  title: "Scolastiche 2020",
  description: "Olimpiadi Italiane di Informatica 2020/2021 - Selezione scolastica",
};

export default function App() {
  return (
    <OlinfoAuth contestName={metadata.description} duration={90}>
      <Contest />
    </OlinfoAuth>
  );
}
