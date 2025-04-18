"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

export type State = {
  N: number;
  pos: number;
  dir: number; // 1 for right, -1 for left
  carrot: boolean[];
  light: boolean[];
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
    tooltip: "numero di stanze nel corridoio",
    fn: (_ctx: Context, state: State): number => {
      return state.N;
    },
  },
  {
    type: "buio",
    message0: "stanza a %1 buia",
    colour: 20,
    tooltip: "se la stanza a destra/sinistra è buia",
    fn: (_ctx: Context, state: State, dir: "destra" | "sinistra"): boolean => {
      return !state.light[state.pos + (dir === "destra" ? 1 : -1)];
    },
  },
  {
    type: "muovi",
    message0: "muovi verso %1",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "spostati nella prossima stanza verso destra/sinistra",
    fn: (ctx: Context, state: State, dir: "destra" | "sinistra") => {
      state.dir = dir === "destra" ? 1 : -1;
      state.pos += state.dir;
      if (!state.light[state.pos]) ctx.exit(false, "sei entrato in una stanza buia");
    },
  },
  {
    type: "carota",
    message0: "carota raggiunta",
    colour: 20,
    tooltip: "se c'è una carota nella stanza corrente",
    fn: (_ctx: Context, state: State): boolean => {
      return state.carrot[state.pos];
    },
  },
  {
    type: "raccogli",
    message0: "mangia carota",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "mangia la carota nella stanza corrente",
    fn: (ctx: Context, state: State) => {
      if (!state.carrot[state.pos]) {
        ctx.exit(false, "non c'è una carota nella stanza corrente");
      }
      state.carrot[state.pos] = false;
    },
  },
  {
    type: "termina",
    message0: "termina",
    previousStatement: null,
    colour: 20,
    tooltip: "smetti di cercare le carote",
    fn: (ctx: Context, state: State) => {
      let low = state.pos;
      let high = state.pos;
      while (low > 0 && state.light[low - 1]) low--;
      while (high < state.N - 1 && state.light[high + 1]) high++;
      for (let i = low; i <= high; i++)
        if (state.carrot[i]) ctx.exit(false, `non hai raccolto la carota nella stanza ${i + 1}`);
      ctx.exit(true, "hai finito, complimenti!");
    },
  },
] satisfies CustomBlock<State>[];
