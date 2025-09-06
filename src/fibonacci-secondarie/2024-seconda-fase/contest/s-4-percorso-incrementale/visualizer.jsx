"use client";

import clsx from "clsx";
import { range } from "lodash-es";

import { Canvas, Rectangle, Sprite, Variables } from "~/utils/visualizer";

import bunny from "./asy/bunny.asy?w=66";

class Random {
  constructor(seed) {
    this._seed = seed % 2147483647;
    if (this._seed <= 0) this._seed += 2147483646;
  }
  next() {
    this._seed = (this._seed * 16807) % 2147483647;
    return this._seed;
  }
}

export default function Visualizer({ variables, state }) {
  const cellSide = 20;
  const cellPadding = 1;
  const scale = 10;
  const fontHeight = 4;

  const random = new Random(state.N);
  const colors = ["orange", "lightgreen", "blue", "aquamarine", "yellow", "red"];
  const cellColor = range(state.N).map(() => colors[random.next() % colors.length]);
  return (
    <>
      <Canvas gravity="bottom" scale={scale}>
        {range(state.N).map((i) => (
          <Rectangle
            color="transparent"
            width={cellSide}
            height={cellSide}
            key={`rect${i}`}
            x={cellSide * i}
            y={2}>
            <Rectangle
              color={{ W: "white", B: cellColor[i] }[state.cols[i]]}
              width={cellSide - 2 * cellPadding}
              height={cellSide - 2 * cellPadding}
              x={cellPadding}
              y={cellPadding}
              className="flex items-center justify-center text-8xl">
              {i + 1}
            </Rectangle>
          </Rectangle>
        ))}
        <Sprite src={bunny} alt="Bunny" x={cellSide * (state.pos + 0.25) - 3.5} y={0} follow />
        <Rectangle
          x={Math.max(cellSide * state.pos, 40)}
          y={-fontHeight * state.M - 2}
          height={fontHeight * state.M + 2}
          width={30}
          className="p-2 rounded-lg">
          {range(state.M).map((i) => (
            <div
              key={`instr-${i}`}
              className={clsx("border-0 text-4xl font-mono", i === state.i && "font-bold")}>
              <pre>
                {`${(state.M > 9) && (i + 1 < 10) ? " " : ""}${i + 1}. ${{ S: "SALTA", A: "AVANZA" }[state.instr[i]]}`}
              </pre>
            </div>
          ))}
        </Rectangle>
      </Canvas>
      <Variables
        variables={{
          ...variables,
          "N (num. caselle)": state.N,
          "M (num. istruzioni)": state.M,
        }}
      />
    </>
  );
}
