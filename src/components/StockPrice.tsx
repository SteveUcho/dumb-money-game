import { UICard } from "./UICard";
import { WithPriceColor } from "./WithPriceColor";

export function StockPrice() {
  return (
    <UICard
      shadow
      transition
      className="absolute dark:text-white top-0 left-0 m-4 w-auto h-fit aspect-square min-w-0"
    >
      <h3 className="text-2xl">META</h3>
      <h3 className="text-xl">$500</h3>
      <WithPriceColor price={100}>▲ $100 Q1</WithPriceColor>
      <WithPriceColor price={-100}>▼ $100 YTD</WithPriceColor>
    </UICard>
  );
}
