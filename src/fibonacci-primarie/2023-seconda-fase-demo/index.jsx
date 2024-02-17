import { OlinfoAuth } from "~/utils/olinfo-auth";

import Header from "./contest/header.md";
import Statement from "./contest/contest.mdx";

import "~/index.css";

export const title = "Giochi di Fibonacci 2023/2024 - Demo Fase II - Scuole primarie";
export const description = "Prova di allenamento per la seconda fase dei Giochi di Fibonacci 2023/2024 per le scuole primarie";

export function App() {
  return (
    <OlinfoAuth contestName={description} questionCount={12} duration={100}>
      <Header />
      <Statement />
    </OlinfoAuth>
  );
}
