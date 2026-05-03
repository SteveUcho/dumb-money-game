import { GridHeader } from "./GridHeader";
import { TabToggle } from "./TabToggle";
import { WithPriceColor } from "./WithPriceColor";

export function OrderBook(props: React.HTMLAttributes<HTMLDivElement>) {
  const { className, ...rest } = props;
  return (
    <div
      {...rest}
      className={
        "bg-green-300 dark:bg-gray-950 dark:text-white md:grid md:grid-cols-2 md:gap-10 pt-4 px-4 " +
        className
      }
    >
      <div className="pb-2">
        <div className="text-2xl">Order Book</div>
        <div className="grid grid-cols-3">
          {/* header */}
          <GridHeader>SHARES</GridHeader>
          <GridHeader>ASK</GridHeader>
          <GridHeader className="text-center">BUY</GridHeader>
          {/* columns */}
          <div>100</div>
          <div>$90</div>
          <WithPriceColor border price={-10} className="rounded-full text-center p-1">
            $950
          </WithPriceColor>
        </div>

        <div className="grid grid-cols-4">
          {/* header */}
          <GridHeader>STRIKE</GridHeader>
          <GridHeader>ASK</GridHeader>
          <GridHeader>CHANGE</GridHeader>
          <GridHeader className="text-center">BUY</GridHeader>
          {/* columns */}
          <div>$90</div>
          <div>$95</div>
          <WithPriceColor price={-10}>
            <div>-10%</div>
          </WithPriceColor>
          <WithPriceColor price={-10}>
            <div className="border rounded-full text-center p-1">$950</div>
          </WithPriceColor>
        </div>
      </div>

      <div className="pb-2">
        <div className="text-2xl">Order History</div>
        <div className="flex items-center gap-2">
          <div className="m-2">All</div>
          <TabToggle className="flex-1 my-2">
            <div>Bear1</div>
            <div>Bull1</div>
            <div>Bear2</div>
            <div>Bull2</div>
          </TabToggle>
        </div>

        <div>Nothing here</div>
      </div>
    </div>
  );
}
