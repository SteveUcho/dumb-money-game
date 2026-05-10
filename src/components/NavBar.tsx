import { MenuButton } from "./MenuButton";
import { useAtomValue } from "jotai";
import { showWelcomeModalAtom } from "../utils/atoms";

export function NavBar() {
  const showWelcomeModal = useAtomValue(showWelcomeModalAtom);

  return (
    <div className={`flex flex-row-reverse p-4 ${showWelcomeModal ? "invisible" : ""}`}>
      <MenuButton />
    </div>
  );
}
