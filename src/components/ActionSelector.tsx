import { useState } from "react";
import { WithPriceColor } from "./WithPriceColor";
import { liquidGlass, liquidGlassScale } from "../utils/classNames";
import GambleTab from "./GambleTab";
import { ActionCards } from "./ActionCardsTab";

export function ActionSelector() {
  const [openChild, setOpenChild] = useState(-1);

  const handleClick = (index: number) => () => {
    setOpenChild(index);
  };
  const closeTab = () => setOpenChild(-1);

  return (
    <>
      <div className="absolute bottom-4 left-4 ">
        <div className={["flex", liquidGlass, liquidGlassScale].join(" ")} style={{ padding: 0 }}>
          <WithPriceColor price={10} onClick={handleClick(0)} className="font-bold py-4 pl-4 pr-3">
            Actions ▲
          </WithPriceColor>
          <WithPriceColor price={-10} onClick={handleClick(1)} className="font-bold py-4 pl-3 pr-4">
            Gamble ▼
          </WithPriceColor>
        </div>
      </div>
      <ActionCards open={openChild === 0} handleClose={closeTab} />
      <GambleTab open={openChild === 1} handleClose={closeTab} />
    </>
  );
}
