import { NavLink, Outlet } from "react-router-dom";

export default function HrLayout() {
  return (
    <div className="flex min-h-screen">
      
      {/* SIDEBAR */}
      <div className="w-64 bg-[#2DD4BF] text-white p-6">
        <h2 className="text-xl font-bold mb-6">HR Dashboard</h2>

        <nav className="space-y-4">
          <NavItem to="/hr" label="Overview" />
          <NavItem to="/hr/training-programs" label="Training Programs" />
          <NavItem to="/hr/employees" label="Employees" />
          <NavItem to="/hr/attendance" label="Attendance" />
          <NavItem to="/hr/reports" label="Reports" />
        </nav>
      </div>

      {/* CONTENT AREA */}
      <div className="flex-1 p-10 bg-gray-50">
        <Outlet />
      </div>

    </div>
  );
}

function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "block font-semibold underline"
          : "block hover:underline"
      }
    >
      {label}
    </NavLink>
  );
}
