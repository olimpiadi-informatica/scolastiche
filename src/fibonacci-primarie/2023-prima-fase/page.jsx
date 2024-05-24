import { OlinfoAuth } from "~/utils/olinfo-auth";

import Contest from "./contest/contest.mdx";
import Header from "./contest/header.md";

export const metadata = {
  title: "Giochi di Fibonacci 2023/2024 - Fase I - Scuole primarie",
  description: "Prima fase dei Giochi di Fibonacci 2023/2024 per le scuole primarie",
};

export default function App() {
  return (
    <OlinfoAuth duration={50}>
      <Header />
      <Contest />
    </OlinfoAuth>
  );
}
