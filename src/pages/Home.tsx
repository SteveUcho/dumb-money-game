import { Link } from "react-router";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { usernameAtom } from "@/utils/atoms";

const LandingPage = () => {
  const [username, setUsername] = useAtom(usernameAtom);

  return (
    <div>
      Hello {username || "Guest"}
      <div className="flex flex-col gap-2 p-2">
        <Link
          to="/register"
          className="border border-gray-400 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          Register
        </Link>
        <motion.button
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setUsername(null);
            localStorage.removeItem("username");
          }}
          className="border border-gray-400 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-left"
        >
          Logout
        </motion.button>
        <Link
          to="/lobbies"
          className="border border-gray-400 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          Show Lobbies
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
