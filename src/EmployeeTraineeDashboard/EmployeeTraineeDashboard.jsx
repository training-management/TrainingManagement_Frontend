import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";
import { SIDEBAR_CONFIG } from "../sidebarConfig";
import { Outlet } from "react-router-dom";

function EmployeeTraineeDashboard() {
  const role = "EMPLOYEE"; // ADMIN | HR | TRAINER | EMPLOYEE
  // later you can get this from Redux or Auth

  return (
    <div className="w-screen h-screen flex">
      <Sidebar data={SIDEBAR_CONFIG[role]} />
      <div className="w-full h-full">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default EmployeeTraineeDashboard;