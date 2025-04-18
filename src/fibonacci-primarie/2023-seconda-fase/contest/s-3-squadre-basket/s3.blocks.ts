"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

export type State = {
  sol: number;
  data: {
    H: number[];
    C: number[];
    carrots: number[];
    presi: number[];
    scartati: number[];
    scelta: number[];
    pos: number;
  }[];
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
    type: "fine_della_fila",
    message0: "fine della fila %1",
    colour: 20,
    tooltip: "la fila è finita?",
    fn: (_ctx: Context, state: State, v1$: "Fibonacci" | "Turing"): boolean => {
      const v1 = { Fibonacci: 0, Turing: 1 }[v1$];
      return state.data[v1].pos === state.data[v1].H.length;
    },
  },
  {
    type: "altezza_primo_della_fila",
    message0: "altezza primo della fila %1",
    colour: 20,
    tooltip: "l'altezza del primo coniglio nella fila",
    fn: (ctx: Context, state: State, v1$: "Fibonacci" | "Turing"): number => {
      const v1 = { Fibonacci: 0, Turing: 1 }[v1$];
      return state.data[v1].pos === state.data[v1].H.length
        ? ctx.exit(false, v1 === 0 ? "la fila Fibonacci è finita" : "la fila Turing è finita")
        : state.data[v1].H[state.data[v1].pos];
    },
  },
  {
    type: "prendi_dalla_fila",
    message0: "prendi dalla fila %1",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "prendi il prossimo coniglio dalla fila",
    fn: (ctx: Context, state: State, v1$: "Fibonacci" | "Turing") => {
      const v1 = { Fibonacci: 0, Turing: 1 }[v1$];
      state.data[v1].presi[state.data[v1].presi.length] = state.data[v1].H[state.data[v1].pos];
      if (state.data[v1].pos === state.data[v1].H.length)
        ctx.exit(false, "la fila Fibonacci è finita");
      state.data[v1].scelta[state.data[v1].pos] = state.data[v1].presi.length;
      state.data[v1].pos += 1;
      if (
        state.data[v1].presi.length <= state.data[1].presi.length &&
        state.data[v1].presi[state.data[v1].presi.length - 1] !==
          state.data[1 - v1].presi[state.data[v1].presi.length - 1]
      )
        ctx.exit(
          false,
          `l'ultimo preso da ${v1 === 0 ? "Fibonacci" : "Turing"} ha un'altezza che non corrisponde`,
        );
    },
  },
  {
    type: "scarta_dalla_fila",
    message0: "scarta dalla fila %1",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "scarta il prossimo coniglio dalla fila",
    fn: (ctx: Context, state: State, v1$: "Fibonacci" | "Turing") => {
      const v1 = { Fibonacci: 0, Turing: 1 }[v1$];
      state.data[v1].scartati[state.data[v1].scartati.length] =
        state.data[v1].H[state.data[v1].pos];
      if (state.data[v1].pos === state.data[v1].H.length)
        ctx.exit(false, v1 === 0 ? "la fila Fibonacci è finita" : "la fila Turing è finita");
      state.data[v1].scelta[state.data[v1].pos] = -state.data[v1].scartati.length;
      state.data[v1].pos += 1;
    },
  },
  {
    type: "termina",
    message0: "termina",
    previousStatement: null,
    colour: 20,
    tooltip: "termina il procedimento",
    fn: (ctx: Context, state: State) => {
      if (state.data[0].presi.length !== state.data[1].presi.length)
        ctx.exit(false, "le due squadre non hanno lo stesso numero di giocatori");
      if (state.data[0].presi.length < state.sol)
        ctx.exit(
          false,
          `hai fatto squadre da ${state.data[0].presi.length} ma potevi farle da ${state.sol}`,
        );
      if (state.data[0].presi.length > state.sol) ctx.exit(false, "problema di correzione");
      ctx.exit(true, "hai scelto bene le squadre, complimenti!");
    },
  },
] satisfies CustomBlock<State>[];
