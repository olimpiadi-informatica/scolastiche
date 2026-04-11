"use client";

import { type CSSProperties, Fragment } from "react";

import type { VisualizerProps } from "@olinfo/quizms-mdx/blockly-types";
import clsx from "clsx";

import { Canvas, Rectangle, Sprite, Variables } from "~/utils/visualizer";

import bunny_blue from "./asy/bunny_blue.asy?w=80";
import bunny_green from "./asy/bunny_green.asy?w=80";
import bunny_lightblue from "./asy/bunny_lightblue.asy?w=80";
import bunny_mediumred from "./asy/bunny_mediumred.asy?w=80";
import bunny_pink from "./asy/bunny_pink.asy?w=80";
import bunny_purple from "./asy/bunny_purple.asy?w=80";
import bunny_yellow from "./asy/bunny_yellow.asy?w=80";
import taxi from "./asy/taxi.asy?h=200";
import type { State } from "./s2.blocks";

export default function Visualizer({ variables, state }: VisualizerProps<State>) {
  const colors: Record<string, typeof bunny_blue> = {
    "1": bunny_mediumred,
    "2": bunny_lightblue,
    "3": bunny_green,
    "4": bunny_blue,
    "5": bunny_pink,
    "6": bunny_purple,
    "7": bunny_yellow,
  };

  if (state.N > 20) {
    return (
      <>
        <div className="text-slate-800 p-4">
          La visualizzazione è disponibile solo per i primi 5 livelli.
        </div>
        <Variables
          variables={{
            "N (num. conigli)": state.N,
          }}
        />
      </>
    );
  }

  return (
    <>
      <Canvas scale={130}>
        {state.G.map((g, p) => {
          const src = colors[g.toString()];

          const isBoardingBunny = state.boardingBunny != null && p === state.boardingBunny;
          const x = 3 + (p - state.P) * 0.7;
          const y = 1;
          const y_label = 2;

          if (p < state.P) {
            return null;
          }

          const boxSize = 0.2;

          const boardingStyle: CSSProperties = {
            translate: isBoardingBunny ? `${(0 - x) * 80}px -41px` : "0px 0px",
            transition: "translate 0.6s ease-in-out",
          };

          return (
            <Fragment key={p}>
              <div style={boardingStyle}>
                <Sprite src={src} alt={`famiglia ${g}`} key={`coniglio-${p}`} x={x} y={y} />
              </div>

              {!isBoardingBunny && (
                <Rectangle
                  height={boxSize}
                  width={boxSize}
                  key={`etichetta-${p}`}
                  x={x + 0.22}
                  y={y_label}
                  borderColor="transparent"
                  className="flex size-full items-center justify-center font-mono">
                  {p + 1}
                </Rectangle>
              )}
            </Fragment>
          );
        })}

        <div
          style={{ "--taxi-translate-x": `${state.taxiVisualTranslateX ?? 0}px` } as CSSProperties}>
          <Sprite
            src={taxi}
            x={0}
            y={0.5}
            alt=""
            className={clsx(
              "translate-x-[var(--taxi-translate-x)]",
              state.taxiInstant ? "!transition-none" : "duration-700",
            )}
          />
        </div>
      </Canvas>

      <Variables variables={{ ...variables, "N (num. conigli)": state.N }} />
    </>
  );
}
