"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

export type State = {
  N: number;
  A: number[];
  B: number[];
  VA: number[];
  VB: number[];
  DA: number[];
  DB: number[];
  H: number;
  V: number[];
  D: number[];
  posx: number;
  posy: number;
  time: number;
  sol: number;
  delta: number;
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
    tooltip: "il numero di ostacoli",
    fn: (_ctx: Context, state: State): number => {
      return state.N;
    },
  },
  {
    type: "pedana",
    message0: "pedana %1 %2",
    colour: 20,
    tooltip: "l'altezza dell'ostacolo dato",
    fn: (ctx: Context, state: State, v1$: "alta" | "bassa", v2: number): number => {
      const v1 = ({ alta: "A", bassa: "B" } as const)[v1$];
      if (v2 < 1) ctx.exit(false, "il parametro deve essere maggiore o uguale di 1");
      if (v2 > state.N) ctx.exit(false, `il parametro deve essere minore o uguale di ${state.N}`);
      if (!Number.isInteger(v2)) ctx.exit(false, "il parametro deve essere un intero");
      return state[v1][v2 - 1];
    },
  },
  {
    type: "differenza_assoluta",
    message0: "differenza assoluta tra %1 e %2",
    colour: 20,
    tooltip: "la differenza assoluta tra x e y",
    fn: (_ctx: Context, _state: State, v1: number, v2: number): number => {
      return Math.abs(v1 - v2);
    },
  },
  {
    type: "minimo",
    message0: "minimo tra %1 e %2",
    colour: 20,
    tooltip: "il valore minimo tra x e y",
    fn: (_ctx: Context, _state: State, v1: number, v2: number): number => {
      return Math.min(v1, v2);
    },
  },
  {
    type: "termina",
    message0: "termina in %1 tempo",
    previousStatement: null,
    colour: 20,
    tooltip: "termina in x tempo",
    fn: (ctx: Context, state: State, i: number) => {
      if (i < 0) ctx.exit(false, "il parametro deve essere maggiore o uguale di 0");
      if (!Number.isInteger(i)) ctx.exit(false, "il parametro deve essere un intero");
      if (i > state.sol) ctx.exit(false, `potevi metterci meno di ${i} tempo`);
      if (i < state.sol) ctx.exit(false, `non si può finire il livello in ${i} tempo`);
      ctx.exit(true, `${i} è il tempo minimo per finire il livello, complimenti!`);
    },
  },
  {
    type: "valore_pedana",
    message0: "valore pedana %1 %2",
    colour: 20,
    tooltip: "valore salvato dell'ostacolo dato",
    fn: (ctx: Context, state: State, v1$: "alta" | "bassa", v2: number): number => {
      const v1 = ({ alta: "VA", bassa: "VB" } as const)[v1$];
      if (v2 < 1) ctx.exit(false, "il parametro deve essere maggiore o uguale di 1");
      if (v2 > state.N) ctx.exit(false, `il parametro deve essere minore o uguale di ${state.N}`);
      if (!Number.isInteger(v2)) ctx.exit(false, "il parametro deve essere un intero");
      return state[v1][v2 - 1];
    },
  },
  {
    type: "imposta_valore_pedana",
    message0: "imposta valore pedana %1 %2 a %3",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "salva un valore dell'ostacolo dato",
    fn: (ctx: Context, state: State, v1$: "alta" | "bassa", v2: number, v3: number) => {
      const v1 = ({ alta: "VA", bassa: "VB" } as const)[v1$];
      if (v2 < 1) ctx.exit(false, "il parametro deve essere maggiore o uguale di 1");
      if (v2 > state.N) ctx.exit(false, `il parametro deve essere minore o uguale di ${state.N}`);
      if (!Number.isInteger(v2)) ctx.exit(false, "il parametro deve essere un intero");
      state[v1][v2 - 1] = v3;
    },
  },
] satisfies CustomBlock<State>[];
