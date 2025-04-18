import { NoAuth } from "@olinfo/quizms/student";

import Statement from "./contest/contest.mdx";
import Header from "./header.md";

export const metadata = {
  title: "Corso di Programmazione",
  description: "Corso di Programmazione a Blocchi per i Giochi di Fibonacci",
};

export default function App() {
  return (
    <NoAuth contestLongName="" contestName="Corso di Programmazione" duration={5760}>
      <Header />
      <Statement />
    </NoAuth>
  );
}
