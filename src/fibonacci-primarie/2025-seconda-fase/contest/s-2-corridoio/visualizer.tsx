"use client";

import type { VisualizerProps } from "@olinfo/quizms-mdx/blockly-types";

import clsx from "clsx";
import { range } from "lodash-es";

import { Canvas, Rectangle, Sprite, Variables } from "~/utils/visualizer";

import bulbOff from "./asy/bulb-off.asy?w=30";
import bulbOn from "./asy/bulb-on.asy?w=30";
import bunnyLeft from "./asy/bunny-left.asy?w=66";
import bunnyRight from "./asy/bunny-right.asy?w=66";
import carrot from "./asy/carrot.asy?w=40";

import type { State } from "./s2.blocks";

export default function Visualizer({ variables, state }: VisualizerProps<State>) {
  const height = 24;
  const width = 18;
  const grays = ["#222", "#555", "#888", "#bbb", "#eee"];

  return (
    <>
      <Canvas scale={10}>
        {range(state.N).map((i) => {
          const light = state.light[i] ? 4 : 1;
          return (
            <Rectangle
              key={`rect${i}`}
              color={grays[light]}
              height={height}
              width={width}
              x={width * (i)}
              y={6}
            >
              <div
                className={clsx(
                  "absolute mt-1 size-full origin-bottom text-center text-2xl underline",
                  light >= 2 ? "text-black decoration-black" : "text-white decoration-white",
                )}>
                {i + 1}
              </div>
            </Rectangle>
          );
        })}
        {range(state.N).map((i) => (
          <Sprite
            key={`bulb${i}`}
            src={state.light[i] ? bulbOn : bulbOff}
            alt=""
            x={width * (i + 0.5) - 1.5}
            y={10}
          />
        ))}
        <Sprite
          key="bunny"
          src={state.dir === 1 ? bunnyRight : bunnyLeft}
          alt="Bunny"
          x={width * (state.pos + 0.5 - 0.2)}
          y={20}
          follow
        />
        {range(state.N).map((i) => ( state.carrot[i] &&
          <Sprite
            key={`carrot${i}`}
            src={carrot}
            alt=""
            x={width * (i + 0.4)}
            y={27}
          />
        ))}
      </Canvas>
      <Variables variables={{ ...variables, "N (num. stanze)": state.N }} />
    </>
  );
}
