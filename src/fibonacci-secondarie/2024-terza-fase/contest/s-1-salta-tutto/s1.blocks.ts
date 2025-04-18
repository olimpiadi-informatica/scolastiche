"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

export type State = {
  N: number;
  pos: number;
  flight: number;
  rocks: number[];
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
    type: "bandierina_raggiunta",
    message0: "bandierina raggiunta",
    colour: 20,
    tooltip: "vero se hai raggiunto la bandierina",
    fn: (_ctx: Context, state: State): boolean => {
      return state.pos >= state.N;
    },
  },
  {
    type: "ostacolo_in_vista",
    message0: "ostacolo in vista",
    colour: 20,
    tooltip: "vero se hai un ostacolo di fronte",
    fn: (_ctx: Context, state: State): boolean => {
      return state.rocks[state.pos + 1] === 1;
    },
  },
  {
    type: "avanza",
    message0: "avanza",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "avanza alla roccia successiva",
    fn: (ctx: Context, state: State) => {
      if (state.pos >= state.N) ctx.exit(false, "hai già raggiunto la bandierina");
      if (state.rocks[state.pos + 1] === 1) ctx.exit(false, "non puoi avanzare su un ostacolo");
      state.pos += 1;
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
      if (state.pos >= state.N) ctx.exit(false, "hai già raggiunto la bandierina");
      if (state.rocks[state.pos + 2] === 1) ctx.exit(false, "non puoi saltare su un ostacolo");
      state.pos += 1;
      state.flight = 1;
      await ctx.pause();
      state.pos += 1;
      state.flight = 0;
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
