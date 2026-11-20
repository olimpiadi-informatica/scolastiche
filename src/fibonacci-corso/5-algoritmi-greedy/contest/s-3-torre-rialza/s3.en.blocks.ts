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
    type: "altezza_della_scatola",
    message0: "height of box %1",
    colour: 20,
    tooltip: "height of the i-th box",
    fn: (ctx: Context, state: State, v1: number): number => {
      if (v1 < 1) ctx.exit(false, "parameter must be greater than or equal to 1");
      if (v1 > state.N) ctx.exit(false, `parameter must be less than or equal to ${state.N}`);
      if (!Number.isInteger(v1)) ctx.exit(false, "parameter must be an integer");
      state.pos = v1 - 1;
      return state.rot[v1 - 1] ? state.larghezze[v1 - 1] : state.altezze[v1 - 1];
    },
  },
  {
    type: "larghezza_della_scatola",
    message0: "width of box %1",
    colour: 20,
    tooltip: "width of the i-th box",
    fn: (ctx: Context, state: State, v1: number): number => {
      if (v1 < 1) ctx.exit(false, "parameter must be greater than or equal to 1");
      if (v1 > state.N) ctx.exit(false, `parameter must be less than or equal to ${state.N}`);
      if (!Number.isInteger(v1)) ctx.exit(false, "parameter must be an integer");
      state.pos = v1 - 1;
      return state.rot[v1 - 1] ? state.altezze[v1 - 1] : state.larghezze[v1 - 1];
    },
  },
  {
    type: "ruota_la_scatola",
    message0: "rotate box %1",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "rotate the i-th box",
    fn: (ctx: Context, state: State, v1: number) => {
      if (v1 < 1) ctx.exit(false, "parameter must be greater than or equal to 1");
      if (v1 > state.N) ctx.exit(false, `parameter must be less than or equal to ${state.N}`);
      if (!Number.isInteger(v1)) ctx.exit(false, "parameter must be an integer");
      state.pos = v1 - 1;
      state.rot[v1 - 1] = !state.rot[v1 - 1];
    },
  },
  {
    type: "N",
    message0: "N",
    colour: 20,
    tooltip: "number of boxes",
    fn: (_ctx: Context, state: State): number => {
      return state.N;
    },
  },
  {
    type: "riporta_altezza_e_larghezza",
    message0: "report height %1 and width %2",
    previousStatement: null,
    colour: 20,
    tooltip: "report total tower height and minimum width, then finish",
    fn: (ctx: Context, state: State, v1: number, v2: number) => {
      let H = 0;
      let W = 10;
      for (let i = 0; i < state.N; i++) {
        H += state.rot[i] ? state.larghezze[i] : state.altezze[i];
        W = Math.min(W, state.rot[i] ? state.altezze[i] : state.larghezze[i]);
      }
      if (H !== v1) ctx.exit(false, "reported height is incorrect");
      if (W !== v2) ctx.exit(false, "reported width is incorrect");
      if (state.W !== v2) ctx.exit(false, "you could make the tower wider");
      if (state.H !== v1)
        ctx.exit(false, "you could make the tower taller while maintaining its width");
      ctx.exit(true, "you made the tower as tall and wide as possible, well done!");
    },
  },
] satisfies CustomBlock<State>[];
