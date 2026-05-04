import { liquidGlass, liquidGlassScale, liquidGlassShadow } from "../utils/classNames";

export function NavBar() {
  return (
    <div className="dark:text-white flex flex-row-reverse p-4">
      <div className={[liquidGlass, liquidGlassShadow, liquidGlassScale].join(" ")}>
        <h1 className="text-xl font-bold">DM</h1>
      </div>
    </div>
  );
}
