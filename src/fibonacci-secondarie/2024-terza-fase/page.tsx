import { NoAuth } from "@olinfo/quizms/student";

import Statement from "./contest/contest.mdx";
import Header from "./header.md";

export const metadata = {
  title: "Giochi di Fibonacci",
  description: "Fase Finale dei Giochi di Fibonacci 2024/2025",
};

export default function App() {
  return (
    <NoAuth contestLongName="" contestName="Giochi di Fibonacci" duration={180}>
      <Header />
      <Statement />
    </NoAuth>
  );
}
