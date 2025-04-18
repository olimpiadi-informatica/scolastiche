"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

export type State = {
  N: number; // larghezza
  M: number; // altezza
  K: number; // compagni rimasti
  cuts: number[]; // tagli effettuati
  sol: number; // soluzione trovata
  initialK: number; // compagni iniziali
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
    type: "larghezza",
    message0: "larghezza",
    colour: 20,
    tooltip: "larghezza della tavoletta rimasta",
    fn: (_ctx: Context, state: State): number => {
      return state.N;
    },
  },
  {
    type: "altezza",
    message0: "altezza",
    colour: 20,
    tooltip: "altezza della tavoletta rimasta",
    fn: (_ctx: Context, state: State): number => {
      return state.M;
    },
  },
  {
    type: "compagni",
    message0: "compagni",
    colour: 20,
    tooltip: "numero di compagni rimasti",
    fn: (_ctx: Context, state: State): number => {
      return state.K;
    },
  },
  {
    type: "spezza_in_orizzontale",
    message0: "spezza %1 quadratini in orizzontale",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "spezza x quadratini in orizzontale",
    fn: (ctx: Context, state: State, i: number) => {
      if (i < 1) ctx.exit(false, "il parametro deve essere maggiore o uguale di 1");
      if (i > state.M) ctx.exit(false, `il parametro deve essere minore o uguale di ${state.M}`);
      if (!Number.isInteger(i)) ctx.exit(false, "il parametro deve essere un intero");
      state.M -= i;
      state.K -= 1;
      state.cuts.push(i);
    },
  },
  {
    type: "spezza_in_verticale",
    message0: "spezza %1 quadratini in verticale",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "spezza x quadratini in verticale",
    fn: (ctx: Context, state: State, i: number) => {
      if (i < 1) ctx.exit(false, "il parametro deve essere maggiore o uguale di 1");
      if (i > state.N) ctx.exit(false, `il parametro deve essere minore o uguale di ${state.N}`);
      if (!Number.isInteger(i)) ctx.exit(false, "il parametro deve essere un intero");
      state.N -= i;
      state.K -= 1;
      state.cuts.push(-i);
    },
  },
  {
    type: "termina",
    message0: "termina",
    previousStatement: null,
    colour: 20,
    tooltip: "termina il procedimento",
    fn: (ctx: Context, state: State) => {
      if (state.K > 0) ctx.exit(false, "ci sono ancora compagni che vogliono cioccolato");
      if (state.N * state.M < state.sol) ctx.exit(false, "potevi tenerti più cioccolato");
      ctx.exit(true, "hai distribuito bene il cioccolato, complimenti!");
    },
  },
] satisfies CustomBlock<State>[];
