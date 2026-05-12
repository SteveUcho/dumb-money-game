import type { ElementType } from "react";

type WithPriceColorProps<T extends ElementType> = {
  as?: T;
  price: number;
  border?: boolean;
} & React.ComponentPropsWithoutRef<T>;

export function WithPriceColor<T extends ElementType>(props: WithPriceColorProps<T>) {
  const { price, border, className, as: Tag = "div", ...rest } = props;
  const isPositive = price > 0;
  const colorClass = isPositive ? "text-rh-green" : "text-rh-red";
  const borderClass = isPositive ? "border border-rh-green" : "border border-rh-red";

  return (
    <Tag {...rest} className={[colorClass, border ? borderClass : undefined, className].join(" ")}>
      {props.children}
    </Tag>
  );
}
