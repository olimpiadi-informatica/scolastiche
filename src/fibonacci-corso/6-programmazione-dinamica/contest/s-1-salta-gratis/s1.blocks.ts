"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

export type State = {
  N: number;
  pos: number;
  cost: number[];
  start: number;
  count: number;
  sol: number;
  flight: number;
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
    tooltip: "numero di rocce del percorso",
    fn: (_ctx: Context, state: State): number => {
      return state.N;
    },
  },
  {
    type: "posizione_di_Carol",
    message0: "posizione Carol",
    colour: 20,
    tooltip: "la posizione corrente di Carol",
    fn: (_ctx: Context, state: State): number => {
      return state.pos + 1;
    },
  },
  {
    type: "costo_roccia",
    message0: "costo roccia %1",
    colour: 20,
    tooltip: "costo in carote per atterrare sulla i-esima roccia del percorso",
    fn: (ctx: Context, state: State, v1: number): number => {
      if (v1 < 1) ctx.exit(false, "il parametro deve essere maggiore o uguale di 1");
      if (!Number.isInteger(v1)) ctx.exit(false, "il parametro deve essere un intero");
      if (v1 < 1 || v1 > state.N) ctx.exit(false, `la roccia ${v1} non esiste`);
      return state.cost[v1 - 1];
    },
  },
  {
    type: "comincia",
    message0: "comincia la corsa",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "comincia la corsa dalla posizione di partenza",
    fn: async (ctx: Context, state: State) => {
      if (state.start === 1) ctx.exit(false, "hai già cominciato la gara");
      if (state.pos > -1) {
        state.pos = -1;
        await ctx.pause();
      }
      state.start = -1;
      await ctx.pause();
      state.start = 1;
    },
  },
  {
    type: "avanza",
    message0: "avanza",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "avanza alla roccia successiva",
    fn: (ctx: Context, state: State) => {
      if (state.start === 0) ctx.exit(false, "devi prima cominciare la corsa");
      state.pos += 1;
      if (state.pos > state.N + 1) ctx.exit(false, "hai superato troppo la fine del percorso");
      if (state.pos < state.N) state.count += state.cost[state.pos];
    },
  },
  {
    type: "salta",
    message0: "salta",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "salta oltre alla prossima roccia",
    fn: async (ctx: Context, state: State) => {
      if (state.start === 0) ctx.exit(false, "devi prima cominciare la corsa");
      state.pos += 1;
      state.flight = 1;
      await ctx.pause();
      state.pos += 1;
      state.flight = 0;
      if (state.pos > state.N + 1) ctx.exit(false, "hai superato troppo la fine del percorso");
      if (state.pos < state.N) state.count += state.cost[state.pos];
    },
  },
  {
    type: "termina",
    message0: "termina",
    previousStatement: null,
    colour: 20,
    tooltip: "finisci la corsa e vai a pagare le penalità",
    fn: (ctx: Context, state: State) => {
      if (state.start === 0) ctx.exit(false, "non hai neanche cominciato la corsa");
      if (state.pos < state.N - 1) ctx.exit(false, "non hai raggiunto la bandierina");
      if (state.count > 0) ctx.exit(false, "potevi spendere meno carote");
      ctx.exit(true, "hai finito la corsa senza spendere carote, complimenti!");
    },
  },
] satisfies CustomBlock<State>[];
