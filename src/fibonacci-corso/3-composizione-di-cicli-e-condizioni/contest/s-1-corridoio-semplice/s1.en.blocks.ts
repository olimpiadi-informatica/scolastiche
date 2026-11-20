"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

import type { State } from "./s1.blocks";

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
    tooltip: "number of rooms",
    fn: (_ctx: Context, state: State): number => {
      return state.N;
    },
  },
  {
    type: "sono_nel_prato",
    message0: "in the meadow",
    colour: 20,
    tooltip: "true if Allie is in the meadow",
    fn: (_ctx: Context, state: State): boolean => {
      return state.pos === 0;
    },
  },
  {
    type: "muovi",
    message0: "move %1",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "move into the room to the right/left of the current room",
    fn: async (ctx: Context, state: State, v1$: "right" | "left" | "destra" | "sinistra") => {
      const v1 = { right: 1, left: -1, destra: 1, sinistra: -1 }[v1$];
      state.dir = v1;
      if (state.pos + v1 > state.N) ctx.exit(false, "there is no room to the right");
      if (state.pos + v1 < 0) ctx.exit(false, "there is no room to the left");
      const door = state.pos + Math.min(0, v1);
      state.door[door] = true;
      await ctx.pause();
      state.pos += v1;
      await ctx.pause();
      state.door[door] = false;
      if (state.pos > 0 && state.light[state.pos - 1] === 0)
        ctx.exit(false, "the room you entered is dark");
    },
  },
  {
    type: "coniglietto_presente",
    message0: "bunny present",
    colour: 20,
    tooltip: "true if a bunny is present in the current room",
    fn: (_ctx: Context, state: State): boolean => {
      if (state.pos === 0) return false;
      for (let i = 0; i < state.M; i++) if (state.rescue[i] === state.pos) return true;
      return false;
    },
  },
  {
    type: "mano",
    message0: "%1 hand",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "hold/let go of the bunny's hand in the current room",
    fn: (ctx: Context, state: State, v1$: "hold" | "let go" | "prendi" | "lascia") => {
      const v1 = { hold: 1, "let go": -1, prendi: 1, lascia: -1 }[v1$];
      if (v1 > 0 && state.hand >= 0) ctx.exit(false, "you are already holding a bunny's hand");
      if (v1 < 0 && state.hand < 0) ctx.exit(false, "you are not holding a bunny's hand");
      if (v1 < 0 && state.pos > 0)
        ctx.exit(false, "you cannot let go of a bunny's hand before going outside");
      if (v1 < 0) {
        state.rescue[state.hand] = -state.hand * 0.5 - 0.5;
        state.hand = -1;
        return;
      }
      if (state.pos === 0) ctx.exit(false, "no need to hold hands outside");
      let found = -1;
      for (let j = 0; j < state.M; j++) {
        if (state.rescue[j] === state.pos) {
          found = j;
          break;
        }
      }
      if (found < 0) ctx.exit(false, "there is no bunny to hold hands with in this room");
      state.hand = found;
      state.rescue[found] = 0;
    },
  },
  {
    type: "termina",
    message0: "finish",
    previousStatement: null,
    colour: 20,
    tooltip: "join your friends for recess",
    fn: (ctx: Context, state: State) => {
      if (state.pos !== 0) ctx.exit(false, "you did not exit outside");
      for (let i = 0; i < state.M; i++)
        if (state.rescue[i] > 0) ctx.exit(false, "you did not bring all the bunnies outside");
      state.pos--;
      ctx.exit(true, "you brought all the bunnies outside, well done!");
    },
  },
] satisfies CustomBlock<State>[];
