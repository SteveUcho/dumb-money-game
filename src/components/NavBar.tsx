import { UICard } from "./UICard";

export function NavBar() {
  return (
    <div className="dark:text-white flex flex-row-reverse p-4">
      <UICard shadow transition>
        <h1 className="text-xl font-bold">DM</h1>
      </UICard>
    </div>
  );
}
