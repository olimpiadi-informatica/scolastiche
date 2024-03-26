import { OlinfoAuth } from "~/utils/olinfo-auth";

import Header from "./contest/header.md";
import Statement from "./contest/contest.mdx";

export const title = "Giochi di Fibonacci 2023/2024 - Fase II - Scuole primarie";
export const description = "Seconda fase dei Giochi di Fibonacci 2023/2024 per le scuole primarie";

export function App() {
  return (
    <OlinfoAuth questionCount={12} duration={100}>
      <Header />
      <Statement />
    </OlinfoAuth>
  );
}
