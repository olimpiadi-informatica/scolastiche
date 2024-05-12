import React from "react";

import { Canvas, Rectangle, Sprite, Variables } from "~/utils/visualizer";

import bunny from "./asy/bunny.asy?w=50";
import platform from "./asy/platform.asy?w=90";
import pole from "./asy/pole.asy?w=15";

export default function Visualizer({ variables }) {
  const { blocklyVariables, hiddenState } = variables;
  if (!hiddenState) return;

  var xoffs = 3;
  var yoffs = 6.5;
  var poles = [];
  var platforms = [];
  var hmax = 0;
  if (hiddenState.N <= 50) {
    for (let i = 0; i < hiddenState.N; ++i) hmax = Math.max(hmax, hiddenState.A[i]);
    for (let i = 0; i < hiddenState.N; ++i) {
      let h = (hiddenState.A[i] / hmax) * 2 + 0.1;
      poles.push(
        <Sprite
          key={"palo-" + i}
          src={pole}
          alt={"palo " + i}
          x={xoffs + i * 2}
          y={yoffs - h * 1.95}
          height={h}
        />,
      );
      platforms.push(
        <Sprite
          key={"alta-" + i}
          src={platform}
          alt={"A" + i}
          x={xoffs + i * 2 - 0.75}
          y={yoffs - h * 3.9 + 2.05}
        />,
        <Rectangle
          key={"valalta" + i}
          color="transparent"
          border_color="transparent"
          height={1}
          width={2.2}
          x={xoffs + i * 2 - 0.8}
          y={yoffs - h * 3.9 + 1.15}
          style={{ fontSize: "xx-large" }}
          children={hiddenState.VA[i]}
        />,
      );
      h = (hiddenState.B[i] / hmax) * 2 + 0.1;
      platforms.push(
        <Sprite
          key={"bassa-" + i}
          src={platform}
          alt={"B" + i}
          x={xoffs + i * 2 - 0.75}
          y={yoffs - h * 3.9 + 2.05}
        />,
        <Rectangle
          key={"valbassa" + i}
          color="transparent"
          border_color="transparent"
          height={1}
          width={2.2}
          x={xoffs + i * 2 - 0.8}
          y={yoffs - h * 3.9 + 1.15}
          style={{ fontSize: "xx-large" }}
          children={hiddenState.VB[i]}
        />,
      );
    }
  }

  return (
    <>
      <Canvas scale={50}>
        <Rectangle
          color="brown"
          border_color="#D35A1E"
          height={0.6}
          width={Math.min(hiddenState.N, 50) * 2 + 3}
          x={-0.3}
          y={yoffs + 1.8}
        />
        <Sprite src={bunny} alt="Bunny" x={0.2} y={yoffs + 0.25} />
        {poles}
        {platforms}
      </Canvas>
      <Variables variables={{ ...blocklyVariables }} />
    </>
  );
}
