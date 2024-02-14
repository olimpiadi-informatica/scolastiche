import { OlinfoAuth } from "../utils/olinfo-auth";

import Header from "./contest/header.md";
import Statement from "./contest/contest.mdx";

import "../index.css";

export const title = "Giochi di Fibonacci 2023/2024 - Demo Fase 2";
export const description = "Prova di allenamento per la seconda fase dei Giochi di Fibonacci 2023/2024";

export function App() {
  return (
    <OlinfoAuth questionCount={16} duration={90}>
      <Header />
      <Statement />
    </OlinfoAuth>
  );
}
