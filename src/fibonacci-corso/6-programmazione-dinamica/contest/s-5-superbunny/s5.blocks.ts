"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

export type State = {
  N: number;
  H: number;
  A: number[];
  B: number[];
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
    tooltip: "il numero di ostacoli",
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
    fn: (ctx: Context, state: State, v1: "alto" | "basso", v2: number): number => {
      if (!Number.isInteger(v2)) ctx.exit(false, "il parametro deve essere un intero");
      if (v2 < 1 || v2 > state.N) ctx.exit(false, `la pedana ${v2} non esiste`);
      return state[v1 === "alto" ? "A" : "B"][v2 - 1];
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
    type: "salta",
    message0: "salta in %1",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "salta sulla prossima pedana in alto o in basso",
    fn: async (ctx: Context, state: State, v1: "alto" | "basso") => {
      if (state.posx % 2 === 1) ctx.exit(false, "non hai una pedana davanti a te");
      if (state.posx === 2 * state.N) ctx.exit(false, "non puoi saltare oltre la fine");
      const V = state[v1 === "alto" ? "A" : "B"];
      state.posy = V[state.posx / 2];
      ++state.posx;
      state.time += Math.abs(state.posy - state.H);
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
      if (state.posx % 2 === 0) ctx.exit(false, "non hai un tratto di terreno davanti a te");
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
      if (state.posx < 2 * state.N) ctx.exit(false, "non hai finito il livello");
      if (state.time > state.sol) ctx.exit(false, `potevi metterci meno di ${state.time} tempo`);
      if (state.time < state.sol) ctx.exit(false, "PROBLEMA TECNICO");
      ctx.exit(true, "hai finito il livello nel tempo minimo, complimenti!");
    },
  },
] satisfies CustomBlock<State>[];
