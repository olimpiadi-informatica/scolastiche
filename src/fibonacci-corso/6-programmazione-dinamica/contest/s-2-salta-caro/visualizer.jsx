"use client";

import clsx from "clsx";
import { range } from "lodash-es";

import { Canvas, Rectangle, Sprite, Variables } from "~/utils/visualizer";

import bunny from "./asy/bunny.asy?w=66";
import carrot from "./asy/carrot.asy?w=40";
import flag from "./asy/flag.asy?w=80";
import pricedRock from "./asy/priced_rock.asy?w=120";

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
        {state.start === 1 ? null : (
          <Sprite
            src={bunny}
            alt="Tip-Tap"
            x={state.pos + 0.2}
            y={0.2 - 0.6 * state.start}
            follow
          />
        )}
        {range(state.N).map((i) => {
          return (
            <Sprite src={pricedRock} alt={"roccia a pagamento"} x={i} y={1.5} key={`rock${i}`} />
          );
        })}
        {range(state.N).map((i) =>
          state.cost[i] === 0 ? null : (
            <Rectangle
              color="transparent"
              width={0.5}
              height={0.3}
              key={`cost${i}`}
              x={i}
              y={1.8}
              className={clsx(
                "!border-none flex items-center justify-end text-3xl decoration-red-500",
                state.pos === i && (state.flight === 0) & (state.start === 1)
                  ? "underline text-red-500"
                  : "text-black",
              )}>
              {state.cost[i]}
            </Rectangle>
          ),
        )}
        {range(state.N).map((i) =>
          state.cost[i] === 0 ? null : (
            <Sprite src={carrot} alt="carota" x={i + 0.5} y={1.8} key={`carrot${i}`} />
          ),
        )}
        {range(state.N).map((i) => (
          <Rectangle
            color="black"
            borderColor="gray"
            width={0.7}
            height={0.5}
            key={`value${i}`}
            x={i + 0.1}
            y={0.8}
            className="flex items-center justify-center text-3xl text-white">
            {state.value[i]}
          </Rectangle>
        ))}
        {state.start < 1 ? null : (
          <Sprite src={bunny} alt="Tip-Tap" x={state.pos + 0.2} y={0.8 - state.flight} follow />
        )}
        <Sprite src={flag} alt="Bandierina" x={state.N - 1.4} y={0.9} />
      </Canvas>
      <Variables
        variables={{ ...variables, "N (num. rocce)": state.N, "carote spese": state.count }}
      />
    </>
  );
}
