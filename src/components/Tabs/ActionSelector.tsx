import { useState } from "react";
import { liquidGlass, liquidGlassScale } from "../../utils/classNames";
import { GambleTab } from "./GambleTab";
import { ActionCards } from "./ActionCards";
import { OrderBook } from "./OrderBook";
import { PlayerPortfolio } from "./PlayerPortfolio";

export function ActionSelector() {
  const [openChild, setOpenChild] = useState(-1);

  const handleClick = (index: number) => () => {
    setOpenChild(index);
  };
  const closeTab = () => setOpenChild(-1);

  return (
    <>
      <div
        className={["flex absolute bottom-4 right-4", liquidGlass, liquidGlassScale].join(" ")}
        style={{ padding: 0 }}
      >
        <div onClick={handleClick(1)} className="font-bold py-4 pl-5 pr-3">
          Stocks
        </div>
        <div onClick={handleClick(2)} className="font-bold py-4 pl-3 pr-3">
          Options
        </div>
        <div onClick={handleClick(3)} className="font-bold py-4 pl-3 pr-5">
          Portfolio
        </div>
      </div>
      <ActionCards />
      <OrderBook open={openChild === 1} handleClose={closeTab} />
      <GambleTab open={openChild === 2} handleClose={closeTab} />
      <PlayerPortfolio open={openChild === 3} handleClose={closeTab} />
    </>
  );
}
