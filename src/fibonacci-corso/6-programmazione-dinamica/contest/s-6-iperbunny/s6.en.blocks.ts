"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

import type { State } from "./s6.blocks";

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
    type: "preferenza pedana",
    message0: "platform preference %1 %2",
    colour: 20,
    tooltip: "preference written on the given platform",
    fn: (ctx: Context, state: State, v1: "high" | "low" | "alta" | "bassa", v2: number): number => {
      if (v2 < 0 || v2 > state.N + 1) ctx.exit(false, `platform ${v2} does not exist`);
      if (v2 === 0 || v2 === state.N + 1) return state.V[v2 === 0 ? 0 : 1];
      const isHigh = v1 === "high" || v1 === "alta";
      return state[isHigh ? "VA" : "VB"][v2 - 1];
    },
  },
  {
    type: "scrivi preferenza pedana",
    message0: "write %1 on platform %2 %3",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "write a preference on the given platform",
    fn: (
      ctx: Context,
      state: State,
      v1: number,
      v2: "high" | "low" | "alta" | "bassa",
      v3: number,
    ) => {
      if (v3 < 0 || v3 > state.N + 1) ctx.exit(false, `platform ${v3} does not exist`);
      const isHigh = v2 === "high" || v2 === "alta";
      if (v3 === 0 || v3 === state.N + 1) state.V[v3 === 0 ? 0 : 1] = v1;
      else state[isHigh ? "VA" : "VB"][v3 - 1] = v1;
    },
  },
  {
    type: "direzione pedana",
    message0: "current platform direction is %1",
    colour: 20,
    tooltip: "whether the direction chosen for the current platform is the given one",
    fn: (_ctx: Context, state: State, v1: "up" | "down" | "in alto" | "in basso"): boolean => {
      const x = v1 === "up" || v1 === "in alto" ? 1 : -1;
      if (state.posx === 0 || state.posx === state.N + 1)
        return state.D[state.posx === 0 ? 0 : 1] === x;
      if (state.posy === state.A[state.posx - 1]) return state.DA[state.posx - 1] === x;
      return state.DB[state.posx - 1] === x;
    },
  },
  {
    type: "scrivi direzione pedana",
    message0: "after platform %1 %2 go %3",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "set direction to take after the given platform",
    fn: (
      ctx: Context,
      state: State,
      v1: "high" | "low" | "alta" | "bassa",
      v2: number,
      v3: "up" | "down" | "in alto" | "in basso",
    ) => {
      if (v2 < 0 || v2 > state.N + 1) ctx.exit(false, `platform ${v2} does not exist`);
      const isHigh = v1 === "high" || v1 === "alta";
      const x = v3 === "up" || v3 === "in alto" ? 1 : -1;
      if (v2 === 0 || v2 === state.N + 1) state.D[v2 === 0 ? 0 : 1] = x;
      else state[isHigh ? "DA" : "DB"][v2 - 1] = x;
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
