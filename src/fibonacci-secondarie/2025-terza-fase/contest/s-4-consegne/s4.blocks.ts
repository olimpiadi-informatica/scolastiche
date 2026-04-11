"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

export type State = {
  N: number;
  M: number;
  P: number[];
  L: number[];
  next: number[];
  pos: number;
  time: number;
  cargo: number;
  sent: number;
  cost: number;
  best: number;
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
    tooltip: "il numero totale di casse da trasportare",
    fn: (_ctx: Context, state: State): number => {
      return state.N;
    },
  },
  {
    type: "M",
    message0: "M",
    colour: 20,
    tooltip: "la massima penale per una delle casse da trasportare",
    fn: (_ctx: Context, state: State): number => {
      return state.M;
    },
  },
  {
    type: "penale_cassa",
    message0: "penale cassa %1 ",
    colour: 20,
    tooltip:
      "penale da pagare se la cassa che arriva al minuto i-esimo deve aspettare il furgone per un minuto al caldo",
    fn: (ctx: Context, state: State, i: number): number => {
      if (i < 1 || i > state.N) {
        ctx.exit(false, "indice non valido!");
      }
      return state.P[i - 1];
    },
  },
  {
    type: "scrivi",
    message0: "scrivi %1 sul minuto %2",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "scrivi sulla lavagna del minuto i-esimo il valore x",
    fn: (ctx: Context, state: State, x: number, i: number) => {
      if (i < 0 || i > state.N) {
        ctx.exit(false, `non esiste la lavagna del minuto ${i}`);
      }
      state.pos = i;
      state.L[i] = x;
    },
  },
  {
    type: "leggi",
    message0: "preferenza minuto %1 ",
    colour: 20,
    tooltip:
      "il valore scritto sulla lavagna del minuto i-esimo (zero se quella lavagna non esiste)",
    fn: (_ctx: Context, state: State, i: number): number => {
      if (i < 0 || i > state.N) return 0;
      return state.L[i];
    },
  },
  {
    type: "primo_viaggio",
    message0: "pianifica primo viaggio al minuto %1",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "pianifica di fare il primo viaggio del furgone al minuto i-esimo",
    fn: (ctx: Context, state: State, i: number) => {
      if (i < 1) {
        ctx.exit(false, `non puoi fare viaggi al minuto ${i}`);
      }
      state.next[0] = i;
    },
  },
  {
    type: "prossimo_viaggio",
    message0: "pianifica viaggio al minuto %1 dopo quello al minuto %2",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip:
      "pianifica di fare un viaggio al minuto i come viaggio immediatamente successivo a quello al minuto j",
    fn: (ctx: Context, state: State, i: number, j: number) => {
      if (j < 1) {
        ctx.exit(false, `non puoi fare viaggi al minuto ${j}`);
      }
      if (i <= j) {
        ctx.exit(false, `il minuto ${i} non è dopo il minuto ${j}`);
      }
      if (i === j + 1) {
        ctx.exit(false, "tra un viaggio e l'altro devono passare almeno due minuti");
      }
      if (j < state.N) state.next[j] = i;
    },
  },
  {
    type: "termina",
    message0: "termina",
    previousStatement: null,
    colour: 20,
    tooltip: "smetti di pianificare e fai partire il furgone secondo il piano registrato finora",
    fn: async (ctx: Context, state: State) => {
      state.pos = -1;
      var t = state.next[0];
      for (let i = 1; i <= t + 1; i++) {
        await ctx.pause();
        state.time = i;
        state.cost += state.cargo;
        if (i <= state.N) state.cargo += 1;
        if (t === i) {
          await ctx.pause();
          state.pos = -2;
          if (t < state.N) t = state.next[t];
          state.sent += state.cargo;
          state.cargo = 0;
        } else if (state.pos === -2) {
          if (i <= state.N) state.cost += state.P[i - 1];
          await ctx.pause();
          state.pos = -1;
        } else await ctx.pause();
      }
      if (state.time <= state.N) {
        ctx.exit(false, "hai finito i viaggi prima di trasportare tutte le casse");
      }
      if (state.cost > state.best) {
        ctx.exit(false, "potevi spendere meno");
      }
      if (state.cost < state.best) {
        ctx.exit(false, "ERRORE DI VALUTAZIONE: CONTATTARE GLI ORGANIZZATORI");
      }
      ctx.exit(true, "hai trasportato le casse pagando meno possibile, complimenti!");
    },
  },
] satisfies CustomBlock<State>[];
