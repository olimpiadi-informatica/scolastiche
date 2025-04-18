"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

export type State = {
  N: number;
  H: number;
  A: number[];
  B: number[];
  VA: number[];
  VB: number[];
  V: number[];
  DA: number[];
  DB: number[];
  D: number[];
  posx: number;
  posy: number;
  time: number;
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
    tooltip: "il numero di coppie di pedane",
    fn: (_ctx: Context, state: State): number => {
      return state.N;
    },
  },
  {
    type: "terreno",
    message0: "terreno",
    colour: 20,
    tooltip: "l'altezza di tutti i tratti di terreno",
    fn: (_ctx: Context, state: State): number => {
      return state.H;
    },
  },
  {
    type: "pedana",
    message0: "pedana %1 %2",
    colour: 20,
    tooltip: "l'altezza della pedana data",
    fn: (ctx: Context, state: State, v1: "alta" | "bassa", v2: number): number => {
      if (v2 < 0 || v2 > state.N + 1) ctx.exit(false, `non c'è una pedana ${v2}`);
      if (v2 === 0 || v2 === state.N + 1) return state.H;
      return state[v1 === "alta" ? "A" : "B"][v2 - 1];
    },
  },
  {
    type: "differenza assoluta",
    message0: "distanza tra %1\ne %2",
    colour: 20,
    tooltip: "la distanza tra due numeri",
    fn: (_ctx: Context, _state: State, v1: number, v2: number): number => {
      return Math.abs(v1 - v2);
    },
  },
  {
    type: "preferenza pedana",
    message0: "preferenza pedana %1 %2",
    colour: 20,
    tooltip: "la preferenza scritta nella pedana data",
    fn: (ctx: Context, state: State, v1: "alta" | "bassa", v2: number): number => {
      if (v2 < 0 || v2 > state.N + 1) ctx.exit(false, `non c'è una pedana ${v2}`);
      if (v2 === 0 || v2 === state.N + 1) return state.V[v2 === 0 ? 0 : 1];
      return state[v1 === "alta" ? "VA" : "VB"][v2 - 1];
    },
  },
  {
    type: "scrivi preferenza pedana",
    message0: "scrivi %1 su pedana %2 %3",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "scrivi una preferenza per la pedana data",
    fn: (ctx: Context, state: State, v1: number, v2: "alta" | "bassa", v3: number) => {
      if (v3 < 0 || v3 > state.N + 1) ctx.exit(false, `non c'è una pedana ${v3}`);
      if (v3 === 0 || v3 === state.N + 1) state.V[v3 === 0 ? 0 : 1] = v1;
      else state[v2 === "alta" ? "VA" : "VB"][v3 - 1] = v1;
    },
  },
  {
    type: "direzione pedana",
    message0: "direzione pedana corrente è %1",
    colour: 20,
    tooltip: "se la direzione decisa per la pedana corrente è quella data",
    fn: (_ctx: Context, state: State, v1: "in alto" | "in basso"): boolean => {
      const x = v1 === "in alto" ? 1 : -1;
      if (state.posx === 0 || state.posx === state.N + 1)
        return state.D[state.posx === 0 ? 0 : 1] === x;
      if (state.posy === state.A[state.posx - 1]) return state.DA[state.posx - 1] === x;
      return state.DB[state.posx - 1] === x;
    },
  },
  {
    type: "scrivi direzione pedana",
    message0: "dopo pedana %1 %2 vai %3",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "decidi una direzione da prendere dopo la pedana data",
    fn: (
      ctx: Context,
      state: State,
      v1: "alta" | "bassa",
      v2: number,
      v3: "in alto" | "in basso",
    ) => {
      if (v2 < 0 || v2 > state.N + 1) ctx.exit(false, `non c'è una pedana ${v2}`);
      const x = v3 === "in alto" ? 1 : -1;
      if (v2 === 0 || v2 === state.N + 1) state.D[v2 === 0 ? 0 : 1] = x;
      else state[v1 === "alta" ? "DA" : "DB"][v2 - 1] = x;
    },
  },
  {
    type: "salta",
    message0: "salta in %1",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "salta sulla prossima pedana in alto o in basso",
    fn: async (ctx: Context, state: State, v1: "alta" | "bassa") => {
      if (state.posx >= state.N) ctx.exit(false, "non hai una pedana davanti a te");
      const V = state[v1 === "alta" ? "A" : "B"];
      state.time += Math.abs(state.posy - V[state.posx]);
      state.posy = V[state.posx];
      ++state.posx;
      await ctx.pause();
    },
  },
  {
    type: "saltaterreno",
    message0: "salta sul terreno",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "salta da una pedana sul prossimo tratto di terreno",
    fn: async (ctx: Context, state: State) => {
      if (state.posx < state.N) ctx.exit(false, "non hai un tratto di terreno davanti a te");
      if (state.posx > state.N) ctx.exit(false, "non puoi saltare oltre la fine");
      state.time += Math.abs(state.posy - state.H);
      state.posy = state.H;
      ++state.posx;
      await ctx.pause();
    },
  },
  {
    type: "termina",
    message0: "termina",
    previousStatement: null,
    colour: 20,
    tooltip: "concludi il livello",
    fn: (ctx: Context, state: State) => {
      if (state.posx < state.N + 1) ctx.exit(false, "non hai finito il livello");
      if (state.time > state.sol) ctx.exit(false, `potevi metterci meno di ${state.time} tempo`);
      if (state.time < state.sol) ctx.exit(false, "PROBLEMA TECNICO");
      ctx.exit(true, "hai finito il livello nel tempo minimo, complimenti!");
    },
  },
] satisfies CustomBlock<State>[];
