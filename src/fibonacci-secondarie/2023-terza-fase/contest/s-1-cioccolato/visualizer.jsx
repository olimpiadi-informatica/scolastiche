import React from "react";
import { range } from "lodash-es";

import { Canvas, Sprite, Rectangle, Variables } from "~/utils/visualizer";

import bunny from "./asy/bunny.asy?w=66";
import chocolate from "./asy/chocolate.asy?w=25";

const bunnies = import.meta.glob("./asy/bunnies*.asy", {
  eager: true,
  import: "default",
  query: { w: 50 },
});

export default function Visualizer({ variables }) {
  const { blocklyVariables, hiddenState } = variables;
  if (!hiddenState) return;

  var blocks = [];
  var xoffs = 1.5;
  var yoffs = 9;
  var sep = 0.15;

  function chocblock(N0, N, M0, M, name="cioc") {
    for (var i=N0; i<N; ++i)
      for (var j=M0; j<M; ++j)
        blocks.push(<Sprite key={name+'-'+i+'-'+j} src={chocolate} alt={name+'-'+i+'-'+j} x={xoffs+i*0.5} y={yoffs-j*0.5} />)
  }

  var N = hiddenState.N;
  var M = hiddenState.M;
  if (N <= 20 && M <= 20) {
    chocblock(0, N, 0, M);
    for (var i=hiddenState.cuts.length-1; i>=0; --i) {
      var c = hiddenState.cuts[i];
      if (c > 0) {
        yoffs -= sep;
        chocblock(0, N, M, M+c);
        M += c;
      } else {
        xoffs += sep;
        chocblock(N, N-c, 0, M);
        N -= c;
      }
    }
  }

  var len = Object.keys(bunnies).length;

  return (
    <>
      <Canvas scale={50}>
        <Sprite src={bunny} alt="Tip-Tap" x={0} y={yoffs-2} follow />
        {range(N <= 20 && M <= 20 ? hiddenState.K : 0).map((i) => {
          return <Sprite key={"bunny-"+i} src={bunnies[`./asy/bunnies${i%len}.asy`]} alt="Bunny" x={2+N*(0.5+sep)+((11*i)%19)*0.4} y={4+3*i/(hiddenState.K+hiddenState.cuts.length-1)} />
        })}
        {blocks}
      </Canvas>
      <Variables variables={{larghezza: hiddenState.N, altezza: hiddenState.M, compagni: hiddenState.K, ...blocklyVariables}} />
    </>
  );
}
