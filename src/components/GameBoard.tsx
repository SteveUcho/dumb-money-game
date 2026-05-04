import type React from "react";

export function GameBoard(props: React.HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={"px-4 " + props.className}>
      <svg
        className="stroke-rh-green"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0 200 h 150 l 100 -100 h 150"
          strokeOpacity={1}
          strokeWidth={2}
          fill="transparent"
        />
        <text
          textAnchor="middle"
          transform="translate(48, 200) rotate(-90)"
          opacity={0.3}
          // x={50}
          // y={200}
          fontSize={48}
          stroke="gray"
          fill="gray"
        >
          META
        </text>
      </svg>
    </div>
  );
}
