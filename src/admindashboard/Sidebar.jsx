import { useState } from "react";

export default function Sidebar({ menu }) {
  const [open, setOpen] = useState(true);

  return (
    <div className={`${open ? "w-64" : "w-20"} bg-[#1F3C88] text-white min-h-screen transition-all duration-300`}>
      
      <button
        onClick={() => setOpen(!open)}
        className="p-4 text-sm"
      >
        ☰
      </button>

      <ul className="mt-6 space-y-4 px-4">
        {menu.map((item, i) => (
          <li key={i} className="cursor-pointer hover:text-yellow-400">
            {open ? item : item[0]}
          </li>
        ))}
      </ul>
    </div>
  );
}
