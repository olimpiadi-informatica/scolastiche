"use client";

import type { VisualizerProps } from "@olinfo/quizms-mdx/blockly-types";
import { range } from "lodash-es";

import { Canvas, Rectangle, Sprite, Variables } from "~/utils/visualizer";

import bunny from "./asy/bunny.asy?w=45";
import carrot from "./asy/carrot.asy?w=40";

const content = import.meta.glob("./asy/content*.asy", {
  eager: true,
  import: "default",
  query: { w: 60 },
});

import type { State } from "./s1.blocks";

export default function Visualizer({ variables, state }: VisualizerProps<State>) {
  const cellSide = 10;
  const bufSize = 4;

  return (
    <>
      <Canvas scale={10}>
        <Rectangle
          color="transparent"
          borderColor="brown"
          thickness={10}
          className="rounded-lg"
          width={cellSide * state.N + 2 * bufSize}
          height={cellSide * state.N + 2 * bufSize}
          key={"rect"}
          x={5 - bufSize}
          y={-cellSide * (state.N - 1) - bufSize}
        />
        <Rectangle
          color="silver"
          thickness={6}
          width={cellSide * state.N + 2.6}
          height={cellSide * state.N + 2.6}
          key={"rect-border"}
          x={5 - 1.3}
          y={-cellSide * (state.N - 1) - 1.3}
        />
        {range(state.N).map((i) =>
          range(state.N).map((j) => (
            <Rectangle
              color="sienna"
              thickness={3}
              height={cellSide - 2}
              width={cellSide - 2}
              key={`rect${i}-${j}`}
              x={5 + cellSide * i + 1}
              y={-cellSide * j + 1}>
              <Sprite
                key={`bush${i}-${j}`}
                src={
                  content[
                    `./asy/content${((((i + state.N * j) * 7 + 5) % 33) + (((i + state.N * j) * 11 + 8) % 17)) % 4}.asy`
                  ]
                }
                alt="cespuglio"
                x={cellSide * 0.2 - 1}
                y={cellSide * 0.17 - 1}
              />
            </Rectangle>
          )),
        )}
        <Sprite
          src={bunny}
          alt="Carol"
          x={3 + cellSide * state.x - 2.5 * state.dy}
          y={-cellSide * state.y + 6 - 2.5 * state.dx}
          rotation={state.a}
        />
        {!state.eat && (
          <Sprite
            src={carrot}
            alt="Carrot"
            key="carrot"
            x={cellSide * state.N + 3.5}
            y={-cellSide * state.N + 8.0}
          />
        )}
      </Canvas>
      <Variables variables={{ ...variables, "N (lato griglia)": state.N }} />
    </>
  );
}
