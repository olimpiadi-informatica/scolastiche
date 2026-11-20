"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

import type { State } from "./s4.blocks";

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
    tooltip: "number of apple trees",
    fn: (_ctx: Context, state: State): number => {
      return state.N;
    },
  },
  {
    type: "mele_albero",
    message0: "apples tree %1",
    colour: 20,
    tooltip: "number of apples in the i-th tree",
    fn: (ctx: Context, state: State, v1: number): number => {
      if (v1 < 1) ctx.exit(false, "parameter must be greater than or equal to 1");
      if (!Number.isInteger(v1)) ctx.exit(false, "parameter must be an integer");
      if (state.N < v1) ctx.exit(false, `tree number ${v1} does not exist`);
      return state.M[v1 - 1];
    },
  },
  {
    type: "K",
    message0: "K",
    colour: 20,
    tooltip: "number of baskets Tip-Tap has",
    fn: (_ctx: Context, state: State): number => {
      return state.K;
    },
  },
  {
    type: "capienza_cestino",
    message0: "basket capacity",
    colour: 20,
    tooltip: "maximum number of apples the current basket can hold",
    fn: (ctx: Context, state: State): number => {
      if (state.basket === state.K) ctx.exit(false, "no more baskets left");
      return state.C[state.basket];
    },
  },
  {
    type: "prossimo_cestino",
    message0: "next basket",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "move to the next basket",
    fn: (ctx: Context, state: State) => {
      if (state.basket === state.K) ctx.exit(false, "no more baskets left");
      state.basket += 1;
    },
  },
  {
    type: "raccogli_mele",
    message0: "pick %1 apples",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "pick apples from the trees and put them in the current basket",
    fn: async (ctx: Context, state: State, v1: number) => {
      if (v1 < 0) ctx.exit(false, "parameter must be greater than or equal to 0");
      if (!Number.isInteger(v1)) ctx.exit(false, "parameter must be an integer");
      if (state.basket === state.K) ctx.exit(false, "no more baskets left");
      let acc = 0;
      for (let i = 0; i <= state.pos; i++) acc += state.M[i];
      for (let i = 0; i < v1; i++) {
        if (state.res === state.tot)
          ctx.exit(false, "there are not that many apples on the trees!");
        state.res += 1;
        state.apples[state.basket] += 1;
        if (state.apples[state.basket] > state.C[state.basket])
          ctx.exit(false, "you picked too many apples and broke the basket!");
        await ctx.pause();
        if (state.res === acc) {
          state.pos += 1;
          acc += state.M[state.pos];
          await ctx.pause();
        }
      }
    },
  },
  {
    type: "termina",
    message0: "finish",
    previousStatement: null,
    colour: 20,
    tooltip: "bring the basket home",
    fn: (ctx: Context, state: State) => {
      if (state.res < state.sol) ctx.exit(false, "you could pick more apples!");
      ctx.exit(true, "you picked as many apples as possible, well done!");
    },
  },
] satisfies CustomBlock<State>[];
