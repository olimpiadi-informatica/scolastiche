import React, {
  Fragment,
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

const VisualizerContext = createContext({ gravity: "top", scale: 1 });

export function Canvas({ gravity, scale, children }) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  return (
    <VisualizerContext.Provider
      value={{ gravity: gravity ?? "top", scale: scale ?? 1, setWidth, setHeight }}>
      <div className="relative m-8 w-full" style={{ width: width + 32, height: height + 32 }}>
        {children}
      </div>
    </VisualizerContext.Provider>
  );
}

export function Sprite({ src, alt, x, y, width, height, rotation, follow, className }) {
  x ??= 0;
  y ??= 0;
  rotation ??= 0;
  width ??= 1;
  height ??= 1;

  const ref = useRef();

  const pos = useRef({ x, y, changed: false });
  useEffect(() => {
    if (x !== pos.current.x || y !== pos.current.y) {
      pos.current = { x, y, changed: true };
    }
  }, [x, y]);

  const { gravity, scale, setWidth, setHeight } = useContext(VisualizerContext);
  useLayoutEffect(() => {
    const box = ref.current?.getBoundingClientRect();

    const scaleX = (width - 1) * 0.5 + 1;
    const scaleY = (height - 1) * 0.5 + 1;

    setTimeout(() => {
      setWidth((w) => Math.max(w, x * scale + (box ? box.width / width : src.width) * scaleX));
      setHeight((h) => Math.max(h, y * scale + (box ? box.height / height : src.height) * scaleY));
    }, 5);

    if (!pos.current.changed || !follow) return;
    const id = setTimeout(() => {
      return ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }, 160);
    return () => clearTimeout(id);
  }, [x, y]);

  return (
    <img
      ref={ref}
      alt={alt}
      {...src}
      className={`absolute transition-all ${className ?? ""}`}
      style={{
        [gravity]: `${y * scale}px`,
        left: `${x * scale}px`,
        transform: `rotate(${rotation}turn) scaleX(${width}) scaleY(${height})`,
      }}
    />
  );
}

export function Rectangle({
  color,
  border_color,
  height,
  width,
  x,
  y,
  rotation,
  className,
  style,
  children,
}) {
  x ??= 0;
  y ??= 0;
  rotation ??= 0;
  style ??= {};
  color ??= "white";
  border_color ??= "black";

  const ref = useRef();
  const { gravity, scale, setWidth, setHeight } = useContext(VisualizerContext);

  useEffect(() => {
    const box = ref.current?.getBoundingClientRect();
    setTimeout(() => {
      setWidth((w) => Math.max(w, x * scale + (box?.width ?? width)));
      setHeight((h) => Math.max(h, y * scale + (box?.height ?? height)));
    }, 5);
  }, [x, y, width, height]);

  return (
    <div
      ref={ref}
      style={{
        backgroundColor: color,
        borderColor: border_color,
        height: `${height * scale}px`,
        width: `${width * scale}px`,
        left: `${x * scale}px`,
        [gravity]: `${y * scale}px`,
        transform: `rotate(${rotation}turn)`,
        ...style,
      }}
      className={`absolute border-2 border-solid transition-all ${className ?? ""}`}>
      {children}
    </div>
  );
}

export function Variables({ variables }) {
  return (
    <div className="m-4 grid max-w-sm grid-cols-2 gap-y-2 text-slate-950 *:bg-orange-400 *:px-4 *:py-1.5">
      {Object.entries(variables).map(([name, value]) => (
        <Fragment key={name}>
          <div className="rounded-l-2xl">{name}</div>
          <div className="rounded-r-2xl">
            <div className="rounded-lg bg-white px-2">{value == null ? "-" : value}</div>
          </div>
        </Fragment>
      ))}
    </div>
  );
}
