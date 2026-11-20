"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

import type { State } from "./s3.blocks";

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
    tooltip: "the number of days",
    fn: (_ctx: Context, state: State): number => {
      return state.N;
    },
  },
  {
    type: "valore_del_titolo_alla_fine",
    message0: "bond value %1 at the end",
    colour: 20,
    tooltip: "value of bond i on day N",
    fn: (ctx: Context, state: State, i: number): number => {
      if (i < 0) ctx.exit(false, "parameter must be greater than or equal to 0");
      if (!Number.isInteger(i)) ctx.exit(false, "parameter must be an integer");
      if (i < 0 || i >= state.N) ctx.exit(false, `bond ${i} does not exist`);
      return state.V[i] + (state.N - i) * state.G[i];
    },
  },
  {
    type: "guadagno_del_titolo",
    message0: "bond earnings %1",
    colour: 20,
    tooltip: "income rate of bond i",
    fn: (ctx: Context, state: State, v1: number): number => {
      if (v1 < 0) ctx.exit(false, "parameter must be greater than or equal to 0");
      if (!Number.isInteger(v1)) ctx.exit(false, "parameter must be an integer");
      if (v1 < 0 || v1 >= state.N) ctx.exit(false, `bond ${v1} does not exist`);
      return state.G[v1];
    },
  },
  {
    type: "prendi_il_titolo_dopo_il_titolo",
    message0: "take bond %1 after bond %2",
    colour: 20,
    previousStatement: null,
    nextStatement: null,
    tooltip: "take bond k after bond i",
    fn: (ctx: Context, state: State, v1: number, v2: number) => {
      if (v1 < 0) ctx.exit(false, "parameter must be greater than or equal to 0");
      if (!Number.isInteger(v1)) ctx.exit(false, "parameter must be an integer");
      if (v2 < 0) ctx.exit(false, "parameter must be greater than or equal to 0");
      if (!Number.isInteger(v2)) ctx.exit(false, "parameter must be an integer");
      if (v2 < 0 || v2 >= state.N) ctx.exit(false, `bond ${v2} does not exist`);
      if (v1 < 0 || v1 >= state.N) ctx.exit(false, `bond ${v1} does not exist`);
      if (v1 <= v2) ctx.exit(false, `bond ${v1} is not after bond ${v2}`);
      state.pos = v2;
      state.next[v2] = v1;
    },
  },
  {
    type: "non_prendere_altri_titoli_dopo",
    message0: "do not take further bonds after %1",
    colour: 20,
    previousStatement: null,
    nextStatement: null,
    tooltip: "do not take any further bonds after bond i",
    fn: (ctx: Context, state: State, v1: number) => {
      if (v1 < 0) ctx.exit(false, "parameter must be greater than or equal to 0");
      if (!Number.isInteger(v1)) ctx.exit(false, "parameter must be an integer");
      if (v1 < 0 || v1 >= state.N) ctx.exit(false, `bond ${v1} does not exist`);
      state.pos = v1;
      state.next[v1] = v1;
    },
  },
  {
    type: "termina",
    message0: "finish",
    previousStatement: null,
    colour: 20,
    tooltip: "execute the plan",
    fn: async (ctx: Context, state: State) => {
      let next = 0;
      for (let i = 0; i < state.N; i++) {
        state.pos = i;
        state.curval += state.G[state.taken];
        await ctx.pause();
        if (i === next) {
          state.taken = i;
          state.curval = state.V[i];
          next = state.next[i];
          await ctx.pause();
        }
      }
      state.pos = state.N;
      state.curval += state.G[state.taken];
      if (state.curval < state.sol) ctx.exit(false, "you could earn more");
      ctx.exit(true, "you maximized your earnings, well done!");
    },
  },
] satisfies CustomBlock<State>[];
