import React from "react";

/**
 * DiagramRenderer — renderizador de diagramas estilo Excalidraw.
 *
 * Recebe um JSON com elementos (rect, text, arrow, line, ellipse, diamond, bracket, polyline)
 * e renderiza como SVG responsivo com estilo clean / sketch.
 */

// ID único por instância para evitar conflitos de <defs> em múltiplos diagramas
let instanceCounter = 0;

// Arrowhead marker
function ArrowMarker({ id, color = "#78716c" }) {
  return (
    <marker
      id={id}
      viewBox="0 0 10 10"
      refX="9"
      refY="5"
      markerWidth="7"
      markerHeight="7"
      orient="auto"
    >
      <path
        d="M 0 1.5 L 10 5 L 0 8.5"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </marker>
  );
}

// Drop shadow filter
function DropShadowFilter({ id }) {
  return (
    <filter id={id} x="-4%" y="-4%" width="108%" height="112%">
      <feDropShadow
        dx="0"
        dy="1"
        stdDeviation="2"
        floodColor="#0c0a09"
        floodOpacity="0.06"
      />
    </filter>
  );
}

// Wrap text to multiple lines
function wrapText(text, maxWidth, fontSize) {
  if (!text) return [];
  const charWidth = fontSize * 0.55;
  const maxChars = Math.floor(maxWidth / charWidth);
  const words = text.split(" ");
  const lines = [];
  let current = "";

  for (const word of words) {
    if ((current + " " + word).trim().length > maxChars && current) {
      lines.push(current.trim());
      current = word;
    } else {
      current = current ? current + " " + word : word;
    }
  }
  if (current) lines.push(current.trim());
  return lines;
}

function RectElement({ el, instanceId }) {
  const {
    x,
    y,
    width,
    height,
    label,
    sublabel,
    fill = "#ffffff",
    stroke = "#78716c",
    strokeWidth = 1.5,
    rounded = 8,
    fontSize = 14,
    fontWeight = "600",
    dashed = false,
    opacity = 1,
    labelColor,
    shadow = false,
  } = el;

  const filterId = shadow ? `shadow-${instanceId}` : undefined;

  return (
    <g opacity={opacity}>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={rounded}
        ry={rounded}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeDasharray={dashed ? "6 4" : undefined}
        filter={filterId ? `url(#${filterId})` : undefined}
      />
      {label && (
        <text
          x={x + width / 2}
          y={sublabel ? y + height / 2 - fontSize * 0.45 : y + height / 2}
          textAnchor="middle"
          dominantBaseline="central"
          fill={labelColor || "#1c1917"}
          fontSize={fontSize}
          fontWeight={fontWeight}
          fontFamily="'Inter', system-ui, sans-serif"
        >
          {label}
        </text>
      )}
      {sublabel && (
        <text
          x={x + width / 2}
          y={y + height / 2 + fontSize * 0.65}
          textAnchor="middle"
          dominantBaseline="central"
          fill="#78716c"
          fontSize={fontSize * 0.78}
          fontFamily="'Inter', system-ui, sans-serif"
        >
          {sublabel}
        </text>
      )}
    </g>
  );
}

function TextElement({ el }) {
  const {
    x,
    y,
    content,
    fontSize = 13,
    color = "#57534e",
    fontWeight = "normal",
    align = "center",
    maxWidth = 300,
    fontStyle = "normal",
    fontFamily,
  } = el;

  const anchor =
    align === "left" ? "start" : align === "right" ? "end" : "middle";
  const lines = wrapText(content, maxWidth, fontSize);

  return (
    <g>
      {lines.map((line, i) => (
        <text
          key={i}
          x={x}
          y={y + i * (fontSize * 1.4)}
          textAnchor={anchor}
          fill={color}
          fontSize={fontSize}
          fontWeight={fontWeight}
          fontStyle={fontStyle}
          fontFamily={fontFamily || "'Inter', system-ui, sans-serif"}
        >
          {line}
        </text>
      ))}
    </g>
  );
}

