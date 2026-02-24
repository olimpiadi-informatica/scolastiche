import { NoAuth } from "@olinfo/quizms/student";

import Contest from "./contest/contest.mdx";
import Header from "./header.md";

export const metadata = {
  title: "Giochi di Fibonacci",
  description: "Seconda fase dei Giochi di Fibonacci 2025/2026 per le scuole primarie",
};

export default function App() {
  return (
    <NoAuth contestLongName="" contestName="Giochi di Fibonacci" duration={120}>
      <Header />
      <Contest />
    </NoAuth>
  );
}
