import { NoAuth } from "@olinfo/quizms/student";

import Contest from "./contest/contest.mdx";
import Header from "./header.md";

export const metadata = {
  title: "Giochi di Fibonacci 2023/2024 - Fase I - Scuole primarie",
  description: "Prima fase dei Giochi di Fibonacci 2023/2024 per le scuole primarie",
};

export default function App() {
  return (
    <NoAuth contestName="Giochi di Fibonacci" duration={50}>
      <Header />
      <Contest />
    </NoAuth>
  );
}
