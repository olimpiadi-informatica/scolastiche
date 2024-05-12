import React from "react";

import { Canvas, Rectangle, Sprite, Variables } from "~/utils/visualizer";

import bunny from "./asy/bunny.asy?w=100";
import calcolatrice from "./calcolatrice.svg?w=200";

export default function Visualizer({ variables }) {
  const { blocklyVariables, hiddenState } = variables;
  if (!hiddenState) return;

  var num;
  if (hiddenState.N < 10_000) {
    num = (
      <Rectangle
        color="transparent"
        border_color="transparent"
        height={0.4}
        width={2.2}
        x={4.3}
        y={1.4}
        rotation={0.025}
        children={<span style={{ fontFamily: "Orbitron" }}>{hiddenState.N}</span>}
      />
    );
  }

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Orbitron"
        rel="stylesheet"
        type="text/css"></link>
      <Canvas scale={50}>
        <Sprite src={bunny} alt="Bunny" x={1} y={0} />
        <Sprite src={calcolatrice} alt="Calcolatrice" x={3} y={1} />
        {num}
      </Canvas>
      <Variables variables={{ ...blocklyVariables }} />
    </>
  );
}
