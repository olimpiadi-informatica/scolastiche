"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

export type State = {
  N: number;
  pos: number;
  H: number[];
  C: number[];
  sol: number[];
  carrots: number[];
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
    tooltip: "numero totale di palloni da sistemare",
    fn: (_ctx: Context, state: State): number => {
      return state.N;
    },
  },
  {
    type: "altezza_della_pila",
    message0: "altezza della pila %1",
    colour: 20,
    tooltip: "altezza della pila i-esima",
    fn: (ctx: Context, state: State, i: number): number => {
      if (i < 1) ctx.exit(false, "il parametro deve essere maggiore o uguale di 1");
      if (i > state.N) ctx.exit(false, `il parametro deve essere minore o uguale di ${state.N}`);
      if (!Number.isInteger(i)) ctx.exit(false, "il parametro deve essere un intero");
      state.pos = i - (state.pos > i - 1 ? 0.5 : 1.5);
      return state.H[i - 1];
    },
  },
  {
    type: "aggiungi_carota_alla_pila",
    message0: "aggiungi carota alla pila %1",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "aggiungi una carota alla pila i-esima",
    fn: (ctx: Context, state: State, i: number) => {
      if (i < 1) ctx.exit(false, "il parametro deve essere maggiore o uguale di 1");
      if (i > state.N) ctx.exit(false, `il parametro deve essere minore o uguale di ${state.N}`);
      if (!Number.isInteger(i)) ctx.exit(false, "il parametro deve essere un intero");
      state.pos = i - (state.pos > i - 1 ? 0.5 : 1.5);
      state.C[i - 1] += 1;
      state.carrots[state.carrots.length] = i;
      if (state.C[i - 1] === 3) ctx.exit(false, "hai messo una terza carota");
    },
  },
  {
    type: "termina",
    message0: "termina",
    previousStatement: null,
    colour: 20,
    tooltip: "termina il procedimento",
    fn: (ctx: Context, state: State) => {
      for (let i = 0; i < state.N; i++) {
        if (state.C[i] === state.sol[i]) continue;
        if (state.sol[i] === 0) ctx.exit(false, `non dovevi mettere carote nella pila ${i + 1}`);
        if (state.C[i] === 0 && state.sol[i] === 1)
          ctx.exit(false, `non hai messo la carota nella pila ${i + 1}`);
        if (state.C[i] === 0 && state.sol[i] === 2)
          ctx.exit(false, `non hai messo le due carote nella pila ${i + 1}`);
        if (state.C[i] === 2)
          ctx.exit(false, `non ci voleva la seconda carota nella pila ${i + 1}`);
        if (state.C[i] === 1) ctx.exit(false, `manca la seconda carota nella pila ${i + 1}`);
        ctx.exit(false, "problema di correzione");
      }
      ctx.exit(true, "hai messo le carote bene, complimenti!");
    },
  },
] satisfies CustomBlock<State>[];
