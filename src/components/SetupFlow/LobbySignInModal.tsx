import { liquidGlass, liquidGlassShadow } from "@/utils/classNames";
import { useAtom, useSetAtom } from "jotai";
import { currentLobbyAtom } from "@/utils/atoms";
import { showWelcomeModalAtom } from "@/utils/atoms";

export function LobbySignInModal() {
  const [currentLobby, setCurrentLobby] = useAtom(currentLobbyAtom);
  const setShowWelcomeModal = useSetAtom(showWelcomeModalAtom);

  if (!currentLobby) {
    return null;
  }

  return (
    <div
      className={[
        "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 w-4/5 text-center max-h-[60vh] flex flex-col",
        liquidGlass,
        liquidGlassShadow,
      ].join(" ")}
    >
      <h2 className="text-2xl font-bold pb-6">Lobby Sign In</h2>
      <p className="text-lg">Current Lobby: {currentLobby}</p>
      <p className="text-lg">Enter your lobby code to join</p>
      <input
        className="mt-2 border border-gray-300 rounded p-2"
        type="text"
        placeholder="Enter lobby code"
      />
      <button
        onClick={() => setCurrentLobby(null)}
        className="mt-2 bg-rh-red text-white p-2 rounded"
      >
        Back to Lobbies
      </button>
      <button
        className="mt-2 bg-rh-green text-white p-2 rounded"
        onClick={() => setShowWelcomeModal(false)}
      >
        Join Lobby
      </button>
    </div>
  );
}
