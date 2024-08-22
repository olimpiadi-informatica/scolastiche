"use client";

import { range } from "lodash-es";

import { Canvas, Rectangle, Sprite, Variables } from "~/utils/visualizer";

import bunny from "./asy/bunny.asy?w=45";

function Sector({ color, from, portion, text }) {
  const deg = 0.5 - portion;
  return (
    <Rectangle
      color="transparent"
      x={8}
      y={12}
      width={200}
      height={100}
      rotation={from + portion - 0.25}
      className="origin-bottom overflow-hidden !border-0">
      <div
        style={{ transform: `rotate(${deg}turn)`, backgroundColor: color }}
        className="absolute size-full origin-bottom rounded-t-full"
      />
      <div
        style={{ transform: `rotate(${deg / 2}turn)` }}
        className="absolute mt-1 size-full origin-bottom text-center text-2xl text-slate-900 underline decoration-slate-900">
        {text}
      </div>
    </Rectangle>
  );
}

export default function Visualizer({ variables }) {
  const { variables, state } = variables;

  const { S, N, C, pos, prizes, friends } = state;

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
  ];

  return (
    <>
      <Canvas>
        {range(S).map((i) => (
          <Sector key={i} color={colors[i]} from={(i + pos) / S} portion={1 / S} text={prizes[i]} />
        ))}
        {range(N).map((i) => (
          <Sprite
            key={i}
            src={bunny}
            alt="Amico"
            y={4}
            rotation={(0.5 + friends[i]) / S + 0.125}
            className="origin-[108px_108px]"
          />
        ))}
      </Canvas>
      <Variables variables={{ carote: C, ...variables }} />
    </>
  );
}
