import React from "react";

import { range } from "lodash-es";

import { Canvas, Sprite, Variables } from "~/utils/visualizer";

import bunny from "./asy/bunny.asy?w=50";
import leftri from "./asy/leftri.asy?w=40";
import leftsnow from "./asy/leftsnow.asy?w=40";
import offcharge from "./asy/offcharge.asy?w=20";
import oncharge from "./asy/oncharge.asy?w=20";
import rightri from "./asy/rightri.asy?w=40";
import rightsnow from "./asy/rightsnow.asy?w=40";
import square from "./asy/square.asy?w=40";
import squarecap from "./asy/squarecap.asy?w=40";

export default function Visualizer({ variables }) {
  const { blocklyVariables, hiddenState } = variables;
  if (!hiddenState) return;

  let dry = 0.6;
  let dy = 0;
  let mountains = [];
  let eps = 0.03;
  let de = eps;
  let h = hiddenState.H[0] * hiddenState.scale - 1;
  if (hiddenState.N <= 30) {
    mountains.push(
      <Sprite
        key={"base-start"}
        src={square}
        alt="Base"
        x={-0.75 - eps / 2}
        y={dy + 10 - 0.5 * h - eps / 2}
        height={h + 1 + eps}
        width={0.5 + eps}
      />,
      <Sprite
        key={"plain-start"}
        src={squarecap}
        alt="Piana"
        x={-0.75 - eps / 2}
        y={dy + 9 - h - eps / 2}
        height={1 + eps}
        width={0.5 + eps}
      />,
    );
    for (let i = 0; i < hiddenState.N - 1; ++i) {
      h = Math.min(hiddenState.H[i], hiddenState.H[i + 1]) * hiddenState.scale;
      if (hiddenState.H[i] == hiddenState.H[i + 1]) h -= 1;
      mountains.push(
        <Sprite
          key={"base-" + i}
          src={square}
          alt="Base"
          x={i - eps / 2}
          y={dy + 10 - 0.5 * h - eps / 2}
          height={h + 1 + eps}
          width={1 + eps}
        />,
      );
      if (hiddenState.H[i] < hiddenState.H[i + 1]) {
        var delta = (hiddenState.H[i + 1] - hiddenState.H[i]) * hiddenState.scale;
        var snow = 0;
        var cap = i < hiddenState.N - 2 && hiddenState.H[i + 1] > hiddenState.H[i + 2];
        if (cap) {
          var bounce = (hiddenState.H[i + 1] - hiddenState.H[i + 2]) * hiddenState.scale;
          if (bounce >= delta) snow = 1;
          else snow = bounce / delta;
        }
        if (snow > 0 && snow < 1) {
          mountains.push(
            <Sprite
              key={"filler-" + i}
              src={square}
              alt="Base"
              x={i + (1 - snow) * 0.5 - eps / 2}
              y={
                dy +
                9.5 -
                hiddenState.H[i + 1] * hiddenState.scale +
                0.5 * delta * (1 + snow) -
                eps / 2
              }
              height={delta * (1 - snow) + eps}
              width={snow + eps}
            />,
          );
        }
        if (snow > 0)
          mountains.push(
            <Sprite
              key={"snow-" + i}
              src={leftsnow}
              alt="Neve"
              x={i + (1 - snow) * 0.5 - de / 2}
              y={dy + 9.5 - hiddenState.H[i + 1] * hiddenState.scale + 0.5 * delta * snow - de / 2}
              height={delta * snow + de}
              width={snow + de}
            />,
          );
        if (snow < 1)
          mountains.push(
            <Sprite
              key={"tri-" + i}
              src={leftri}
              alt="Punta"
              x={i - snow * 0.5 - de / 2}
              y={
                dy +
                9.5 -
                hiddenState.H[i + 1] * hiddenState.scale +
                0.5 * delta * (1 + snow) -
                de / 2
              }
              height={delta * (1 - snow) + de}
              width={1 - snow + de}
            />,
          );
      } else if (hiddenState.H[i] > hiddenState.H[i + 1]) {
        let delta = (hiddenState.H[i] - hiddenState.H[i + 1]) * hiddenState.scale;
        let snow = 0;
        let cap = i > 0 && hiddenState.H[i] > hiddenState.H[i - 1];
        if (cap) {
          let bounce = (hiddenState.H[i] - hiddenState.H[i - 1]) * hiddenState.scale;
          if (bounce >= delta) snow = 1;
          else snow = bounce / delta;
        }
        if (snow > 0 && snow < 1) {
          mountains.push(
            <Sprite
              key={"filler-" + i}
              src={square}
              alt="Base"
              x={i - (1 - snow) * 0.5 - eps / 2}
              y={
                dy + 9.5 - hiddenState.H[i] * hiddenState.scale + 0.5 * delta * (1 + snow) - eps / 2
              }
              height={delta * (1 - snow) + eps}
              width={snow + eps}
            />,
          );
        }
        if (snow > 0)
          mountains.push(
            <Sprite
              key={"snow-" + i}
              src={rightsnow}
              alt="Neve"
              x={i - (1 - snow) * 0.5 - de / 2}
              y={dy + 9.5 - hiddenState.H[i] * hiddenState.scale + 0.5 * delta * snow - de / 2}
              height={delta * snow + de}
              width={snow + de}
            />,
          );
        if (snow < 1)
          mountains.push(
            <Sprite
              key={"tri-" + i}
              src={rightri}
              alt="Punta"
              x={i + snow * 0.5 - de / 2}
              y={
                dy + 9.5 - hiddenState.H[i] * hiddenState.scale + 0.5 * delta * (1 + snow) - de / 2
              }
              height={delta * (1 - snow) + de}
              width={1 - snow + de}
            />,
          );
      } else {
        mountains.push(
          <Sprite
            key={"plain-" + i}
            src={squarecap}
            alt="Piana"
            x={i - eps / 2}
            y={dy + 10 - hiddenState.H[i] * hiddenState.scale - eps / 2}
            height={1 + eps}
            width={1 + eps}
          />,
        );
      }
    }
    h = hiddenState.H[hiddenState.N - 1] * hiddenState.scale - 1;
    mountains.push(
      <Sprite
        key={"base-" + (hiddenState.N - 1)}
        src={square}
        alt="Base"
        x={hiddenState.N - 1.25 - eps / 2}
        y={dy + 10 - 0.5 * h - eps / 2}
        height={h + 1 + eps}
        width={0.5 + eps}
      />,
      <Sprite
        key={"plain-" + (hiddenState.N - 1)}
        src={squarecap}
        alt="Piana"
        x={hiddenState.N - 1.25 - eps / 2}
        y={dy + 9 - h - eps / 2}
        height={1 + eps}
        width={0.5 + eps}
      />,
    );
  }

  function pos(i) {
    if (i == 0 || i == hiddenState.N - 1) return hiddenState.H[i];
    return (hiddenState.H[i - 1] + hiddenState.H[i + 1]) * 0.025 + hiddenState.H[i] * 0.95;
  }

  var bx = -0.6;
  var by = dy + 8.7;
  var br = 0;
  if (hiddenState.N <= 30) {
    bx = hiddenState.posx - 0.6 + dry * Math.cos(1.5707963267948966 + hiddenState.rot);
    by =
      dy +
      8.7 -
      (hiddenState.posx % 1 == 0 ? pos(hiddenState.posx) : hiddenState.posy) * hiddenState.scale +
      dry -
      dry * Math.sin(1.5707963267948966 + hiddenState.rot);
    br = -hiddenState.rot / 6.283185307179586;
  }

  return (
    <>
      <Canvas scale={40}>
        {mountains}
        <Sprite src={bunny} alt="Tip-Tap" x={bx} y={by} rotation={br} follow />
        {range(hiddenState.N <= 30 ? hiddenState.N : 0).map((i) => (
          <Sprite
            key={"charger-" + i}
            src={i == hiddenState.posx && hiddenState.charging ? oncharge : offcharge}
            alt="Colonnina"
            x={i - 0.3}
            y={dy + 8.87 - pos(i) * hiddenState.scale}
          />
        ))}
      </Canvas>
      <Variables
        variables={{
          N: hiddenState.N,
          energia: hiddenState.energy,
          tempo: hiddenState.time,
          ...blocklyVariables,
        }}
      />
    </>
  );
}
