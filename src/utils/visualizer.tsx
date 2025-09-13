"use client";

import {
  type CSSProperties,
  createContext,
  Fragment,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";

import clsx from "clsx";
import { isBoolean, isNumber, isObject, isString } from "lodash-es";

type BoundingBox = {
  x: number;
  y: number;
  width: number;
  height: number;
};

type ContextProps = {
  gravity: "top" | "bottom";
  scale: number;
  setBoundingBox: (id: string, box: BoundingBox) => void;
};

const VisualizerContext = createContext<ContextProps>({
  gravity: "top",
  scale: 1,
  setBoundingBox: () => {},
});

type CanvasProps = {
  gravity?: "top" | "bottom";
  scale?: number;
  children: ReactNode;
};

export function Canvas({ gravity = "top", scale = 1, children }: CanvasProps) {
  const [objects, setObjects] = useState<Record<string, BoundingBox>>({});

  const setBoundingBox = useCallback((id: string, box: BoundingBox) => {
    setObjects((prev) => ({ ...prev, [id]: box }));
  }, []);

  const size = useMemo(() => {
    let wMin = 0;
    let wMax = 0;
    let hMin = 0;
    let hMax = 0;
    for (const { x, y, width, height } of Object.values(objects)) {
      wMin = Math.min(wMin, x);
      wMax = Math.max(wMax, x + width);
      hMin = Math.min(hMin, y);
      hMax = Math.max(hMax, y + height);
    }

    if (gravity === "bottom") {
      [hMin, hMax] = [-hMax, -hMin];
    }

    return { wMin, wMax, hMin, hMax };
  }, [objects, gravity]);

  return (
    <VisualizerContext.Provider value={{ gravity, scale, setBoundingBox }}>
      <div className="m-8" style={{ width: size.wMax - size.wMin, height: size.hMax - size.hMin }}>
        <div
          className="relative"
          style={{ transform: `translate(${-size.wMin}px, ${-size.hMin}px)` }}>
          {children}
        </div>
      </div>
    </VisualizerContext.Provider>
  );
}

type SpriteProps = {
  src: { src: string; width: string; height: string };
  alt: string;
  x?: number;
  y?: number;
  rotation?: number;
  scaleX?: number;
  scaleY?: number;
  follow?: boolean;
  className?: string;
};

export function Sprite({
  src,
  alt,
  x = 0,
  y = 0,
  rotation = 0,
  scaleX = 1,
  scaleY = 1,
  follow,
  className,
}: SpriteProps) {
  const id = useId();

  const ref = useRef<HTMLImageElement>(null);
  const { gravity, scale, setBoundingBox } = useContext(VisualizerContext);
  useEffect(() => {
    setBoundingBox(id, { x: x * scale, width: +src.width, y: y * scale, height: +src.height });
    return () => setBoundingBox(id, { x: 0, width: 0, y: 0, height: 0 });
  }, [x, y, src, scale, id, setBoundingBox]);

  const pos = useRef({ x, y, changed: false });
  useEffect(() => {
    if (x !== pos.current.x || y !== pos.current.y) {
      pos.current = { x, y, changed: true };
    }

    if (!pos.current.changed || !follow) return;
    const id = setTimeout(() => {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }, 160);
    return () => clearTimeout(id);
  }, [follow, x, y]);

  return (
    <img
      ref={ref}
      {...src}
      alt={alt}
      className={clsx("absolute transition-all transform", className)}
      style={
        {
          [gravity]: `${y * scale}px`,
          left: `${x * scale}px`,
          "--tw-rotate": `${rotation}turn`,
          "--tw-scale-x": scaleX,
          "--tw-scale-y": scaleY,
        } as CSSProperties
      }
    />
  );
}

type RectangleProps = {
  color?: string;
  borderColor?: string;
  height: number;
  width: number;
  x?: number;
  y?: number;
  rotation?: number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

export function Rectangle({
  color = "white",
  borderColor = "black",
  height,
  width,
  x = 0,
  y = 0,
  rotation = 0,
  className = "",
  children,
}: RectangleProps) {
  const id = useId();
  const { gravity, scale, setBoundingBox } = useContext(VisualizerContext);

  useEffect(() => {
    setBoundingBox(id, {
      x: x * scale,
      width: width * scale,
      y: y * scale,
      height: height * scale,
    });
    return () => setBoundingBox(id, { x: 0, width: 0, y: 0, height: 0 });
  }, [x, y, width, height, scale, id, setBoundingBox]);

  return (
    <div
      style={
        {
          backgroundColor: color,
          border: `2px solid ${borderColor}`,
          height: `${height * scale}px`,
          width: `${width * scale}px`,
          [gravity]: `${y * scale}px`,
          left: `${x * scale}px`,
          "--tw-rotate": `${rotation}turn`,
        } as CSSProperties
      }
      className={clsx("absolute transition-all transform", className)}>
      {children}
    </div>
  );
}

export function Variables({ variables }: { variables: Record<string, any> }) {
  return (
    <div className="m-4 grid max-w-sm grid-cols-2 gap-y-2 text-slate-950 *:bg-orange-400 *:px-4 *:py-1.5">
      {Object.entries(variables).map(([name, value]) => (
        <Fragment key={name}>
          <div className="rounded-l-2xl">{name}</div>
          <div className="rounded-r-2xl">
            <div className="rounded-lg bg-white px-2">
              {isNumber(value) && (Number.isFinite(value) ? value : "-")}
              {isBoolean(value) && (value ? "vero" : "falso")}
              {isString(value) && (value ? value : "-")}
              {isObject(value) && (value ? JSON.stringify(value) : "-")}
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
}
