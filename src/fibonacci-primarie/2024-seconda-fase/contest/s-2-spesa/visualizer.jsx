"use client";

import { range } from "lodash-es";

import { Canvas, Sprite, Variables } from "~/utils/visualizer";

import adulto from "./asy/adulto.asy?w=80";
import bambino from "./asy/bambino.asy?w=70";
import bunny from "./asy/bunny.asy?w=80";
import carrot from "./asy/carrot.asy?w=35";

export default function Visualizer({ variables, state }) {
  let nc = 0;
  return (
    <>
      <Canvas gravity="bottom" scale={10}>
        {range(state.N).flatMap((i) => (
          <Sprite
            key={i}
            src={state.queue[i] === 2 ? adulto : bambino}
            alt={state.queue[i] === 2 ? "adulto" : "bambino"}
            x={i >= state.pos ? 30 + (i - state.pos) * 9 : 17 + (i - state.pos) * 6}
            y={4.8}
          />
        ))}
        {range(state.N).flatMap((i) => {
          return range(state.wealth[i]).map((j) => (
            <Sprite
              key={nc++}
              src={carrot}
              alt="carota"
              x={18.5 + state.wealth[i] / 2 + (i - state.pos) * 6 - j * 0.7}
              y={5 + state.wealth[i] + j * 0.4}
            />
          ));
        })}
        <Sprite src={bunny} alt="Carol" x={20} y={0} follow />
        {range(state.carrots).map((i) => {
          const x = 25 + i * 1.5;
          const y = 0;
          return <Sprite key={nc++} src={carrot} alt="Carota" x={x} y={y} />;
        })}
      </Canvas>
      <Variables
        variables={{
          ...variables,
          "N (num. stanze)": state.N,
          "K (dim. pacco)": state.K,
          "euro spesi": state.cost,
        }}
      />
    </>
  );
}
