import { OlinfoAuth } from "~/utils/olinfo-auth";

import Contest from "./contest/contest.mdx";
import Header from "./contest/header.md";

export const title = "Giochi di Fibonacci 2023/2024 - Fase I - Scuole primarie";
export const description = "Prima fase dei Giochi di Fibonacci 2023/2024 per le scuole primarie";

export function App() {
  return (
    <OlinfoAuth contestName={description} questionCount={9} duration={50}>
      <Header />
      <Contest />
    </OlinfoAuth>
  );
}
