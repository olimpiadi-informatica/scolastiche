"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

export type State = {
  N: number;
  pos: number;
  queue: string[];
  food_types: Record<string, string>;
  food_colors: Record<string, string>;
  trash: boolean;
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
    tooltip: "numero di cibi in fila",
    fn: (_ctx: Context, state: State): number => {
      return state.N;
    },
  },
  {
    type: "prossimo_cibo",
    message0: "prossimo cibo",
    colour: 20,
    tooltip: "il prossimo cibo in fila",
    fn: (ctx: Context, state: State): string => {
      return state.pos < state.N ? state.queue[state.pos] : ctx.exit(false, "il cibo è finito");
    },
  },
  {
    type: "è_una_verdura",
    message0: "%1 è una verdura",
    colour: 20,
    tooltip: "se il cibo dato è una verdura",
    fn: (ctx: Context, state: State, v1: string): boolean => {
      const food = v1.split(" ")[0];
      if (food in state.food_types) return state.food_types[food] === "verdura";
      ctx.exit(false, `non conosco il cibo ${v1}`);
    },
  },
  {
    type: "è_giallo",
    message0: "%1 è giallo",
    colour: 20,
    tooltip: "se il cibo dato è giallo",
    fn: (ctx: Context, state: State, v1: string): boolean => {
      const food = v1.split(" ")[0];
      if (food in state.food_colors) return state.food_colors[food] === "giallo";
      ctx.exit(false, `non conosco il cibo ${v1}`);
    },
  },
  {
    type: "cuoci",
    message0: "cuoci %1",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "cuoci il cibo dato",
    fn: (ctx: Context, state: State, v1: string) => {
      if (state.pos >= state.N) ctx.exit(false, "hai finito il cibo");
      if (state.queue[state.pos] !== v1) ctx.exit(false, "questo non è il prossimo cibo");
      if (state.queue[state.pos].split(" ").length > 1)
        ctx.exit(false, "stai cuocendo un cibo già cotto");
      state.queue[state.pos] += " cotta";
      const food = v1.split(" ")[0];
      if (state.food_colors[food] === "giallo")
        ctx.exit(false, "Allie ha visto il colore giallo, se ne deve andare dal pranzo");
      if (state.food_types[v1] === "frutta") ctx.exit(false, "hai perso tempo a cuocere la frutta");
    },
  },
  {
    type: "mangia",
    message0: "mangia %1",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "mangia il cibo dato",
    fn: (ctx: Context, state: State, v1: string) => {
      if (state.pos >= state.N) ctx.exit(false, "hai finito il cibo");
      if (state.queue[state.pos] !== v1) ctx.exit(false, "questo non è il prossimo cibo");
      const food = state.queue[state.pos].split(" ");
      if (!(food[0] in state.food_types)) ctx.exit(false, `non conosco il cibo ${food[0]}`);
      state.pos += 1;
      state.trash = false;
      if (state.food_colors[food[0]] === "giallo")
        ctx.exit(false, "Allie ha visto il colore giallo, se ne deve andare dal pranzo");
      if (state.food_types[food[0]] === "verdura" && food.length === 1)
        ctx.exit(false, "a Allie non piace la verdura cruda");
      if (state.food_types[food[0]] === "frutta") ctx.exit(false, "a Allie non piace la frutta");
    },
  },
  {
    type: "butta",
    message0: "butta %1",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "butta via il cibo dato",
    fn: (ctx: Context, state: State, v1: string) => {
      if (state.pos >= state.N) ctx.exit(false, "hai finito il cibo");
      if (state.queue[state.pos] !== v1) ctx.exit(false, "questo non è il prossimo cibo");
      const food = state.queue[state.pos].split(" ");
      if (!(food[0] in state.food_types)) ctx.exit(false, `non conosco il cibo ${food[0]}`);
      state.pos += 1;
      state.trash = true;
      if (state.food_colors[food[0]] === "giallo")
        ctx.exit(false, "Allie ha visto il colore giallo, se ne deve andare dal pranzo");
      if (state.food_types[food[0]] === "verdura")
        ctx.exit(false, "a Allie piace la verdura, non dovevi buttarla");
    },
  },
  {
    type: "termina",
    message0: "termina",
    previousStatement: null,
    colour: 20,
    tooltip: "smetti di mangiare",
    fn: (ctx: Context, state: State) => {
      if (state.pos < state.N && state.food_colors[state.queue[state.pos]] !== "giallo")
        ctx.exit(false, "potevi mangiare altro cibo");
      ctx.exit(true, "hai mangiato tutto il cibo che potevi, complimenti!");
    },
  },
] satisfies CustomBlock<State>[];
