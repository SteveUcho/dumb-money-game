import { MenuButton } from "../MenuButton";
import { showWelcomeModalAtom } from "../../utils/atoms";
import { useAtomValue } from "jotai";
import { CreateUsernameModal } from "./CreateUsernameModal";
import { GameLobbiesModal } from "./GameLobbiesModal";
import { LobbySignInModal } from "./LobbySignInModal";
import { usernameAtom } from "@/utils/atoms";

export function WelcomeModal() {
  const showWelcomeModal = useAtomValue(showWelcomeModalAtom);
  const username = useAtomValue(usernameAtom);

  if (!showWelcomeModal) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/5 z-50 backdrop-blur-sm">
      <div className="flex m-4">
        <MenuButton />
      </div>
      {!username ? (
        <CreateUsernameModal />
      ) : (
        <>
          <LobbySignInModal />
          <GameLobbiesModal />
        </>
      )}
    </div>
  );
}
