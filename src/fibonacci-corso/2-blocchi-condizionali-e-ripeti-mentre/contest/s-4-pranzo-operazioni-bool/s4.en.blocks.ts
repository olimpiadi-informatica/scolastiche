"use client";

import type { Context, CustomBlock } from "@olinfo/quizms-mdx/blockly-types";

import type { State } from "./s4.blocks";

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
    type: "N",
    message0: "N",
    colour: 20,
    tooltip: "number of foods in line",
    fn: (_ctx: Context, state: State): number => {
      return state.N;
    },
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
      if (
        state.food_types[food[0]] === "verdura" &&
        state.food_colors[food[0]] !== "giallo" &&
        food.length === 1
      )
        ctx.exit(false, "Carol doesn't like raw vegetables unless they are yellow");
      if (
        state.food_types[food[0]] === "verdura" &&
        state.food_colors[food[0]] === "giallo" &&
        food.length > 1
      )
        ctx.exit(false, "Carol doesn't like cooked yellow vegetables");
      if (state.food_types[food[0]] === "frutta" && food.length > 1)
        ctx.exit(false, "Carol doesn't like cooked fruit");
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
      ctx.exit(false, "Carol likes everything, you shouldn't throw this away");
    },
  },
  {
    type: "termina",
    message0: "finish",
    previousStatement: null,
    colour: 20,
    tooltip: "stop eating",
    fn: (ctx: Context, state: State) => {
      if (state.pos < state.N) ctx.exit(false, "you haven't finished the food");
      ctx.exit(true, "you finished all the food, well done!");
    },
  },
] satisfies CustomBlock<State>[];
