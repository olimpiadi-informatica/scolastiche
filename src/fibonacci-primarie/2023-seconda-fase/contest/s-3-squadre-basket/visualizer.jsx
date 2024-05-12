import React from "react";

import { range } from "lodash-es";

import { Canvas, Sprite, Variables } from "~/utils/visualizer";

import ball from "./asy/ball.asy?w=35";
import bunny from "./asy/bunny.asy?w=66";
import fibonacci from "./asy/fibonacci.asy?h=100";
import turing from "./asy/turing.asy?h=100";

export default function Visualizer({ variables }) {
  const { blocklyVariables, hiddenState } = variables;
  if (!hiddenState) return;

  const teams = [fibonacci, turing];

  return (
    <>
      <Canvas gravity="bottom" scale={10}>
        <Sprite src={bunny} alt="Bunny" x={20} y={19.5} follow />
        <Sprite src={ball} alt="Pallone" x={23.5} y={20.5} />
        {range(2).flatMap((i) => {
          const len = hiddenState.data[i].H.length;
          return range(i * (len - 1), (len + 1) * (1 - i) - 1, 1 - 2 * i).map((k) => {
            const h = hiddenState.data[i].H[k] / 28;
            let x = 26 + (k - hiddenState.data[i].pos) * 5;
            let y = 30 - 23 * i + (h - 1) * 5;
            if (k < hiddenState.data[i].pos) {
              if (hiddenState.data[i].scelta[k] > 0) {
                x = 14 + (hiddenState.data[i].scelta[k] - hiddenState.data[i].presi.length) * 5;
              } else {
                x = 21 - hiddenState.data[i].scelta[k] * 3;
                y += 10 * (1 - 2 * i);
              }
            }
            return (
              <Sprite
                key={`player-${i}-${k}`}
                src={teams[i]}
                alt="Giocatore"
                x={x}
                y={y}
                height={h}
              />
            );
          });
        })}
      </Canvas>
      <Variables
        variables={{
          ...blocklyVariables,
          Fibonacci: hiddenState.data[0].H.length - hiddenState.data[0].pos,
          Turing: hiddenState.data[1].H.length - hiddenState.data[1].pos,
        }}
      />
    </>
  );
}
