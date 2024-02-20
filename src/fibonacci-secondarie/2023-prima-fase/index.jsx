import { OlinfoAuth } from "~/utils/olinfo-auth";

import Contest from "./contest/contest.mdx";
import Header from "./contest/header.md";

export const title = "Giochi di Fibonacci 2023/2024 - Fase I - Scuole secondarie";
export const description = "Prima fase dei Giochi di Fibonacci 2023/2024 per le scuole secondarie";

export function App() {
  return (
    <OlinfoAuth questionCount={8} duration={50}>
      <Header />
      <Contest />
    </OlinfoAuth>
  );
}
