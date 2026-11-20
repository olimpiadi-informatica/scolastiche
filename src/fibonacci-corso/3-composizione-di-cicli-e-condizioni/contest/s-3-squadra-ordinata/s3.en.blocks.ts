"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

import type { State } from "./s3.blocks";

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
    message0: "start here",
    nextStatement: null,
    colour: 20,
    tooltip: "Execution starts here",
    maxInstances: 1,
    fn: (_ctx: Context, _state: State) => {},
  },
  {
    type: "lunghezza_della_fila",
    message0: "length of line %1",
    colour: 20,
    tooltip: "number of rabbits in line",
    fn: (_ctx: Context, state: State, v1$: "Fibonacci" | "Turing"): number => {
      const v1 = { Fibonacci: 0, Turing: 1 }[v1$];
      return state.data[v1].H.length;
    },
  },
  {
    type: "riaccoda_nella_fila",
    message0: "requeue in line %1",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "send the next rabbit to the back of the line",
    fn: (ctx: Context, state: State, v1$: "Fibonacci" | "Turing") => {
      const v1 = { Fibonacci: 0, Turing: 1 }[v1$];
      if (state.data[v1].taketot === state.data[v1].H.length)
        ctx.exit(false, `the ${v1 === 0 ? "Fibonacci" : "Turing"} line is empty`);
      advance(state, v1);
    },
  },
  {
    type: "primo_Fibonacci_più_alto_del_primo_Turing",
    message0: "first Fibonacci taller than first Turing",
    colour: 20,
    tooltip: "is the first rabbit in the Fibonacci line taller than the first in the Turing line?",
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
    message0: "first Fibonacci marks first Turing",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "assign the first Fibonacci rabbit to mark the first Turing rabbit",
    fn: (ctx: Context, state: State) => {
      if (state.data[0].taketot === state.data[0].H.length)
        ctx.exit(false, "the Fibonacci line is empty");
      if (state.data[1].taketot === state.data[1].H.length)
        ctx.exit(false, "the Turing line is empty");
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
          "the first rabbit in the Fibonacci line is not taller than the first in the Turing line",
        );
    },
  },
  {
    type: "termina",
    message0: "finish",
    previousStatement: null,
    colour: 20,
    tooltip: "finish team selection",
    fn: (ctx: Context, state: State) => {
      if (state.data[1].taketot !== state.data[1].H.length)
        ctx.exit(false, "you did not mark all rabbits in the Turing line");
      ctx.exit(true, "you selected the teams well, well done!");
    },
  },
] satisfies CustomBlock<State>[];
