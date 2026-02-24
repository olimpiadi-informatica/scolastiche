"use client";

import type { VisualizerProps } from "@olinfo/quizms-mdx/blockly-types";
import clsx from "clsx";
import range from "lodash-es/range";

import { Canvas, Rectangle, Sprite, Variables } from "~/utils/visualizer";

import apple from "./asy/apple.asy?w=40";
import bunny from "./asy/bunny.asy?w=66";
import bunny2 from "./asy/bunny2.asy?w=66";
import type { State } from "./s4.blocks";

export default function Visualizer({ variables, state }: VisualizerProps<State>) {
  return (
    <>
      <Canvas scale={10}>
        <Sprite key={"tip-tap"} src={bunny} alt="" x={10 * state.pos} y={25} />

        {range(state.N).map((i) => (
          <Sprite key={`bunny_shop_${i}`} src={bunny2} alt="" x={10 * i} y={10} />
        ))}

        {range(state.N).map((i) => {
          const pos = state.pos_mela ? state.pos_mela[i] : i;
          return (
            <Sprite
              key={`apple${i}`}
              src={apple}
              alt=""
              x={10 * pos + (state.mela_trasportata === i || pos === i ? 2.4 : 1.2)}
              y={state.mela_trasportata === i ? 32 : pos === i ? 17 : 16.7}
            />
          );
        })}

        {range(state.N).map((i) => {
          const azione = state.azioni ? state.azioni[i] : null;

          let bgClass = "bg-amber-100 border-amber-500";
          let textClass = "text-amber-800";
          let label = "Prezzo";

          if (azione === "comprato") {
            bgClass = "bg-green-100 border-green-600 shadow-green-200";
            textClass = "text-green-800";
            label = "COMPRATO";
          } else if (azione === "venduto") {
            bgClass = "bg-red-100 border-red-600 shadow-red-200";
            textClass = "text-red-800";
            label = "VENDUTO";
          }

          return (
            <Rectangle
              key={`rect${i}`}
              height={5.5}
              width={8}
              x={10 * i}
              y={3}
              borderColor="transparent">
              <div
                className={clsx(
                  "flex flex-col items-center justify-center size-full",
                  "border-2 rounded-lg shadow-md transition-colors duration-300",
                  "relative",
                  bgClass,
                )}>
                <span
                  className={clsx(
                    "text-[0.6rem] font-bold uppercase tracking-wide mt-2",
                    textClass,
                  )}>
                  {label}
                </span>

                <span
                  className={clsx(
                    "text-2xl font-mono font-bold leading-none pb-1",
                    azione ? "text-gray-800" : "text-gray-900",
                  )}>
                  {state.prezzo[i]}€
                </span>
              </div>
            </Rectangle>
          );
        })}
      </Canvas>
      <Variables variables={{ ...variables, "N (num. conigli)": state.N }} />
    </>
  );
}
