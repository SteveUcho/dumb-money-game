import { liquidGlass, liquidGlassScale, liquidGlassShadow } from "@/utils/classNames";
import { useAtom } from "jotai";
import { usernameAtom } from "@/utils/atoms";
import { useState } from "react";

export function CreateUsernameModal() {
  const [username, setUsername] = useAtom(usernameAtom);
  const [tempUsername, setTempUsername] = useState("");

  if (username) {
    return null;
  }

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUsername(tempUsername);
    setTempUsername("");
  };

  return (
    <div
      className={[
        "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6",
        liquidGlass,
        liquidGlassScale,
        liquidGlassShadow,
      ].join(" ")}
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold pb-2">Welcome to Dumb Money</h2>
        <p className="text-lg">Get started by creating your username</p>
        <form onSubmit={handleSubmit}>
          <input
            required
            className="mt-2 border border-gray-300 rounded p-2"
            type="text"
            placeholder="Enter your username"
            value={tempUsername}
            onChange={(e) => setTempUsername(e.target.value)}
          />
          <br />
          <button className="mt-2 bg-rh-green text-white px-4 py-2 rounded" type="submit">
            Start Game
          </button>
        </form>
      </div>
    </div>
  );
}
