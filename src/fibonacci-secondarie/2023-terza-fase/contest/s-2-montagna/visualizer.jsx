"use client";

import { curveBumpX, line } from "d3-shape";
import { Fragment } from "react";

import { Canvas, Rectangle, Sprite, Variables } from "~/utils/visualizer";

import bunny from "./asy/bunny.asy?w=50";
import offcharge from "./asy/offcharge.asy?w=20";
import oncharge from "./asy/oncharge.asy?w=20";

export default function Visualizer({ variables, state }) {
  const { H, N, posx, rot } = state;

  if (N > 40) {
    return (
      <div className="text-slate-800 p-4">
        La visualizzazione è disponibile solo per i primi 5 livelli.
      </div>
    );
  }

  const maxH = Math.max(...H);

  const p = (y) => (8 * y) / maxH;

  const mountainCurve = line()
    .x((_h, i) => i)
    .y((h) => p(h))
    .curve(curveBumpX);

  const mountains = mountainCurve([-maxH / 8, ...state.H, -maxH / 8]);

  return (
    <>
      <Canvas scale={40}>
        <Rectangle
          width={N + 0.65}
          height={0.2}
          x={0.25}
          y={p(maxH) + 2.1}
          className="bg-gradient-to-b from-amber-800/80 to-white !border-0"
        />
        <Rectangle width={N + 1} height={p(maxH) + 1} x={0} y={1.1} className="!border-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 -0.9 ${N + 1} ${p(maxH) + 1}`}
            className="-scale-y-100">
            <title>I conigli attraversano la montagna</title>
            <path d={mountains} className="fill-amber-800/80" />
            {H.map((h, i) => {
              if (h < H[i - 1] || h < H[i + 1]) return;
              return (
                <Fragment key={i}>
                  <ellipse cx={i + 0.7} cy={p(h)} rx=".6" ry="0.6" fill="white" />
                  <ellipse cx={i + 1} cy={p(h) - 0.1} rx=".4" ry="0.4" fill="white" />
                </Fragment>
              );
            })}
            <path d={mountains} fillOpacity={0} strokeWidth={0.06} className="stroke-amber-900" />
          </svg>
        </Rectangle>
        <Sprite
          src={bunny}
          x={posx + 0.8}
          y={p(maxH - H[posx])}
          alt="Tip-Tap"
          rotation={(-0.5 * rot) / Math.PI}
          follow
        />
        {H.map((h, i) => (
          <Sprite
            key={i}
            src={i === posx && state.charging ? oncharge : offcharge}
            x={i + 0.6}
            y={p(maxH - h) + 0.1}
            alt="Stazione di ricarica"
          />
        ))}
      </Canvas>
      <Variables
        variables={{
          N: state.N,
          energia: state.energy,
          tempo: state.time,
          ...variables,
        }}
      />
    </>
  );
}
