"use client";

import { range } from "lodash-es";

import { Canvas, Sprite, Variables } from "~/utils/visualizer";

import ball from "./asy/ball.asy?w=35";
import bunny from "./asy/bunny.asy?w=66";
import fibonacci from "./asy/fibonacci.asy?h=100";
import turing from "./asy/turing.asy?h=100";

export default function Visualizer({ variables, state }) {
  const teams = [fibonacci, turing];

  const offset = Math.max(...state.data.map((d) => d.taketot)) * 5;

  return (
    <>
      <Canvas gravity="bottom" scale={10}>
        <Sprite src={bunny} alt="Bunny" x={0 + offset} y={19.5} follow />
        <Sprite src={ball} alt="Pallone" x={3.5 + offset} y={20.5} />
        {range(2).flatMap((i) => {
          const { H, taken, pos, take2 } = state.data[i];
          let offsetFila = offset + 10 + 5 * (H.length - pos - take2);
          return range(H.length).map((k) => {
            let x;
            let y = [30, 7][i];

            if (taken[k] > 0) {
              x = (taken[k] - 1) * 5;
            } else {
              if (k == pos) offsetFila = offset + 10;
              x = offsetFila;
              offsetFila += 5;
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
          "Fila Fibonacci": state.data[0].H.length - state.data[0].taketot,
          "Fila Turing": state.data[1].H.length - state.data[1].taketot,
        }}
      />
    </>
  );
}
