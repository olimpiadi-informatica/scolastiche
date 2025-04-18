"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

export type State = {
  N: number;
  V: number[];
  G: number[];
  pref: number[];
  next: number[];
  pos: number;
  taken: number;
  curval: number;
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
    tooltip: "il numero di giorni",
    fn: (_ctx: Context, state: State): number => {
      return state.N;
    },
  },
  {
    type: "valore_del_titolo_al_giorno",
    message0: "valore del titolo %1 al giorno %2",
    colour: 20,
    tooltip: "valore del titolo i-esimo al giorno d-esimo",
    fn: (ctx: Context, state: State, i: number, d: number): number => {
      if (!Number.isInteger(i)) ctx.exit(false, "il parametro deve essere un intero");
      if (!Number.isInteger(d)) ctx.exit(false, "il parametro deve essere un intero");
      if (i < 0 || i >= state.N) ctx.exit(false, `il titolo ${i} non esiste`);
      if (d < 0 || d > state.N) ctx.exit(false, `il giorno ${d} non esiste`);
      if (d <= i) ctx.exit(false, `il giorno ${d} è prima della validità del titolo ${i}`);
      return state.V[i] + (d - i) * state.G[i];
    },
  },
  {
    type: "valore_del_titolo",
    message0: "valore del titolo %1",
    colour: 20,
    tooltip: "valore del titolo i-esimo",
    fn: (ctx: Context, state: State, i: number): number => {
      if (!Number.isInteger(i)) ctx.exit(false, "il parametro deve essere un intero");
      if (i < 0 || i >= state.N) ctx.exit(false, `il titolo ${i} non esiste`);
      return state.V[i];
    },
  },
  {
    type: "guadagno_del_titolo",
    message0: "guadagno del titolo %1",
    colour: 20,
    tooltip: "guadagno del titolo i-esimo",
    fn: (ctx: Context, state: State, i: number): number => {
      if (!Number.isInteger(i)) ctx.exit(false, "il parametro deve essere un intero");
      if (i < 0 || i >= state.N) ctx.exit(false, `il titolo ${i} non esiste`);
      return state.G[i];
    },
  },
  {
    type: "annota_preferenza_per_il_titolo",
    message0: "annota preferenza %1 per il titolo %2",
    colour: 20,
    previousStatement: null,
    nextStatement: null,
    tooltip: "annota preferenza per il titolo i-esimo",
    fn: (ctx: Context, state: State, x: number, i: number) => {
      if (!Number.isInteger(x)) ctx.exit(false, "il parametro deve essere un intero");
      if (!Number.isInteger(i)) ctx.exit(false, "il parametro deve essere un intero");
      if (i < 0 || i >= state.N) ctx.exit(false, `il titolo ${i} non esiste`);
      state.pos = i;
      state.pref[i] = x;
    },
  },
  {
    type: "leggi_preferenza_per_il_titolo",
    message0: "leggi preferenza per il titolo %1",
    colour: 20,
    tooltip: "leggi preferenza per il titolo i-esimo",
    fn: (ctx: Context, state: State, i: number): number => {
      if (!Number.isInteger(i)) ctx.exit(false, "il parametro deve essere un intero");
      if (i < 0 || i >= state.N) ctx.exit(false, `il titolo ${i} non esiste`);
      return state.pref[i];
    },
  },
  {
    type: "prendi_il_titolo_dopo_il_titolo",
    message0: "prendi il titolo %1 dopo il titolo %2",
    colour: 20,
    previousStatement: null,
    nextStatement: null,
    tooltip: "prendi il titolo k dopo il titolo i-esimo",
    fn: (ctx: Context, state: State, k: number, i: number) => {
      if (!Number.isInteger(k)) ctx.exit(false, "il parametro deve essere un intero");
      if (!Number.isInteger(i)) ctx.exit(false, "il parametro deve essere un intero");
      if (i < 0 || i >= state.N) ctx.exit(false, `il titolo ${i} non esiste`);
      if (k < 0 || k >= state.N) ctx.exit(false, `il titolo ${k} non esiste`);
      if (k <= i) ctx.exit(false, `il titolo ${k} non è dopo il titolo ${i}`);
      if (state.V[i] + (k - i) * state.G[i] <= state.V[k])
        ctx.exit(false, `non puoi scambiare il titolo ${k} per il titolo ${i}`);
      state.pos = i;
      state.next[i] = k;
    },
  },
  {
    type: "non_prendere_altri_titoli_dopo",
    message0: "non prendere altri titoli dopo %1",
    colour: 20,
    previousStatement: null,
    nextStatement: null,
    tooltip: "non prendere altri titoli dopo il titolo i-esimo",
    fn: (ctx: Context, state: State, i: number) => {
      if (!Number.isInteger(i)) ctx.exit(false, "il parametro deve essere un intero");
      if (i < 0 || i >= state.N) ctx.exit(false, `il titolo ${i} non esiste`);
      state.pos = i;
      state.next[i] = i;
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
