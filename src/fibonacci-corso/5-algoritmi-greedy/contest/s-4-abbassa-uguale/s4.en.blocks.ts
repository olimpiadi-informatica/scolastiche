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
    tooltip: "number of FarmCraft players",
    fn: (_ctx: Context, state: State): number => {
      return state.N;
    },
  },
  {
    type: "posizione_di_Allie",
    message0: "Allie's position",
    colour: 20,
    tooltip: "Allie's current position in the leaderboard",
    fn: (_ctx: Context, state: State): number => {
      return state.allie + 1;
    },
  },
  {
    type: "punteggio_del_giocatore",
    message0: "player's score %1",
    colour: 20,
    tooltip: "score of the player currently in position i",
    fn: (ctx: Context, state: State, v1: number): number => {
      if (v1 < 1) ctx.exit(false, "parameter must be greater than or equal to 1");
      if (!Number.isInteger(v1)) ctx.exit(false, "parameter must be an integer");
      if (v1 < 1 || v1 > state.N) ctx.exit(false, `player ${v1} does not exist`);
      return state.P[v1 - 1][0];
    },
  },
  {
    type: "costo_delle_box_negative",
    message0: "cost of negative boxes",
    colour: 20,
    tooltip: "cost in carrots of negative boxes",
    fn: (_ctx: Context, state: State): number => {
      return state.C;
    },
  },
  {
    type: "compra_box_negativa",
    message0: "buy negative box %1",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "buy negative box i and lower player i's score by 1",
    fn: async (ctx: Context, state: State, v1: number) => {
      if (v1 < 1) ctx.exit(false, "parameter must be greater than or equal to 1");
      if (!Number.isInteger(v1)) ctx.exit(false, "parameter must be an integer");
      if (v1 < 1 || v1 > state.N) ctx.exit(false, `box ${v1} does not exist`);
      state.pos = v1;
      if (v1 === state.allie + 1) ctx.exit(false, "you bought a box to lower Allie's score");
      if (v1 > state.allie + 1)
        ctx.exit(false, `box ${v1} is useless, that player is already below Allie`);
      state.P[v1 - 1][0]--;
      state.count += state.C;
      state.highlight = 1;
      await ctx.pause();
      if (state.P[v1 - 1][0] < state.P[v1][0]) {
        state.stress[v1 - 1] = +1;
        let j = v1;
        state.stress[j] = -1;
        for (; j + 1 < state.N && state.P[j][0] === state.P[j + 1][0]; j++)
          state.stress[j + 1] = -1;
        await ctx.pause();
        const tmp = state.P[v1 - 1];
        for (let k = v1; k <= j; k++) {
          state.P[k - 1] = state.P[k];
          state.stress[k - 1] = 0;
        }
        state.P[j] = tmp;
        state.stress[j] = 5 + 4 * (j - v1);
        if (state.allie <= j) state.allie -= 1;
        await ctx.pause();
        state.stress[j] = 0;
      }
      state.highlight = 0;
    },
  },
  {
    type: "termina",
    message0: "finish",
    previousStatement: null,
    colour: 20,
    tooltip: "enjoy the well-deserved victory",
    fn: (ctx: Context, state: State) => {
      if (state.allie !== 0) ctx.exit(false, "Allie is not first in the leaderboard");
      if (state.count > state.sol) ctx.exit(false, "you spent more carrots than necessary");
      ctx.exit(true, "you overtook everyone while spending minimally, well done!");
    },
  },
] satisfies CustomBlock<State>[];
