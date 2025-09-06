"use client";

import clsx from "clsx";
import { range } from "lodash-es";

import { Canvas, Rectangle, Sprite, Variables } from "~/utils/visualizer";

import bunny from "./asy/bunny.asy?w=60";
import carrot from "./asy/carrot.asy?w=40";
import crate from "./asy/crate.asy?w=50";

export default function Visualizer({ variables, state }) {
  const cellWidth = 50;
  const cellHeight = 7;
  const cellPadding = 1;

  if (state.N > 7) {
    return (
      <div className="text-slate-800 p-4">
        La visualizzazione è disponibile solo per i primi 5 livelli.
      </div>
    );
  }

  return (
    <>
      <Canvas gravity="bottom" scale={10}>
        {range(state.N).map((i) =>
          state.N - i - 1 === state.allie ? null : (
            <Sprite
              src={crate}
              alt="box"
              x={cellWidth * 1.15}
              y={cellHeight * (i + 0.5) - 3}
              key={`box${i}`}
            />
          ),
        )}
        {range(state.N).map((i) =>
          state.N - i - 1 === state.allie ? null : (
            <Rectangle
              color="transparent"
              width={cellWidth * 0.12}
              height={cellHeight}
              key={`cost${i}`}
              x={cellWidth * 1.24}
              y={cellHeight * i}
              className={clsx(
                "!border-none flex items-center justify-end text-3xl decoration-red-500",
                state.highlight && state.pos === state.N - i
                  ? "underline text-red-500"
                  : "text-black",
              )}>
              {state.C}
            </Rectangle>
          ),
        )}
        {range(state.N).map((i) =>
          state.N - i - 1 === state.allie ? null : (
            <Sprite
              src={carrot}
              alt="carota"
              x={cellWidth * 1.35}
              y={cellHeight * (i + 0.5) - 2}
              key={`carrot${i}`}
            />
          ),
        )}
        {range(state.N).map((i) => (
          <Rectangle
            color="transparent"
            width={cellWidth * 0.15}
            height={cellHeight}
            key={`rank${i}`}
            x={-cellWidth * 0.05}
            y={cellHeight * i}
            className="!border-none flex items-center justify-end text-[40px]">
            {state.N - i}.
          </Rectangle>
        ))}
        {range(state.N)
          .reverse()
          .map((i) => {
            const rank = state.N - i - 1;
            const delta = [
              state.stress[rank] === 0 ? 0 : 10,
              state.stress[rank] * cellHeight * 0.25,
            ];
            return (
              <Rectangle
                color="gray"
                width={cellWidth}
                height={cellHeight}
                key={`points${state.P[state.N - i - 1][1]}`}
                x={cellWidth * 0.1 + delta[0]}
                y={cellHeight * i + delta[1]}>
                <Rectangle
                  color={state.P[state.N - i - 1][2] === "Allie Muschio" ? "lightcoral" : "white"}
                  width={cellWidth * 0.6 - cellPadding}
                  height={cellHeight - 2 * cellPadding}
                  x={cellPadding}
                  y={cellPadding}
                  className="flex items-center justify-start text-4xl">
                  {state.P[state.N - i - 1][2]}
                </Rectangle>
                <Rectangle
                  color={state.P[state.N - i - 1][2] === "Allie Muschio" ? "lightcoral" : "white"}
                  width={cellWidth * 0.4 - cellPadding}
                  height={cellHeight - 2 * cellPadding}
                  x={cellWidth * 0.6}
                  y={cellPadding}
                  className="flex items-center justify-end text-[40px]">
                  {state.P[state.N - i - 1][0]} pts
                </Rectangle>
              </Rectangle>
            );
          })}
        <Sprite src={bunny} alt="Carol" x={73} y={(state.N - state.pos) * cellHeight} />
      </Canvas>
      <Variables
        variables={{
          ...variables,
          "N (num. giocatori)": state.N,
          "posizione di Allie": state.allie + 1,
          "carote spese": state.count,
        }}
      />
    </>
  );
}
