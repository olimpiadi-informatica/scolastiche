import React, { Fragment } from "react";
import { range } from "lodash-es";

import { Canvas, Sprite, Variables } from "~/utils/visualizer";

import bunny from "./asy/bunny.asy?w=66";
import rock from "./asy/rock.asy?w=93";
import closedDoor from "./asy/closed-door.asy?w=55";
import openedDoor from "./asy/opened-door.asy?w=100";
import carrot from "./asy/carrot.asy?w=40";

export default function Visualizer({ variables }) {
  const { blocklyVariables, hiddenState } = variables;
  if (!hiddenState) return null;

  return (
    <>
      <Canvas scale={130}>
        {range(hiddenState.N).map((i) => (
          <Fragment key={i}>
            {!!hiddenState.door[i] &&
              (hiddenState.open[i] ? (
                <Sprite src={openedDoor} alt="Porta aperta" x={i + 0.77} y={-0.23} />
              ) : (
                <Sprite src={closedDoor} alt="Porta chiusa" x={i + 0.65} y={0} />
              ))}
          </Fragment>
        ))}
        {range(hiddenState.N + 1).map((i) => (
          <Sprite key={i} src={rock} alt="Sasso" x={i} y={0.92} />
        ))}
        <Sprite src={bunny} alt="Bunny" x={hiddenState.pos + 0.15} y={0.15} follow />
        <Sprite
          src={carrot}
          alt="Carota"
          x={hiddenState.N + (hiddenState.eaten ? 0.43 : 0.46)}
          y={hiddenState.eaten ? 0.37 : 0.77}
        />
      </Canvas>
      <Variables variables={blocklyVariables} />
    </>
  );
}
