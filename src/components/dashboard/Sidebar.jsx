import { useState } from "react";
import {
  
  ChevronLeft,
  ChevronRight,
  
} from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Sidebar(props) {
  const [collapsed, setCollapsed] = useState(false);
  

  
  return (
    <aside
      className={`h-screen bg-white transition-all duration-300
      ${collapsed ? "w-20" : "w-80"} flex flex-col shadow-sm`}
    >
      {/* Logo */}
      <div className="flex items-center justify-between p-4 ">
        {!collapsed && (
          <h1 className="text-xl font-medium text-[#4EC1BE]">
            TMS Admin
          </h1>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Menu */}
       <nav className="flex-1 px-3 py-4 space-y-4 overflow-y-auto">
        {props.data.map((section) => (
          <div key={section.category}>
            {!collapsed && (
              <p className="text-sm text-black mb-3 uppercase tracking-wider">
                {section.category}
              </p>
            )}

            {section.items.map((item) => (
              <SidebarItem
                key={item.name}
                icon={item.icon}
                name={item.name}
                path={item.path}
                collapsed={collapsed}
              />
            ))}
          </div>
        ))}
      </nav>
    </aside>
  );
}


function SidebarItem({ icon: Icon, name, path, collapsed }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `flex items-center gap-3 px-3 py-2 rounded-lg mb-1
        transition cursor-pointer
        ${
          isActive
            ? "bg-[#4EC1BE] text-white"
            : "text-[#0F172A] hover:bg-[#CCFBF1]"
        }`
      }
    >
      <Icon size={20} />
      {!collapsed && (
        <span className="font-medium">
          {name}
        </span>
      )}
    </NavLink>
  );
}