function ArrowElement({ el, index, instanceId }) {
  const {
    from,
    to,
    label,
    stroke = "#78716c",
    strokeWidth = 1.5,
    dashed = false,
    bidirectional = false,
    labelColor,
    labelBg = "white",
  } = el;

  const endMarkerId = `arrow-end-${instanceId}-${index}`;
  const startMarkerId = `arrow-start-${instanceId}-${index}`;

  // Midpoint for label
  const mx = (from.x + to.x) / 2;
  const my = (from.y + to.y) / 2;

  return (
    <g>
      <line
        x1={from.x}
        y1={from.y}
        x2={to.x}
        y2={to.y}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeDasharray={dashed ? "6 4" : undefined}
        markerEnd={`url(#${endMarkerId})`}
        markerStart={bidirectional ? `url(#${startMarkerId})` : undefined}
        strokeLinecap="round"
      />
      {label && (
        <>
          <rect
            x={mx - (label.length * 3.5 + 6)}
            y={my - 10}
            width={label.length * 7 + 12}
            height={18}
            fill={labelBg}
            rx={4}
            opacity={0.92}
          />
          <text
            x={mx}
            y={my + 1}
            textAnchor="middle"
            dominantBaseline="central"
            fill={labelColor || "#78716c"}
            fontSize={10.5}
            fontFamily="'Inter', system-ui, sans-serif"
          >
            {label}
          </text>
        </>
      )}
    </g>
  );
}

function LineElement({ el }) {
  const { from, to, stroke = "#d6d3d1", strokeWidth = 1, dashed = false } = el;

  return (
    <line
      x1={from.x}
      y1={from.y}
      x2={to.x}
      y2={to.y}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeDasharray={dashed ? "6 4" : undefined}
      strokeLinecap="round"
    />
  );
}

function EllipseElement({ el }) {
  const {
    cx,
    cy,
    rx,
    ry,
    label,
    fill = "#ffffff",
    stroke = "#78716c",
    strokeWidth = 1.5,
    fontSize = 13,
    fontWeight = "600",
    labelColor,
  } = el;

  return (
    <g>
      <ellipse
        cx={cx}
        cy={cy}
        rx={rx}
        ry={ry}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      {label && (
        <text
          x={cx}
          y={cy}
          textAnchor="middle"
          dominantBaseline="central"
          fill={labelColor || "#1c1917"}
          fontSize={fontSize}
          fontWeight={fontWeight}
          fontFamily="'Inter', system-ui, sans-serif"
        >
          {label}
        </text>
      )}
    </g>
  );
}

