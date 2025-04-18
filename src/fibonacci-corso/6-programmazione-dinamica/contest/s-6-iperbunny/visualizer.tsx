"use client";

import type { VisualizerProps } from "@olinfo/quizms-mdx/blockly-types";

import { Canvas, Rectangle, Sprite, Variables } from "~/utils/visualizer";

import bunny from "./asy/bunny.asy?w=50";
import platform from "./asy/platform.asy?w=90";
import type { State } from "./s6.blocks";

export default function Visualizer({ variables, state }: VisualizerProps<State>) {
  const { N, A, VA, B, VB } = state;
  if (N > 50) {
    return (
      <div className="text-slate-800 p-4">
        La visualizzazione è disponibile solo per i primi 5 livelli.
      </div>
    );
  }

  const maxH = Math.max(...A);

  const p = (y: number) => (3 * y) / maxH;

  return (
    <>
      <Canvas scale={100}>
        {A.map((a: number, i: number) => (
          <Rectangle
            key={i}
            color="#d1d5db"
            borderColor="#6b7280"
            x={i + 1.48}
            y={-p(a) - 0.1}
            height={p(a) + 0.3}
            width={0.15}
            className="rounded-md"
          />
        ))}
        {A.map((a: number, i: number) => (
          <Sprite key={i} src={platform} alt="Pedana" x={i + 1.1} y={-p(a)} />
        ))}
        {B.map((b: number, i: number) => (
          <Sprite key={i} src={platform} alt="Pedana" x={i + 1.1} y={-p(b)} />
        ))}
        {VA.map((v: number, i: number) => (
          <Rectangle
            key={i}
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
        {VB.map((v: number, i: number) => (
          <Rectangle
            key={i}
            color="transparent"
            borderColor="transparent"
            height={1}
            width={2.2}
            x={i + 1.1}
            y={-p(B[i]) - 0.35}
            className="text-3xl text-gray-400 [text-shadow:0_0_2px_#fff]">
            {v}
          </Rectangle>
        ))}
        <Rectangle color="brown" borderColor="#D35A1E" height={0.3} width={Math.min(N, 50) + 2} />
        <Sprite src={bunny} alt="Bunny" x={0.2} y={-0.8} />
      </Canvas>
      <Variables variables={{ ...variables }} />
    </>
  );
}
