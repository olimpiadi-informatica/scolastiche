"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

export type State = {
  N: number;
  M: number;
  C: number;
  res: number;
  sol: number;
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
    tooltip: "numero di alberi di mele",
    fn: (_ctx: Context, state: State): number => {
      return state.N;
    },
  },
  {
    type: "M",
    message0: "M",
    colour: 20,
    tooltip: "numero di mele in ciascun albero",
    fn: (_ctx: Context, state: State): number => {
      return state.M;
    },
  },
  {
    type: "C",
    message0: "C",
    colour: 20,
    tooltip: "numero massimo di mele che può contenere il cestino",
    fn: (_ctx: Context, state: State): number => {
      return state.C;
    },
  },
  {
    type: "raccogli_mele",
    message0: "raccogli %1 mele",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "raccogli alcune mele dagli alberi, mettendole nel cestino",
    fn: async (ctx: Context, state: State, v1: number) => {
      if (v1 < 0) ctx.exit(false, "il parametro deve essere maggiore o uguale di 0");
      if (!Number.isInteger(v1)) ctx.exit(false, "il parametro deve essere un intero");
      for (let i = 0; i < v1; i++) {
        if (state.res === state.N * state.M)
          ctx.exit(false, "non ci sono così tante mele sugli alberi!");
        state.res += 1;
        if (state.res > state.C) ctx.exit(false, "hai raccolto troppe mele e sfondato il cestino!");
        await ctx.pause();
      }
    },
  },
  {
    type: "termina",
    message0: "termina",
    previousStatement: null,
    colour: 20,
    tooltip: "riporta il cestino a casa",
    fn: (ctx: Context, state: State) => {
      if (state.res < state.sol) ctx.exit(false, "potevi raccogliere più mele!");
      ctx.exit(true, "hai raccolto più mele possibile, complimenti!");
    },
  },
] satisfies CustomBlock<State>[];
