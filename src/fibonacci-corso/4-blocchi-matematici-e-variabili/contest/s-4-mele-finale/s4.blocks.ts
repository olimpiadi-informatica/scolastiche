"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

export type State = {
  N: number;
  M: number[];
  K: number;
  C: number[];
  basket: number;
  pos: number;
  res: number;
  tot: number;
  sol: number;
  apples: number[];
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
    type: "mele_albero",
    message0: "mele albero %1",
    colour: 20,
    tooltip: "numero di mele nell'albero i-esimo",
    fn: (ctx: Context, state: State, v1: number): number => {
      if (v1 < 1) ctx.exit(false, "il parametro deve essere maggiore o uguale di 1");
      if (!Number.isInteger(v1)) ctx.exit(false, "il parametro deve essere un intero");
      if (state.N < v1) ctx.exit(false, `non esiste l'albero numero ${v1}`);
      return state.M[v1 - 1];
    },
  },
  {
    type: "K",
    message0: "K",
    colour: 20,
    tooltip: "numero di cestini che ha Tip-Tap",
    fn: (_ctx: Context, state: State): number => {
      return state.K;
    },
  },
  {
    type: "capienza_cestino",
    message0: "capienza cestino",
    colour: 20,
    tooltip: "il numero massimo di mele che può contenere il cestino corrente",
    fn: (ctx: Context, state: State): number => {
      if (state.basket === state.K) ctx.exit(false, "hai finito i cestini");
      return state.C[state.basket];
    },
  },
  {
    type: "prossimo_cestino",
    message0: "prossimo cestino",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "passa al prossimo cestino",
    fn: (ctx: Context, state: State) => {
      if (state.basket === state.K) ctx.exit(false, "hai finito i cestini");
      state.basket += 1;
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
      if (state.basket === state.K) ctx.exit(false, "hai finito i cestini");
      let acc = 0;
      for (let i = 0; i <= state.pos; i++) acc += state.M[i];
      for (let i = 0; i < v1; i++) {
        if (state.res === state.tot) ctx.exit(false, "non ci sono così tante mele sugli alberi!");
        state.res += 1;
        state.apples[state.basket] += 1;
        if (state.apples[state.basket] > state.C[state.basket])
          ctx.exit(false, "hai raccolto troppe mele e sfondato il cestino!");
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
