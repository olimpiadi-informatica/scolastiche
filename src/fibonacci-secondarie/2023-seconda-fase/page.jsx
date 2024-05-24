import { OlinfoAuth } from "~/utils/olinfo-auth";

import Statement from "./contest/contest.mdx";
import Header from "./contest/header.md";

export const metadata = {
  title: "Giochi di Fibonacci 2023/2024 - Fase II - Scuole secondarie",
  description: "Seconda fase dei Giochi di Fibonacci 2023/2024 per le scuole secondarie",
};

export default function App() {
  return (
    <OlinfoAuth duration={100}>
      <Header />
      <Statement />
    </OlinfoAuth>
  );
}
