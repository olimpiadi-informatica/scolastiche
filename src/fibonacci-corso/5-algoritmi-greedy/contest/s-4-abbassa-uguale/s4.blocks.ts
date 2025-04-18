"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

export type State = {
  N: number;
  allie: number;
  P: [number, number, string][];
  C: number;
  pos: number;
  count: number;
  sol: number;
  highlight: number;
  stress: number[];
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
    type: "posizione_di_Allie",
    message0: "posizione di Allie",
    colour: 20,
    tooltip: "posizione corrente di Allie in graduatoria",
    fn: (_ctx: Context, state: State): number => {
      return state.allie + 1;
    },
  },
  {
    type: "punteggio_del_giocatore",
    message0: "punteggio del giocatore %1",
    colour: 20,
    tooltip: "punteggio del giocatore che in questo momento è i-esimo in graduatoria",
    fn: (ctx: Context, state: State, v1: number): number => {
      if (v1 < 1) ctx.exit(false, "il parametro deve essere maggiore o uguale di 1");
      if (!Number.isInteger(v1)) ctx.exit(false, "il parametro deve essere un intero");
      if (v1 < 1 || v1 > state.N) ctx.exit(false, `il giocatore ${v1} non esiste`);
      return state.P[v1 - 1][0];
    },
  },
  {
    type: "costo_delle_box_negative",
    message0: "costo delle box negative",
    colour: 20,
    tooltip: "costo in carote delle box per abbassare i punteggi dei giocatori",
    fn: (_ctx: Context, state: State): number => {
      return state.C;
    },
  },
  {
    type: "compra_box_negativa",
    message0: "compra box negativa %1",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip:
      "paga la box negativa i-esima e abbassa il punteggio del giocatore che al momento è i-esimo",
    fn: async (ctx: Context, state: State, v1: number) => {
      if (v1 < 1) ctx.exit(false, "il parametro deve essere maggiore o uguale di 1");
      if (!Number.isInteger(v1)) ctx.exit(false, "il parametro deve essere un intero");

      if (v1 < 1 || v1 > state.N) ctx.exit(false, `la box ${v1} non esiste`);
      state.pos = v1;
      if (v1 === state.allie + 1)
        ctx.exit(false, "hai comprato la box per abbassare il punteggio di Allie");
      if (v1 > state.allie + 1)
        ctx.exit(false, `la box ${v1} non serve, il giocatore è sotto di Allie`);
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
    message0: "termina",
    previousStatement: null,
    colour: 20,
    tooltip: "goditi la meritata vittoria",
    fn: (ctx: Context, state: State) => {
      if (state.allie !== 0) ctx.exit(false, "Allie non è prima in classifica");
      if (state.count > state.sol) ctx.exit(false, "hai speso più carote del necessario");
      if (state.count < state.sol)
        ctx.exit(false, "soluzione prematurata con scappellamento a destra");
      ctx.exit(true, "hai superato tutti spendendo poco, complimenti!");
    },
  },
] satisfies CustomBlock<State>[];
