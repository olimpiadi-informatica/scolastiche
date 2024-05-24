import { OlinfoAuth } from "~/utils/olinfo-auth";

import Contest from "./contest/contest.mdx";
import Header from "./contest/header.md";

export const metadata = {
  title: "Demo Scolastiche 2022",
  description: "Olimpiadi Italiane di Informatica 2022/2023 - Selezione scolastica (demo)",
};

export default function App() {
  return (
    <OlinfoAuth contestName={metadata.description} duration={45}>
      <Header />
      <Contest />
    </OlinfoAuth>
  );
}
