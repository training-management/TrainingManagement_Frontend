// import { useNavigate } from "react-router-dom";
// import Logo from "../assets/talentgrow.png";

// export default function Navbar() {
//   const navigate = useNavigate();

//   return (
//     <header className="w-full bg-[#4EC1BE] rounded-1xl">
//       <nav className="max-w-[1400px] mx-auto flex items-center justify-between px-16 py-6">
        
//         {/* LOGO */}
//         <div
//           onClick={() => navigate("/")}
//           className="cursor-pointer"
//         >
//           <img
//             src={Logo}
//             alt="TalentGrow Logo"
//             className="h-20 object-contain"
//           />
//         </div>

//         {/* Menu */}
//         <ul className="flex gap-10 text-white font-medium">
//           <li onClick={() => navigate("/")} className="cursor-pointer">Home</li>
//           <li onClick={() => navigate("/courses")} className="cursor-pointer">Training</li>
//           <li  onClick={() => navigate("/Programs")} className="cursor-pointer">Programs</li>
//           <li  onClick={() => navigate("/courses")} className="cursor-pointer">Dashboard</li>
//           <li  onClick={() => navigate("/courses")} className="cursor-pointer">About Us</li>
//         </ul>

//         {/* Button */}
//         <div className="flex gap-4">
//           <button
//             onClick={() => navigate("/auth")}
//             className="bg-yellow-400 text-white px-6 py-2 rounded-full font-semibold"
//           >
//             Sign Up
//           </button>
//         </div>

//       </nav>
//     </header>
//   );
// }
import { useNavigate } from "react-router-dom";
import Logo from "../assets/talentgrow.png";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-[#4EC1BE] shadow-lg sticky top-0 z-50">
      <nav className="max-w-[1400px] mx-auto flex items-center justify-between px-16 py-0">

        {/* LOGO */}
        <div
          onClick={() => navigate("/")}
          className="cursor-pointer flex items-center"
        >
          <img
            src={Logo}
            alt="TalentGrow Logo"
            className="h-16 object-contain"
          />
        </div>

        {/* MENU */}
        <ul className="flex gap-10 text-white font-medium">
          {[
            { label: "Home", path: "/" },
            { label: "Training", path: "/courses" },
            { label: "Programs", path: "/Programs" },
            { label: "Dashboard", path: "/courses" },
            { label: "About Us", path: "/courses" },
          ].map((item, index) => (
            <li
              key={index}
              onClick={() => navigate(item.path)}
              className="
                cursor-pointer
                relative
                after:absolute after:left-0 after:-bottom-1
                after:w-0 after:h-[2px] after:bg-white
                after:transition-all after:duration-300
                hover:after:w-full
                hover:opacity-90
              "
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* BUTTON */}
        <div>
          <button
            onClick={() => navigate("/auth")}
            className="
              bg-yellow-400
              text-white
              px-6 py-2
              rounded-full
              font-semibold
              shadow-md
              hover:bg-yellow-500
              hover:shadow-lg
              transition
            "
          >
            Sign Up
          </button>
        </div>

      </nav>
    </header>
  );
}
