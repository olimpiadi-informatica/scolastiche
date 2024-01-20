import { OlinfoAuth } from "../../utils/olinfo-auth";

import Contest from "./contest/contest.mdx";
import Header from "./contest/header.md";

export const title = "Giochi di Fibonacci 2022/2023 - Scuole primarie";
export const description = "Prima fase dei Giochi di Fibonacci per le scuole primarie";

export function App() {
  return (
    <OlinfoAuth contestName={title} questionCount={9} duration={50}>
      <Header />
      <Contest />
    </OlinfoAuth>
  );
}
