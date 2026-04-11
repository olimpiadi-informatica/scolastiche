"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

export type State = {
  lunghezza_totale: number;
  chiosco: any;
  N: number;
  H?: number[];
  L: number[];
  P: number[];
  roccia: number;
  posizione: number;
  speso: number;
  carote: number; // Nota: ora rappresenta i "panini" posseduti
  ans: number;
};

export default [
  {
    type: "start",
    message0: "inizia qui",
    nextStatement: null,
    colour: 20,
    tooltip: "L'esecuzione inizia da qui",
    maxInstances: 1,
    fn: (_ctx: Context, _state: State) => {
      _state.speso = 0;
      _state.carote = 0;
      _state.roccia = 1;
      _state.posizione = 1;
      let sum = 1;
      for (let i = 1; i <= _state.N; i++) {
        sum += _state.L[i];
      }
      _state.lunghezza_totale = sum;
    },
  },
  {
    type: "N",
    message0: "N",
    colour: 20,
    tooltip: "il numero di tratti di percorso",
    fn: (_ctx: Context, _state: State): number => {
      return _state.N;
    },
  },
  {
    type: "posizione",
    message0: "posizione di Bunny",
    colour: 20,
    tooltip: "il numero del chiosco in cui ti trovi",
    fn: (_ctx: Context, _state: State): number => {
      return _state.posizione;
    },
  },
  {
    type: "carote_nello_zaino",
    message0: "panini nello zaino",
    colour: 20,
    tooltip: "quanti panini ci sono attualmente nello zaino",
    fn: (_ctx: Context, _state: State): number => {
      return _state.carote;
    },
  },
  {
    type: "avanza_mangia",
    message0: "avanza al prossimo chiosco",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "avanza fino al prossimo chiosco consumando i panini necessari",
    fn: (_ctx: Context, _state: State) => {
      if (_state.carote < _state.L[_state.posizione]) {
        _ctx.exit(false, "non hai abbastanza panini per raggiungere il prossimo chiosco!");
      }
      for (let i = 0; i < _state.L[_state.posizione]; i++) {
        _state.carote -= 1;
        _state.roccia += 1;
      }
      _state.posizione += 1;
    },
  },
  {
    type: "compra_carote",
    message0: "compra %1 panini",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "compra x panini dal chiosco in cui ti trovi",
    fn: (_ctx: Context, _state: State, x: number) => {
      if (x < 0) {
        _ctx.exit(false, "non puoi comprare quantità negative di panini!");
      }
      _state.carote += x;
      _state.speso += x * _state.P[_state.posizione];
    },
  },
  {
    type: "costo_chiosco",
    message0: "costo chiosco %1 ",
    colour: 20,
    tooltip: "il costo (in carote) di un singolo panino al chiosco i",
    fn: (_ctx: Context, _state: State, i: number): number => {
      if (i <= 0 || i > _state.N) {
        _ctx.exit(false, "indice non valido!");
      }
      return _state.P[i];
    },
  },
  {
    type: "lunghezza_tratto",
    message0: "fatica tratto %1 ",
    colour: 20,
    tooltip:
      "la fatica del tratto i, cioè quanti panini servono per andare dal chiosco i al chiosco i+1",
    fn: (_ctx: Context, _state: State, i: number): number => {
      if (i <= 0 || i > _state.N) {
        _ctx.exit(false, "indice non valido!");
      }
      return _state.L[i];
    },
  },
  {
    type: "termina",
    message0: "termina",
    previousStatement: null,
    colour: 20,
    tooltip: "arriva al traguardo",
    fn: (ctx: Context, _state: State) => {
      if (_state.roccia < _state.lunghezza_totale) {
        ctx.exit(false, "non hai raggiunto il traguardo");
      }
      if (_state.speso > _state.ans) {
        ctx.exit(false, "potevi spendere meno carote");
      }
      if (_state.speso < _state.ans) {
        ctx.exit(false, "ERRORE DI VALUTAZIONE: CONTATTARE GLI ORGANIZZATORI");
      }
      ctx.exit(true, "hai finito il percorso spendendo poco, complimenti!");
    },
  },
] satisfies CustomBlock<State>[];
