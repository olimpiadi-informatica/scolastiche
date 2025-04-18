"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

export type State = {
  N: number;
  pos: number;
  prezzo: number[];
  guadagno: number;
  mela_trasportata: number;
  pos_mela: number[];
  azioni: ("comprato" | "venduto" | null)[];
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
      state.pos = 0;
      state.guadagno = 0;
      state.mela_trasportata = -1;
      state.azioni = new Array(state.N).fill(null);
      state.pos_mela = new Array(state.N);
      for (let i = 0; i < state.N; i++) state.pos_mela[i] = i;
    },
  },
  {
    type: "N",
    message0: "N",
    colour: 20,
    tooltip: "numero di conigli",
    fn: (_ctx: Context, state: State): number => {
      return state.N;
    },
  },
  {
    type: "avanza",
    message0: "avanza",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "procedi al prossimo coniglio",
    fn: (ctx: Context, state: State) => {
      state.pos += 1;
      if (state.mela_trasportata !== -1) state.pos_mela[state.mela_trasportata] = state.pos;
      if (state.pos > state.N) {
        ctx.exit(false, "sei andato troppo oltre la fine dei conigli");
      }
    },
  },
  {
    type: "compra",
    message0: "compra",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "compra una mela dal coniglio corrente",
    fn: (ctx: Context, state: State) => {
      if (state.pos >= state.N) {
        ctx.exit(false, "non puoi comprare mele dopo aver superato i conigli");
        return;
      }
      if (state.mela_trasportata !== -1) {
        ctx.exit(false, "hai già una mela, non puoi comprarne un'altra");
      }
      state.mela_trasportata = state.pos;
      state.guadagno -= state.prezzo[state.pos];
      if (state.azioni[state.pos] === "venduto") {
        state.azioni[state.pos] = null;
      } else {
        state.azioni[state.pos] = "comprato";
      }
    },
  },
  {
    type: "vendi",
    message0: "vendi",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "vendi una mela al coniglio corrente",
    fn: (ctx: Context, state: State) => {
      if (state.pos >= state.N) {
        ctx.exit(false, "non puoi vendere mele dopo aver superato i conigli");
        return;
      }
      if (state.mela_trasportata === -1) {
        ctx.exit(false, "non hai nessuna mela da vendere");
      }
      state.mela_trasportata = -1;
      state.guadagno += state.prezzo[state.pos];

      if (state.azioni[state.pos] === "comprato") {
        state.azioni[state.pos] = null;
      } else {
        state.azioni[state.pos] = "venduto";
      }
    },
  },
  {
    type: "prezzo_corrente",
    message0: "prezzo mela corrente",
    colour: 20,
    tooltip: "prezzo di vendita e acquisto di mele dal coniglio corrente",
    fn: (ctx: Context, state: State): number => {
      if (state.pos >= state.N) {
        ctx.exit(false, "non c'è un coniglio corrente di cui conoscere il prezzo");
      }
      return state.prezzo[state.pos];
    },
  },
  {
    type: "prezzo_prossima",
    message0: "prezzo prossima mela",
    colour: 20,
    tooltip: "prezzo di vendita e acquisto di mele dal prossimo coniglio",
    fn: (ctx: Context, state: State): number => {
      const nextPos = state.pos + 1;
      if (nextPos >= state.N) {
        ctx.exit(false, "non c'è un coniglio successivo di cui conoscere il prezzo");
      }
      return state.prezzo[nextPos];
    },
  },
  {
    type: "hai_mela",
    message0: "hai una mela",
    colour: 20,
    tooltip: "vero se stai trasportando una mela",
    fn: (_ctx: Context, state: State): boolean => {
      return state.mela_trasportata !== -1;
    },
  },
  {
    type: "termina",
    message0: "termina",
    previousStatement: null,
    colour: 20,
    tooltip: "smetti di comprare e vendere mele",
    fn: (ctx: Context, state: State) => {
      let guadagnoMax = 0;
      for (let i = 0; i < state.N - 1; i++) {
        if (state.prezzo[i] < state.prezzo[i + 1]) {
          guadagnoMax += state.prezzo[i + 1] - state.prezzo[i];
        }
      }
      if (state.guadagno !== guadagnoMax) {
        ctx.exit(false, "potevi guadagnare di più!");
      }
      ctx.exit(true, "ottimo lavoro, hai massimizzato il profitto!");
    },
  },
] satisfies CustomBlock<State>[];
