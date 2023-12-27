import React from "react";

import { NoAuth } from "quizms/student";
import "quizms/css";

import Contest from "./contest/contest.mdx";
import Header from "./contest/header.md";

export const title = "Giochi di Fibonacci 2023 - 2024";
export const description = "Prima fase dei Giochi di Fibonacci per le scuole secondarie";

export function App() {
  return (
    <NoAuth header={Header} questionCount={8} duration={50}>
      <Contest />
    </NoAuth>
  );
}
