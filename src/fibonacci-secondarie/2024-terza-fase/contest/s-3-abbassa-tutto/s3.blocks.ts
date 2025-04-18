"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

export type State = {
  N: number;
  P: number[][];
  C: number[];
  pos: number;
  count: number;
  stress: number[];
  highlight: number;
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
    tooltip: "numero di giocatori di FarmCraft",
    fn: (_ctx: Context, state: State): number => {
      return state.N;
    },
  },
  {
    type: "punteggio_del_giocatore",
    message0: "punteggio del giocatore %1",
    colour: 20,
    tooltip: "punteggio del giocatore i-esimo",
    fn: (ctx: Context, state: State, i: number): number => {
      if (i < 1) ctx.exit(false, "il parametro deve essere maggiore o uguale di 1");
      if (!Number.isInteger(i)) ctx.exit(false, "il parametro deve essere un intero");
      if (i < 1 || i > state.N) ctx.exit(false, `il giocatore ${i} non esiste`);
      return state.P[i - 1][0];
    },
  },
  {
    type: "costo_della_box",
    message0: "costo della box %1",
    colour: 20,
    tooltip: "costo della box i-esima",
    fn: (ctx: Context, state: State, i: number): number => {
      if (i < 1) ctx.exit(false, "il parametro deve essere maggiore o uguale di 1");
      if (!Number.isInteger(i)) ctx.exit(false, "il parametro deve essere un intero");
      if (i < 1 || i > state.N) ctx.exit(false, `la box ${i} non esiste`);
      return state.C[i - 1];
    },
  },
  {
    type: "compra_box",
    message0: "compra box %1",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "compra box i-esima",
    fn: async (ctx: Context, state: State, i: number) => {
      if (i < 1) ctx.exit(false, "il parametro deve essere maggiore o uguale di 1");
      if (!Number.isInteger(i)) ctx.exit(false, "il parametro deve essere un intero");
      if (i < 1 || i > state.N) ctx.exit(false, `la box ${i} non esiste`);
      state.pos = i;
      if (state.P[i - 1][0] === 0)
        ctx.exit(false, `la box ${i} non serve, il giocatore è già a zero punti`);
      state.P[i - 1][0]--;
      state.count += state.C[i - 1];
      if (state.N > 7) {
        state.P.sort((a, b) => b[0] - a[0]);
        return;
      }
      state.highlight = 1;
      await ctx.pause();
      if (i < state.N && state.P[i - 1][0] < state.P[i][0]) {
        state.stress[i - 1] = +1;
        let j = i;
        state.stress[j] = -1;
        for (; j + 1 < state.N && state.P[j][0] === state.P[j + 1][0]; j++)
          state.stress[j + 1] = -1;
        await ctx.pause();
        const tmp = state.P[i - 1];
        for (let k = i; k <= j; k++) {
          state.P[k - 1] = state.P[k];
          state.stress[k - 1] = 0;
        }
        state.P[j] = tmp;
        state.stress[j] = 5 + 4 * (j - i);
        await ctx.pause();
        state.stress[j] = 0;
      }
      state.highlight = 0;
    },
  },
  {
    type: "termina",
    message0: "termina",
    previousStatement: null,
    colour: 20,
    tooltip: "goditi la meritata vittoria",
    fn: (ctx: Context, state: State) => {
      for (let i = 0; i < state.N; i++)
        if (state.P[i][0] !== 0) ctx.exit(false, `il giocatore ${i + 1} ha ancora punti`);
      if (state.count > state.sol) ctx.exit(false, "hai speso più carote del necessario");
      if (state.count < state.sol)
        ctx.exit(false, "soluzione prematurata con scappellamento a destra");
      ctx.exit(true, "hai azzerato tutti spendendo poco, complimenti!");
    },
  },
] satisfies CustomBlock<State>[];
