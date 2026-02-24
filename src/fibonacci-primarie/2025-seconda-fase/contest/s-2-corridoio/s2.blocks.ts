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
    fn: (_ctx: Context, _state: State): number => {
      return _state.N;
    },
  },
  {
    type: "buio",
    message0: "stanza a %1 buia",
    colour: 20,
    tooltip: "se la stanza a destra/sinistra è buia",
    fn: (_ctx: Context, _state: State, dir: "destra" | "sinistra"): boolean => {
      return !_state.light[_state.pos + (dir === "destra" ? 1 : -1)];
    },
  },
  {
    type: "muovi",
    message0: "muovi verso %1",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "spostati nella prossima stanza verso destra/sinistra",
    fn: (_ctx: Context, _state: State, dir: "destra" | "sinistra") => {
      _state.dir = dir === "destra" ? 1 : -1;
      _state.pos += _state.dir;
      if (!_state.light[_state.pos]) _ctx.exit(false, "sei entrato in una stanza buia");
    },
  },
  {
    type: "carota",
    message0: "carota raggiunta",
    colour: 20,
    tooltip: "se c'è una carota nella stanza corrente",
    fn: (_ctx: Context, _state: State): boolean => {
      return _state.carrot[_state.pos];
    },
  },
  {
    type: "raccogli",
    message0: "mangia carota",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "mangia la carota nella stanza corrente",
    fn: (_ctx: Context, _state: State) => {
      if (!_state.carrot[_state.pos]) {
        _ctx.exit(false, "non c'è una carota nella stanza corrente");
      }
      _state.carrot[_state.pos] = false;
    },
  },
  {
    type: "termina",
    message0: "termina",
    previousStatement: null,
    colour: 20,
    tooltip: "smetti di cercare le carote",
    fn: (ctx: Context, _state: State) => {
      var low = _state.pos;
      var high = _state.pos;
      while (low > 0 && _state.light[low - 1]) low--;
      while (high < _state.N - 1 && _state.light[high + 1]) high++;
      for (let i = low; i <= high; i++)
        if (_state.carrot[i]) ctx.exit(false, `non hai raccolto la carota nella stanza ${i + 1}`);
      ctx.exit(true, "hai finito, complimenti!");
    },
  },
] satisfies CustomBlock<State>[];
