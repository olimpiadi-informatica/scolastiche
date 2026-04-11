"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

export type State = {
  N: number;
  G: number[];
  Ris: number;
  P: number;
  cont: number;
  last: number | undefined;
  posizione_taxi: number;
  boardingBunny: number;
  taxiVisualTranslateX: number;
  taxiInstant: boolean;
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
      _state.P = 0;
      _state.cont = 0;
      _state.posizione_taxi = 0;
      _state.boardingBunny = -1;
      _state.taxiVisualTranslateX = 0;
      _state.taxiInstant = false;
      _state.last = undefined;
    },
  },
  {
    type: "far_partire",
    message0: "fai partire il taxi",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "fai partire il taxi corrente e passa al taxi successivo",
    fn: async (_ctx: Context, _state: State) => {
      _state.cont += 1;
      _state.taxiVisualTranslateX = -500;
      await _ctx.pause();
      _state.taxiInstant = true;
      _state.taxiVisualTranslateX = 700;
      await _ctx.pause();
      _state.taxiInstant = false;
      _state.taxiVisualTranslateX = 0;
      _state.last = undefined;
    },
  },
  {
    type: "far_salire",
    message0: "fai salire un coniglio",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "fai salire sul taxi corrente il primo coniglio della fila",
    fn: async (_ctx: Context, _state: State) => {
      if (_state.last !== undefined && _state.last !== _state.G[_state.P]) {
        _state.last = _state.G[_state.P];
        _state.boardingBunny = _state.P;
        await _ctx.pause();
        _ctx.exit(false, "hai messo diverse famiglie nello stesso taxi");
      }
      if (_state.P >= _state.G.length) {
        _ctx.exit(false, "non ci sono più conigli da far salire");
      }
      _state.last = _state.G[_state.P];
      _state.boardingBunny = _state.P;
      await _ctx.pause();
      _state.P += 1;
      _state.boardingBunny = -1;
    },
  },
  {
    type: "N",
    message0: "N",
    colour: 20,
    tooltip: "il numero di conigli in fila all'inizio",
    fn: (_ctx: Context, _state: State): number => {
      return _state.N;
    },
  },
  {
    type: "colori_uguali",
    message0: "primi due conigli sono parenti",
    colour: 20,
    tooltip: "vero se i primi due conigli appartengono alla stessa famiglia",
    fn: (ctx: Context, _state: State): boolean => {
      if (_state.P >= _state.G.length - 1) {
        ctx.exit(false, "non ci sono due conigli in coda");
      }
      return _state.G[_state.P] === _state.G[_state.P + 1];
    },
  },
  {
    type: "termina",
    message0: "termina",
    previousStatement: null,
    colour: 20,
    tooltip: "smetti di far partire taxi",
    fn: (ctx: Context, _state: State) => {
      if (_state.P < _state.G.length) {
        ctx.exit(false, "non hai fatto salire tutti i conigli");
      }
      if (_state.last !== undefined) {
        ctx.exit(false, "non hai fatto partire l'ultimo taxi");
      }
      if (_state.cont === _state.Ris) {
        ctx.exit(true, "hai finito, complimenti!");
      }
      if (_state.cont < _state.Ris) {
        ctx.exit(false, "ERRORE DI VALUTAZIONE: CONTATTARE GLI ORGANIZZATORI");
      }
      ctx.exit(false, "hai fatto partire troppi taxi");
    },
  },
] satisfies CustomBlock<State>[];
