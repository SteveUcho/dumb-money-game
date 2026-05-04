import type React from "react";

export function GameBoard(props: React.HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={"px-4 " + props.className}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
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
        <path
          d="M 0 170 h 150 l 100 -100 h 100"
          strokeOpacity={1}
          strokeWidth={2}
          className="stroke-rh-green"
          fill="transparent"
        />
        <circle cx={"95%"} cy="70" r="8" strokeWidth={4} className="stroke-white fill-rh-green" />
      </svg>
    </div>
  );
}
