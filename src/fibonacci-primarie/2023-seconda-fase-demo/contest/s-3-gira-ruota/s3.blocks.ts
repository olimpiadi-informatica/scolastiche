"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

export type State = {
  N: number;
  C: number;
  S: number;
  prizes: number[];
  friends: number[];
  good_pos: number[];
  pos: number;
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
    type: "gira_la_ruota",
    message0: "gira la ruota",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "Gira la ruota di uno spicchio",
    fn: (_ctx: Context, state: State) => {
      state.pos++;
    },
  },
  {
    type: "carote_vinte",
    message0: "premio di %1",
    colour: 20,
    tooltip: "Carote vinte dall'amico numero i",
    fn: (ctx: Context, state: State, v1: number): number => {
      if (v1 < 1) ctx.exit(false, "il parametro deve essere maggiore o uguale di 1");
      if (v1 > state.N) ctx.exit(false, `il parametro deve essere minore o uguale di ${state.N}`);
      if (!Number.isInteger(v1)) ctx.exit(false, "il parametro deve essere un intero");
      return state.prizes[(state.friends[v1 - 1] - state.pos + state.S) % state.S];
    },
  },
  {
    type: "N",
    message0: "N",
    colour: 20,
    tooltip: "Numero di amici di Tip-Tap",
    fn: (_ctx: Context, state: State): number => {
      return state.N;
    },
  },
  {
    type: "C",
    message0: "C",
    colour: 20,
    tooltip: "Numero di carote raccolte da Tip-Tap",
    fn: (_ctx: Context, state: State): number => {
      return state.C;
    },
  },
  {
    type: "S",
    message0: "S",
    colour: 20,
    tooltip: "Numero di spicchi della ruota",
    fn: (_ctx: Context, state: State): number => {
      return state.S;
    },
  },
  {
    type: "ferma_ruota",
    message0: "ferma la ruota",
    previousStatement: null,
    colour: 20,
    tooltip: "Ferma la ruota",
    fn: (ctx: Context, state: State) => {
      const i = state.good_pos.indexOf(state.pos);
      if (i === 0) ctx.exit(true, `hai speso meno di ${state.C} carote, bravo!`);
      else if (i === -1) ctx.exit(false, "non hai abbastanza carote per i premi");
      else ctx.exit(false, "potevi far girare meno la ruota");
    },
  },
] satisfies CustomBlock<State>[];
