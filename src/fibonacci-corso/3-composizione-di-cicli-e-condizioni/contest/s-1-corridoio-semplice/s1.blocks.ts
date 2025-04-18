"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

export type State = {
  N: number;
  M: number;
  pos: number;
  dir: number;
  door: boolean[];
  light: number[];
  rescue: number[];
  hand: number;
  switch: number[];
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
    type: "sono_nel_prato",
    message0: "sono nel prato",
    colour: 20,
    tooltip: "vero se è Bunny è nel prato",
    fn: (_ctx: Context, state: State): boolean => {
      return state.pos === 0;
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
      const v1 = { destra: 1, sinistra: -1 }[v1$];
      state.dir = v1;
      if (state.pos + v1 > state.N) ctx.exit(false, "non c'è una stanza a destra");
      if (state.pos + v1 < 0) ctx.exit(false, "non c'è una stanza a sinistra");
      const door = state.pos + Math.min(0, v1);
      state.door[door] = true;
      await ctx.pause();
      state.pos += v1;
      await ctx.pause();
      state.door[door] = false;
      if (state.pos > 0 && state.light[state.pos - 1] === 0)
        ctx.exit(false, "la stanza in cui sei arrivato è buia");
    },
  },
  {
    type: "coniglietto_presente",
    message0: "coniglietto presente",
    colour: 20,
    tooltip: "vero se è presente un coniglietto nella stanza corrente",
    fn: (_ctx: Context, state: State): boolean => {
      if (state.pos === 0) return false;
      for (let i = 0; i < state.M; i++) if (state.rescue[i] === state.pos) return true;
      return false;
    },
  },
  {
    type: "mano",
    message0: "%1 la mano",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "prendi/lascia la mano del coniglietto nella stanza corrente",
    fn: (ctx: Context, state: State, v1$: "prendi" | "lascia") => {
      const v1 = { prendi: 1, lascia: -1 }[v1$];
      if (v1 > 0 && state.hand >= 0) ctx.exit(false, "hai già preso la mano di un coniglietto");
      if (v1 < 0 && state.hand < 0) ctx.exit(false, "non stai tenendo la mano a un coniglietto");
      if (v1 < 0 && state.pos > 0)
        ctx.exit(false, "non puoi lasciare la mano di un coniglietto prima di uscire all'esterno");
      if (v1 < 0) {
        state.rescue[state.hand] = -state.hand * 0.5 - 0.5;
        state.hand = -1;
        return;
      }
      if (state.pos === 0)
        ctx.exit(false, "non serve prendere la mano dei coniglietti all'esterno");
      let found = -1;
      for (let j = 0; j < state.M; j++) {
        if (state.rescue[j] === state.pos) {
          found = j;
          break;
        }
      }
      if (found < 0)
        ctx.exit(false, "non c'è un coniglietto a cui prendere la mano nella stanza corrente");
      state.hand = found;
      state.rescue[found] = 0;
    },
  },
  {
    type: "termina",
    message0: "termina",
    previousStatement: null,
    colour: 20,
    tooltip: "raggiungi i tuoi amici per la cena intorno al fuoco",
    fn: (ctx: Context, state: State) => {
      if (state.pos !== 0) ctx.exit(false, "non sei uscito all'esterno");
      for (let i = 0; i < state.M; i++)
        if (state.rescue[i] > 0) ctx.exit(false, "non hai portato fuori tutti i coniglietti");
      state.pos--;
      ctx.exit(true, "hai portato fuori tutti i coniglietti, complimenti!");
    },
  },
] satisfies CustomBlock<State>[];
