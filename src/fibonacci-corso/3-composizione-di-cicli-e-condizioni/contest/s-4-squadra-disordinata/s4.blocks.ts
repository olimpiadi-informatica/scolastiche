"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

export type State = {
  data: Array<{
    H: number[];
    taketot: number;
    take2: number;
    pos: number;
    taken: number[];
  }>;
};

function end(state: State, i: number) {
  return state.data[i].taketot === state.data[i].H.length;
}
function advance(state: State, i: number) {
  state.data[i].take2 += 1;
  do {
    state.data[i].take2 -= 1;
    state.data[i].pos += 1;
    if (state.data[i].pos === state.data[i].H.length) {
      state.data[i].pos = 0;
      state.data[i].take2 = state.data[i].taketot;
    }
  } while (state.data[i].taken[state.data[i].pos] > 0);
}

export default [
  {
    type: "start",
    message0: "inizia qui",
    nextStatement: null,
    colour: 20,
    tooltip: "L'esecuzione inizia da qui",
    maxInstances: 1,
    fn: (_ctx: Context, _state: State) => {
      // Le funzioni end e advance sono ora definite globalmente
    },
  },
  {
    type: "lunghezza_della_fila",
    message0: "lunghezza della fila %1",
    colour: 20,
    tooltip: "numero di conigli nella fila",
    fn: (_ctx: Context, state: State, v1$: "Fibonacci" | "Turing"): number => {
      const v1 = { Fibonacci: 0, Turing: 1 }[v1$];
      return state.data[v1].H.length;
    },
  },
  {
    type: "riaccoda_nella_fila",
    message0: "riaccoda nella fila %1",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "manda il prossimo coniglio della fila in fondo alla sua fila",
    fn: (ctx: Context, state: State, v1$: "Fibonacci" | "Turing") => {
      const v1 = { Fibonacci: 0, Turing: 1 }[v1$];
      if (state.data[v1].taketot === state.data[v1].H.length)
        ctx.exit(false, `la fila ${v1 === 0 ? "Fibonacci" : "Turing"} è finita`);
      advance(state, v1);
    },
  },
  {
    type: "primo_Fibonacci_più_alto_del_primo_Turing",
    message0: "primo Fibonacci più alto del primo Turing",
    colour: 20,
    tooltip:
      "il primo coniglio nella fila Fibonacci è più alto del primo coniglio nella fila Turing?",
    fn: (_ctx: Context, state: State): boolean => {
      return (
        state.data[0].taketot < state.data[0].H.length &&
        state.data[1].taketot < state.data[1].H.length &&
        state.data[0].H[state.data[0].pos] > state.data[1].H[state.data[1].pos]
      );
    },
  },
  {
    type: "primo_Fibonacci_marca_il_primo_Turing",
    message0: "primo Fibonacci marca il primo Turing",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip:
      "metti in squadra il primo coniglio della fila Fibonacci a marcare il primo coniglio della fila Turing",
    fn: (ctx: Context, state: State) => {
      if (state.data[0].taketot === state.data[0].H.length)
        ctx.exit(false, "la fila Fibonacci è finita");
      if (state.data[1].taketot === state.data[1].H.length)
        ctx.exit(false, "la fila Turing è finita");
      let fail = false;
      if (state.data[0].H[state.data[0].pos] <= state.data[1].H[state.data[1].pos]) fail = true;
      state.data[0].taketot += 1;
      state.data[0].taken[state.data[0].pos] = state.data[0].taketot;
      if (!end(state, 0)) advance(state, 0);
      state.data[1].taketot += 1;
      state.data[1].taken[state.data[1].pos] = state.data[1].taketot;
      if (!end(state, 1)) advance(state, 1);
      if (fail)
        ctx.exit(
          false,
          "il primo coniglio della fila Fibonacci non è più alto del primo coniglio della fila Turing",
        );
    },
  },
  {
    type: "termina",
    message0: "termina",
    previousStatement: null,
    colour: 20,
    tooltip: "termina il procedimento",
    fn: (ctx: Context, state: State) => {
      if (state.data[1].taketot !== state.data[1].H.length)
        ctx.exit(false, "non hai marcato tutti i conigli della fila Turing");
      ctx.exit(true, "hai scelto bene le squadre, complimenti!");
    },
  },
] satisfies CustomBlock<State>[];
