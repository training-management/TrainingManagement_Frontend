// import Sidebar from "../../components/Sidebar";
// import { Outlet } from "react-router-dom";

// export default function EmployeeLayout() {
//   return (
//     <div className="flex min-h-screen bg-[#F9FAFB]">
//       <Sidebar role="employee" />

//       {/* CONTENT */}
//       <main className="flex-1 p-6 overflow-y-auto">
//         <Outlet />
//       </main>
//     </div>
//   );
// }
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import { Outlet } from "react-router-dom";

export default function EmployeeLayout() {
  return (
    <div className="flex h-screen bg-[#F9FAFB]">
      <Sidebar role="employee" />

      <div className="flex flex-col flex-1">
        <Topbar />
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
    