"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

export type State = {
  N: number;
  pos: number;
  balls: number[];
  placement: number[];
  trashed: number;
  deposited: number;
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
    type: "N",
    message0: "N",
    colour: 20,
    tooltip: "numero totale di palloni da sistemare",
    fn: (_ctx: Context, state: State): number => {
      return state.N;
    },
  },
  {
    type: "pallone_da_calcio",
    message0: "pallone da calcio",
    colour: 20,
    tooltip: "il prossimo pallone è da calcio?",
    fn: (ctx: Context, state: State): boolean => {
      return state.pos < state.N
        ? state.balls[state.pos] < 2
        : ctx.exit(false, "non ci sono più palloni");
    },
  },
  {
    type: "pallone_gonfio",
    message0: "pallone gonfio",
    colour: 20,
    tooltip: "il prossimo pallone è gonfio?",
    fn: (ctx: Context, state: State): boolean => {
      return state.pos < state.N
        ? state.balls[state.pos] % 2 === 0
        : ctx.exit(false, "non ci sono più palloni");
    },
  },
  {
    type: "tieni",
    message0: "tieni",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "metti da parte il prossimo pallone",
    fn: (ctx: Context, state: State) => {
      if (state.pos === state.N) ctx.exit(false, "non ci sono più palloni");
      state.deposited += 1;
      state.placement[state.pos] = state.deposited;
      state.pos += 1;
      if (state.balls[state.pos - 1] === 2) ctx.exit(false, "questo pallone era da buttare");
    },
  },
  {
    type: "butta",
    message0: "butta",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "butta il prossimo pallone",
    fn: (ctx: Context, state: State) => {
      if (state.pos === state.N) ctx.exit(false, "non ci sono più palloni");
      state.trashed += 1;
      state.placement[state.pos] = -state.trashed;
      state.pos += 1;
      if (state.balls[state.pos - 1] !== 2) ctx.exit(false, "questo pallone era da tenere");
    },
  },
  {
    type: "termina",
    message0: "termina",
    previousStatement: null,
    colour: 20,
    tooltip: "termina il procedimento",
    fn: (ctx: Context, state: State) => {
      if (state.pos < state.N) ctx.exit(false, "non hai finito di sistemare i palloni");
      ctx.exit(true, "hai sistemato i palloni, complimenti!");
    },
  },
] satisfies CustomBlock<State>[];
