import { NoAuth } from "@olinfo/quizms/student";

import Statement from "./contest/contest.mdx";
import Header from "./header.md";

export const metadata = {
  title: "Giochi di Fibonacci 2023/2024 - Fase II - Scuole primarie",
  description: "Seconda fase dei Giochi di Fibonacci 2023/2024 per le scuole primarie",
};

export default function App() {
  return (
    <NoAuth contestName="Giochi di Fibonacci" duration={100}>
      <Header />
      <Statement />
    </NoAuth>
  );
}
