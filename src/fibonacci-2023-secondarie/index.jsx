import { OlinfoAuth } from "../utils/olinfoAuth";

import Contest from "./contest/contest.mdx";
import Header from "./contest/header.md";

export const title = "Giochi di Fibonacci 2023/2024 - Scuole secondarie";
export const description = "Prima fase dei Giochi di Fibonacci per le scuole secondarie";

export function App() {
  return (
    <OlinfoAuth contestName={title} questionCount={8} duration={50}>
      <Header />
      <Contest />
    </OlinfoAuth>
  );
}
