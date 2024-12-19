import { NoAuth } from "@olinfo/quizms/student";

import Contest from "./contest/contest.mdx";
import Header from "./header.md";

export const metadata = {
  title: "Giochi di Fibonacci 2024/2025 - Fase I - Scuole secondarie",
  description: "Prima fase dei Giochi di Fibonacci 2024/2025 per le scuole secondarie",
};

export default function App() {
  return (
    <NoAuth contestName="Giochi di Fibonacci" duration={50}>
      <Header />
      <Contest />
    </NoAuth>
  );
}
