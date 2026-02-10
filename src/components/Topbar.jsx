// // const Topbar = ({ title }) => {
// //   return (
// //     <div className="w-full h-14 bg-teal-600 text-white flex items-center justify-between px-6 shadow">
      
// //       {/* Left side */}
// //       <h1 className="text-lg font-semibold">
// //         {title}
// //       </h1>

// //       {/* Right side */}
// //       <div className="flex items-center gap-4">
// //         <span className="text-sm">Welcome</span>
// //         <div className="w-8 h-8 bg-white text-teal-600 rounded-full flex items-center justify-center font-bold">
// //           U
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Topbar;
// import { NavLink } from "react-router-dom";

// export default function Topbar({ role }) {
//   const trainerLinks = [
//     { name: "Dashboard", path: "/trainer" },
//     { name: "Trainings", path: "/trainer/trainings" },
//     { name: "Employees", path: "/trainer/employees" },
//     { name: "Progress", path: "/trainer/progress" },
//   ];

//   const employeeLinks = [
//     { name: "Dashboard", path: "/employee" },
//     { name: "My Trainings", path: "/employee/trainings" },
//     { name: "Progress", path: "/employee/progress" },
//     { name: "Certificates", path: "/employee/certificates" },
//   ];

//   const links = role === "trainer" ? trainerLinks : employeeLinks;

//   return (
//     <header className="sticky top-0 z-30 bg-white border-b border-teal-200">
//       <div className="h-14 px-6 flex items-center justify-between">

//         {/* Left */}
//         <h1 className="text-teal-700 font-semibold text-lg">
//           Training Management System
//         </h1>

//         {/* Center Nav (hidden on small screens) */}
//         <nav className="hidden md:flex gap-6">
//           {links.map((link) => (
//             <NavLink
//               key={link.name}
//               to={link.path}
//               className={({ isActive }) =>
//                 `text-sm font-medium ${
//                   isActive
//                     ? "text-teal-700 border-b-2 border-teal-600"
//                     : "text-gray-600 hover:text-teal-600"
//                 }`
//               }
//             >
//               {link.name}
//             </NavLink>
//           ))}
//         </nav>

//         {/* Right */}
//         <div className="flex items-center gap-3">
//           <span className="hidden sm:block text-sm text-gray-600">
//             {role === "trainer" ? "Trainer" : "Employee"}
//           </span>
//           <div className="w-9 h-9 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-semibold">
//             U
//           </div>
//         </div>

//       </div>
//     </header>
//   );
// }


import { NavLink } from "react-router-dom";

export default function Topbar() {
  const navLinks = [
    { name: "Dashboard", path: "." },
    { name: "Trainings", path: "trainings" },
    { name: "Progress", path: "progress" },
    { name: "Profile", path: "profile" },
  ];

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-teal-200">
      <div className="h-14 px-6 flex items-center justify-between">

        {/* Logo / Title */}
        <h1 className="text-lg font-semibold text-teal-700">
          Training Management System
        </h1>

        {/* Navigation (Desktop) */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive
                    ? "text-teal-700 border-b-2 border-teal-600"
                    : "text-gray-600 hover:text-teal-600"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <span className="hidden sm:block text-sm text-gray-600">
            User
          </span>
          <div className="w-9 h-9 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-semibold">
            U
          </div>
        </div>

      </div>
    </header>
  );
}
