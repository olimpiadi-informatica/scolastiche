"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

import type { State } from "./s3.blocks";

export default [
  {
    type: "start",
    message0: "start here",
    nextStatement: null,
    colour: 20,
    tooltip: "Execution starts here",
    maxInstances: 1,
    fn: (_ctx: Context, _state: State) => {},
  },
  {
    type: "prossimo_cibo",
    message0: "next food",
    colour: 20,
    tooltip: "the next food in line",
    fn: (ctx: Context, state: State): string => {
      return state.pos < state.N
        ? state.queue[state.pos]
        : ctx.exit(false, "there is no food left");
    },
  },
  {
    type: "è_una_verdura",
    message0: "%1 is a vegetable",
    colour: 20,
    tooltip: "whether the given food is a vegetable",
    fn: (ctx: Context, state: State, v1: string): boolean => {
      const food = v1.split(" ")[0];
      if (food in state.food_types) return state.food_types[food] === "verdura";
      ctx.exit(false, `unknown food ${v1}`);
    },
  },
  {
    type: "è_giallo",
    message0: "%1 is yellow",
    colour: 20,
    tooltip: "whether the given food is yellow",
    fn: (ctx: Context, state: State, v1: string): boolean => {
      const food = v1.split(" ")[0];
      if (food in state.food_colors) return state.food_colors[food] === "giallo";
      ctx.exit(false, `unknown food ${v1}`);
    },
  },
  {
    type: "cuoci",
    message0: "cook %1",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "cook the given food",
    fn: (ctx: Context, state: State, v1: string) => {
      if (state.pos >= state.N) ctx.exit(false, "there is no food left");
      if (state.queue[state.pos] !== v1) ctx.exit(false, "this is not the next food");
      if (state.queue[state.pos].split(" ").length > 1)
        ctx.exit(false, "this food is already cooked");
      state.queue[state.pos] += " cotta";
    },
  },
  {
    type: "mangia",
    message0: "eat %1",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "eat the given food",
    fn: (ctx: Context, state: State, v1: string) => {
      if (state.pos >= state.N) ctx.exit(false, "there is no food left");
      if (state.queue[state.pos] !== v1) ctx.exit(false, "this is not the next food");
      const food = state.queue[state.pos].split(" ");
      if (!(food[0] in state.food_types)) ctx.exit(false, `unknown food ${food[0]}`);
      state.pos += 1;
      state.trash = false;
      if (state.food_colors[food[0]] === "giallo")
        ctx.exit(false, "Allie is allergic to yellow foods");
      if (state.food_types[food[0]] === "verdura" && food.length === 1)
        ctx.exit(false, "Allie doesn't like raw vegetables");
      if (state.food_types[food[0]] === "frutta") ctx.exit(false, "Allie doesn't like fruit");
    },
  },
  {
    type: "butta",
    message0: "throw away %1",
    previousStatement: null,
    nextStatement: null,
    colour: 20,
    tooltip: "throw away the given food",
    fn: (ctx: Context, state: State, v1: string) => {
      if (state.pos >= state.N) ctx.exit(false, "there is no food left");
      if (state.queue[state.pos] !== v1) ctx.exit(false, "this is not the next food");
      const food = state.queue[state.pos].split(" ");
      if (!(food[0] in state.food_types)) ctx.exit(false, `unknown food ${food[0]}`);
      state.pos += 1;
      state.trash = true;
      if (state.food_colors[food[0]] === "giallo")
        ctx.exit(false, "Allie is allergic to yellow foods");
      if (state.food_types[food[0]] === "verdura")
        ctx.exit(false, "Allie likes vegetables, you shouldn't throw them away");
    },
  },
  {
    type: "termina",
    message0: "finish",
    previousStatement: null,
    colour: 20,
    tooltip: "stop eating",
    fn: (ctx: Context, state: State) => {
      if (state.pos < state.N && state.food_colors[state.queue[state.pos]] !== "giallo")
        ctx.exit(false, "you could eat more food");
      ctx.exit(true, "you ate all the food you could, well done!");
    },
  },
] satisfies CustomBlock<State>[];
