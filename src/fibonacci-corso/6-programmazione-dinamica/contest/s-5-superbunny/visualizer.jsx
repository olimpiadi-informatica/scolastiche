"use client";

import { range } from "lodash-es";

import { Canvas, Rectangle, Sprite, Variables } from "~/utils/visualizer";

import bunny from "./asy/bunny.asy?w=50";
import platform from "./asy/platform.asy?w=90";

export default function Visualizer({ variables, state }) {
  const { N, A, B, H, posx, posy, time } = state;
  const maxH = Math.max(...A);

  const p = (y) => (3 * y) / maxH;
  const sep = 1.6;

  return (
    <>
      <Canvas scale={100}>
        {A.map((a, i) => (
          <Rectangle
            key={i}
            color="#d1d5db"
            borderColor="#6b7280"
            x={i*sep + 1.48}
            y={-p(a) - 0.1}
            height={p(a) + 0.3}
            width={0.15}
            className="rounded-md"
          />
        ))}
        {A.map((a, i) => (
          <Sprite key={i} src={platform} alt="Pedana" x={i*sep + 1.1} y={-p(a)} />
        ))}
        {B.map((b, i) => (
          <Sprite key={i} src={platform} alt="Pedana" x={i*sep + 1.1} y={-p(b)} />
        ))}
        <Rectangle color="brown" borderColor="#D35A1E" height={0.3} width={N*sep + 0.5} x={0.5} />
        {range(N+1).map(i => (
          <Rectangle 
            key={`ground-${i}`}
            color="brown" borderColor="#D35A1E"
            height={p(H)}
            width={0.5}
            x={(i-0.5)*sep + 1.1 + 0.2}
            y={-p(H)}
          />
        ))}
        <Sprite src={bunny} alt="Bunny" x={posx*sep/2+0.5} y={-p(posy)-0.8} />
      </Canvas>
      <Variables variables={{...variables, "N (num. fossati)": N, "tempo trascorso": time}} />
    </>
  );
}
