"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

export type State = {
  N: number; // numero di pareti
  M: number; // numero di istruzioni
  instr: string[]; // istruzioni
  cols: string[]; // colori delle pareti
  solution: string[]; // soluzione
  pos: number; // posizione corrente
  i: number; // indice corrente
  must_optimize: boolean; // se l'ottimizzazione è obbligatoria
};

function controlla_posizione(ctx: Context, state: State) {
  if (state.pos >= state.N) {
    ctx.exit(false, "sei andato oltre l'ultima parete");
  }
}
function controlla_indice(ctx: Context, state: State) {
  if (state.i >= state.M) {
    ctx.exit(false, "sei andato oltre l'ultima istruzione");
  }
}

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
    tooltip: "il numero di pareti",
    fn: (_ctx: Context, state: State): number => {
      return state.N;
    },
  },
  {
    type: "M",
    message0: "M",
    colour: 20,
    tooltip: "il numero di istruzioni",
    fn: (_ctx: Context, state: State): number => {
      return state.M;
    },
  },
  {
    type: "istruzione_corrente",
    message0: "l'istruzione attuale è %1",
    colour: 20,
    tooltip: "CAMBIAMI",
    fn: (ctx: Context, state: State, v1$: "avanza" | "salta"): boolean => {
      const v1 = { avanza: "A", salta: "S" }[v1$];
      controlla_indice(ctx, state);
      return state.instr[state.i] === v1;
    },
  },
  {
    type: "colore_parete",
    message0: "la parete corrente è %1",
    colour: 20,
    tooltip: "controlla il colore della parete davanti ad Allie",
    fn: (ctx: Context, state: State, v1$: "bianca" | "colorata"): boolean => {
      const v1 = { bianca: "W", colorata: "B" }[v1$];
      controlla_posizione(ctx, state);
      return state.cols[state.pos] === v1;
    },
  },
  {
    type: "colora",
    message0: "colora la parete",
    colour: 20,
    previousStatement: null,
    nextStatement: null,
    tooltip: "colora la parete davanti ad Allie",
    fn: (ctx: Context, state: State) => {
      controlla_posizione(ctx, state);
      state.cols[state.pos] = "B";
      if (state.cols[state.pos] !== state.solution[state.pos])
        ctx.exit(false, "non dovevi colorare questa parete");
    },
  },
  {
    type: "avanza",
    message0: "avanza",
    colour: 20,
    previousStatement: null,
    nextStatement: null,
    tooltip: "passa alla parete successiva",
    fn: (ctx: Context, state: State) => {
      controlla_posizione(ctx, state);
      state.pos += 1;
    },
  },
  {
    type: "prossima_istruzione",
    message0: "prossima istruzione",
    colour: 20,
    previousStatement: null,
    nextStatement: null,
    tooltip: "passa all'istruzione successiva",
    fn: (ctx: Context, state: State) => {
      controlla_indice(ctx, state);
      state.i += 1;
    },
  },
  {
    type: "torna_all'inizio",
    message0: "torna all'inizio",
    colour: 20,
    previousStatement: null,
    nextStatement: null,
    tooltip: "torna alla prima parete e alla prima istruzione",
    fn: (ctx: Context, state: State) => {
      if (state.must_optimize) {
        ctx.exit(false, "non puoi tornare all'inizio in questo livello");
      }
      state.pos = 0;
      state.i = 0;
    },
  },
  {
    type: "termina",
    message0: "termina",
    previousStatement: null,
    colour: 20,
    tooltip: "termina il procedimento",
    fn: (ctx: Context, state: State) => {
      for (let i = 0; i < state.N; i++)
        if (state.cols[i] !== state.solution[i])
          ctx.exit(false, `non hai colorato la parete ${i + 1} come voleva Carol`);
      ctx.exit(true, "hai colorato bene le pareti, complimenti!");
    },
  },
] satisfies CustomBlock<State>[];
