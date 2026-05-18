import { borderButton } from "@/utils/classNames";
import { Link } from "react-router";

function Index() {
  return (
    <div className="p-4 flex flex-col gap-4">
      <h1>Welcome to Dumb Money Game</h1>
      <Link to="/home" className={[borderButton, "border-rh-green"].join(" ")}>
        Go to Home
      </Link>
    </div>
  );
}

export default Index;
