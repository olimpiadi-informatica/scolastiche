import React, { Fragment } from "react";
import { range } from "lodash-es";

import { Canvas, Rectangle, Sprite, Variables } from "../components";

import bunny from "./asy/bunny.asy?w=66";

const paints = import.meta.glob("./asy/paint*.asy", {
  eager: true,
  import: "default",
  query: { w: 40 },
});

export default function Visualizer({ variables }) {
  const { blocklyVariables, hiddenState } = variables;
  if (!hiddenState) return;

  const colors = [
    "#ffffff",
    "#dc2626",
    "#22d3ee",
    "#22c55e",
    "#a1a1aa",
    "#8b5cf6",
    "#92400e",
    "#f97316",
    "#fde047",
    "#f472b6",
    "#1d4ed8",
    "#a3e635",
  ];

  return (
    <>
      <Canvas scale={40}>
        {range(hiddenState.N).map((i) => (
          <Rectangle
            key={i}
            color={colors[hiddenState.muro[i]]}
            width={1}
            height={4}
            x={i + 2}
            y={0}
          />
        ))}
        <Sprite src={bunny} alt="Bunny" x={0.5 + hiddenState.pos} y={0.4} />
        <Sprite
          src={paints[`./asy/paint${Math.min(hiddenState.i + 1, hiddenState.C)}.asy`]}
          alt="Vernice"
          x={0}
          y={2}
        />
      </Canvas>
      <Variables variables={{ colori: hiddenState.C, ...blocklyVariables }} />
    </>
  );
}
