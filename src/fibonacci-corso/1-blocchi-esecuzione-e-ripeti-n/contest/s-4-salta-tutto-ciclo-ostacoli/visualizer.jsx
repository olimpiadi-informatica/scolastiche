"use client";

import { range } from "lodash-es";

import { Canvas, Sprite, Variables } from "~/utils/visualizer";

import bunny from "./asy/bunny.asy?w=66";
import flag from "./asy/flag.asy?w=80";
import flatRock from "./asy/flat_rock.asy?w=120";
import rock from "./asy/rock.asy?w=120";

export default function Visualizer({ variables, state }) {
  if (state.N > 50) {
    return (
      <div className="text-slate-800 p-4">
        La visualizzazione è disponibile solo per i primi 5 livelli.
      </div>
    );
  }

  return (
    <>
      <Canvas scale={130}>
        {range(state.rocks.length).map((i) => {
          return (
            <Sprite
              key={i}
              src={state.rocks[i] ? rock : flatRock}
              alt={state.rocks[i] ? "ostacolo" : "percorso"}
              x={i}
              y={state.rocks[i] ? 0.9 : 1.5}
            />
          );
        })}
        <Sprite src={bunny} alt="Tip-Tap" x={state.pos + 0.2} y={0.8 - state.flight} follow />
        <Sprite src={flag} alt="Bandierina" x={state.N - 0.6} y={0.9} />
      </Canvas>
      <Variables variables={{ ...variables, "M" : state.M }} />
    </>
  );
}
