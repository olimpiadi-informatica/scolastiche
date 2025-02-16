"use client";

import { range } from "lodash-es";

import { Canvas, Sprite, Variables } from "~/utils/visualizer";

import bunny from "./asy/bunny.asy?w=66";
import stoveOn from "./asy/fornello-acceso.asy?w=120";
import stoveBack from "./asy/fornello-retro.asy?w=120";
import stoveOff from "./asy/fornello-spento.asy?w=120";

const foods = import.meta.glob("./asy/cibo-*.asy", {
  eager: true,
  import: "default",
  query: { w: 120 },
});

export default function Visualizer({ variables, state }) {
  function position(x, cook) {
    if (x === -1) return [1.4, 1.3];
    if (cook) return [2.2, 1.5];
    return [0.5 * x + 2.4, 1.3];
  }

  return (
    <>
      <Canvas scale={130}>
        <Sprite src={bunny} alt="Tip-Tap" x={1.6} y={0.9} follow />
        <Sprite src={stoveBack} alt="Fornello" x={2.2} y={1.5} />
        {range(Math.max(state.pos - 1, 0), state.N).map((i) => {
          const pos = position(i - state.pos, state.queue[i].endsWith(" cotta"));
          return (
            <Sprite
              key={i}
              src={foods[`./asy/cibo-${state.queue[i].split(" ")[0]}.asy`]}
              alt={state.queue[i]}
              x={pos[0]}
              y={pos[1]}
            />
          );
        })}
        <Sprite
          src={
            state.pos < state.N && state.queue[state.pos].endsWith(" cotta") ? stoveOn : stoveOff
          }
          alt="Fornello"
          x={2.2}
          y={1.5}
        />
      </Canvas>
      <Variables variables={{ ...variables, "N (num. cibi)": state.N }} />
    </>
  );
}
