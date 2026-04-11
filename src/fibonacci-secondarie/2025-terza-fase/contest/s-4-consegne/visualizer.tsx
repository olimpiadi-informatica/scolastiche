"use client";

import { Fragment } from "react";

import type { VisualizerProps } from "@olinfo/quizms-mdx/blockly-types";
import { range } from "lodash-es";

import { Canvas, Rectangle, Sprite, Variables } from "~/utils/visualizer";

import arrow from "./asy/arrow.asy?w=120";
import boat from "./asy/boat.asy?w=250";
import bunny from "./asy/bunny.asy?w=40";
import crate from "./asy/crate.asy?w=100";
import kiosk from "./asy/kiosk.asy?w=100";
import van from "./asy/van.asy?w=200";
import type { State } from "./s4.blocks";

export default function Visualizer({ variables, state }: VisualizerProps<State>) {
  if (state.N > 20) {
    return (
      <>
        <div className="text-slate-800 p-4">
          La visualizzazione è disponibile solo per i primi 5 livelli.
        </div>
        <Variables
          variables={{
            "N (num. casse)": state.N,
            "M (max penale)": state.M,
          }}
        />
      </>
    );
  }

  return (
    <>
      <Canvas scale={130} bbox={[-2, undefined, undefined, undefined]}>
        {range(state.N + 1).map((i) => (
          <Rectangle
            color="black"
            borderColor="gray"
            width={0.8}
            height={0.5}
            key={`lavagna${i}`}
            x={1 + 2 * (i - state.time)}
            y={-1}
            className="flex items-center justify-center text-3xl text-white">
            {state.L[i]}
          </Rectangle>
        ))}
        {range(state.N + 1).map((i) => (
          <Rectangle
            color="invisible"
            borderColor="invisible"
            width={0.8}
            height={0.2}
            key={`lavagna${i}`}
            x={1 + 2 * (i - state.time)}
            y={-0.5}
            className="flex items-center justify-center text-xl">
            {i}
          </Rectangle>
        ))}
        {range(state.N).map((i) => {
          return (
            state.next[i] !== i && (
              <Sprite
                src={arrow}
                alt="freccia"
                x={2 * (i - state.time) + 0.94 + (state.next[i] - i) * 0.89}
                y={-1.0 - (state.next[i] - i) * 0.15}
                scaleX={2 * (state.next[i] - i)}
                scaleY={2 * (state.next[i] - i)}
                key={`freccia${i}`}
              />
            )
          );
        })}
        {range(state.N).map((i) => {
          const x =
            3 +
            2 *
              (i >= state.time
                ? i - state.time
                : i < state.sent
                  ? -2.7
                  : state.pos === -1
                    ? -1.2
                    : -0.7);
          const y = i >= state.sent ? 0.1 : -0.4 * i;
          return (
            <Fragment key={i}>
              <Sprite src={crate} alt="Cassa" key={`crate${i}`} x={x} y={y} />
              <Rectangle
                color="invisible"
                borderColor="invisible"
                width={0.8}
                height={0.5}
                key={`cassa${i}`}
                x={x - 0.02}
                y={y - 0.173}
                className="flex items-center justify-center text-xl">
                {i + 1}
              </Rectangle>
              <Rectangle
                width={0.4}
                height={0.25}
                key={`penale${i}`}
                x={x + 0.18}
                y={y + 0.22}
                className="flex items-center justify-center text-3xl">
                {state.P[i]}
              </Rectangle>
              <Sprite
                src={boat}
                alt="Barca"
                key={`boat${i}`}
                x={2.7 + 2 * (i >= state.time ? i - state.time : state.N + 1 - state.time)}
                y={i >= state.time ? 0.32 : 0.6}
              />
            </Fragment>
          );
        })}
        <Sprite
          src={bunny}
          alt="Tip-Tap"
          x={state.pos >= 0 ? 0.8 + 2 * state.pos : state.pos * 1.5 + 2}
          y={state.pos >= 0 ? -0.8 : 0}
          follow
        />
        <Sprite src={kiosk} alt="Kiosk" x={-2} y={-0.3} />
        <Sprite src={van} alt="Camion" x={state.pos === -2 ? -1.5 : 0} y={0} />
      </Canvas>
      <Variables
        variables={{
          ...variables,
          "N (num. casse)": state.N,
          "M (max penale)": state.M,
          "in stazionamento": state.cargo,
          "tot. spese": state.cost,
        }}
      />
    </>
  );
}
