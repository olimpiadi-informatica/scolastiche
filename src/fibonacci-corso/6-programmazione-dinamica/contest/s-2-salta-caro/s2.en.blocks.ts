"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

import type { State } from "./s2.blocks";

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
    tooltip: "number of rocks on the course",
    fn: (_ctx: Context, state: State): number => {
      return state.N;
    },
  },
  {
    type: "posizione_di_Carol",
    message0: "Carol's position",
    colour: 20,
    tooltip: "Carol's current position",
    fn: (_ctx: Context, state: State): number => {
      return state.pos + 1;
    },
  },
  {
    type: "costo_roccia",
    message0: "rock cost %1",
    colour: 20,
    tooltip: "cost in carrots to land on the i-th rock",
    fn: (ctx: Context, state: State, v1: number): number => {
      if (v1 < 1) ctx.exit(false, "parameter must be greater than or equal to 1");
      if (!Number.isInteger(v1)) ctx.exit(false, "parameter must be an integer");
      if (v1 < 1 || v1 > state.N) ctx.exit(false, `rock ${v1} does not exist`);
      return state.cost[v1 - 1];
    },
  },
  {
    type: "preferenza",
    message0: "preference %1",
    colour: 20,
    tooltip: "preference written on chalkboard i",
    fn: (_ctx: Context, state: State, v1: number): number => {
      if (v1 < 1 || v1 > state.N) return 0;
      return state.value[v1 - 1];
    },
  },
  {
    type: "scrivi_preferenza",
    message0: "write %1 on chalkboard %2",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "write preference on the i-th chalkboard",
    fn: (ctx: Context, state: State, v1: number, v2: number) => {
      if (state.start !== 0)
        ctx.exit(false, "you cannot write on chalkboards after starting the race");
      if (v2 < 1) ctx.exit(false, "parameter must be greater than or equal to 1");
      if (!Number.isInteger(v2)) ctx.exit(false, "parameter must be an integer");
      if (v2 < 1 || v2 > state.N) ctx.exit(false, `chalkboard ${v2} does not exist`);
      state.value[v2 - 1] = v1;
    },
  },
  {
    type: "comincia",
    message0: "start race",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "start the race from the starting position",
    fn: async (ctx: Context, state: State) => {
      if (state.start === 1) ctx.exit(false, "you already started the race");
      if (state.pos > -1) {
        state.pos = -1;
        await ctx.pause();
      }
      state.start = -1;
      await ctx.pause();
      state.start = 1;
    },
  },
  {
    type: "avanza",
    message0: "advance",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "advance to the next rock",
    fn: (ctx: Context, state: State) => {
      if (state.start === 0) ctx.exit(false, "you must start the race first");
      state.pos += 1;
      if (state.pos > state.N + 1) ctx.exit(false, "you moved too far past the end of the course");
      if (state.pos < state.N) state.count += state.cost[state.pos];
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
      if (state.start === 0) ctx.exit(false, "you must start the race first");
      state.pos += 1;
      state.flight = 1;
      await ctx.pause();
      state.pos += 1;
      state.flight = 0;
      if (state.pos > state.N + 1) ctx.exit(false, "you moved too far past the end of the course");
      if (state.pos < state.N) state.count += state.cost[state.pos];
    },
  },
  {
    type: "termina",
    message0: "finish",
    previousStatement: null,
    colour: 20,
    tooltip: "finish the race and pay penalties",
    fn: (ctx: Context, state: State) => {
      if (state.start === 0) ctx.exit(false, "you have not started the race");
      if (state.pos < state.N - 1) ctx.exit(false, "you have not reached the flag");
      if (state.count > state.sol)
        ctx.exit(false, `you could spend fewer carrots than ${state.count}`);
      ctx.exit(true, "you completed the race with minimum carrots, well done!");
    },
  },
] satisfies CustomBlock<State>[];
