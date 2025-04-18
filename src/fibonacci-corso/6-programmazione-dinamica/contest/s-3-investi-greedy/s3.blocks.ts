"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

export type State = {
  N: number;
  V: number[];
  G: number[];
  pos: number;
  next: number[];
  taken: number;
  curval: number;
  sol: number;
  pref: number[];
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
    tooltip: "il numero di giorni",
    fn: (_ctx: Context, state: State): number => {
      return state.N;
    },
  },
  {
    type: "valore_del_titolo_alla_fine",
    message0: "valore del titolo %1 alla fine",
    colour: 20,
    tooltip: "valore del titolo i-esimo al giorno N-esimo",
    fn: (ctx: Context, state: State, i: number): number => {
      if (i < 0) ctx.exit(false, "il parametro deve essere maggiore o uguale di 0");
      if (!Number.isInteger(i)) ctx.exit(false, "il parametro deve essere un intero");
      if (i < 0 || i >= state.N) ctx.exit(false, `il titolo ${i} non esiste`);
      return state.V[i] + (state.N - i) * state.G[i];
    },
  },
  {
    type: "guadagno_del_titolo",
    message0: "guadagno del titolo %1",
    colour: 20,
    tooltip: "guadagno del titolo i-esimo",
    fn: (ctx: Context, state: State, i: number): number => {
      if (i < 0) ctx.exit(false, "il parametro deve essere maggiore o uguale di 0");
      if (!Number.isInteger(i)) ctx.exit(false, "il parametro deve essere un intero");
      if (i < 0 || i >= state.N) ctx.exit(false, `il titolo ${i} non esiste`);
      return state.G[i];
    },
  },
  {
    type: "prendi_il_titolo_dopo_il_titolo",
    message0: "prendi il titolo %1 dopo il titolo %2",
    colour: 20,
    previousStatement: null,
    nextStatement: null,
    tooltip: "prendi il titolo k dopo il titolo i-esimo",
    fn: (ctx: Context, state: State, v1: number, v2: number) => {
      if (v1 < 0) ctx.exit(false, "il parametro deve essere maggiore o uguale di 0");
      if (!Number.isInteger(v1)) ctx.exit(false, "il parametro deve essere un intero");
      if (v2 < 0) ctx.exit(false, "il parametro deve essere maggiore o uguale di 0");
      if (!Number.isInteger(v2)) ctx.exit(false, "il parametro deve essere un intero");
      if (v2 < 0 || v2 >= state.N) ctx.exit(false, `il titolo ${v2} non esiste`);
      if (v1 < 0 || v1 >= state.N) ctx.exit(false, `il titolo ${v1} non esiste`);
      if (v1 <= v2) ctx.exit(false, `il titolo ${v1} non è dopo il titolo ${v2}`);
      if (state.V[v2] + (v1 - v2) * state.G[v2] <= state.V[v1])
        ctx.exit(false, `non puoi scambiare il titolo ${v1} per il titolo ${v2}`);
      state.pos = v2;
      state.next[v2] = v1;
    },
  },
  {
    type: "non_prendere_altri_titoli_dopo",
    message0: "non prendere altri titoli dopo %1",
    colour: 20,
    previousStatement: null,
    nextStatement: null,
    tooltip: "non prendere altri titoli dopo il titolo i-esimo",
    fn: (ctx: Context, state: State, v1: number) => {
      if (v1 < 0) ctx.exit(false, "il parametro deve essere maggiore o uguale di 0");
      if (!Number.isInteger(v1)) ctx.exit(false, "il parametro deve essere un intero");
      if (v1 < 0 || v1 >= state.N) ctx.exit(false, `il titolo ${v1} non esiste`);
      state.pos = v1;
      state.next[v1] = v1;
    },
  },
  {
    type: "termina",
    message0: "termina",
    previousStatement: null,
    colour: 20,
    tooltip: "esegui il piano",
    fn: async (ctx: Context, state: State) => {
      let next = 0;
      for (let i = 0; i < state.N; i++) {
        state.pos = i;
        state.curval += state.G[state.taken];
        await ctx.pause();
        if (i === next) {
          if (state.curval <= state.V[i])
            ctx.exit(
              false,
              `ATTENZIONE: non puoi scambiare il titolo ${i} per il titolo ${state.taken}`,
            );
          state.taken = i;
          state.curval = state.V[i];
          next = state.next[i];
          await ctx.pause();
        }
      }
      state.pos = state.N;
      state.curval += state.G[state.taken];
      if (state.curval < state.sol) ctx.exit(false, "potevi guadagnare di più");
      ctx.exit(true, "hai guadagnato il massimo, complimenti!");
    },
  },
] satisfies CustomBlock<State>[];
