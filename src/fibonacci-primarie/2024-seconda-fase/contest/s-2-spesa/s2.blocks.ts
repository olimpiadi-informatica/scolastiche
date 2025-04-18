"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

export type State = {
  N: number;
  K: number;
  pos: number;
  queue: number[];
  wealth: number[];
  carrots: number;
  cost: number;
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
    tooltip: "numero di conigli in fila",
    fn: (_ctx: Context, state: State): number => {
      return state.N;
    },
  },
  {
    type: "K",
    message0: "K",
    colour: 20,
    tooltip: "numero di carote in ogni pacco",
    fn: (_ctx: Context, state: State): number => {
      return state.K;
    },
  },
  {
    type: "coniglio_adulto",
    message0: "coniglio adulto",
    colour: 20,
    tooltip: "se il prossimo coniglio in fila è adulto",
    fn: (_ctx: Context, state: State): boolean => {
      return state.queue[state.pos] === 2;
    },
  },
  {
    type: "carote_rimaste",
    message0: "carote rimaste",
    colour: 20,
    tooltip: "quante carote sono rimaste al momento a Carol",
    fn: (_ctx: Context, state: State): number => {
      return state.carrots;
    },
  },
  {
    type: "dai_carote",
    message0: "dai %1 carote",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "consegna carote al prossimo coniglio in fila",
    fn: (ctx: Context, state: State, i: number) => {
      if (i < 0) ctx.exit(false, "il parametro deve essere maggiore o uguale di 0");
      if (!Number.isInteger(i)) ctx.exit(false, "il parametro deve essere un intero");
      if (state.pos >= state.N) ctx.exit(false, "non ci sono più conigli in fila");
      if (i > state.carrots) ctx.exit(false, `non hai ${i} carote da dare`);
      state.carrots -= i;
      state.wealth[state.pos] += i;
      state.pos++;
      if (state.queue[state.pos - 1] !== i)
        ctx.exit(false, `hai dato ${i} carote ma dovevi darne ${state.queue[state.pos - 1]}`);
    },
  },
  {
    type: "compra_pacco_di_carote",
    message0: "compra pacco di carote",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "acquista un pacco di carote per 1 euro",
    fn: (_ctx: Context, state: State) => {
      state.carrots += state.K;
      state.cost++;
    },
  },
  {
    type: "termina",
    message0: "termina",
    previousStatement: null,
    colour: 20,
    tooltip: "smetti di consegnare carote",
    fn: (ctx: Context, state: State) => {
      if (state.pos < state.N) ctx.exit(false, "non hai finito la fila");
      if (state.cost > state.sol) ctx.exit(false, "potevi spendere meno soldi");
      ctx.exit(true, "hai distribuito le carote bene, complimenti!");
    },
  },
] satisfies CustomBlock<State>[];
