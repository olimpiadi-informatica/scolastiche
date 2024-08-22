"use client";

import { range } from "lodash-es";

import { Canvas, Sprite, Variables } from "~/utils/visualizer";

import bunny from "./asy/bunny.asy?w=66";
import chocolate from "./asy/chocolate.asy?w=25";

const bunnies = import.meta.glob("./asy/bunnies*.asy", {
  eager: true,
  import: "default",
  query: { w: 50 },
});

export default function Visualizer({ variables }) {
  const { variables, state } = variables;

  let { N, M, K, cuts } = state;
  if (N > 20 || M > 20) {
    return <div className="text-slate-800 p-4">La visualizzazione è disponibile solo per i primi 5 livelli.</div>;
  }

  const blocks = [];
  let xoffs = 1.5;
  let yoffs = 2;

  function chocblock(N0, N, M0, M) {
    for (let i = N0; i < N; ++i) {
      for (let j = M0; j < M; ++j) {
        blocks.push(
          <Sprite
            key={`${i}-${j}`}
            src={chocolate}
            alt="cioccolata"
            x={xoffs + i * 0.5}
            y={yoffs - j * 0.5}
          />,
        );
      }
    }
  }

  const sep = 0.15;
  chocblock(0, N, 0, M);
  for (let i = cuts.length - 1; i >= 0; --i) {
    const c = cuts[i];
    if (c > 0) {
      yoffs -= sep;
      chocblock(0, N, M, M + c);
      M += c;
    } else {
      xoffs += sep;
      chocblock(N, N - c, 0, M);
      N -= c;
    }
  }

  const len = Object.keys(bunnies).length;

  return (
    <>
      <Canvas scale={50} gravity="bottom">
        <Sprite src={bunny} alt="Tip-Tap" follow />
        {range(K).map((i) => (
          <Sprite
            key={"bunny-" + i}
            src={bunnies[`./asy/bunnies${i % len}.asy`]}
            alt="Bunny"
            x={2 + N * (0.5 + sep) + ((11 * i) % 19) * 0.4}
            y={-5 + (3 * i) / (K + cuts.length - 1)}
          />
        ))}
        {blocks}
      </Canvas>
      <Variables
        variables={{
          larghezza: N,
          altezza: M,
          compagni: K,
          ...variables,
        }}
      />
    </>
  );
}
