import { OlinfoAuth } from "~/utils/olinfo-auth";

import Statement from "./contest/contest.mdx";
import Header from "./contest/header.md";

export const title = "Giochi di Fibonacci 2023/2024 - Fase Finale";
export const description = "Fase Finale dei Giochi di Fibonacci 2023/2024";

export function App() {
  return (
    <OlinfoAuth questionCount={40} duration={180}>
      <Header />
      <Statement />
    </OlinfoAuth>
  );
}