// Logic Gate Element - renders IEEE/ANSI style logic gate symbols
function GateElement({ el }) {
  const {
    x,
    y,
    width = 80,
    height = 50,
    gateType = "and", // and, or, not, nand, nor, xor, xnor, buffer
    label,
    fill = "#ffffff",
    stroke = "#1c1917",
    strokeWidth = 2,
    inputs = [],
    outputs = [],
    inputLabels = true,
    outputLabels = true,
    labelColor,
    fontSize = 11,
  } = el;

  const isInverted = ["nand", "nor", "xnor", "not"].includes(gateType);
  const bubbleRadius = 5;
  const inputSpacing = height / (inputs.length + 1);
  const outputY = y + height / 2;

  // Gate body path based on type
  const renderGateBody = () => {
    switch (gateType) {
      case "not":
      case "buffer": {
        // Triangle shape
        const points = `${x},${y} ${x + width - (isInverted ? bubbleRadius * 2 : 0)},${y + height / 2} ${x},${y + height}`;
        return (
          <polygon
            points={points}
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
          />
        );
      }
      case "and":
      case "nand": {
        // D-shape: flat left, curved right
        const bodyWidth = width - (isInverted ? bubbleRadius * 2 : 0);
        const r = height / 2;
        const d = `M ${x} ${y} 
                   L ${x + bodyWidth - r} ${y} 
                   A ${r} ${r} 0 0 1 ${x + bodyWidth - r} ${y + height}
                   L ${x} ${y + height} Z`;
        return (
          <path d={d} fill={fill} stroke={stroke} strokeWidth={strokeWidth} />
        );
      }
      case "or":
      case "nor": {
        // OR shape: curved back, pointed front
        const bodyWidth = width - (isInverted ? bubbleRadius * 2 : 0);
        const d = `M ${x} ${y}
                   Q ${x + bodyWidth * 0.6} ${y} ${x + bodyWidth} ${y + height / 2}
                   Q ${x + bodyWidth * 0.6} ${y + height} ${x} ${y + height}
                   Q ${x + bodyWidth * 0.25} ${y + height / 2} ${x} ${y}`;
        return (
          <path d={d} fill={fill} stroke={stroke} strokeWidth={strokeWidth} />
        );
      }
      case "xor":
      case "xnor": {
        // XOR shape: OR with extra curve at back
        const bodyWidth = width - (isInverted ? bubbleRadius * 2 : 0);
        const orPath = `M ${x + 8} ${y}
                        Q ${x + 8 + bodyWidth * 0.6} ${y} ${x + bodyWidth} ${y + height / 2}
                        Q ${x + 8 + bodyWidth * 0.6} ${y + height} ${x + 8} ${y + height}
                        Q ${x + 8 + bodyWidth * 0.25} ${y + height / 2} ${x + 8} ${y}`;
        const extraCurve = `M ${x} ${y}
                            Q ${x + bodyWidth * 0.25} ${y + height / 2} ${x} ${y + height}`;
        return (
          <>
            <path
              d={orPath}
              fill={fill}
              stroke={stroke}
              strokeWidth={strokeWidth}
            />
            <path
              d={extraCurve}
              fill="none"
              stroke={stroke}
              strokeWidth={strokeWidth}
            />
          </>
        );
      }
      default:
        return (
          <rect
            x={x}
            y={y}
            width={width}
            height={height}
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth}
            rx={4}
          />
        );
    }
  };

  // Inversion bubble for NAND, NOR, XNOR, NOT
  const renderInversionBubble = () => {
    if (!isInverted) return null;
    const bubbleX = x + width - bubbleRadius;
    return (
      <circle
        cx={bubbleX}
        cy={y + height / 2}
        r={bubbleRadius}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    );
  };

  // Input lines
  const renderInputs = () => {
    return inputs.map((inp, i) => {
      const iy = y + inputSpacing * (i + 1);
      const lineEndX = gateType === "xor" || gateType === "xnor" ? x + 8 : x;
      return (
        <g key={`inp-${i}`}>
          <line
            x1={x - 20}
            y1={iy}
            x2={lineEndX}
            y2={iy}
            stroke={stroke}
            strokeWidth={1.5}
          />
          {inputLabels && inp && (
            <text
              x={x - 25}
              y={iy}
              textAnchor="end"
              dominantBaseline="central"
              fill={labelColor || "#57534e"}
              fontSize={fontSize}
              fontFamily="'Inter', system-ui, sans-serif"
            >
              {inp}
            </text>
          )}
        </g>
      );
    });
  };

  // Output line
  const renderOutput = () => {
    const outX = x + width;
    const outLabel = outputs[0] || "";
    return (
      <g>
        <line
          x1={outX}
          y1={outputY}
          x2={outX + 20}
          y2={outputY}
          stroke={stroke}
          strokeWidth={1.5}
        />
        {outputLabels && outLabel && (
          <text
            x={outX + 25}
            y={outputY}
            textAnchor="start"
            dominantBaseline="central"
            fill={labelColor || "#57534e"}
            fontSize={fontSize}
            fontFamily="'Inter', system-ui, sans-serif"
          >
            {outLabel}
          </text>
        )}
      </g>
    );
  };

  // Gate label (e.g., "AND", "OR")
  const renderLabel = () => {
    if (!label) return null;
    return (
      <text
        x={x + width / 2}
        y={y + height + 15}
        textAnchor="middle"
        fill={labelColor || "#78716c"}
        fontSize={fontSize}
        fontWeight="600"
        fontFamily="'Inter', system-ui, sans-serif"
      >
        {label}
      </text>
    );
  };

  return (
    <g>
      {renderGateBody()}
      {renderInversionBubble()}
      {renderInputs()}
      {renderOutput()}
      {renderLabel()}
    </g>
  );
}

