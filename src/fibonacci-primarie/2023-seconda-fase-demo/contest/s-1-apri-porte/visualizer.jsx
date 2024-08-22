"use client";

import { Fragment } from "react";

import { range } from "lodash-es";

import { Canvas, Sprite, Variables } from "~/utils/visualizer";

import bunny from "./asy/bunny.asy?w=66";
import carrot from "./asy/carrot.asy?w=40";
import closedDoor from "./asy/closed-door.asy?w=55";
import openedDoor from "./asy/opened-door.asy?w=100";
import rock from "./asy/rock.asy?w=93";

export default function Visualizer({ variables, state }) {
  return (
    <>
      <Canvas scale={130}>
        {range(state.N).map((i) => (
          <Fragment key={i}>
            {!!state.door[i] &&
              (state.open[i] ? (
                <Sprite src={openedDoor} alt="Porta aperta" x={i + 0.77} y={-0.23} />
              ) : (
                <Sprite src={closedDoor} alt="Porta chiusa" x={i + 0.65} y={0} />
              ))}
          </Fragment>
        ))}
        {range(state.N + 1).map((i) => (
          <Sprite key={i} src={rock} alt="Sasso" x={i} y={0.92} />
        ))}
        <Sprite src={bunny} alt="Bunny" x={state.pos + 0.15} y={0.15} follow />
        <Sprite
          src={carrot}
          alt="Carota"
          x={state.N + (state.eaten ? 0.43 : 0.46)}
          y={state.eaten ? 0.37 : 0.77}
        />
      </Canvas>
      <Variables variables={variables} />
    </>
  );
}
