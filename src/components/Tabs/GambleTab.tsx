import { motion } from "motion/react";
import { liquidGlass, liquidGlassShadow, popinCard } from "@/utils/classNames";

interface GambleTabProps {
  open: boolean;
  handleClose: () => void;
}

export function GambleTab(props: GambleTabProps) {
  const { open, handleClose } = props;
  return (
    <motion.div
      initial={{ y: "100vh" }}
      animate={{ y: open ? 0 : "100vh" }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className={[popinCard, liquidGlass, liquidGlassShadow].join(" ")}
    >
      <div className="absolute right-6 top-4 text-xl text-gray-500 z-20" onClick={handleClose}>
        X
      </div>
      <div className="flex flex-col sm:right-auto h-full">
        <div className="flex">
          <div>Buy Option</div>
          <div>Short META</div>
        </div>
        <div className="flex-1"></div>
      </div>
    </motion.div>
  );
}
