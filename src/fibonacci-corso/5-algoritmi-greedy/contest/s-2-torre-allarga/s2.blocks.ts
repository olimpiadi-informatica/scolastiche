"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

export type State = {
  N: number;
  pos: number;
  rot: boolean[];
  altezze: number[];
  larghezze: number[];
  W: number;
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
    fn: (ctx: Context, state: State, v1: number): number => {
      if (v1 < 1) ctx.exit(false, "il parametro deve essere maggiore o uguale di 1");
      if (v1 > state.N) ctx.exit(false, `il parametro deve essere minore o uguale di ${state.N}`);
      if (!Number.isInteger(v1)) ctx.exit(false, "il parametro deve essere un intero");
      state.pos = v1 - 1;
      return state.rot[v1 - 1] ? state.larghezze[v1 - 1] : state.altezze[v1 - 1];
    },
  },
  {
    type: "larghezza_della_scatola",
    message0: "larghezza della scatola %1",
    colour: 20,
    tooltip: "Larghezza della scatola i-esima",
    fn: (ctx: Context, state: State, v1: number): number => {
      if (v1 < 1) ctx.exit(false, "il parametro deve essere maggiore o uguale di 1");
      if (v1 > state.N) ctx.exit(false, `il parametro deve essere minore o uguale di ${state.N}`);
      if (!Number.isInteger(v1)) ctx.exit(false, "il parametro deve essere un intero");
      state.pos = v1 - 1;
      return state.rot[v1 - 1] ? state.altezze[v1 - 1] : state.larghezze[v1 - 1];
    },
  },
  {
    type: "ruota_la_scatola",
    message0: "ruota la scatola %1",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "Ruota la scatola i-esima",
    fn: (ctx: Context, state: State, v1: number) => {
      if (v1 < 1) ctx.exit(false, "il parametro deve essere maggiore o uguale di 1");
      if (v1 > state.N) ctx.exit(false, `il parametro deve essere minore o uguale di ${state.N}`);
      if (!Number.isInteger(v1)) ctx.exit(false, "il parametro deve essere un intero");

      state.rot[v1 - 1] = !state.rot[v1 - 1];
      state.pos = v1 - 1;
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
    type: "riporta_altezza_e_larghezza",
    message0: "riporta altezza %1 e larghezza %2",
    previousStatement: null,
    colour: 20,
    tooltip: "Riporta l'altezza e larghezza della torre e termina",
    fn: (ctx: Context, state: State, v1: number, v2: number) => {
      let H = 0;
      let W = 10;
      for (let i = 0; i < state.N; i++) {
        H += state.rot[i] ? state.larghezze[i] : state.altezze[i];
        W = Math.min(W, state.rot[i] ? state.altezze[i] : state.larghezze[i]);
      }
      if (H !== v1) ctx.exit(false, "hai sbagliato a riportare l'altezza");
      if (W !== v2) ctx.exit(false, "hai sbagliato a riportare la larghezza");
      if (state.W !== v2) ctx.exit(false, "potevi allargare di più la torre");
      ctx.exit(true, "hai allargato al massimo la torre, bravo!");
    },
  },
] satisfies CustomBlock<State>[];
