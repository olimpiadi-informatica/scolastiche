import React from "react";
import { range } from "lodash-es";

import { Canvas, Rectangle, Sprite, Variables } from "~/utils/visualizer";

import bunny_left from "./asy/bunny_left.asy?w=66";
import bunny_right from "./asy/bunny_right.asy?w=66";
import stairs1 from "./asy/stairs1.asy?w=80";
import stairs2 from "./asy/stairs2.asy?w=80";
import stairs3 from "./asy/stairs3.asy?w=80";

export default function Visualizer({ variables }) {
  const { blocklyVariables, hiddenState } = variables;
  if (!hiddenState) return;

  const stairs = [stairs1, stairs2, stairs3][hiddenState.M <= 6 ? 0 : hiddenState.M <= 14 ? 1 : 2];
  const bunnies = [bunny_left, bunny_right];
  const hf = 2.0;
  const wf = 3.0;

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
  for (let i = 0; i < hiddenState.pos[1]; ++i) {
    if (hiddenState.blocchi[i][0] === 1) bsplit += 1;
  }

  let bx = 3 - bsplit * (wf + 1);
  return (
    <>
      <Canvas gravity="bottom" scale={10}>
        <Rectangle key={"L"} color={"#eeeeee"} height={hiddenState.S * hf} width={wf + 1} x={7} y={0} />
        <Rectangle key={"R"} color={"#eeeeee"} height={hiddenState.D * hf} width={wf + 1} x={23} y={0} />
        <Sprite src={stairs} alt="Scale" x={13.1} y={0} />
        <Rectangle key={"base"} color={"#954520"} height={1} width={(wf + 1) * hiddenState.M * 2 + wf + 17} x={7 - (wf + 1) * hiddenState.M} y={hiddenState.pos[3] * hf} />
        <Sprite src={bunnies[hiddenState.orient]} alt="Bunny" x={14} y={hiddenState.pos[3] * hf} follow />
        {range(hiddenState.M).map((i) => {
          let x = hiddenState.blocchi[i][0] * 8 + 7.5;
          let y = hiddenState.blocchi[i][1] * hf;
          if (hiddenState.blocchi[i][0] === 1) {
            if (i >= hiddenState.pos[1] && bx < 23) bx = 23.5;
            bx += wf + 1;
            x = bx;
            y = hiddenState.pos[3] * hf + 0.5;
          }
          return (
            <Rectangle
              key={i}
              color={colors[i % colors.length]}
              height={(i + 1) * hf}
              width={wf}
              x={x}
              y={y}
              style={{ "paddingLeft": "2.5px", "lineHeight": "16px" }}
              className="pl-0.5 leading-4"
              children={i + 1}
            />
          );
        })}
      </Canvas>
      <Variables
        variables={{
          sinistra: hiddenState.pos[0] + "/" + hiddenState.S,
          destra: hiddenState.pos[2] + "/" + hiddenState.D,
          blocchetti: hiddenState.rimasti + "/" + hiddenState.M,
          ...blocklyVariables,
        }}
      />
    </>
  );
}
