"use client";

import { Fragment } from "react";

import type { VisualizerProps } from "@olinfo/quizms-mdx/blockly-types";
import clsx from "clsx";

import { Canvas, Rectangle, Sprite, Variables } from "~/utils/visualizer";

import bunny from "./asy/bunny.asy?w=66";
import carol from "./asy/carol.asy?w=66";
import chiosco from "./asy/chiosco.asy";
import generico from "./asy/generico.asy?w=66";
import type { State } from "./s1.blocks";

export default function Visualizer({ variables, state }: VisualizerProps<State>) {
  const positions = Array.from({ length: state.N }, (_, i) => i + 1);

  if (state.N > 30) {
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

  const emptySpots = positions.filter((p) => p !== state.B && p !== state.C);

  const entities = [
    { id: "allie", type: "allie", pos: state.B, src: bunny, alt: "Allie" },
    { id: "carol", type: "carol", pos: state.C, src: carol, alt: "Carol" },

    ...emptySpots.map((pos, index) => ({
      id: `generic-${index}`,
      type: "generic",
      pos: pos,
      src: generico,
      alt: pos.toString(),
    })),
  ];

  return (
    <>
      <Sprite src={chiosco} x={0} y={5} alt={""} />

      <Canvas scale={130}>
        {entities.map((entity) => {
          const x = 0.7 + (entity.pos - 1) * 0.7;
          const boxSize = 0.2;

          return (
            <Fragment key={entity.id}>
              <Sprite src={entity.src} alt={entity.alt} x={x} y={0} follow />

              <Rectangle
                height={boxSize}
                width={boxSize}
                x={x + 0.16}
                y={0.9}
                borderColor="transparent">
                <div
                  className={clsx(
                    "flex h-full w-full items-center justify-center",
                    "text-s font-mono",
                  )}>
                  {entity.alt}
                </div>
              </Rectangle>
            </Fragment>
          );
        })}
      </Canvas>

      <Variables variables={{ ...variables, "N (num. conigli)": state.N }} />
    </>
  );
}
