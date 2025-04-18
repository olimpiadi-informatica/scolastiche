"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

export type State = {
  N: number;
  pos: number;
  light: number[];
  switch: number[];
  door: boolean[];
  dir: number;
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
    tooltip: "numero di stanze",
    fn: (_ctx: Context, state: State): number => {
      return state.N;
    },
  },
  {
    type: "stanza_corrente",
    message0: "stanza corrente",
    colour: 20,
    tooltip: "il numero della stanza corrente, 0 (esterno) oppure da 1 a N (stanze)",
    fn: (_ctx: Context, state: State): number => {
      return state.pos;
    },
  },
  {
    type: "muovi",
    message0: "muovi a %1",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "spostati nella stanza a destra/sinistra della stanza corrente",
    fn: async (ctx: Context, state: State, v1$: "destra" | "sinistra") => {
      const i = { destra: 1, sinistra: -1 }[v1$];
      state.dir = i;
      if (state.pos + i > state.N) ctx.exit(false, "non c'è una stanza a destra");
      if (state.pos + i < 0) ctx.exit(false, "non c'è una stanza a sinistra");
      const door = state.pos + Math.min(0, i);
      state.door[door] = true;
      await ctx.pause();
      state.pos += i;
      await ctx.pause();
      state.door[door] = false;
      if (state.light[state.pos - 1] === 0) ctx.exit(false, "la stanza in cui sei arrivato è buia");
    },
  },
  {
    type: "interruttore",
    message0: "interruttore a %1",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "premi l'interruttore che comanda la stanza a destra/sinistra",
    fn: (ctx: Context, state: State, v1$: "destra" | "sinistra") => {
      const i = { destra: 1, sinistra: -1 }[v1$];
      state.dir = i;
      if (state.pos + i > state.N) ctx.exit(false, "non c'è una stanza a destra");
      if (state.pos + i < 1) ctx.exit(false, "non c'è una stanza a sinistra");
      state.switch[2 * state.pos - 1 + Math.max(i, 0)] ^= 1;
      state.light[state.pos + i - 1] ^= 1;
    },
  },
  {
    type: "lampadina_accesa",
    message0: "lampadina a %1 accesa",
    colour: 20,
    tooltip: "vero se la lampadina nella stanza a destra/sinistra è accesa",
    fn: (ctx: Context, state: State, v1$: "destra" | "sinistra"): boolean => {
      const i = { destra: 1, sinistra: -1 }[v1$];
      state.dir = i;
      if (state.pos + i > state.N) ctx.exit(false, "non c'è una stanza a destra");
      if (state.pos + i < 1) ctx.exit(false, "non c'è una stanza a sinistra");
      return state.light[state.pos + i - 1] === 1;
    },
  },
  {
    type: "termina",
    message0: "termina",
    previousStatement: null,
    colour: 20,
    tooltip: "raggiungi i tuoi amici per la cena intorno al fuoco",
    fn: (ctx: Context, state: State) => {
      if (state.pos !== 0) ctx.exit(false, "non sei arrivato all'esterno");
      for (let i = 0; i < state.N; i++)
        if (state.light[i] === 1) ctx.exit(false, `non hai spento la luce nella stanza ${i + 1}`);
      state.pos--;
      ctx.exit(true, "hai spento le luci e raggiunto gli amici, complimenti!");
    },
  },
] satisfies CustomBlock<State>[];
