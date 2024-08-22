"use client";

import { range } from "lodash-es";

import { Canvas, Rectangle, Sprite, Variables } from "~/utils/visualizer";

import bunny_left from "./asy/bunny_left.asy?w=66";
import bunny_right from "./asy/bunny_right.asy?w=66";
import stairs1 from "./asy/stairs1.asy?w=80";
import stairs2 from "./asy/stairs2.asy?w=80";
import stairs3 from "./asy/stairs3.asy?w=80";

export default function Visualizer({ variables }) {
  const { blocklyVariables, state } = variables;

  const stairs = [stairs1, stairs2, stairs3][state.M <= 6 ? 0 : state.M <= 14 ? 1 : 2];
  const bunnies = [bunny_left, bunny_right];
  const hf = 2;
  const wf = 3;

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

  let bsplit = 0;
  for (let i = 0; i < state.pos[1]; ++i) {
    if (state.blocchi[i][0] === 1) bsplit += 1;
  }

  let bx = 3 - bsplit * (wf + 1);
  return (
    <>
      <Canvas gravity="bottom" scale={10}>
        <Rectangle color="#eeeeee" height={state.S * hf} width={wf + 1} x={7} y={0} />
        <Rectangle color="#eeeeee" height={state.D * hf} width={wf + 1} x={23} y={0} />
        <Sprite src={stairs} alt="Scale" x={13.1} y={0} />
        <Rectangle
          color="#954520"
          height={1}
          width={(wf + 1) * state.M * 2 + wf + 17}
          x={7 - (wf + 1) * state.M}
          y={state.pos[3] * hf}
        />
        <Sprite
          src={bunnies[state.orient]}
          alt="Bunny"
          x={14}
          y={state.pos[3] * hf}
          follow
        />
        {range(state.M).map((i) => {
          let x = state.blocchi[i][0] * 8 + 7.5;
          let y = state.blocchi[i][1] * hf;
          if (state.blocchi[i][0] === 1) {
            if (i >= state.pos[1] && bx < 23) bx = 23.5;
            bx += wf + 1;
            x = bx;
            y = state.pos[3] * hf + 0.5;
          }
          return (
            <Rectangle
              key={i}
              color={colors[i % colors.length]}
              height={(i + 1) * hf}
              width={wf}
              x={x}
              y={y}
              className="pl-0.5 leading-4">
              {i + 1}
            </Rectangle>
          );
        })}
      </Canvas>
      <Variables
        variables={{
          sinistra: state.pos[0] + "/" + state.S,
          destra: state.pos[2] + "/" + state.D,
          blocchetti: state.rimasti + "/" + state.M,
          ...blocklyVariables,
        }}
      />
    </>
  );
}