function DiamondElement({ el }) {
  const {
    x,
    y,
    width,
    height,
    label,
    fill = "#fef3c7",
    stroke = "#f59e0b",
    strokeWidth = 1.5,
    fontSize = 13,
    fontWeight = "600",
    labelColor,
  } = el;

  const cx = x + width / 2;
  const cy = y + height / 2;
  const points = `${cx},${y} ${x + width},${cy} ${cx},${y + height} ${x},${cy}`;

  return (
    <g>
      <polygon
        points={points}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      {label && (
        <text
          x={cx}
          y={cy}
          textAnchor="middle"
          dominantBaseline="central"
          fill={labelColor || "#1c1917"}
          fontSize={fontSize}
          fontWeight={fontWeight}
          fontFamily="'Inter', system-ui, sans-serif"
        >
          {label}
        </text>
      )}
    </g>
  );
}

function BracketElement({ el, background = "#fafaf9" }) {
  const {
    x,
    y,
    width,
    height,
    label,
    stroke = "#a8a29e",
    strokeWidth = 1.5,
    dashed = true,
    rounded = 12,
    fill = "transparent",
    labelColor,
    labelBg,
  } = el;

  const bgFill = labelBg || background;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={rounded}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeDasharray={dashed ? "8 4" : undefined}
      />
      {label && (
        <>
          <rect
            x={x + 12}
            y={y - 9}
            width={label.length * 7.5 + 16}
            height={18}
            fill={bgFill}
            rx={4}
          />
          <text
            x={x + 20}
            y={y + 1}
            fill={labelColor || stroke}
            fontSize={11}
            fontWeight="700"
            fontFamily="'Inter', system-ui, sans-serif"
            letterSpacing="0.05em"
          >
            {label}
          </text>
        </>
      )}
    </g>
  );
}

// Polyline (multi-segment arrow/line)
function PolylineElement({ el, index, instanceId }) {
  const {
    points,
    stroke = "#78716c",
    strokeWidth = 1.5,
    dashed = false,
    arrow = false,
    label,
    labelColor,
  } = el;

  const endMarkerId = `arrow-end-${instanceId}-${index}`;

  const pointsStr = points.map((p) => `${p.x},${p.y}`).join(" ");

  // Midpoint for label
  const midIdx = Math.floor(points.length / 2);
  const mx = points[midIdx]?.x || 0;
  const my = points[midIdx]?.y || 0;

  return (
    <g>
      <polyline
        points={pointsStr}
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeDasharray={dashed ? "6 4" : undefined}
        strokeLinecap="round"
        strokeLinejoin="round"
        markerEnd={arrow ? `url(#${endMarkerId})` : undefined}
      />
      {label && (
        <>
          <rect
            x={mx - label.length * 4}
            y={my - 10}
            width={label.length * 8}
            height={18}
            fill="white"
            rx={4}
          />
          <text
            x={mx}
            y={my + 2}
            textAnchor="middle"
            dominantBaseline="central"
            fill={labelColor || "#78716c"}
            fontSize={11}
            fontFamily="'Inter', system-ui, sans-serif"
          >
            {label}
          </text>
        </>
      )}
    </g>
  );
}

