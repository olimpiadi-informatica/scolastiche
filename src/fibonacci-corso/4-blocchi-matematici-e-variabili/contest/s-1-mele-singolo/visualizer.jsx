"use client";

import { Fragment } from "react";

import clsx from "clsx";
import { range } from "lodash-es";

import { Canvas, Rectangle, Sprite, Variables } from "~/utils/visualizer";

import tiptapRight from "./asy/tiptap-right.asy?w=66";
import tree from "./asy/tree.asy?w=250";
import apple from "./asy/apple.asy?w=20";
import bucket from "./asy/bucket.asy?w=50";

export default function Visualizer({ variables, state }) {

  var count = 0;
  let offs = Math.floor(state.res/state.M)*25+7;

  return (
    <>
      <Canvas gravity="bottom" scale={10}>
        {range(state.N).flatMap((i) => {
          return (
            <Sprite
              key={`albero${i}`}
              src={tree}
              alt="Albero"
              x={i*25 + 10}
              y={0}
              className="origin-bottom"
            />
          );
        })}
        <Sprite
          key="tiptap"
          src={tiptapRight}
          alt="Tip-Tap"
          x={offs}
          y={4}
          follow
        />
        {range(state.N).flatMap((i) => {
          return range(state.M).map((k) => {
            count += 1;
            return (
              <Sprite
                key={`mela${i}-${k}`}
                src={apple}
                alt="Mela"
                x={count <= state.res ? 3.4+((count-1)%3) + offs : i*25 + 12 + 22*k/state.M}
                y={count <= state.res ? 2.3+Math.floor((count-1)/3)*1.5 : 17 + ((5*k+i) % 7)}
                className="origin-bottom"
              />
            );
          });
        })}
        <Sprite
          key="cestino"
          src={bucket}
          alt="Cestino"
          x={offs+3}
          y={state.C*0.3-0.7}
          scaleY={(state.C+1)*0.1}
        />
      </Canvas>
      <Variables
        variables={{
          ...variables,
          "N (num. alberi)": state.N,
          "M (mele per albero)": state.M,
          "C (max. cestino)": state.C,
          "Mele raccolte": state.res,
        }}
      />
    </>
  );
}
