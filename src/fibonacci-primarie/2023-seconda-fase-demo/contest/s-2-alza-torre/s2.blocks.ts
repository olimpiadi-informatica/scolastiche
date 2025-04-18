"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

export type State = {
  N: number;
  altezze: number[];
  larghezze: number[];
  rot: boolean[];
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
    type: "altezza_della_scatola",
    message0: "altezza della scatola %1",
    colour: 20,
    tooltip: "Altezza della scatola i-esima",
    fn: (ctx: Context, state: State, i: number): number => {
      if (i < 1) ctx.exit(false, "il parametro deve essere maggiore o uguale di 1");
      if (i > state.N) ctx.exit(false, `il parametro deve essere minore o uguale di ${state.N}`);
      if (!Number.isInteger(i)) ctx.exit(false, "il parametro deve essere un intero");
      state.pos = i - 1;
      return state.rot[i - 1] ? state.larghezze[i - 1] : state.altezze[i - 1];
    },
  },
  {
    type: "larghezza_della_scatola",
    message0: "larghezza della scatola %1",
    colour: 20,
    tooltip: "Larghezza della scatola i-esima",
    fn: (ctx: Context, state: State, i: number): number => {
      if (i < 1) ctx.exit(false, "il parametro deve essere maggiore o uguale di 1");
      if (i > state.N) ctx.exit(false, `il parametro deve essere minore o uguale di ${state.N}`);
      if (!Number.isInteger(i)) ctx.exit(false, "il parametro deve essere un intero");

      state.pos = i - 1;
      return state.rot[i - 1] ? state.altezze[i - 1] : state.larghezze[i - 1];
    },
  },
  {
    type: "ruota_la_scatola",
    message0: "ruota la scatola %1",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "Ruota la scatola i-esima",
    fn: (ctx: Context, state: State, i: number) => {
      if (i < 1) ctx.exit(false, "il parametro deve essere maggiore o uguale di 1");
      if (i > state.N) ctx.exit(false, `il parametro deve essere minore o uguale di ${state.N}`);
      if (!Number.isInteger(i)) ctx.exit(false, "il parametro deve essere un intero");

      state.rot[i - 1] = !state.rot[i - 1];
      state.pos = i - 1;
    },
  },
  {
    type: "N",
    message0: "N",
    colour: 20,
    tooltip: "Numero di scatole",
    fn: (_ctx: Context, state: State): number => {
      return state.N;
    },
  },
  {
    type: "riporta_altezza",
    message0: "riporta altezza %1",
    previousStatement: null,
    colour: 20,
    tooltip: "Riporta l'altezza della torre e termina",
    fn: (ctx: Context, state: State, t: number) => {
      let sum = 0;
      for (let i = 0; i < state.N; i++) {
        if (state.larghezze[i] !== state.altezze[i])
          if (state.rot[i] !== state.altezze[i] < state.larghezze[i])
            ctx.exit(false, `la scatola ${i + 1} non è ruotata bene`);
        sum += state.altezze[i] > state.larghezze[i] ? state.altezze[i] : state.larghezze[i];
      }
      if (sum === t) ctx.exit(true, "hai fatto la torre più alta, bravo!");
      else ctx.exit(false, "hai sbagliato a riportare l'altezza");
    },
  },
] satisfies CustomBlock<State>[];
