import { liquidGlass, liquidGlassScale, liquidGlassShadow } from "../utils/classNames";
import { usernameAtom } from "../utils/atoms";
import { useAtomValue } from "jotai";

export function MenuButton() {
  const username = useAtomValue(usernameAtom);

  return (
    <div className={[liquidGlass, liquidGlassShadow, liquidGlassScale].join(" ")}>
      <h1 className="text-xl font-bold">{username || "DM"}</h1>
    </div>
  );
}
