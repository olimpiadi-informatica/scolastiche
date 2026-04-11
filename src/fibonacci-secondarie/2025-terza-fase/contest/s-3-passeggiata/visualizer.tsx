"use client";

import { Fragment } from "react";

import type { VisualizerProps } from "@olinfo/quizms-mdx/blockly-types";
import clsx from "clsx";
import { curveBumpX, line } from "d3-shape";

import { Canvas, Rectangle, Sprite, Variables } from "~/utils/visualizer";

import chiosco from "./asy/chiosco.asy?w=40";
import flag from "./asy/flag.asy?w=40";
import panini from "./asy/panini.asy?w=24";
import panini_grandi from "./asy/panini.asy?w=40";
import TipTap from "./asy/tip-tap.asy?w=50";
import type { State } from "./s3.blocks";

const W = 2.5;

export default function Visualizer({ variables, state }: VisualizerProps<State>) {
  const { N, H, P, L, carote, posizione } = state;

  const displayBurgers = carote ?? 0;

  if (N > 10) {
    return (
      <>
        <div className="text-slate-800 p-4">
          La visualizzazione è disponibile solo per i primi 5 livelli.
        </div>
        <Variables
          variables={{
            "N (num. chioschi)": N,
          }}
        />
      </>
    );
  }

  const safeH = H || Array(N + 1).fill(0);
  const maxH = Math.max(...safeH, 1);

  const p = (y: number) => (8 * y) / maxH;

  const mountainCurve = line<number>()
    .x((_h: number, i: number) => i * W)
    .y((h: number) => p(h))
    .curve(curveBumpX);

  const mountains = mountainCurve([-maxH / 8, ...safeH, -maxH / 8]);

  const xPos = (i: number) => (i + 1) * W;

  const rawPos = Math.floor(posizione ?? state.roccia ?? 1);
  const nodeIndex = Math.max(0, rawPos - 1);

  const tipTapY = p(maxH - (safeH[nodeIndex] ?? 0));

  return (
    <>
      <Canvas scale={50}>
        <Rectangle
          width={(N + 2) * W}
          height={0.2}
          x={0.25}
          y={p(maxH) + 2.1}
          className="bg-gradient-to-b from-amber-800/80 to-white !border-0"
        />

        <Rectangle width={(N + 2) * W} height={p(maxH) + 1} x={0} y={1.1} className="!border-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 -0.9 ${(N + 2) * W} ${p(maxH) + 1}`}
            className="-scale-y-100">
            <title>Tip-Tap attraversa la montagna</title>
            <path d={mountains!} className="fill-amber-800/80" />
            {safeH.map((h: number, i: number) => {
              if (h < safeH[i - 1] || h < safeH[i + 1]) return null;
              return (
                <Fragment key={i}>
                  <ellipse cx={xPos(i) - 0.3} cy={p(h)} rx=".6" ry="0.6" fill="white" />
                  <ellipse cx={xPos(i)} cy={p(h) - 0.1} rx=".4" ry="0.4" fill="white" />
                </Fragment>
              );
            })}
            <path d={mountains!} fillOpacity={0} strokeWidth={0.06} className="stroke-amber-900" />
          </svg>
        </Rectangle>

        {safeH.map((h: number, i: number) => {
          const idx = i + 1;
          const isLast = i === safeH.length - 1;

          const price = !isLast && P && P[idx] != null ? `${P[idx].toString()}🥕` : null;
          const length = !isLast && L && L[idx] != null ? L[idx].toString() : null;

          const spriteY = p(maxH - h) + 0.1;

          const midX = xPos(i) + W / 2;
          const nextH = safeH[i + 1] ?? h;
          const midY = p(maxH - (h + nextH) / 2) + 0.5;

          return (
            <Fragment key={idx}>
              {isLast ? (
                <Sprite src={flag} x={xPos(i)} y={spriteY} alt="Chiosco" />
              ) : (
                <>
                  <Sprite src={chiosco} x={xPos(i) - 0.4} y={spriteY + 0.15} alt="Chiosco" />

                  {price && (
                    <Rectangle
                      height={0.5}
                      width={0.9}
                      x={xPos(i) - 0.45}
                      y={spriteY - 0.5}
                      borderColor="black"
                      className="bg-white/90 shadow-sm">
                      <div
                        className={clsx(
                          "flex h-full w-full items-center justify-center",
                          "text-s font-mono font-bold",
                        )}>
                        {price}
                      </div>
                    </Rectangle>
                  )}

                  {length && (
                    <>
                      <Rectangle
                        height={0.5}
                        width={1.2}
                        x={midX - 0.45}
                        y={midY}
                        borderColor="black"
                        className="bg-white/90 shadow-sm">
                        <div
                          className={clsx(
                            "flex h-full w-full items-center justify-center pr-6",
                            "text-s font-mono font-bold",
                          )}>
                          {length}
                        </div>
                      </Rectangle>

                      <Sprite src={panini} x={midX + 0.05} y={midY + 0.12} alt="Panini" />
                    </>
                  )}

                  <Rectangle
                    height={0.27}
                    width={0.27}
                    x={xPos(i) - 0.13}
                    y={spriteY + 0.77}
                    borderColor="transparent">
                    <div
                      className={clsx(
                        "flex h-full w-full items-center justify-center",
                        "text-xs font-mono text-slate-700",
                      )}>
                      {idx.toString()}
                    </div>
                  </Rectangle>
                </>
              )}
            </Fragment>
          );
        })}

        {Array.from({ length: displayBurgers }).map((_, i) => (
          <Sprite
            key={`burger-pile-${i}`}
            src={panini_grandi}
            x={xPos(nodeIndex) - 1.5}
            y={tipTapY + 0.9 - i * 0.32}
            alt="Panini in mano"
            follow
          />
        ))}

        <Sprite src={TipTap} alt="Tip-Tap" x={xPos(nodeIndex) - 1} y={tipTapY - 0.2} follow />
      </Canvas>
      <Variables
        variables={{
          ...variables,
          "N (num. chioschi)": N,
          panini: carote,
          posizione: posizione,
        }}
      />
    </>
  );
}
