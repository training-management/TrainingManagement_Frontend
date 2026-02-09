// import { Outlet } from "react-router-dom";
// import Sidebar from "../../components/Sidebar";

// export default function TrainerLayout() {
//   return (
//     <div className="flex min-h-screen">
//       <Sidebar role="trainer" />

//       <main className="flex-1 bg-gray-100 p-8">
//         <Outlet />
//       </main>
//     </div>
//   );
// }

import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

export default function TrainerLayout() {
  return (
    <div className="flex">
      <Sidebar role="trainer" />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
