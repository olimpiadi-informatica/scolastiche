"use client";

import type { VisualizerProps } from "@olinfo/quizms-mdx/blockly-types";

import { Canvas, Rectangle, Sprite, Variables } from "~/utils/visualizer";

import bunny from "./asy/bunny.asy?w=50";
import platform from "./asy/platform.asy?w=90";
import type { State } from "./s4.blocks";

export default function Visualizer({ variables, state }: VisualizerProps<State>) {
  const { N, A, VA, DA, B, VB, DB, H, V, D, posx, posy, time } = state;

  const maxH = Math.max(...A);

  const p = (y: number) => (3 * y) / maxH;

  return (
    <>
      <Canvas scale={100}>
        {A.map((a, i) => (
          <Rectangle
            key={`palo-${i}`}
            color="#d1d5db"
            borderColor="#6b7280"
            x={i + 1.48}
            y={-p(a) - 0.1}
            height={p(a) + 0.3}
            width={0.15}
            className="rounded-md"
          />
        ))}
        {A.map((a, i) => (
          <Sprite key={`alta-${i}`} src={platform} alt="Pedana" x={i + 1.1} y={-p(a)} />
        ))}
        {B.map((b, i) => (
          <Sprite key={`bassa-${i}`} src={platform} alt="Pedana" x={i + 1.1} y={-p(b)} />
        ))}
        <Rectangle
          key="ground"
          color="brown"
          borderColor="#D35A1E"
          height={0.3}
          width={N + 1.5}
          x={0.3}
        />
        <Rectangle
          key="ground-start"
          color="brown"
          borderColor="#D35A1E"
          height={p(H)}
          width={0.5}
          x={-1 + 1.1 + 0.2}
          y={-p(H)}
        />
        <Rectangle
          key="ground-end"
          color="brown"
          borderColor="#D35A1E"
          height={p(H)}
          width={0.5}
          x={N + 1.1 + 0.2}
          y={-p(H)}
        />
        {VA.map((v, i) => (
          <Rectangle
            key={`val-alta-${i}`}
            color="transparent"
            borderColor="transparent"
            height={1}
            width={2.2}
            x={i + 1.1}
            y={-p(A[i]) - 0.35}
            className="text-3xl text-gray-400 [text-shadow:0_0_2px_#fff]">
            {v}
          </Rectangle>
        ))}
        {VB.map((v, i) => (
          <Rectangle
            key={`val-bassa-${i}`}
            color="transparent"
            borderColor="transparent"
            height={1}
            width={2.2}
            x={i + 1.1}
            y={-p(B[i]) + 0.08}
            className="text-3xl text-gray-400 [text-shadow:0_0_2px_#fff]">
            {v}
          </Rectangle>
        ))}
        <Rectangle
          key="val-start"
          color="transparent"
          borderColor="transparent"
          height={1}
          width={2.2}
          x={-1 + 1.2}
          y={-p(H) - 0.37}
          className="text-3xl text-gray-400 [text-shadow:0_0_2px_#fff]">
          {V[0]}
        </Rectangle>
        <Rectangle
          key="val-end"
          color="transparent"
          borderColor="transparent"
          height={1}
          width={2.2}
          x={N + 1.2}
          y={-p(H) - 0.37}
          className="text-3xl text-gray-400 [text-shadow:0_0_2px_#fff]">
          {V[1]}
        </Rectangle>
        {DA.map((v, i) => (
          <Rectangle
            key={`dir-alta-${i}`}
            color="transparent"
            borderColor="transparent"
            height={1}
            width={2.2}
            x={i + 1.7}
            y={-p(A[i]) - 0.35}
            className="text-3xl text-gray-400 [text-shadow:0_0_2px_#fff]">
            {v === 0 ? "" : v === 1 ? "↑" : "↓"}
          </Rectangle>
        ))}
        {DB.map((v, i) => (
          <Rectangle
            key={`dir-bassa-${i}`}
            color="transparent"
            borderColor="transparent"
            height={1}
            width={2.2}
            x={i + 1.7}
            y={-p(B[i]) + 0.08}
            className="text-3xl text-gray-400 [text-shadow:0_0_2px_#fff]">
            {v === 0 ? "" : v === 1 ? "↑" : "↓"}
          </Rectangle>
        ))}
        <Rectangle
          key="dir-start"
          color="transparent"
          borderColor="transparent"
          height={1}
          width={2.2}
          x={-1 + 1.6}
          y={-p(H) - 0.37}
          className="text-3xl text-gray-400 [text-shadow:0_0_2px_#fff]">
          {D[0] === 0 ? "" : D[0] === 1 ? "↑" : "↓"}
        </Rectangle>
        <Rectangle
          key="dir-end"
          color="transparent"
          borderColor="transparent"
          height={1}
          width={2.2}
          x={N + 1.6}
          y={-p(H) - 0.37}
          className="text-3xl text-gray-400 [text-shadow:0_0_2px_#fff]">
          {D[1] === 0 ? "" : D[1] === 1 ? "↑" : "↓"}
        </Rectangle>
        <Sprite key="bunny" src={bunny} alt="Bunny" x={posx + 0.3} y={-p(posy) - 0.8} />
      </Canvas>
      <Variables variables={{ ...variables, "N (num. pedane)": N, "tempo trascorso": time }} />
    </>
  );
}
