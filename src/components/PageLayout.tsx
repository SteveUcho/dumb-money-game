import { Outlet } from "react-router";
import { NavBar } from "./NavBar";

export function PageLayout() {
  return (
    <div className="h-dvh flex flex-col overflow-clip relative">
      <NavBar />
      <Outlet />
    </div>
  );
}
