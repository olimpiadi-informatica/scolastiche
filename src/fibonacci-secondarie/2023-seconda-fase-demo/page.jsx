import { NoAuth } from "@olinfo/quizms/student";

import Statement from "./contest/contest.mdx";
import Header from "./contest/header.md";

export const metadata = {
  title: "Giochi di Fibonacci 2023/2024 - Demo Fase II - Scuole secondarie",
  description:
    "Prova di allenamento per la seconda fase dei Giochi di Fibonacci 2023/2024 per le scuole secondarie",
};

export default function App() {
  return (
    <NoAuth contestName="Giochi di Fibonacci" duration={100}>
      <Header />
      <Statement />
    </NoAuth>
  );
}
