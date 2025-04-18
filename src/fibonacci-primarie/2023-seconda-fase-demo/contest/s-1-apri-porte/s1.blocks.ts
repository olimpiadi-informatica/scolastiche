"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

export type State = {
  N: number;
  door: number[];
  open: boolean[];
  pos: number;
  eaten: boolean;
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
    type: "avanza",
    message0: "avanza",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "Vai avanti",
    fn: (ctx: Context, state: State) => {
      if (state.pos < state.N && state.door[state.pos] === 1 && !state.open[state.pos]) {
        ctx.exit(false, "non puoi avanzare, c'è una porta chiusa");
      }
      state.pos += 1;
      if (state.pos > state.N) {
        ctx.exit(false, "hai superato la carota");
      }
    },
  },
  {
    type: "vedi_porta_chiusa",
    message0: "vedi porta chiusa",
    colour: 20,
    tooltip: "vedi porta chiusa",
    fn: (_ctx: Context, state: State): boolean => {
      return state.pos < state.N && state.door[state.pos] === 1 && !state.open[state.pos];
    },
  },
  {
    type: "N",
    message0: "N",
    colour: 20,
    tooltip: "distanza iniziale dalla carota",
    fn: (_ctx: Context, state: State): number => {
      return state.N;
    },
  },
  {
    type: "apri_porta",
    message0: "apri porta",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "apri porta",
    fn: (ctx: Context, state: State) => {
      if (state.pos === state.N || state.door[state.pos] === 0 || state.open[state.pos]) {
        ctx.exit(false, "non ci sono porte da aprire");
      }
      state.open[state.pos] = true;
    },
  },
  {
    type: "mangia_carota",
    message0: "mangia carota",
    previousStatement: null,
    colour: 20,
    tooltip: "mangia carota",
    fn: (ctx: Context, state: State) => {
      if (state.pos !== state.N) {
        ctx.exit(false, "non ci sono carote da mangiare");
      }
      state.eaten = true;
      ctx.exit(true, "hai mangiato la carota, bravo!");
    },
  },
] satisfies CustomBlock<State>[];
