"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

export type State = {
  N: number;
  H: number[];
  energy: number;
  time: number;
  posx: number;
  rot: number;
  scale: number;
  charging: boolean;
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
    tooltip: "numero di colonnine lungo il percorso",
    fn: (_ctx: Context, state: State): number => {
      return state.N;
    },
  },
  {
    type: "energia",
    message0: "energia",
    colour: 20,
    tooltip: "energia rimasta",
    fn: (_ctx: Context, state: State): number => {
      return state.energy;
    },
  },
  {
    type: "altitudine_della_colonnina",
    message0: "altitudine della colonnina %1",
    colour: 20,
    tooltip: "altitudine della colonnina i-esima",
    fn: (ctx: Context, state: State, v1: number): number => {
      if (v1 < 1) ctx.exit(false, "il parametro deve essere maggiore o uguale di 1");
      if (v1 > state.N) ctx.exit(false, `il parametro deve essere minore o uguale di ${state.N}`);
      if (!Number.isInteger(v1)) ctx.exit(false, "il parametro deve essere un intero");
      return state.H[v1 - 1];
    },
  },
  {
    type: "avanza",
    message0: "avanza",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "avanza fino alla prossima colonnina",
    fn: async (ctx: Context, state: State) => {
      state.charging = false;
      if (state.posx === state.N - 1) ctx.exit(false, "sei già arrivato alla fine");
      const delta = state.H[state.posx + 1] - state.H[state.posx];
      state.rot = Math.atan2(state.scale * delta, 1);
      await ctx.pause();
      if (state.energy >= delta) {
        state.posx += 1;
        state.energy -= delta;
      } else {
        state.posx += state.energy / delta;
        state.energy = 0;
        ctx.exit(false, "hai finito l'energia prima di arrivare");
      }
      await ctx.pause();
      if (state.posx < state.N - 1) {
        state.rot =
          (Math.atan2(state.scale * (state.H[state.posx + 1] - state.H[state.posx]), 1) +
            Math.atan2(state.scale * (state.H[state.posx] - state.H[state.posx - 1]), 1)) /
          2;
      } else {
        state.rot = 0;
      }
    },
  },
  {
    type: "ricarica",
    message0: "ricarica per %1 minuti",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "ricarica per x minuti",
    fn: (ctx: Context, state: State, i: number) => {
      if (i < 0) ctx.exit(false, "il parametro deve essere maggiore o uguale di 0");
      if (i > 1000000) ctx.exit(false, "il parametro deve essere minore o uguale di 1000000");
      if (!Number.isInteger(i)) ctx.exit(false, "il parametro deve essere un intero");
      state.time += i;
      state.energy += i;
      state.charging = true;
    },
  },
  {
    type: "termina",
    message0: "termina",
    previousStatement: null,
    colour: 20,
    tooltip: "termina il procedimento",
    fn: (ctx: Context, state: State) => {
      state.charging = false;
      if (state.posx < state.N - 1) ctx.exit(false, "non sei arrivato alla fine");
      if (state.time > state.sol) ctx.exit(false, "potevi aspettare meno alle colonnine");
      ctx.exit(true, "sei arrivato in fretta, complimenti!");
    },
  },
] satisfies CustomBlock<State>[];
