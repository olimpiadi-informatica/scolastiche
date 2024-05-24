import { OlinfoAuth } from "~/utils/olinfo-auth";

import Statement from "./contest/contest.mdx";
import Header from "./contest/header.md";

export const metadata = {
  title: "Giochi di Fibonacci 2023/2024 - Fase Finale",
  description: "Fase Finale dei Giochi di Fibonacci 2023/2024",
};

export default function App() {
  return (
    <OlinfoAuth duration={180}>
      <Header />
      <Statement />
    </OlinfoAuth>
  );
}
