import { liquidGlass, liquidGlassScale, liquidGlassShadow } from "@/utils/classNames";
import { useSetAtom } from "jotai";
import { usernameAtom } from "@/utils/atoms";
import { useState } from "react";
import { useNavigate } from "react-router";

function RegisterPage() {
  const navigate = useNavigate();
  const setUsername = useSetAtom(usernameAtom);
  const [tempUsername, setTempUsername] = useState("");

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUsername(tempUsername);
    setTempUsername("");
    navigate("/home");
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
        <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-2">
          <input
            required
            className="border border-gray-300 rounded p-2"
            type="text"
            placeholder="Enter your username"
            value={tempUsername}
            onChange={(e) => setTempUsername(e.target.value)}
          />
          <button className="mt-2 bg-rh-green text-white px-4 py-2 rounded" type="submit">
            Home
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
