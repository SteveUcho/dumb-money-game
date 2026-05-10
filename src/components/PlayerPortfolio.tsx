import { useAnimate, type ValueAnimationTransition } from "motion/react";
import { WithPriceColor } from "./WithPriceColor";
import { liquidGlass, liquidGlassScale, liquidGlassShadow, popinCard } from "../utils/classNames";

export function PlayerPortfolio(props: React.HTMLAttributes<HTMLDivElement>) {
  const [source, animate] = useAnimate();

  const from = { y: "100vh" };
  const to = { y: 0 };
  const spring: ValueAnimationTransition = {
    type: "spring",
    stiffness: 400,
    damping: 30,
  };

  const openCard = (open: boolean) => () => {
    if (open) {
      animate(source.current, to, spring);
    } else {
      animate(source.current, from, spring);
    }
  };

  return (
    <>
      <div
        className={[
          "flex gap-5 absolute bottom-4 right-4",
          liquidGlass,
          liquidGlassScale,
          liquidGlassScale,
        ].join(" ")}
        onClick={openCard(true)}
      >
        <WithPriceColor price={10} className="font-bold">
          Portfolio ▲
        </WithPriceColor>
      </div>
      <div
        ref={source}
        style={{ transform: "translateY(100vh)" }}
        className={[
          "flex flex-col z-10",
          popinCard,
          liquidGlass,
          liquidGlassShadow,
          props.className,
        ].join(" ")}
      >
        <div
          className="absolute right-6 top-4 text-xl text-gray-500 z-20"
          onClick={openCard(false)}
        >
          X
        </div>
        <h3 className="text-3xl pb-2 border-b border-gray-400">Portfolio</h3>
        <div className="flex-1 overflow-auto">
          <div className="py-2 flex items-center justify-between">
            <h3 className="text-2xl">Cash</h3>
            <div className="">$500</div>
          </div>
          <div className="pb-2">
            <h3 className="text-2xl pb-1">Stocks</h3>
            <div className="flex items-center gap-5">
              <div className="flex-1">
                <div>META</div>
                <div>1000 Shares</div>
              </div>
              <WithPriceColor price={1}>
                <div>$400.54</div>
                <div>+0.62%</div>
              </WithPriceColor>
              <WithPriceColor border price={1} className="text-center rounded-full px-3 py-1">
                <div>SELL</div>
              </WithPriceColor>
            </div>
          </div>
          <div className="pb-2">
            <h3 className="text-2xl pb-1">Derivatives</h3>
            <div className="grid grid-cols-4 pb-1">
              <div>
                <div className="text-gray-400">Player</div>
                <div>Bear1</div>
              </div>
              <div>
                <div className="text-gray-400">Strike</div>
                <div>$95</div>
              </div>
              <div>
                <div className="text-gray-400">Value</div>
                <div>$950</div>
              </div>
              <div>
                <div className="text-gray-400">Change</div>
                <WithPriceColor price={-1}>-5%</WithPriceColor>
              </div>
            </div>
            <WithPriceColor border price={-1} className="text-center rounded-full px-2 py-1">
              <div>SELL</div>
            </WithPriceColor>
          </div>
        </div>
        <div className="flex bottom-4 left-4 right-4 border-t-2 border-black dark:border-white pt-2 justify-between items-center">
          <h3 className="inline text-2xl">Net Worth</h3>
          <p className="inline text-lg">$500</p>
        </div>
      </div>
    </>
  );
}
