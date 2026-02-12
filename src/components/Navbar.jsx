import { useNavigate } from "react-router-dom";
import Logo from "../assets/talentgrow.png";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-[#4EC1BE] rounded-1xl">
      <nav className="max-w-[1400px] mx-auto flex items-center justify-between px-16 py-6">
        
        {/* LOGO */}
        <div
          onClick={() => navigate("/")}
          className="cursor-pointer"
        >
          <img
            src={Logo}
            alt="TalentGrow Logo"
            className="h-10 object-contain"
          />
        </div>

        {/* Menu */}
        <ul className="flex gap-10 text-white font-medium">
          <li onClick={() => navigate("/")} className="cursor-pointer">Home</li>
          <li onClick={() => navigate("/training")} className="cursor-pointer">Training</li>
          <li  onClick={() => navigate("/Programs")} className="cursor-pointer">Programs</li>
          <li  onClick={() => navigate("/courses")} className="cursor-pointer">Dashboard</li>
          <li  onClick={() => navigate("/courses")} className="cursor-pointer">About Us</li>
        </ul>

        {/* Button */}
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/auth")}
            className="bg-yellow-400 text-white px-6 py-2 rounded-full font-semibold"
          >
            Sign Up
          </button>
        </div>

      </nav>
    </header>
  );
}
