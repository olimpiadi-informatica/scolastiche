"use client";

import { range } from "lodash-es";
import { Canvas, Rectangle, Sprite, Variables } from "~/utils/visualizer";
import arrow from "./asy/arrow.asy?w=120";
import bunny from "./asy/bunny.asy?w=66";
import carrot from "./asy/carrot.asy?w=30";
import certificate from "./asy/certificate.asy?w=120";
import flag from "./asy/flag.asy?w=80";

export default function Visualizer({ variables, state }) {
  const step = 15;

  if (state.N > 10) {
    return (
      <div className="text-slate-800 p-4">
        La visualizzazione è disponibile solo per i primi 5 livelli.
      </div>
    );
  }

  return (
    <>
      <Canvas gravity="bottom" scale={10}>
        <Sprite src={bunny} alt="Bunny" x={step * (state.pos + 0.25) - 1} y={26} follow />
        <Sprite src={flag} alt="fine" x={step * (state.N + 0.8) - 1} y={27} />
        {range(state.N).map((i) => (
          <Sprite
            src={certificate}
            alt="titolo"
            x={step * i}
            y={10 + (state.taken === i ? 5 : 0)}
            key={`titolo${i}`}
          />
        ))}
        {range(state.N).map((i) => (
          <Rectangle
            color="transparent"
            width={12}
            height={3}
            key={`day${i}`}
            x={step * i + 0.5}
            y={23 + (state.taken === i ? 5 : 0)}
            className="!border-none flex items-center justify-start italic text-xl">
            {i === 0 ? "Carrot" : `Giorno ${i}`}
          </Rectangle>
        ))}
        {range(state.N).map((i) => (
          <Rectangle
            color="transparent"
            width={7}
            height={3}
            key={`value${i}`}
            x={step * i}
            y={20 + (state.taken === i ? 5 : 0)}
            className="!border-none flex items-center justify-end text-2xl">
            {state.V[i]}
          </Rectangle>
        ))}
        {range(state.N).map((i) => (
          <Sprite
            src={carrot}
            alt="carota"
            x={step * i + 6.8}
            y={20.2 + (state.taken === i ? 5 : 0)}
            key={`carota${i}`}
          />
        ))}
        {range(state.N).map((i) => (
          <Rectangle
            color="transparent"
            width={7}
            height={3}
            key={`gain${i}`}
            x={step * i + 1}
            y={17 + (state.taken === i ? 5 : 0)}
            className="!border-none flex items-center justify-end italic text-2xl">
            {`+${state.G[i]}`}
          </Rectangle>
        ))}
        {range(state.N).map((i) => (
          <Sprite
            src={carrot}
            alt="carota"
            x={step * i + 8}
            y={17.2 + (state.taken === i ? 5 : 0)}
            key={`+carota${i}`}
          />
        ))}
        {range(state.N).map((i) => (
          <Rectangle
            color="transparent"
            width={10}
            height={3}
            key={`gain${i}`}
            x={step * i + 1}
            y={14 + (state.taken === i ? 5 : 0)}
            className="flex items-center justify-start font-bold text-2xl">
            {state.pref[i]}
          </Rectangle>
        ))}
        {range(state.N).map((i) => {
          return (
            <Sprite
              src={arrow}
              alt="freccia"
              x={step * i + 0.7 + (state.next[i] - i) * 7.3}
              y={10 - 2 * (state.next[i] - i)}
              scaleX={1.3 * (state.next[i] - i)}
              scaleY={1.3 * (state.next[i] - i)}
              key={`+freccia${i}`}
            />
          );
        })}
        {range(state.taken >= 0 ? 1 : 0).map(() => {
          return (
            <Sprite
              src={carrot}
              alt="carotacorrente"
              x={step * state.pos + (state.taken === state.pos ? 6.8 : 12.8)}
              y={state.taken === state.pos ? 25.2 : 30.2}
              key="carval"
            />
          );
        })}
        {range(state.taken >= 0 ? 1 : 0).map(() => {
          return (
            <Rectangle
              color="transparent"
              width={5}
              height={3}
              key="curval"
              x={step * state.pos + (state.taken === state.pos ? 2 : 8)}
              y={state.taken === state.pos ? 25 : 30}
              className="!border-none flex items-center justify-end font-bold text-[25px]">
              {state.curval}
            </Rectangle>
          );
        })}
      </Canvas>
      <Variables
        variables={{
          ...variables,
          "N (num. giorni)": state.N,
        }}
      />
    </>
  );
}
