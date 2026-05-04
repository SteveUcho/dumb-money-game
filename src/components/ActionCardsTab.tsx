import { liquidGlass, liquidGlassScale, liquidGlassShadow, popinCard } from "../utils/classNames";
import { motion, stagger, type Variants } from "motion/react";
import { WithPriceColor } from "./WithPriceColor";

const data = [
  {
    body: "Something happened in the market, price takes a dive",
    number: -15,
    conclusion: "Plunges -15%",
  },
  {
    body: "Government takes a stake in the company",
    number: 15,
    conclusion: "Pops +15%",
  },
  {
    body: "Something happened in the market, price takes a dive",
    number: -15,
    conclusion: "Plunges -15%",
  },
  {
    body: "Government takes a stake in the company",
    number: 15,
    conclusion: "Pops +15%",
  },
];

interface ActionCardsProps {
  open: boolean;
  handleClose: () => void;
}

const listVariant: Variants = {
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30,
      delayChildren: stagger(0.1, { startDelay: 0.1 }),
    },
  },
  hidden: { y: 600, opacity: 0 },
};

const itemVariant = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 20 },
};

export function ActionCards(props: ActionCardsProps) {
  const { open, handleClose } = props;
  return (
    <motion.div
      variants={listVariant}
      initial={{ y: 600 }}
      animate={open ? "visible" : "hidden"}
      style={{ height: "unset" }}
      className={"flex flex-col gap-4 " + popinCard}
    >
      <div
        style={{ border: "1px solid var(--color-rh-red)" }}
        className={[
          "absolute right-0 -top-18 text-xl z-20 rounded-full text-rh-red",
          liquidGlass,
          liquidGlassShadow,
          liquidGlassScale,
        ].join(" ")}
        onClick={handleClose}
      >
        Close
      </div>
      {data.map((cardData) => {
        return (
          <motion.div
            key={cardData.body}
            variants={itemVariant}
            className={[
              liquidGlass,
              liquidGlassShadow,
              "p-6 text-center aspect-4/1 flex flex-col justify-center max-w-full",
            ].join(" ")}
          >
            <p>{cardData.body}</p>
            <WithPriceColor price={cardData.number}>{cardData.conclusion}</WithPriceColor>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
