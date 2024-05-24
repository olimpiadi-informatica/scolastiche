import { OlinfoAuth } from "~/utils/olinfo-auth";

import Contest from "./contest/contest.mdx";
import Header from "./contest/header.md";

export const metadata = {
  title: "Scolastiche 2022",
  description: "Olimpiadi Italiane di Informatica 2022/2023 - Selezione scolastica",
};

export default function App() {
  return (
    <OlinfoAuth contestName={metadata.description} duration={90}>
      <Header />
      <Contest />
    </OlinfoAuth>
  );
}
