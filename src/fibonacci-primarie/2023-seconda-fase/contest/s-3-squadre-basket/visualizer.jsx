"use client";

import { range } from "lodash-es";

import { Canvas, Sprite, Variables } from "~/utils/visualizer";

import ball from "./asy/ball.asy?w=35";
import bunny from "./asy/bunny.asy?w=66";
import fibonacci from "./asy/fibonacci.asy?h=100";
import turing from "./asy/turing.asy?h=100";

export default function Visualizer({ variables, state }) {
  const teams = [fibonacci, turing];

  const offset = Math.max(...state.data.map((d) => d.presi.length)) * 5;

  return (
    <>
      <Canvas gravity="bottom" scale={10}>
        <Sprite src={bunny} alt="Bunny" x={0 + offset} y={19.5} follow />
        <Sprite src={ball} alt="Pallone" x={3.5 + offset} y={20.5} />
        {range(2).flatMap((i) => {
          const { H, scelta } = state.data[i];
          let offsetPreso = 0;
          let offsetScarto = 0;
          return range(H.length).map((k) => {
            let x;
            let y = [30, 7][i];

            if (k >= scelta.length) {
              x = (k - scelta.length) * 5 + offset + 10;
            } else if (scelta[k] > 0) {
              x = offsetPreso;
              offsetPreso += 5;
            } else {
              x = offsetScarto + offset + 10;
              offsetScarto += 5;
              y += [12, -10][i];
            }

            return (
              <Sprite
                key={`${i}-${k}`}
                src={teams[i]}
                alt="Giocatore"
                x={x}
                y={y}
                scaleY={H[k] / 28}
                className="origin-bottom"
              />
            );
          });
        })}
      </Canvas>
      <Variables
        variables={{
          ...variables,
          Fibonacci: state.data[0].H.length - state.data[0].pos,
          Turing: state.data[1].H.length - state.data[1].pos,
        }}
      />
    </>
  );
}
