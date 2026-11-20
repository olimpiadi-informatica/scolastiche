"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

export type State = {
  pos: number;
  rocks: number[];
  flight: number;
  N: number;
  M: number;
};

export default [
  {
    type: "start",
    message0: "start here",
    nextStatement: null,
    colour: 20,
    tooltip: "Execution starts here",
    maxInstances: 1,
    fn: (_ctx: Context, _state: State) => {},
  },
  {
    type: "N",
    message0: "N",
    colour: 20,
    tooltip: "number of rocks before the flag",
    fn: (_ctx: Context, state: State): number => {
      return state.N;
    },
  },
  {
    type: "M",
    message0: "M",
    colour: 20,
    tooltip: "number of obstacles before the flag",
    fn: (_ctx: Context, state: State): number => {
      return state.M;
    },
  },
  {
    type: "avanza",
    message0: "move forward",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "move forward to the next rock",
    fn: async (ctx: Context, state: State) => {
      if (state.pos + 1 === state.rocks.length || state.rocks[state.pos + 1] === 0) state.pos += 1;
      else {
        state.pos += 0.2;
        await ctx.pause();
        state.pos -= 0.2;
      }
      if (state.pos >= state.rocks.length) ctx.exit(false, "you went past the end of the course");
    },
  },
  {
    type: "salta",
    message0: "jump",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "jump over the next rock",
    fn: async (ctx: Context, state: State) => {
      state.pos += 1;
      state.flight = 1;
      if (state.rocks[state.pos + 1] === 1) {
        ctx.exit(false, "you cannot jump onto an obstacle");
      }
      await ctx.pause();
      state.pos += 1;
      state.flight = 0;
      if (state.pos >= state.rocks.length) ctx.exit(false, "you went past the end of the course");
    },
  },
  {
    type: "termina",
    message0: "finish",
    previousStatement: null,
    colour: 20,
    tooltip: "finish the race",
    fn: (ctx: Context, state: State) => {
      if (state.pos < state.N) ctx.exit(false, "you have not reached the flag");
      ctx.exit(true, "you passed the flag, well done!");
    },
  },
] satisfies CustomBlock<State>[];
