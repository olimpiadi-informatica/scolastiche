"use client";

import { Canvas, Rectangle, Sprite, Variables } from "~/utils/visualizer";

import bunny from "./asy/bunny.asy?w=100";
import calcolatrice from "./calcolatrice.svg?w=200";

export default function Visualizer({ variables }) {
  const { variables, state } = variables;

  if (state.N > 10_000) {
    return <div className="text-slate-800 p-4">La visualizzazione è disponibile solo per i primi 5 livelli.</div>;
  }

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Orbitron"
        rel="stylesheet"
        type="text/css"
      />
      <Canvas scale={50}>
        <Sprite src={bunny} alt="Bunny" x={1} y={0} />
        <Sprite src={calcolatrice} alt="Calcolatrice" x={3} y={1} />
        <Rectangle
          color="transparent"
          borderColor="transparent"
          height={0.4}
          width={2.2}
          x={4.3}
          y={1.4}
          rotation={0.025}
          className="font-[Orbitron] text-black">
          {state.N}
        </Rectangle>
      </Canvas>
      <Variables variables={{ ...variables }} />
    </>
  );
}
