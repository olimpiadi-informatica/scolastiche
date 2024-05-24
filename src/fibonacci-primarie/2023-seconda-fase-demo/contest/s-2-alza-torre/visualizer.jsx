"use client";

import { useEffect, useRef } from "react";

import { range } from "lodash-es";

import { Canvas, Rectangle, Sprite, Variables } from "~/utils/visualizer";

import bunny from "./asy/bunny.asy?w=66";
import stairs from "./asy/stairs.asy?w=80";

export default function Visualizer({ variables }) {
  const { blocklyVariables, hiddenState: state } = variables;

  const colors = [
    "#4093b0",
    "#bf4eb4",
    "#44c966",
    "#4473c9",
    "#c2a948",
    "#7468c5",
    "#9c5ebd",
    "#7cc258",
    "#a3b651",
    "#40af91",
    "#4473c9",
    "#c2a948",
    "#7468c5",
    "#9c5ebd",
    "#7cc258",
    "#a3b651",
  ];

  const ref = useRef();
  useEffect(() => {
    const container = ref.current?.parentElement;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, []);

  const y = [0];
  for (let i = 0; i < state.N; i++) {
    y[i + 1] = y[i] + (state.rot[i] ? state.larghezze[i] : state.altezze[i]);
  }

  return (
    <div ref={ref}>
      <Canvas gravity="bottom" scale={10}>
        {range(state.N).map((i) => {
          const px = 16 - state.larghezze[i] / 2;
          const py = y[i] + (state.rot[i] && (state.larghezze[i] - state.altezze[i]) / 2);
          const rotation = state.rot[i] ? 0.25 : 0;
          return (
            <Rectangle
              key={i}
              color={colors[i]}
              height={state.altezze[i]}
              width={state.larghezze[i]}
              x={px}
              y={py}
              rotation={rotation}
            />
          );
        })}
        <Sprite src={stairs} alt="Scale" x={0.6} y={0} />
        <Sprite src={bunny} alt="Bunny" x={1.5} y={y[state.pos]} follow />
      </Canvas>
      <Variables variables={{ scatole: state.N, ...blocklyVariables }} />
    </div>
  );
}
