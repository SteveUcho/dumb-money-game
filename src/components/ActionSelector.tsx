import { Children, cloneElement, useState, type ReactElement } from "react";
import { UICard } from "./UICard";
import { WithPriceColor } from "./WithPriceColor";
import { AnimatePresence, motion } from "motion/react";

interface ActionSelectorProps {
  children: ReactElement<HTMLDivElement> | ReactElement<HTMLDivElement>[];
}

const tabNames = ["Sell", "Gamble"];

export function ActionSelector(props: ActionSelectorProps) {
  const [openChild, setOpenChild] = useState(-1);

  const handleClick = (index: number) => () => {
    setOpenChild(index);
  };

  return (
    <>
      <div className="absolute bottom-4 left-4 ">
        <UICard shadow transition className="dark:text-white flex gap-5">
          <WithPriceColor price={10} onClick={handleClick(0)}>
            <span className="font-bold">Actions ▲</span>
          </WithPriceColor>
          <WithPriceColor price={-10} onClick={handleClick(1)}>
            <span className="font-bold">Gamble ▼</span>
          </WithPriceColor>
        </UICard>
      </div>

      <AnimatePresence>
        {Children.map(props.children, (child, index) => {
          if (openChild === index)
            return (
              <motion.div
                initial={{ y: 600 }}
                animate={{ y: 0 }}
                exit={{ y: 600 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className={child.props.className}
                key={tabNames[index]}
              >
                <div
                  className="absolute right-6 top-4 text-xl text-gray-500 z-20"
                  onClick={handleClick(-1)}
                >
                  X
                </div>
                {cloneElement(child, {
                  className: "h-full",
                })}
              </motion.div>
            );
        })}
      </AnimatePresence>
    </>
  );
}
