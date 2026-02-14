// import Sidebar from "../../components/Sidebar";
// import { Outlet } from "react-router-dom";


// export default function TrainerLayout() {
//   return (
//     <div className="flex bg-[#F9FAFB]">
//       <Sidebar role="trainer" />
//       <main className="flex-1 p-6 overflow-y-auto">
//         <Outlet />
//       </main>
//     </div>
//   );
// }
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import { Outlet } from "react-router-dom";


export default function TrainerLayout() {
  return (
    <div className="flex h-screen bg-[#F9FAFB]">
      
      {/* Sidebar */}
      <Sidebar role="trainer" />

      {/* Right side (Topbar + Content) */}
      <div className="flex flex-col flex-1">
        
        {/* Topbar */}
        <Topbar title="Trainer Dashboard" />

        {/* Page content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>

    </div>
  );
}
