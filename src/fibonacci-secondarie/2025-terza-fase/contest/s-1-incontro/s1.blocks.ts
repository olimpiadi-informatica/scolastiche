"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

export type State = {
  N: number;
  B: number;
  C: number;
  cont: number;
  ris: number;
};

export default [
  {
    type: "start",
    message0: "inizia qui",
    nextStatement: null,
    colour: 20,
    tooltip: "L'esecuzione inizia da qui",
    maxInstances: 1,
    fn: (_ctx: Context, state: State) => {
      state.cont = 0;
      state.ris = Math.abs(state.B - state.C) - 1;
    },
  },
  {
    type: "lascia_passare",
    message0: "%1 lascia passare avanti",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "fai passare davanti ad Allie/Carol il coniglio subito dietro di lei",
    fn: (ctx: Context, state: State, coniglio: "Allie" | "Carol") => {
      if (coniglio === "Allie") {
        if (state.B === state.N) {
          ctx.exit(false, "non c'è nessuno dietro a Allie");
        }
        state.B += 1;
        if (state.B === state.C) state.C -= 1;
      } else {
        if (state.C === state.N) {
          ctx.exit(false, "non c'è nessuno dietro a Carol");
        }
        state.C += 1;
        if (state.B === state.C) state.B -= 1;
      }
      state.cont += 1;
    },
  },
  {
    type: "N",
    message0: "N",
    colour: 20,
    tooltip: "il numero di conigli in fila",
    fn: (_ctx: Context, state: State): number => {
      return state.N;
    },
  },
  {
    type: "posizione",
    message0: "posizione di %1 ",
    colour: 20,
    tooltip: "la posizione di Allie/Carol",
    fn: (_ctx: Context, state: State, coniglio: "Allie" | "Carol"): number => {
      return coniglio === "Allie" ? state.B : state.C;
    },
  },
  {
    type: "vicine",
    message0: "Allie è vicino a Carol",
    colour: 20,
    tooltip: "vero se Allie e Carol sono in posizioni consecutive",
    fn: (_ctx: Context, state: State): boolean => {
      return Math.abs(state.B - state.C) === 1;
    },
  },
  {
    type: "termina",
    message0: "termina",
    previousStatement: null,
    colour: 20,
    tooltip: "smetti di far passare avanti conigli e comincia a chiacchierare",
    fn: (ctx: Context, state: State) => {
      if (Math.abs(state.B - state.C) !== 1) {
        ctx.exit(false, "Allie e Carol non sono vicine");
      }
      if (state.cont > state.ris) {
        ctx.exit(false, "hai fatto passare avanti troppi conigli");
      }
      if (state.cont < state.ris) {
        ctx.exit(false, "ERRORE DI VALUTAZIONE: CONTATTARE GLI ORGANIZZATORI");
      }
      ctx.exit(true, "hai finito, complimenti!");
    },
  },
] satisfies CustomBlock<State>[];
