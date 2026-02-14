import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Auth from "./pages/Auth";
import Programs from "./pages/Programs";

// Admin Dashboard
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Department from "./pages/admin/Department";
import Coursess from "./pages/admin/Coursess";
import Users from "./pages/admin/Users";
import Reportss from "./pages/admin/Reportss";

// HR Dashboard
import HrLayout from "./pages/hr/HrLayout";
import HrDashboard from "./pages/hr/HrDashboard";
import TrainingPrograms from "./pages/hr/TrainingPrograms";
import Attendance from "./pages/hr/Attendance";
import Employees from "./pages/hr/Employees";
import Reports from "./pages/hr/Reports";

function App() {
  return (
    <Routes>

      {/* PUBLIC */}
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/Programs" element={<Programs />} />

      {/* ADMIN Dashboard */}

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />vs
        <Route path="department" element={<Department />} />
        <Route path="coursess" element={<Coursess />} />
        <Route path="users" element={<Users />} />
        <Route path="reportss" element={<Reportss />} />
      </Route>

       {/* HR Dashboard */}
      <Route path="/hr" element={<HrLayout />}>
        <Route index element={<HrDashboard />} />
        <Route path="training-programs" element={<TrainingPrograms />} />
        <Route path="Attendance" element={< Attendance />} />
        <Route path="Employees" element={<Employees />} />
        <Route path="reports" element={<Reports />} />
      </Route>


    </Routes>
  );
}


export default App;
