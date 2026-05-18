import { borderButton } from "@/utils/classNames";
import { Link } from "react-router";

const lobbyData = {
  lobbyId: "123",
  owner: "Player 1",
  players: [
    {
      name: "Player 1",
      ready: false,
    },
    {
      name: "Player 2",
      ready: false,
    },
    {
      name: "Player 3",
      ready: false,
    },
    {
      name: "Player 4",
      ready: false,
    },
  ],
};

function Lobby() {
  return (
    <div className="flex-1">
      <div className="h-1/3 flex flex-col">
        <div className="flex-1 grid grid-cols-2 gap-2">
          <div>
            {lobbyData.players.map((player) => (
              <div key={player.name} className="flex gap-2">
                <p>{player.name}</p>
                <p>{player.ready ? "Ready" : "Not Ready"}</p>
              </div>
            ))}
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-2 gap-4 p-2">
          <Link to="/lobbies" className={["border-rh-red text-center", borderButton].join(" ")}>
            Leave Lobby
          </Link>
          <Link to="/game" className={["border-rh-green text-center", borderButton].join(" ")}>
            Ready
          </Link>
        </div>
      </div>
      <div className="h-2/3 bg-green-300 dark:bg-gray-800 p-4 flex flex-col">
        <div className="flex-1">
          <p>Chat</p>
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          className="border border-gray-300 dark:border-gray-600 rounded-xl p-2"
        />
      </div>
    </div>
  );
}

export default Lobby;
