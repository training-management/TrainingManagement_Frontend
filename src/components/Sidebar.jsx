// export default function Sidebar({ role }) {
//   return (
//     <aside className="w-64 min-h-screen bg-indigo-900 text-white p-6">
//       <h2 className="text-2xl font-bold mb-8">TMS</h2>
//       {role === "trainer" && (
//         <>
//           <p className="mb-4 cursor-pointer">Dashboard</p>
//           <p className="mb-4 cursor-pointer">My Trainings</p>
//           <p className="mb-4 cursor-pointer">Schedule</p>
//         </>
//       )}

//       {role === "employee" && (
//         <>
//           <p className="mb-4 cursor-pointer">Dashboard</p>
//           <p className="mb-4 cursor-pointer">My Courses</p>
//           <p className="mb-4 cursor-pointer">Progress</p>
//         </>
//       )}
//     </aside>
//   );
// }

import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard, BookOpen, Users, BarChart3, Calendar,
  Megaphone, FolderClosed, MessageSquare, Settings, LogOut, Menu
} from "lucide-react";

export default function Sidebar({ role }) {
  const [collapsed, setCollapsed] = useState(false);

  const menu = role === "trainer" ? [
    { to: "/trainer", icon: LayoutDashboard, label: "Dashboard" },
    { to: "/trainer/trainings", icon: BookOpen, label: "My Trainings" },
    { to: "/trainer/employees", icon: Users, label: "Employees" },
    { to: "/trainer/progress", icon: BarChart3, label: "Progress" },
    { to: "/trainer/schedule", icon: Calendar, label: "Schedule" },
    { to: "/trainer/announcements", icon: Megaphone, label: "Announcements" },
    { to: "/trainer/resources", icon: FolderClosed, label: "Resources" },
    { to: "/trainer/messages", icon: MessageSquare, label: "Messages" },
  ] : [];

  return (
    <aside
      className={`h-screen bg-[#7BC8C4] text-white rounded-r-[40px] 
      transition-all duration-300 ${collapsed ? "w-20" : "w-64"} 
      flex flex-col p-6 shadow-xl`}
    >
      {/* TOP LOGO */}
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center font-bold text-[#7BC8C4]">
            V
          </div>
          {!collapsed && <h1 className="text-lg font-bold">Vitality</h1>}
        </div>
        <Menu
          className="cursor-pointer"
          onClick={() => setCollapsed(!collapsed)}
        />
      </div>

      {/* MENU */}
      <nav className="flex-1 space-y-2">
        {menu.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={label}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-2xl transition
              ${isActive ? "bg-white text-[#7BC8C4] shadow-md" : "hover:bg-white/10"}`
            }
          >
            <Icon size={20} />
            {!collapsed && <span className="font-medium">{label}</span>}
          </NavLink>
        ))}
      </nav>

      {/* FOOTER */}
      <div className="space-y-2 pt-4 border-t border-white/20">
        <div className="flex items-center gap-4 px-4 py-3 rounded-2xl hover:bg-white/10 cursor-pointer">
          <Settings size={20} />
          {!collapsed && <span>Settings</span>}
        </div>
        <div className="flex items-center gap-4 px-4 py-3 rounded-2xl hover:bg-white/10 cursor-pointer">
          <LogOut size={20} />
          {!collapsed && <span>Logout</span>}
        </div>
      </div>
    </aside>
  );
}

