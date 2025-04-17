"use client";

import { Fragment } from "react";

import { range } from "lodash-es";

import { Canvas, Rectangle, Sprite, Variables } from "~/utils/visualizer";

import bulbOff from "./asy/bulb-off.asy?w=30";
import bulbOn from "./asy/bulb-on.asy?w=30";
import bunnyLeft from "./asy/bunny-left.asy?w=66";
import bunnyRight from "./asy/bunny-right.asy?w=66";
import switchMedOff from "./asy/switch-med-off.asy?w=30";
import switchMedOn from "./asy/switch-med-on.asy?w=30";
import switchOffOff from "./asy/switch-off-off.asy?w=30";
import switchOffOn from "./asy/switch-off-on.asy?w=30";
import switchOnOff from "./asy/switch-on-off.asy?w=30";
import switchOnOn from "./asy/switch-on-on.asy?w=30";

export default function Visualizer({ variables, state }) {

  const height = 24;
  const width = 18;
  const grays = ["#222", "#555", "#888", "#bbb", "#eee"];
  const switchOn = [switchOffOn, switchMedOn, switchOnOn];
  const switchOff = [switchOffOff, switchMedOff, switchOnOff];

  if (state.N > 30) {
    return (
      <div className="text-slate-800 p-4">
        La visualizzazione è disponibile solo per i primi 5 livelli.
      </div>
    );
  }

  function isOn(i) {
    return i<0 || i>=state.N ? 0 : state.light[i] * state.screwed[i];
  }

  return (
    <>
      <Canvas gravity="bottom" scale={10}>
        {range(state.N).map((i) => {
          const light = 2*isOn(i)+isOn(i-1)+isOn(i+1);
          return (
            <Rectangle
              key={"rect" + i}
              color={grays[light]}
              height={height}
              width={width}
              x={width * (i + 1)}
              y={6}
              className="border-none">
              <div
                style={{
                  color: light >= 2 ? "black" : "white",
                  textDecorationColor: light >= 2 ? "black" : "white",
                }}
                className="absolute mt-1 size-full origin-bottom text-center text-2xl text-slate-900 underline decoration-slate-900">
                {i + 1}
              </div>
            </Rectangle>
          );
        })}
        {range(state.N).map((i) => (
          <Sprite
            key={"bulb" + i}
            src={isOn(i) ? bulbOn : bulbOff}
            alt=""
            x={width * (i + 1.5) - 1.5}
            y={state.screwed[i] ? 20 : 4}
            rotation={state.screwed[i] ? 0 : 0.32}
          />
        ))}
        {range(state.N-1).map((i) => {
          const light = isOn(i)+isOn(i+1);
          return (
            <Sprite
              key={"switch" + i}
              src={state.switch[i] ? switchOn[light] : switchOff[light]}
              alt=""
              x={width * (i + 2) - 1.5}
              y={10}
            />
          );
        })}
        {range(state.N-1).map((i) => {
          const light = isOn(i)+isOn(i+1);
          return (
            <Rectangle
              key={"lbl" + i}
              height={1}
              width={3}
              x={width * (i + 2) - 1.5}
              y={10}
              className="border-none">
              <div
                style={{
                  color: light > 1 ? "black" : "white",
                }}
                className="absolute mt-1 size-full origin-bottom text-center text-2xl text-slate-900 decoration-slate-900">
                {i + 1}
              </div>
            </Rectangle>
          );
        })}
        <Sprite
          key="bunny"
          src={state.dir === 1 ? bunnyRight : bunnyLeft}
          alt="Bunny"
          x={width * (state.pos + 0.5 - state.dir * 0.2) - 3.5}
          y={4}
          follow
        />
      </Canvas>
      <Variables
        variables={{
          ...variables,
          "N (num. lampadine)": state.N,
          "azioni fatte": state.count,
        }}
      />
    </>
  );
}
