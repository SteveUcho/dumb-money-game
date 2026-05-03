import type { ReactNode } from "react";

interface WithPriceColorProps extends React.HTMLAttributes<HTMLDivElement> {
  price: number;
  border?: boolean;
  children: ReactNode;
}

export function WithPriceColor(props: WithPriceColorProps) {
  const { price, border, className, ...rest } = props;
  const isPositive = price > 0;
  const colorClass = isPositive ? "text-rh-green" : "text-rh-red";
  const borderClass = isPositive ? "border border-rh-green" : "border border-rh-red";
  return (
    <div {...rest} className={[colorClass, border ? borderClass : undefined, className].join(" ")}>
      {props.children}
    </div>
  );
}
