import { NoAuth } from "@olinfo/quizms/student";

import Statement from "./contest/contest.mdx";
import Header from "./header.md";

export const metadata = {
  title: "Giochi di Fibonacci",
  description:
    "Prova di allenamento per la seconda fase dei Giochi di Fibonacci 2023/2024 per le scuole secondarie",
};

export default function App() {
  return (
    <NoAuth contestLongName="" contestName="Giochi di Fibonacci" duration={100}>
      <Header />
      <Statement />
    </NoAuth>
  );
}
