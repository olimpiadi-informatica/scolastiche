"use client";

import { range } from "lodash-es";

import { Canvas, Rectangle, Sprite, Variables } from "~/utils/visualizer";

import bunny from "./asy/bunny.asy?w=40";
import carrot from "./asy/carrot.asy?w=25";
import hay from "./asy/hay.asy?w=60";

export default function Visualizer({ variables, state }) {
  return (
    <>
      <Canvas gravity="bottom" scale={10}>
        {range(state.N).flatMap((i) => {
          return range(state.H[i]).map((h) => (
            <Sprite key={`hay-${i}-${h}`} src={hay} alt="Fieno" x={1.5 + i * 6} y={h * 2.8} />
          ));
        })}
        <Rectangle borderColor="transparent" x={-3} y={-1} width={1} height={1} />
        <Sprite src={bunny} alt="Carol" x={3 + state.pos * 6} y={-1} follow />
        <Sprite src={carrot} alt="Carota" x={5 + state.pos * 6} y={-0.1} />
        {range(state.carrots.length + 2).map((i) => {
          let x = 5 + state.pos * 6;
          let y = -0.1;
          if (i < state.carrots.length) {
            const col = state.carrots[i] - 1;
            x = 3.5 + col * 6 + (i % 3) * 0.5;
            y = -0.3 + state.H[col] * 2.8;
          }
          return <Sprite key={i} src={carrot} alt="Carota" x={x} y={y} />;
        })}
      </Canvas>
      <Variables variables={{ ...variables, pile: state.N }} />
    </>
  );
}
