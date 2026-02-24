"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

export type State = {
  N: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
  a: number;
  eat: boolean;
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
    tooltip: "dimensione dei lati della griglia",
    fn: (_ctx: Context, _state: State): number => {
      return _state.N;
    },
  },
  {
    type: "recinto",
    message0: "recinto raggiunto",
    colour: 20,
    tooltip: "se si è di fronte al recinto",
    fn: (_ctx: Context, _state: State): boolean => {
      return _state.x+_state.dx < 0 || _state.x+_state.dx > _state.N || _state.y+_state.dy < 0 || _state.y+_state.dy > _state.N;
    },
  },
  {
    type: "avanza",
    message0: "avanza",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "avanza al prossimo passo della griglia",
    fn: (_ctx: Context, _state: State) => {
      if (_state.x+_state.dx < 0 || _state.x+_state.dx > _state.N || _state.y+_state.dy < 0 || _state.y+_state.dy > _state.N) {
        _state.x += _state.dx * 0.3;
        _state.y += _state.dy * 0.3;
        _ctx.exit(false, "ti sei scontrato con il recinto");
      }
      _state.x += _state.dx;
      _state.y += _state.dy;
    },
  },
  {
    type: "gira",
    message0: "gira a %1",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "gira sul posto verso destra/sinistra",
    fn: (_ctx: Context, _state: State, dir: "destra" | "sinistra") => {
      [_state.dx, _state.dy] = dir === "destra" ? [_state.dy, -_state.dx] : [-_state.dy, _state.dx];
      _state.a += dir === "destra" ? 0.25 : -0.25;
    }
  },
  {
    type: "mangia",
    message0: "mangia carota",
    previousStatement: null,
    colour: 20,
    tooltip: "mangia la carota",
    fn: (ctx: Context, _state: State) => {
      if (_state.x === _state.N && _state.y === _state.N) {
        _state.eat = true;
        ctx.exit(true, "hai mangiato la carota, complimenti!");
      }
      ctx.exit(false, "non c'è nessuna carota da mangiare qui");
    },
  },
] satisfies CustomBlock<State>[];
