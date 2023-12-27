import React from "react";

import { NoAuth } from "quizms/student";
import "quizms/css";

import Contest from "./contest/contest.mdx";
import Header from "./contest/header.md";

export const title = "Scolastiche 2021";
export const description = "Selezione scolastica delle Olimpiadi di Informatica Italiane 2021";

export function App() {
  return (
    <NoAuth header={Header} questionCount={20} duration={90}>
      <Contest />
    </NoAuth>
  );
}
