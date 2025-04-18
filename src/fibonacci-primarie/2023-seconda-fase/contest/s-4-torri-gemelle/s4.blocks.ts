"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

export type State = {
  S: number;
  D: number;
  M: number;
  rimasti: number;
  orient: number;
  pos: number[];
  blocchi: number[][];
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
    type: "S",
    message0: "S",
    colour: 20,
    tooltip: "altezza della colonna di sinistra da costruire",
    fn: (_ctx: Context, state: State): number => {
      return state.S;
    },
  },
  {
    type: "D",
    message0: "D",
    colour: 20,
    tooltip: "altezza della colonna di destra da costruire",
    fn: (_ctx: Context, state: State): number => {
      return state.D;
    },
  },
  {
    type: "M",
    message0: "M",
    colour: 20,
    tooltip: "numero di blocchetti nel set da costruzioni",
    fn: (_ctx: Context, state: State): number => {
      return state.M;
    },
  },
  {
    type: "altezza_colonna",
    message0: "altezza colonna %1",
    colour: 20,
    tooltip: "altezza corrente della colonna",
    fn: (_ctx: Context, state: State, v1$: "sinistra" | "destra"): number => {
      const v1 = { sinistra: 0, destra: 2 }[v1$];
      return state.pos[v1];
    },
  },
  {
    type: "impila_blocchetto",
    message0: "impila blocchetto %1 a %2",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "impila blocchetto alto i alla colonna",
    fn: (ctx: Context, state: State, i: number, v2$: "sinistra" | "destra") => {
      if (i < 1) ctx.exit(false, "il parametro deve essere maggiore o uguale di 1");
      if (i > state.M) ctx.exit(false, `il parametro deve essere minore o uguale di ${state.M}`);
      if (!Number.isInteger(i)) ctx.exit(false, "il parametro deve essere un intero");
      const v2 = { sinistra: 0, destra: 2 }[v2$];
      state.orient = v2 / 2;
      state.pos[1] = i;
      if (state.blocchi[i - 1][0] !== 1) ctx.exit(false, `hai già usato il blocchetto ${i}`);
      state.rimasti -= 1;
      state.pos[3] = state.pos[v2] + (i - 4) / 2;
      state.blocchi[i - 1] = [v2, state.pos[v2]];
      state.pos[v2] += i;
      if (state.pos[0] > state.S) ctx.exit(false, "la colonna di sinistra è troppo alta");
      if (state.pos[2] > state.D) ctx.exit(false, "la colonna di destra è troppo alta");
    },
  },
  {
    type: "termina",
    message0: "termina",
    previousStatement: null,
    colour: 20,
    tooltip: "termina il procedimento",
    fn: (ctx: Context, state: State) => {
      if (state.pos[0] < state.S) ctx.exit(false, "la colonna di sinistra è troppo bassa");
      if (state.pos[2] < state.D) ctx.exit(false, "la colonna di destra è troppo bassa");
      ctx.exit(true, "hai costruito bene le colonne, complimenti!");
    },
  },
] satisfies CustomBlock<State>[];
