"use client";

import { range } from "lodash-es";

import { Canvas, Rectangle, Sprite, Variables } from "~/utils/visualizer";

import bunny from "./asy/bunny.asy?w=60";
import carrot from "./asy/carrot.asy?w=40";
import crate from "./asy/crate.asy?w=50";

export default function Visualizer({ variables, state }) {
  const cell_width = 50;
  const cell_height = 7;
  const cell_padding = 1;

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
        {range(state.N).map((i) => (
          <Rectangle
            color="invisible"
            width={cell_width*0.15}
            height={cell_height}
            key={"rank" + i}
            x={-cell_width*0.05}
            y={cell_height * i}
            className="border-none"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
              fontSize: 40,
            }}>
            {state.N - i}.
          </Rectangle>
        ))}
        {range(state.N).reverse().map((i) => {
          var rank = state.N-i-1;
          var delta = [state.stress[rank] == 0 ? 0 : 10, state.stress[rank]*cell_height*0.25];
          return (
            <Rectangle
              color="gray"
              width={cell_width}
              height={cell_height}
              key={"points" + state.P[state.N-i-1][1]}
              x={cell_width*0.1 + delta[0]}
              y={cell_height*i  + delta[1]}>
              <Rectangle
                color={"white"}
                width={cell_width*0.6 - cell_padding}
                height={cell_height - 2 * cell_padding}
                x={cell_padding}
                y={cell_padding}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",
                  fontSize: 35,
                }}>
                {state.P[state.N-i-1][2]}
              </Rectangle>
              <Rectangle
                color={"white"}
                width={cell_width*0.4 - cell_padding}
                height={cell_height - 2 * cell_padding}
                x={cell_width*0.6}
                y={cell_padding}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "right",
                  fontSize: 40,
                }}>
                {state.P[state.N-i-1][0]} pts
              </Rectangle>
            </Rectangle>
          );
        })}
        {range(state.N).map((i) => (
          <Sprite
            src={crate}
            alt="box"
            x={cell_width*1.15}
            y={cell_height * (i+0.5) - 3}
            key={"box" + i}
          />
        ))}
        {range(state.N).map((i) => (
          <Rectangle
            color="invisible"
            width={cell_width*0.12}
            height={cell_height}
            key={"cost" + i}
            x={cell_width*1.24}
            y={cell_height * i}
            className={"border-none" + (state.highlight && state.pos == state.N-i ? " underline" : "")}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
              fontSize: 30,
              color: state.highlight && state.pos == state.N-i ? "red" : "black",
              textDecorationColor: "red"
            }}>
            {state.C[state.N-i-1]}
          </Rectangle>
        ))}
        {range(state.N).map((i) => (
          <Sprite
            src={carrot}
            alt="carota"
            x={cell_width*1.35}
            y={cell_height * (i+0.5) - 2}
            key={"carrot" + i}
          />
        ))}
        <Sprite src={bunny} alt="Carol" x={73} y={(state.N-state.pos) * cell_height} />
      </Canvas>
      <Variables variables={{ ...variables, "N (num. giocatori)": state.N, "carote spese": state.count }} />
    </>
  );
}
