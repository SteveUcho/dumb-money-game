import type React from "react";
import { motion, useAnimate } from "motion/react";
import { useEffect, useState } from "react";

type DataPoints = { x: number; y: number }[];

// data points should always start at 0,0
// x is from 0 to 1000 -- for now? --- per quarter
const dataPoints: DataPoints = [
  { x: 0, y: 0 },
  { x: 280, y: 0 },
  { x: 610, y: 50 },
  { x: 950, y: 50 },
];

const topPadding = 20;
const bottomPadding = 20;

function transformPoints(
  dataPoints: DataPoints,
  dimensions: { height: number; width: number },
): DataPoints {
  if (!dataPoints.length) return [];
  let minY = dataPoints[0].y;
  let maxY = dataPoints[0].y;
  dataPoints.forEach((point) => {
    minY = Math.min(minY, point.y);
    maxY = Math.max(maxY, point.y);
  });
  let offset = 0;
  if (minY < 0) offset = minY;
  offset += bottomPadding;
  let yDiff = maxY - minY;
  return dataPoints.map((point) => {
    const widthPercent = point.x / 1000;
    const heightPercent = (point.y + offset) / (yDiff + topPadding + bottomPadding);
    const unFlippedY = dimensions.height * heightPercent;
    const flippedY = dimensions.height - unFlippedY;
    return { x: dimensions.width * widthPercent, y: flippedY };
  });
}

function convertToPath(dataPoints: DataPoints): string {
  return "M" + dataPoints.map((point) => `${point.x},${point.y}`).join("L");
}

export function GameBoard(props: React.HtmlHTMLAttributes<HTMLDivElement>) {
  const [scope, animate] = useAnimate();
  const [boardDimensions, setBoardDimensions] = useState({ width: 100, height: 100 });

  const boardPoints = transformPoints(dataPoints, boardDimensions);
  const stockLinePath = convertToPath(boardPoints);

  useEffect(() => {
    if (!scope.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      setBoardDimensions({
        height: entries[0].contentRect.height,
        width: entries[0].contentRect.width,
      });
    });

    resizeObserver.observe(scope.current);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const path = scope.current.querySelector("path");
    const circle = scope.current.querySelector("circle");
    const totalLength = path.getTotalLength();

    animate(
      path,
      { pathLength: 1 },
      {
        delay: 0.3,
        type: "spring",
        duration: 3,
        onUpdate: (latest) => {
          const point = path.getPointAtLength(latest * totalLength);
          circle.setAttribute("cx", point.x);
          circle.setAttribute("cy", point.y);
        },
      },
    );
  }, [animate, scope, boardDimensions]);

  return (
    <div {...props} className={"px-4 " + props.className}>
      <svg ref={scope} width="100%" height="100%">
        <line
          x1={"28%"}
          y1="40"
          x2={"28%"}
          y2={"100%"}
          opacity={0.2}
          stroke="gray"
          strokeWidth="2"
          strokeDasharray="10, 5"
        />
        <text
          x={"12%"}
          y={"90%"}
          opacity={0.3}
          fontSize={24}
          stroke="gray"
          fill="gray"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          Jan
        </text>
        <line
          x1={"61%"}
          y1="40"
          x2={"61%"}
          y2={"100%"}
          opacity={0.2}
          stroke="gray"
          strokeWidth="2"
          strokeDasharray="10, 5"
        />
        <text
          x={"44%"}
          y={"90%"}
          opacity={0.3}
          fontSize={24}
          stroke="gray"
          fill="gray"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          Feb
        </text>
        <line
          x1={"95%"}
          y1="40"
          x2={"95%"}
          y2={"100%"}
          opacity={0.5}
          stroke="gray"
          strokeWidth="2"
          strokeDasharray="10, 5"
        />
        <text
          x={"77%"}
          y={"90%"}
          opacity={0.3}
          fontSize={24}
          stroke="gray"
          fill="gray"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          Mar
        </text>
        <text
          textAnchor="middle"
          x={"95%"}
          y={25}
          opacity={0.3}
          fontSize={24}
          stroke="gray"
          strokeWidth={1}
          fill="gray"
        >
          Q1
        </text>
        <motion.path
          d={stockLinePath}
          strokeOpacity={1}
          strokeWidth={2}
          className="stroke-rh-green"
          fill="transparent"
          initial={{ pathLength: 0 }}
        />
        <circle cx="0" cy="50%" r="8" strokeWidth={4} className="stroke-white fill-rh-green" />
      </svg>
    </div>
  );
}
