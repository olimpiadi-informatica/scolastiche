import { OlinfoAuth } from "../utils/olinfoAuth";
import "quizms/css";

import Contest from "./contest/contest.mdx";
import Header from "./contest/header.md";

export const title = "Giochi di Fibonacci 2022 - 2023";
export const description = "Prima fase dei Giochi di Fibonacci per le scuole secondarie";

export function App() {
  return (
    <OlinfoAuth questionCount={8} duration={50}>
      <Header />
      <Contest />
    </OlinfoAuth>
  );
}
