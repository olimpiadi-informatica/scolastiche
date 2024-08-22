"use client";

import { range } from "lodash-es";

import { Canvas, Rectangle, Sprite, Variables } from "~/utils/visualizer";

import bunny from "./asy/bunny.asy?w=66";

const paints = import.meta.glob("./asy/paint*.asy", {
  eager: true,
  import: "default",
  query: { w: 40 },
});

export default function Visualizer({ variables, state }) {
  const colors = [
    "#ffffff",
    "#0000ff",
    "#ff0000",
    "#00ff00",
    "#ff00ff",
    "#ffff00",
    "#00ffff",
    "#7f7f7f",
    "#7f0000",
    "#007f00",
    "#7f7f00",
    "#000000",
  ];

  return (
    <>
      <Canvas scale={40}>
        {range(state.N).map((i) => (
          <Rectangle key={i} color={colors[state.muro[i]]} width={1} height={4} x={i + 2} y={0} />
        ))}
        <Sprite src={bunny} alt="Bunny" x={1 + state.pos} y={1.4} />
        <Sprite
          src={paints[`./asy/paint${Math.min(state.i + 1, state.C)}.asy`]}
          alt="Vernice"
          x={0}
          y={3}
        />
      </Canvas>
      <Variables variables={{ colori: state.C, ...variables }} />
    </>
  );
}
