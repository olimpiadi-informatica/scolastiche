"use client";

import { Fragment } from "react";

import { Canvas, Rectangle, Sprite, Variables } from "~/utils/visualizer";

import bunny from "./asy/bunny.asy?w=50";
import offcharge from "./asy/offcharge.asy?w=20";
import oncharge from "./asy/oncharge.asy?w=20";

export default function Visualizer({ variables }) {
  const { blocklyVariables, hiddenState } = variables;

  /**@type {number[]} */
  const H = [0, ...hiddenState.H];
  const N = H.length;

  if (N > 40) {
    return <div className="text-slate-800 p-4">La visualizzazione è disponibile solo per i primi 5 livelli.</div>;
  }

  const maxH = Math.max(...H);

  const p = (y) => (8 * y) / maxH;

  let mountains = "M 0.1,-1";
  mountains += "Q 0,0 0.5,0";
  for (let i = 1; i < N; i++) {
    mountains += `S ${i - 0.5},${p(H[i])} ${i},${p(H[i])}`;
  }
  mountains += `S ${N},2 ${N - 0.1},-1`;

  return (
    <>
      <Canvas scale={40}>
        <Rectangle borderColor="transparent" width={N} height={p(maxH) + 1} x={0} y={1.1}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 -0.9 ${N} ${p(maxH) + 1}`}
            className="-scale-y-100">
            <path d={mountains} className="fill-amber-800/80" />
            {H.slice(1).map((h, i) => {
              if (h < H[i] || h < H[i + 2]) return;
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
          x={hiddenState.posx + 0.8}
          y={p(maxH - H[hiddenState.posx + 1])}
          alt="Tip-Tap"
          follow
        />
        {H.slice(1).map((h, i) => (
          <Sprite
            key={i}
            src={i === hiddenState.posx && hiddenState.charging ? oncharge : offcharge}
            x={i + 0.6}
            y={p(maxH - h) + 0.1}
            alt="Stazione di ricarica"
          />
        ))}
      </Canvas>
      <Variables
        variables={{
          N: hiddenState.N,
          energia: hiddenState.energy,
          tempo: hiddenState.time,
          ...blocklyVariables,
        }}
      />
    </>
  );
}
