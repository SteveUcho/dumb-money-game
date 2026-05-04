import { liquidGlass, liquidGlassScale, liquidGlassShadow } from "../utils/classNames";
import { WithPriceColor } from "./WithPriceColor";

export function StockPrice() {
  return (
    <div
      className={[
        "absolute top-0 left-0 m-4",
        liquidGlass,
        liquidGlassScale,
        liquidGlassShadow,
      ].join(" ")}
    >
      <h3 className="text-2xl">META</h3>
      <h3 className="text-xl">$500</h3>
      <WithPriceColor price={100}>▲ $100 Q1</WithPriceColor>
      <WithPriceColor price={-100}>▼ $100 YTD</WithPriceColor>
    </div>
  );
}
