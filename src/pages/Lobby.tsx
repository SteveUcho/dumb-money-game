import { usernameAtom } from "@/utils/atoms";
import { borderButton } from "@/utils/classNames";
import { useAtomValue } from "jotai";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

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

interface WsMessage {
  id: string;
  type: "message" | "join_lobby" | "leave_lobby";
  message?: string;
  player: string;
}

function Lobby() {
  const [conn, setConn] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<WsMessage[]>([]);
  const username = useAtomValue(usernameAtom);
  const params = useParams();

  useEffect(() => {
    if (!username || !params.lobbyId) return;
    // Create WebSocket connection.
    const socket = new WebSocket(
      `ws://${import.meta.env.VITE_BACKEND_URL}/ws/lobby/chat/${params.lobbyId}`,
    );
    setConn(socket);

    // Connection opened
    socket.addEventListener("open", () => {
      const myUuid = self.crypto.randomUUID();
      socket.send(
        JSON.stringify({
          id: myUuid,
          type: "join_lobby",
          lobbyId: params.lobbyId,
          player: username,
        }),
      );
    });

    // Listen for messages
    socket.addEventListener("message", (event) => {
      setMessages((prev) => [...prev, JSON.parse(event.data)]);
    });

    return () => {
      if (socket.readyState === WebSocket.OPEN) {
        const myUuid = self.crypto.randomUUID();
        socket.send(JSON.stringify({ id: myUuid, type: "leave_lobby", player: username }));
      }
      socket.close();
    };
  }, [username, params]);

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (conn && username) {
      const form = e.currentTarget as HTMLFormElement;
      const message = form.message.value;
      const myUuid = self.crypto.randomUUID();
      conn.send(JSON.stringify({ id: myUuid, type: "message", message, player: username }));
      form.message.value = "";
    }
  };

  return (
    <div className="flex-1 min-h-0">
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
        <div className="flex-1 flex flex-col min-h-0">
          <p>Chat</p>
          <div className="flex-1 overflow-auto">
            {messages.map((message) => (
              <p key={message.id}>
                {message.player}: {message.type === "join_lobby" ? "Joined the lobby" : null}
                {message.type === "leave_lobby" ? "Left the lobby" : null}
                {message.type === "message" ? message.message : null}
              </p>
            ))}
          </div>
        </div>
        <form onSubmit={handleSubmit} className="pt-2">
          <div className="flex gap-2">
            <input
              name="message"
              type="text"
              placeholder="Type a message..."
              className="border border-gray-300 dark:border-gray-600 rounded-xl p-2 flex-1"
            />
            <button className="rounded-xl bg-rh-green p-2">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Lobby;
