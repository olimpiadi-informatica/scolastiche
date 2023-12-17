import React from "react";
import ReactDOM from "react-dom/client";

import Contest from "./contest/contest.mdx";
import Header from "./contest/header.md";
import { NoAuth } from "quizms";
import "quizms/css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NoAuth header={Header} questionCount={8} duration={50}>
      <Contest />
    </NoAuth>
  </React.StrictMode>,
);
