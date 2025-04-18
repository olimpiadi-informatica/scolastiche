"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

export type State = {
  N: number;
  C: number;
  L: number[];
  sol: number;
  muro: number[];
  i: number;
  pos: number;
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
    type: "colora_dalla_posizione",
    message0: "colora dalla posizione %1",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "Colora il muro dal pannello i-esimo",
    fn: (ctx: Context, state: State, i: number) => {
      if (i < 1) ctx.exit(false, "il parametro deve essere maggiore o uguale di 1");
      if (i > state.N) ctx.exit(false, `il parametro deve essere minore o uguale di ${state.N}`);
      if (!Number.isInteger(i)) ctx.exit(false, "il parametro deve essere un intero");
      state.pos = i - 1;
      if (state.i >= state.C) ctx.exit(false, "sono finiti i colori");
      if (i > state.N - state.L[state.i] + 1)
        ctx.exit(false, `non c'è abbastanza spazio dal pannello ${i}`);
      for (let j = 0; j < state.L[state.i]; j++) state.muro[i + j - 1] = state.i + 1;
      state.i++;
    },
  },
  {
    type: "pannelli_da_pitturare",
    message0: "pannelli da pitturare",
    colour: 20,
    tooltip: "Numero di pannelli da pitturare",
    fn: (_ctx: Context, state: State): number => {
      return state.L[state.i];
    },
  },
  {
    type: "N",
    message0: "N",
    colour: 20,
    tooltip: "Numero di pannelli nel muro",
    fn: (_ctx: Context, state: State): number => {
      return state.N;
    },
  },
  {
    type: "C",
    message0: "C",
    colour: 20,
    tooltip: "Numero di colori",
    fn: (_ctx: Context, state: State): number => {
      return state.C;
    },
  },
  {
    type: "metti_via_i_pennelli",
    message0: "metti via i pennelli",
    previousStatement: null,
    colour: 20,
    tooltip: "Metti via i pennelli e termina",
    fn: (ctx: Context, state: State) => {
      const found = [];
      for (let i = 0; i <= state.C; ++i) found[i] = 0;
      for (let i = 0; i < state.N; ++i) found[state.muro[i]] = 1;
      let tot = 0;
      for (let i = 1; i <= state.C; ++i) tot += found[i];
      if (tot === state.sol) ctx.exit(true, "si vedono tanti colori, bravo!");
      else ctx.exit(false, `si poteva far vedere ${state.sol} colori`);
    },
  },
] satisfies CustomBlock<State>[];
