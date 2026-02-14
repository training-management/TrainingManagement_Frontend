import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 bg-[#eef7fb] p-10">
        <Outlet />
      </main>
    </div>
  );
}
