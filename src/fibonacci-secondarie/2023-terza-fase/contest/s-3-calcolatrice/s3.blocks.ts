"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

export type State = {
  N: number;
  sol: number;
};

export default [
  {
    type: "start",
    message0: "inizia qui",
    nextStatement: null,
    colour: 20,
    tooltip: "L'esecuzione inizia da qui",
    maxInstances: 1,
    fn: (_ctx: Context, _state: State) => {},
  },
  {
    type: "N",
    message0: "N",
    colour: 20,
    tooltip: "il numero da raggiungere",
    fn: (_ctx: Context, state: State): number => {
      return state.N;
    },
  },
  {
    type: "termina",
    message0: "termina in %1 operazioni",
    previousStatement: null,
    colour: 20,
    tooltip: "termina in x operazioni",
    fn: (ctx: Context, state: State, i: number) => {
      if (i < 0) ctx.exit(false, "il parametro deve essere maggiore o uguale di 0");
      if (!Number.isInteger(i)) ctx.exit(false, "il parametro deve essere un intero");
      if (i > state.sol) ctx.exit(false, `potevi fare meno di ${i} operazioni`);
      if (i < state.sol) ctx.exit(false, `non si può ottenere ${state.N} con ${i} operazioni`);
      ctx.exit(true, `${i} è il numero minimo di operazioni, complimenti!`);
    },
  },
] satisfies CustomBlock<State>[];
