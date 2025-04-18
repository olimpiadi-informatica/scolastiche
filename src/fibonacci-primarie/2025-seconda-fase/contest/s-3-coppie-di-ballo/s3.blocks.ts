"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

export type Rabbit = {
  farm: "Fibonacci" | "Turing";
  height: number;
};

export type State = {
  N: number;
  offset: number; // which rabbit in queue to offset from the queue
  queue: Rabbit[]; // rabbits in the queue waiting to be paired
  pairs: Rabbit[][]; // pairs formed so far
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
    tooltip: "numero di conigli da ciascuna fattoria",
    fn: (_ctx: Context, state: State): number => {
      return state.N;
    },
  },
  {
    type: "prossimo",
    message0: "prossimo coniglio %1",
    colour: 20,
    tooltip: "se il prossimo coniglio in fila è della fattoria Fibonacci/Turing",
    fn: (ctx: Context, state: State, dir: "Fibonacci" | "Turing"): boolean => {
      if (state.queue.length === 0) ctx.exit(false, "non ci sono più conigli in fila");
      return state.queue[0].farm === dir;
    },
  },
  {
    type: "accoppia",
    message0: "metti in coppia",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "metti il prossimo coniglio in fila nella prossima coppia che si deve sfidare",
    fn: async (ctx: Context, state: State) => {
      if (state.queue.length === 0) ctx.exit(false, "non ci sono più conigli in fila");
      if (state.pairs.length === 0 || state.pairs[state.pairs.length - 1].length === 2) {
        state.pairs.push([]);
        await ctx.pause();
      }
      const next = state.queue.shift()!;
      state.pairs[state.pairs.length - 1].push(next);
      const pair = state.pairs[state.pairs.length - 1];
      if (pair.length === 2 && pair[0].farm === pair[1].farm)
        ctx.exit(false, "hai formato una coppia di conigli della stessa fattoria");
    },
  },
  {
    type: "rimetti",
    message0: "rimetti in coda",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "prendi il prossimo coniglio in fila e portalo al fondo della fila",
    fn: async (ctx: Context, state: State) => {
      if (state.queue.length === 0) ctx.exit(false, "non ci sono più conigli in fila");
      state.offset = 0;
      await ctx.pause();
      state.queue.push(state.queue.shift()!);
      state.offset = state.queue.length - 1;
      await ctx.pause();
      state.offset = -1;
    },
  },
  {
    type: "termina",
    message0: "avvia il torneo",
    previousStatement: null,
    colour: 20,
    tooltip: "smetti di formare le coppie e fai iniziare il torneo",
    fn: (ctx: Context, state: State) => {
      if (state.queue.length !== 0) ctx.exit(false, "non hai finito di formare le coppie");
      ctx.exit(true, "hai formato tutte le coppie, complimenti!");
    },
  },
] satisfies CustomBlock<State>[];
