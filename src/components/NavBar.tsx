import { MenuButton } from "./MenuButton";
import { useAtomValue } from "jotai";
import { showWelcomeModalAtom } from "../utils/atoms";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { darkModeAtom } from "../utils/atoms";
import { useAtom } from "jotai";
import { liquidGlass, liquidGlassShadow } from "../utils/classNames";

export function NavBar() {
  const showWelcomeModal = useAtomValue(showWelcomeModalAtom);
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`flex flex-row-reverse p-4 ${showWelcomeModal ? "invisible" : ""}`}>
      <div className="flex flex-col items-end">
        <MenuButton onClick={handleOpen} />
        {/* dropdown menu */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          className={[
            liquidGlass,
            liquidGlassShadow,
            "mt-4 top-full right-0 w-fit text-right flex flex-col",
          ].join(" ")}
        >
          <button
            onClick={toggleTheme}
            className="p-2 bg-gray-200 dark:bg-gray-800 rounded-md transition-colors text-nowrap"
          >
            Toggle Dark: {darkMode ? "🌙" : "☀️"}
          </button>
          <button className="pt-2">Logout</button>
        </motion.div>
      </div>
    </div>
  );
}
