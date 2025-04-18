"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

export type State = {
  N: number;
  light: number[];
  switch: number[];
  screwed: number[];
  pos: number;
  dir: number;
  count: number;
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
    tooltip: "numero di lampadine",
    fn: (_ctx: Context, state: State): number => {
      return state.N;
    },
  },
  {
    type: "lampadina_accesa",
    message0: "lampadina %1 accesa",
    colour: 20,
    tooltip: "vero se la lampadina $i$-esima è accesa",
    fn: (ctx: Context, state: State, i: number): boolean => {
      if (i < 1) ctx.exit(false, "il parametro deve essere maggiore o uguale di 1");
      if (!Number.isInteger(i)) ctx.exit(false, "il parametro deve essere un intero");
      if (i > state.N || i < 1) ctx.exit(false, `non c'è una lampadina ${i}-esima`);
      if (state.pos !== i) state.dir = i > state.pos ? 1 : -1;
      state.pos = i;
      return state.light[i - 1] === 1;
    },
  },
  {
    type: "svita_lampadina",
    message0: "svita lampadina %1",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "svita l'$i$-esima lampadina",
    fn: async (ctx: Context, state: State, i: number) => {
      if (i < 1) ctx.exit(false, "il parametro deve essere maggiore o uguale di 1");
      if (!Number.isInteger(i)) ctx.exit(false, "il parametro deve essere un intero");
      if (i > state.N || i < 1) ctx.exit(false, `non c'è una lampadina ${i}-esima`);
      if (state.pos !== i) state.dir = i > state.pos ? 1 : -1;
      state.pos = i;
      await ctx.pause();
      if (state.screwed[i - 1] === 0) ctx.exit(false, `la lampadina ${i}-esima è già svitata`);
      state.count += 1;
      state.screwed[i - 1] = 0;
    },
  },
  {
    type: "premi_interruttore",
    message0: "premi l'interruttore %1",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "premi l'interruttore $i$-esimo",
    fn: async (ctx: Context, state: State, i: number) => {
      if (i < 1) ctx.exit(false, "il parametro deve essere maggiore o uguale di 1");
      if (!Number.isInteger(i)) ctx.exit(false, "il parametro deve essere un intero");
      if (i >= state.N || i < 1) ctx.exit(false, `non c'è un interruttore ${i}-esimo`);
      if (state.pos !== i + 0.5) state.dir = i + 0.5 > state.pos ? 1 : -1;
      state.pos = i + 0.5;
      await ctx.pause();
      state.count += 1;
      state.switch[i - 1] ^= 1;
      state.light[i - 1] ^= 1;
      state.light[i] ^= 1;
    },
  },
  {
    type: "termina",
    message0: "termina",
    previousStatement: null,
    colour: 20,
    tooltip: "raggiungi i tuoi amici per la cena intorno al fuoco",
    fn: (ctx: Context, state: State) => {
      for (let i = 0; i < state.N; i++)
        if (state.light[i] === 1 && state.screwed[i] === 1)
          ctx.exit(false, `non hai spento la luce nella stanza ${i + 1}`);
      if (state.count !== state.sol)
        ctx.exit(false, `hai fatto ${state.count} azioni, ma ne bastavano ${state.sol}`);
      ctx.exit(true, "hai spento le luci con poche azioni, complimenti!");
    },
  },
] satisfies CustomBlock<State>[];
