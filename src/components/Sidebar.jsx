// 
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  Users,
  BarChart3,
  Calendar,
  Award,
  Menu,
  ClipboardCheck,
  Megaphone,
  Settings,
  LogOut
} from "lucide-react";

export default function Sidebar({ role }) {
  const [collapsed, setCollapsed] = useState(false);

  // Trainer & Employee menus
  const menus = {
    trainer: [
      { to: "/trainer", label: "Dashboard", icon: LayoutDashboard },
      { to: "/trainer/trainings", label: "My Trainings", icon: BookOpen },
      { to: "/trainer/employees", label: "Employees", icon: Users },
      { to: "/trainer/progress", label: "Progress", icon: BarChart3 },
      { to: "/trainer/schedule", label: "Schedule", icon: Calendar },
    ],
    employee: [
      { to: "/employee", label: "Dashboard", icon: LayoutDashboard },
      { to: "/employee/trainings", label: "My Trainings", icon: BookOpen },
      { to: "/employee/assessments", label: "Assessments", icon: ClipboardCheck },
      { to: "/employee/progress", label: "Progress", icon: BarChart3 },
      { to: "/employee/announcements", label: "Announcements", icon: Megaphone },
      { to: "/employee/schedule", label: "Schedule", icon: Calendar },
      { to: "/employee/certificates", label: "Certificates", icon: Award },
      { to: "/employee/settings", label: "Settings", icon: Settings },
    ],
  };

  return (
    <aside
      className={`${
        collapsed ? "w-20" : "w-64"
      } h-screen bg-gradient-to-b from-teal-600 to-blue-700 text-white relative transition-all duration-300`}
    >
      {/* Toggle Button */}
      <div className="p-4 flex justify-end">
        <Menu
          className="cursor-pointer"
          onClick={() => setCollapsed(!collapsed)}
        />
      </div>

      {/* Menu Items */}
      <nav className="px-3 space-y-2">
        {menus[role]?.map((item, i) => (
          <NavLink
            key={i}
            to={item.to}
            className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/20 transition"
          >
            <item.icon size={20} />
            {!collapsed && <span>{item.label}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="absolute bottom-6 w-full px-3">
        <button className="flex items-center gap-4 p-3 w-full rounded-xl hover:bg-red-500/20 transition">
          <LogOut size={20} />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}