export default function DiagramRenderer({ data }) {
  const [parsed, setParsed] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [visible, setVisible] = React.useState(false);
  const containerRef = React.useRef(null);
  const [instanceId] = React.useState(() => ++instanceCounter);

  React.useEffect(() => {
    try {
      const obj = typeof data === "string" ? JSON.parse(data) : data;
      setParsed(obj);
      setError(null);
    } catch (e) {
      setError(e.message);
    }
  }, [data]);

  // Intersection Observer for fade-in animation
  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [parsed]);

  if (error) {
    return (
      <div className="my-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm font-mono">
        <strong>Erro no diagrama:</strong> {error}
      </div>
    );
  }

  if (!parsed) return null;

  const {
    title,
    width = 700,
    height = 400,
    background = "#fafaf9",
    elements = [],
    padding = 0,
  } = parsed;

  const gridId = `dot-grid-${instanceId}`;
  const shadowId = `shadow-${instanceId}`;
  const hasShadow = elements.some((el) => el.shadow);

  const renderElement = (el, index) => {
    switch (el.type) {
      case "rect":
        return <RectElement key={index} el={el} instanceId={instanceId} />;
      case "text":
        return <TextElement key={index} el={el} />;
      case "arrow":
        return (
          <ArrowElement
            key={index}
            el={el}
            index={index}
            instanceId={instanceId}
          />
        );
      case "line":
        return <LineElement key={index} el={el} />;
      case "ellipse":
        return <EllipseElement key={index} el={el} />;
      case "gate":
        return <GateElement key={index} el={el} />;
      case "diamond":
        return <DiamondElement key={index} el={el} />;
      case "bracket":
        return <BracketElement key={index} el={el} background={background} />;
      case "polyline":
        return (
          <PolylineElement
            key={index}
            el={el}
            index={index}
            instanceId={instanceId}
          />
        );
      default:
        return null;
    }
  };

  const vbX = -padding;
  const vbY = -padding;
  const vbW = width + padding * 2;
  const vbH = height + padding * 2;

  return (
    <figure
      ref={containerRef}
      className={`my-8 transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="bg-white rounded-xl border border-stone-200/80 shadow-sm overflow-hidden">
        <svg
          viewBox={`${vbX} ${vbY} ${vbW} ${vbH}`}
          className="w-full h-auto block"
          style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          role="img"
          aria-label={title || "Diagrama"}
        >
          {/* Single unified defs block */}
          <defs>
            <pattern
              id={gridId}
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="10" cy="10" r="0.5" fill="#d6d3d1" opacity="0.4" />
            </pattern>
            {hasShadow && <DropShadowFilter id={shadowId} />}
            {elements.map((el, i) => {
              if (el.type === "arrow") {
                const color = el.stroke || "#78716c";
                return (
                  <React.Fragment key={`m-${i}`}>
                    <ArrowMarker
                      id={`arrow-end-${instanceId}-${i}`}
                      color={color}
                    />
                    {el.bidirectional && (
                      <ArrowMarker
                        id={`arrow-start-${instanceId}-${i}`}
                        color={color}
                      />
                    )}
                  </React.Fragment>
                );
              }
              if (el.type === "polyline" && el.arrow) {
                return (
                  <ArrowMarker
                    key={`m-${i}`}
                    id={`arrow-end-${instanceId}-${i}`}
                    color={el.stroke || "#78716c"}
                  />
                );
              }
              return null;
            })}
          </defs>

          {/* Background */}
          <rect x={vbX} y={vbY} width={vbW} height={vbH} fill={background} />
          <rect
            x={vbX}
            y={vbY}
            width={vbW}
            height={vbH}
            fill={`url(#${gridId})`}
          />

          {/* Elements */}
          {elements.map(renderElement)}
        </svg>
      </div>
      {title && (
        <figcaption className="text-center text-[13px] text-stone-500 mt-3 italic">
          {title}
        </figcaption>
      )}
    </figure>
  );
}
