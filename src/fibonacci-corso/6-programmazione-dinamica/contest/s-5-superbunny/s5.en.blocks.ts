"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

import type { State } from "./s5.blocks";

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
    tooltip: "number of platform pairs",
    fn: (_ctx: Context, state: State): number => {
      return state.N;
    },
  },
  {
    type: "terreno",
    message0: "ground",
    colour: 20,
    tooltip: "height of all ground sections",
    fn: (_ctx: Context, state: State): number => {
      return state.H;
    },
  },
  {
    type: "pedana",
    message0: "platform %1 %2",
    colour: 20,
    tooltip: "height of the given platform",
    fn: (ctx: Context, state: State, v1: "high" | "low" | "alta" | "bassa", v2: number): number => {
      if (v2 < 0 || v2 > state.N + 1) ctx.exit(false, `platform ${v2} does not exist`);
      if (v2 === 0 || v2 === state.N + 1) return state.H;
      const isHigh = v1 === "high" || v1 === "alta";
      return state[isHigh ? "A" : "B"][v2 - 1];
    },
  },
  {
    type: "differenza assoluta",
    message0: "distance between %1\nand %2",
    colour: 20,
    tooltip: "distance between two numbers",
    fn: (_ctx: Context, _state: State, v1: number, v2: number): number => {
      return Math.abs(v1 - v2);
    },
  },
  {
    type: "salta",
    message0: "jump %1",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "jump to the next platform (high or low)",
    fn: async (ctx: Context, state: State, v1: "high" | "low" | "alta" | "bassa") => {
      if (state.posx >= state.N) ctx.exit(false, "there is no platform ahead of you");
      const isHigh = v1 === "high" || v1 === "alta";
      const V = state[isHigh ? "A" : "B"];
      state.time += Math.abs(state.posy - V[state.posx]);
      state.posy = V[state.posx];
      ++state.posx;
      await ctx.pause();
    },
  },
  {
    type: "saltaterreno",
    message0: "jump to ground",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "jump from a platform to the next ground section",
    fn: async (ctx: Context, state: State) => {
      if (state.posx < state.N) ctx.exit(false, "there is no ground section ahead of you");
      if (state.posx > state.N) ctx.exit(false, "you cannot jump beyond the end");
      state.time += Math.abs(state.posy - state.H);
      state.posy = state.H;
      ++state.posx;
      await ctx.pause();
    },
  },
  {
    type: "termina",
    message0: "finish",
    previousStatement: null,
    colour: 20,
    tooltip: "complete the level",
    fn: (ctx: Context, state: State) => {
      if (state.posx < state.N + 1) ctx.exit(false, "you have not finished the level");
      if (state.time > state.sol)
        ctx.exit(false, `you could complete it in less than ${state.time} time`);
      ctx.exit(true, "you completed the level in minimum time, well done!");
    },
  },
] satisfies CustomBlock<State>[];
