"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

export type State = {
  pos: number;
  rocks: number[];
  flight: number;
  N: number;
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
    tooltip: "numero di rocce prima della bandierina",
    fn: (_ctx: Context, state: State): number => {
      return state.N;
    },
  },
  {
    type: "avanza",
    message0: "avanza",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "avanza alla roccia successiva",
    fn: async (ctx: Context, state: State) => {
      if (state.pos + 1 === state.rocks.length || state.rocks[state.pos + 1] === 0) state.pos += 1;
      else {
        state.pos += 0.2;
        await ctx.pause();
        state.pos -= 0.2;
      }
      if (state.pos >= state.rocks.length) ctx.exit(false, "hai superato la fine del percorso");
    },
  },
  {
    type: "salta",
    message0: "salta",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "salta oltre alla prossima roccia",
    fn: async (ctx: Context, state: State) => {
      state.pos += 1;
      state.flight = 1;
      if (state.rocks[state.pos + 1] === 1) {
        ctx.exit(false, "non puoi saltare su un ostacolo");
      }
      await ctx.pause();
      state.pos += 1;
      state.flight = 0;
      if (state.pos >= state.rocks.length) ctx.exit(false, "hai superato la fine del percorso");
    },
  },
  {
    type: "termina",
    message0: "termina",
    previousStatement: null,
    colour: 20,
    tooltip: "finisci la gara",
    fn: (ctx: Context, state: State) => {
      if (state.pos < state.N) ctx.exit(false, "non hai raggiunto la bandierina");
      ctx.exit(true, "hai superato la bandierina, complimenti!");
    },
  },
] satisfies CustomBlock<State>[];
