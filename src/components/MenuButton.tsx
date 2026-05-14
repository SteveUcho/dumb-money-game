import { liquidGlass, liquidGlassScale, liquidGlassShadow } from "../utils/classNames";

interface MenuButtonProps {
  onClick?: () => void;
}

export function MenuButton({ onClick }: MenuButtonProps) {
  return (
    <div
      className={[liquidGlass, liquidGlassShadow, liquidGlassScale, "max-w-fit"].join(" ")}
      onClick={onClick}
    >
      <h1 className="text-xl font-bold">DM</h1>
    </div>
  );
}
