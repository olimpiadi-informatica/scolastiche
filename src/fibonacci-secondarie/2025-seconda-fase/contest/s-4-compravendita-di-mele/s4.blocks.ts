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
    fn: (_ctx: Context, _state: State) => {
      _state.pos = 0;
      _state.guadagno = 0;
      _state.mela_trasportata = -1;
      _state.azioni = new Array(_state.N).fill(null);
      _state.pos_mela = new Array(_state.N);
      for (let i = 0; i < _state.N; i++) _state.pos_mela[i] = i;
    },
  },
  {
    type: "N",
    message0: "N",
    colour: 20,
    tooltip: "numero di conigli",
    fn: (_ctx: Context, _state: State): number => {
      return _state.N;
    },
  },
  {
    type: "avanza",
    message0: "avanza",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "procedi al prossimo coniglio",
    fn: (_ctx: Context, _state: State) => {
      _state.pos += 1;
      if (_state.mela_trasportata !== -1)
        _state.pos_mela[_state.mela_trasportata] = _state.pos;
      if (_state.pos > _state.N) {
         _ctx.exit(false, "sei andato troppo oltre la fine dei conigli");
      }
    }
  },
  {
    type: "compra",
    message0: "compra",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "compra una mela dal coniglio corrente",
    fn: (_ctx: Context, _state: State) => {
      if (_state.pos >= _state.N) {
         _ctx.exit(false, "non puoi comprare mele dopo aver superato i conigli");
         return;
      }
      if (_state.mela_trasportata !== -1) {
        _ctx.exit(false, "hai già una mela, non puoi comprarne un'altra");
      }
      _state.mela_trasportata = _state.pos;
      _state.guadagno -= _state.prezzo[_state.pos];
      if (_state.azioni[_state.pos] === "venduto") {
        _state.azioni[_state.pos] = null;
      } else {
        _state.azioni[_state.pos] = "comprato";
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
    fn: (_ctx: Context, _state: State) => {
      if (_state.pos >= _state.N) {
         _ctx.exit(false, "non puoi vendere mele dopo aver superato i conigli");
         return;
      }
      if (_state.mela_trasportata === -1) {
        _ctx.exit(false, "non hai nessuna mela da vendere");
      }
      _state.mela_trasportata = -1;
      _state.guadagno += _state.prezzo[_state.pos];

      if (_state.azioni[_state.pos] === "comprato") {
        _state.azioni[_state.pos] = null;
      } else {
        _state.azioni[_state.pos] = "venduto";
      }
    },
  },
  {
    type: "prezzo_corrente",
    message0: "prezzo mela corrente",
    colour: 20,
    tooltip: "prezzo di vendita e acquisto di mele dal coniglio corrente",
    fn: (_ctx: Context, _state: State): number => {
      if (_state.pos >= _state.N) {
        _ctx.exit(false, "non c'è un coniglio corrente di cui conoscere il prezzo");
      }
      return _state.prezzo[_state.pos];
    },
  },
  {
    type: "prezzo_prossima",
    message0: "prezzo prossima mela",
    colour: 20,
    tooltip: "prezzo di vendita e acquisto di mele dal prossimo coniglio",
    fn: (_ctx: Context, _state: State): number => {
      const nextPos = _state.pos + 1;
      if (nextPos >= _state.N) {
        _ctx.exit(false, "non c'è un coniglio successivo di cui conoscere il prezzo");
      }
      return _state.prezzo[nextPos];
    },
  },
  {
    type: "hai_mela",
    message0: "hai una mela",
    colour: 20,
    tooltip: "vero se stai trasportando una mela",
    fn: (_ctx: Context, _state: State): boolean => {
      return _state.mela_trasportata !== -1;
    },
  },
  {
    type: "termina",
    message0: "termina",
    previousStatement: null,
    colour: 20,
    tooltip: "smetti di comprare e vendere mele",
    fn: (ctx: Context, _state: State) => {
      var guadagnoMax = 0;
      for (let i = 0; i < _state.N - 1; i++) {
        if (_state.prezzo[i] < _state.prezzo[i+1]) {
          guadagnoMax += _state.prezzo[i+1] - _state.prezzo[i];
        }
      }
      if (_state.guadagno !== guadagnoMax) {
        ctx.exit(false, "potevi guadagnare di più!");
      }
      ctx.exit(true, "ottimo lavoro, hai massimizzato il profitto!");
    },
  },
] satisfies CustomBlock<State>[];