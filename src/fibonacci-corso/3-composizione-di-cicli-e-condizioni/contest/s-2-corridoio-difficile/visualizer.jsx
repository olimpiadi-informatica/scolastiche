"use client";

import { Fragment } from "react";

import { range } from "lodash-es";

import { Canvas, Rectangle, Sprite, Variables } from "~/utils/visualizer";

import bulbOff from "./asy/bulb-off.asy?w=30";
import bulbOn from "./asy/bulb-on.asy?w=30";
import bunnyLeft from "./asy/bunny-left.asy?w=66";
import bunnyLittle from "./asy/bunny-little.asy?w=50";
import bunnyRight from "./asy/bunny-right.asy?w=66";
import closedDoor from "./asy/closed-door.asy?w=55";
import openedDoor from "./asy/opened-door.asy?w=100";
import switchOffOff from "./asy/switch-off-off.asy?w=30";
import switchOffOn from "./asy/switch-off-on.asy?w=30";
import switchOnOff from "./asy/switch-on-off.asy?w=30";
import switchOnOn from "./asy/switch-on-on.asy?w=30";

export default function Visualizer({ variables, state }) {
  const height = 24;
  const width = 18;

  return (
    <>
      <Canvas gravity="bottom" scale={10}>
        {range(state.N).map((i) => (
          <Rectangle
            key={`rect${i}`}
            color={state.light[i] ? "#eee" : "#333"}
            height={height}
            width={width}
            x={width * (i + 1)}
            y={6}>
            {/* <div
              className={clsx(
                "absolute mt-1 size-full origin-bottom text-center text-2xl underline",
                state.light[i] ? "text-black" : "text-white",
              )}>
              {i + 1}
            </div> */}
          </Rectangle>
        ))}
        {range(state.N).map((i) => (
          <Sprite
            key={`bulb${i}`}
            src={state.light[i] ? bulbOn : bulbOff}
            alt=""
            x={width * (i + 1.5) - 1.5}
            y={20}
          />
        ))}
        {range(state.N * 2).map((i) => (
          <Sprite
            key={`switch${i}`}
            src={
              i > 0 && state.light[Math.floor((i - 1) / 2)]
                ? state.switch[i]
                  ? switchOnOn
                  : switchOnOff
                : state.switch[i]
                  ? switchOffOn
                  : switchOffOff
            }
            alt=""
            x={width * (0.5 * i + 0.75) - 1.5}
            y={10}
          />
        ))}
        {range(state.N).map((i) => (
          <Fragment key={`door${i}`}>
            {state.door[i] ? (
              <Sprite src={openedDoor} alt="Porta aperta" x={width * (i + 1) - 1.5} y={3} />
            ) : (
              <Sprite src={closedDoor} alt="Porta chiusa" x={width * (i + 1) - 4} y={0} />
            )}
          </Fragment>
        ))}
        {range(state.M).map((i) => (
          <Sprite
            key={`bunny-${i}`}
            src={bunnyLittle}
            alt="Little Bunny"
            x={
              width *
                ((state.hand === i ? state.pos + state.dir * 0.2 + 0.05 : state.rescue[i] - 0.1) +
                  0.5) -
              3.5
            }
            y={4}
          />
        ))}
        <Sprite
          key="bunny"
          src={state.dir === 1 ? bunnyRight : bunnyLeft}
          alt="Bunny"
          x={width * (state.pos + 0.5) - 3.5}
          y={4}
          follow
        />
      </Canvas>
      <Variables
        variables={{
          ...variables,
          "N (num. stanze)": state.N,
        }}
      />
    </>
  );
}
