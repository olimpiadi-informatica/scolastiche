"use client";

import type { VisualizerProps } from "@olinfo/quizms-mdx/blockly-types";

import { Canvas, Sprite, Variables } from "~/utils/visualizer";

import bunny from "./asy/bunny.asy?w=66";
import fcarrot from "./asy/fcarrot.asy?w=25";
import fibonacci from "./asy/fibonacci.asy?h=100";
import tcarrot from "./asy/tcarrot.asy?w=25";
import turing from "./asy/turing.asy?h=100";
import type { State } from "./s3.blocks";

export default function Visualizer({ variables, state }: VisualizerProps<State>) {
  const teams = new Map();
  teams.set("Fibonacci", fibonacci);
  teams.set("Turing", turing);
  const carrots = new Map();
  carrots.set("Fibonacci", fcarrot);
  carrots.set("Turing", tcarrot);

  return (
    <>
      <Canvas scale={10}>
        <Sprite src={bunny} alt="Allie" x={15} y={10} follow />
        {state.queue.flatMap((rabbit, i) => (
          <Sprite
            key={`rabbit${rabbit.height}`}
            src={teams.get(rabbit.farm)}
            alt={rabbit.farm}
            x={i * 5 + 25}
            y={state.offset === i ? 0 : 10}
            scaleY={rabbit.height / 28}
            className="origin-bottom"
          />
        ))}
        {state.queue.flatMap((rabbit, i) => (
          <Sprite
            key={`carrot${rabbit.height}`}
            src={carrots.get(rabbit.farm)}
            alt="carrot"
            x={i * 5 + 28.8}
            y={(state.offset === i ? 0 : 10) + 8.2 - rabbit.height * 0.075}
            className="origin-bottom"
          />
        ))}
        {state.pairs.map((pair, y) =>
          pair.map((rabbit, x) => (
            <Sprite
              key={rabbit.height}
              src={teams.get(rabbit.farm)}
              alt={rabbit.farm}
              x={x * 5}
              y={8 * (y - state.pairs.length) + 18}
              scaleY={rabbit.height / 28}
              className="origin-bottom"
            />
          )),
        )}
        {state.pairs.map((pair, y) =>
          pair.map((rabbit, x) => (
            <Sprite
              key={`carrot${rabbit.height}`}
              src={carrots.get(rabbit.farm)}
              alt="carrot"
              x={x * 5 + 3.8}
              y={8 * (y - state.pairs.length) + 18 + 8.2 - rabbit.height * 0.075}
              className="origin-bottom"
            />
          )),
        )}
      </Canvas>
      <Variables variables={{ ...variables, "N (num. conigli)": state.N }} />
    </>
  );
}
