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
        <div className={["flex gap-5", liquidGlass, liquidGlassScale].join(" ")}>
          <WithPriceColor price={10} onClick={handleClick(0)}>
            <span className="font-bold">Actions ▲</span>
          </WithPriceColor>
          <WithPriceColor price={-10} onClick={handleClick(1)}>
            <span className="font-bold">Gamble ▼</span>
          </WithPriceColor>
        </div>
      </div>
      <ActionCards open={openChild === 0} handleClose={closeTab} />
      <GambleTab open={openChild === 1} handleClose={closeTab} />
    </>
  );
}
