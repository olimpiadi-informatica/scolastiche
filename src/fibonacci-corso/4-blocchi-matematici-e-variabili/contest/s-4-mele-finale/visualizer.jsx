"use client";

import { range } from "lodash-es";

import { Canvas, Sprite, Variables } from "~/utils/visualizer";

import apple from "./asy/apple.asy?w=20";
import bucket from "./asy/bucket.asy?w=50";
import tiptapRight from "./asy/tiptap-right.asy?w=66";
import tree from "./asy/tree.asy?w=250";

export default function Visualizer({ variables, state }) {
  var bcount = 0;
  var bcurr = 0;
  var count = 0;
  const offs = state.pos * 25 + 7;

  function getBucketX(i) {
    if (i === state.basket) {
      return offs + 3;
    }
    if (i < state.basket) {
      return 8 + 6 * i;
    }
    return 6 - 4.5 * (i - state.basket);
  }
  function getBucketY(i) {
    const base = state.C[i] * 0.3 - 0.7;
    if (i === state.basket) {
      return base;
    }
    if (i < state.basket) {
      return base - 4;
    }
    return base + 4;
  }

  return (
    <>
      <Canvas gravity="bottom" scale={10}>
        {range(state.N).flatMap((i) => {
          return (
            <Sprite
              key={`albero${i}`}
              src={tree}
              alt="Albero"
              x={i * 25 + 10}
              y={0}
              className="origin-bottom"
            />
          );
        })}
        <Sprite key="tiptap" src={tiptapRight} alt="Tip-Tap" x={offs} y={4} follow />
        {range(state.N).flatMap((i) => {
          return range(state.M[i]).map((k) => {
            count += 1;
            if (count > bcount + state.apples[bcurr]) {
              bcount += state.apples[bcurr];
              bcurr += 1;
            }
            return (
              <Sprite
                key={`mela${i}-${k}`}
                src={apple}
                alt="Mela"
                x={
                  count <= state.res
                    ? getBucketX(bcurr) + ((count - bcount - 1) % 3) + 0.4
                    : i * 25 + 12 + (22 * k) / state.M[i]
                }
                y={
                  count <= state.res
                    ? 2.3 +
                      Math.floor((count - bcount - 1) / 3) * 1.5 -
                      (bcurr < state.basket ? 4 : 0)
                    : 17 + ((5 * k + i) % 7)
                }
                className="origin-bottom"
              />
            );
          });
        })}
        {range(state.K).flatMap((i) => {
          return (
            <Sprite
              key={`cestino-${i}`}
              src={bucket}
              alt="Cestino"
              x={getBucketX(i)}
              y={getBucketY(i)}
              scaleY={(state.C[i] + 1) * 0.1}
            />
          );
        })}
      </Canvas>
      <Variables
        variables={{
          ...variables,
          "N (num. alberi)": state.N,
          "K (num. cestini)": state.K,
          "Mele raccolte": state.res,
        }}
      />
    </>
  );
}
