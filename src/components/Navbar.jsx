import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-[#4EC1BE] rounded-4xl">
      <nav className="max-w-1400px mx-auto flex items-center justify-between px-16 py-6">
        
        {/* Logo */}
        <h1
          onClick={() => navigate("/")}
          className="text-2xl font-bold text-white cursor-pointer"
        >
          Talent<span className="text-yellow-400">Grow</span>
        </h1>

        {/* Menu */}
        <ul className="flex gap-10 text-white font-medium">
          <li onClick={() => navigate("/")} className="cursor-pointer">Home</li>
          <li onClick={() => navigate("/courses")} className="cursor-pointer">Training</li>
          <li className="cursor-pointer">Programs</li>
          <li className="cursor-pointer">Dashboard</li>
          <li className="cursor-pointer">About Us</li>
        </ul>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="bg-white text-[#1F3C88] px-6 py-2 rounded-full font-semibold">
            Login
          </button>
          <button className="bg-yellow-400 text-white px-6 py-2 rounded-full font-semibold">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
}
