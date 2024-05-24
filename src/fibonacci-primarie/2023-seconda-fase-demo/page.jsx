import { OlinfoAuth } from "~/utils/olinfo-auth";

import Statement from "./contest/contest.mdx";
import Header from "./contest/header.md";

export const metadata = {
  title: "Giochi di Fibonacci 2023/2024 - Demo Fase II - Scuole primarie",
  description:
    "Prova di allenamento per la seconda fase dei Giochi di Fibonacci 2023/2024 per le scuole primarie",
};

export default function App() {
  return (
    <OlinfoAuth duration={100}>
      <Header />
      <Statement />
    </OlinfoAuth>
  );
}
