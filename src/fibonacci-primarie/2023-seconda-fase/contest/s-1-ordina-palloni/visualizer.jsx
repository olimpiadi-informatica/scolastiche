"use client";

import { range } from "lodash-es";

import { Canvas, Sprite, Variables } from "~/utils/visualizer";

import bunny from "./asy/bunny.asy?w=66";
import shelf from "./asy/shelf.asy?h=170";
import trash from "./asy/trash.asy?w=120";

const balls = import.meta.glob("./asy/ball*.asy", {
  eager: true,
  import: "default",
  query: { w: 40 },
});

export default function Visualizer({ variables }) {
  const { variables, state } = variables;

  function position(i) {
    const batch = state.N > 20 ? 9 : 4;
    const step = state.N > 20 ? 0.2 : 0.4;
    let p = [0, 3];
    if (i >= state.pos) {
      p = [0.35 * (i - state.pos) + 2.4, 1.4];
    } else if (state.placement[i] > 0) {
      const col = (state.placement[i] - 1) % batch;
      const row = (state.placement[i] - 1 - col) / batch;
      p = [col * step + 0.08, 1.27 - row * 0.4];
    } else {
      const row = -state.placement[i] - 1;
      const col = ((7 * row) % 11) - 5;
      p = [1.6 + col * (0.04 + row * 0.001), 2.7 - row * 0.06];
    }
    if (state.balls[i] % 2) p[1] -= 0.14;
    return p;
  }

  return (
    <>
      <Canvas scale={130}>
        <Sprite src={shelf} alt="Scaffale" x={0} y={0.2} />
        {range(state.N).map((i) => (
          <Sprite
            key={i}
            src={balls[`./asy/ball${state.balls[i]}.asy`]}
            alt="Pallone"
            x={position(i)[0]}
            y={position(i)[1]}
          />
        ))}
        <Sprite src={bunny} alt="Tip-Tap" x={1.9} y={0.7} follow />
        <Sprite src={trash} alt="Cestino" x={1.3} y={1.8} />
      </Canvas>
      <Variables variables={variables} />
    </>
  );
}
