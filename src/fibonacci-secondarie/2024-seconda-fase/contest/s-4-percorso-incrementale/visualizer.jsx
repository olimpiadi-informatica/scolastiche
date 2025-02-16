"use client";

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
  const cell_side = 20;
  const cell_padding = 1;
  const scale = 10;
  const font_height = 4;

  const random = new Random(state.N);
  const colors = ["orange", "lightgreen", "blue", "aquamarine", "yellow", "red"];
  const cell_color = range(state.N).map(() => colors[random.next() % colors.length]);
  return (
    <>
      <Canvas gravity="bottom" scale={scale}>
        {range(state.N).map((i) => (
          <Rectangle
            color="transparent"
            width={cell_side}
            height={cell_side}
            key={"rect" + i}
            x={cell_side * i}
            y={2}>
            <Rectangle
              color={{ W: "white", B: cell_color[i] }[state.cols[i]]}
              width={cell_side - 2 * cell_padding}
              height={cell_side - 2 * cell_padding}
              x={cell_padding}
              y={cell_padding}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 10 * scale,
              }}>
              {i + 1}
            </Rectangle>
          </Rectangle>
        ))}
        <Sprite src={bunny} alt="Bunny" x={cell_side * (state.pos + 0.25) - 3.5} y={0} follow />
        <Rectangle
          style={{
            padding: "5px",
            textAlign: "center",
            borderRadius: "10px",
          }}
          x={Math.max(cell_side * state.pos, 40)}
          y={-font_height * state.M - 2}
          height={font_height * state.M + 2}
          width={30}>
          {range(state.M).map((i) => (
            <Rectangle
              key={`instr-${i}`}
              style={{
                border: "None",
                textAlign: "center",
                fontSize: `${scale * font_height}px`,
                lineHeight: `${scale * font_height}px`,
                fontWeight: i === state.i ? "bold" : "normal",
                fontFamily: "monospace",
              }}
              y={(-i + state.M - 1) * font_height + 1}
              x={1}
              width="100%">
              <pre>
                {`${(state.M > 9) && (i + 1 < 10) ? " " : ""}${i + 1}. ${{ S: "SALTA", A: "AVANZA" }[state.instr[i]]}`}
              </pre>
            </Rectangle>
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
