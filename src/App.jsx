import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Auth from "./pages/Auth";
import Programs from "./pages/Programs";


// Admin Dashboard
import AdminDashboard from "./admindashboard/AdminDashboard";
import MainDashboard from "./admindashboard/MainDashboard";
import Departments from "./admindashboard/Departments";

// HR Dashboard

import HRDashboard from "./HRDashboard/HRDashboard";
import Courses from "./admindashboard/Courses";
import User from "./admindashboard/User";
import ReportsAnalytics from "./admindashboard/ReportsAnalytics";




// Employee-Trainee dashboard
import EmployeeTraineeDashboard from "./EmployeeTraineeDashboard/EmployeeTraineeDashboard";



// trainer dashboard
import TrainerDashboard from "./TrainerDashboard/TrainerDashboard";
import PlatformUsage from "./admindashboard/PlatformUsage";
import Settings from "./admindashboard/Settings";



import HrMainDashboard from "./HRDashboard/HrMainDashboard";
import TrainingPrograms from "./HRDashboard/TrainingPrograms";
import CreateBatches from "./HRDashboard/CreateBatches";
import TrainingSchedule from "./HRDashboard/TrainingSchedule";
import AttendanceManagement from "./HRDashboard/AttendanceManagement";
import Employees from "./HRDashboard/Employees";
import AssignTraining from "./HRDashboard/AssignTraining";
import ProgressTracking from "./HRDashboard/ProgressTracking";
import PerformanceReports from "./HRDashboard/PerformanceReports";
import Certifications from "./HRDashboard/Certifications";
import Settingss from "./HRDashboard/Settingss";

import MainEmployeeDashboard from "./EmployeeTraineeDashboard/MainEmployeeDashboard";
import MyCourses from "./EmployeeTraineeDashboard/MyCourses";
import Schedule from "./EmployeeTraineeDashboard/Schedule";
import Attendance from "./EmployeeTraineeDashboard/Attendance";
import Assignments from "./EmployeeTraineeDashboard/Assignments";
import Projects from "./EmployeeTraineeDashboard/Projects";
import Tests from "./EmployeeTraineeDashboard/Tests";
import TeamMember from "./admindashboard/TeamMember";
import Report from "./EmployeeTraineeDashboard/Report";
import Certificates from "./EmployeeTraineeDashboard/Certificates";
import MainTrainerDashboard from "./TrainerDashboard/MainTrainerDashboard";
import MyBatches from "./TrainerDashboard/MyBatches";
import Schedules from "./TrainerDashboard/Schedules";
import Attendances from "./TrainerDashboard/Attendances";
import Assignment from "./TrainerDashboard/Assignment";
import Test from "./TrainerDashboard/Test";
import Resultess from "./TrainerDashboard/Resultess";




function App() {
  return (
    <Routes>

      {/* PUBLIC */}
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/Programs" element={<Programs />} />

      {/* ADMIN Dashboard */}
       
       <Route path="/admin" element={<AdminDashboard/>}>
       <Route index element={<MainDashboard/>}/>
       <Route path="departments" element={<Departments/>}/>
       <Route path="Courses" element={<Courses/>}/>
       <Route path="User" element={<User/>}/>
       <Route path="Reports-Analytics" element={<ReportsAnalytics/>}/>
       <Route path="Platform-Usage" element={<PlatformUsage/>}/>
       <Route path="Settings" element={<Settings/>}/>
       <Route path="Team-Member" element={<TeamMember/>}/>
       </Route>



       {/* HR Dashboard */}
     
     <Route path="/HR-dashboard" element={<HRDashboard/>}>
     <Route index element={<HrMainDashboard/>}/>
     <Route path="Training-Programs" element={<TrainingPrograms/>}/>
     <Route path="Create-Batches" element={<CreateBatches/>}/>
     <Route path="Training-Schedule" element={<TrainingSchedule/>}/>
     <Route path="Attendance-Management" element={<AttendanceManagement/>}/>
     <Route path="Employees" element={<Employees/>}/>
     <Route path="Assign-Training" element={<AssignTraining/>}/>
     <Route path="Progress-Tracking" element={<ProgressTracking/>}/> 
     <Route path="Performance-Reports" element={<PerformanceReports/>}/> 
     <Route path="Certifications" element={<Certifications/>}/> 
     <Route path="Settingss" element={<Settingss/>}/>  
     </Route>

     {/* Employee-trainee dashboard */}
      
      <Route path="/employee-trainee" element={<EmployeeTraineeDashboard/>}>
      <Route index element={<MainEmployeeDashboard/>}/>
      <Route path="My-Courses" element={<MyCourses/>}/>
      <Route path="Schedule" element={<Schedule/>}/>
      <Route path="Attendance" element={<Attendance/>}/>
      <Route path="Assignments" element={<Assignments/>}/>
      <Route path="Projects" element={<Projects/>}/>
      <Route path="Tests" element={<Tests/>}/>
      <Route path="Report" element={<Report/>}/>
      <Route path="Certificates" element={<Certificates/>}/>

      </Route>
      


      {/* Trainer Dashboard */}
      <Route path="/trainer" element={<TrainerDashboard/>}>
      <Route index element={<MainTrainerDashboard/>}/>
      <Route path="My-Batches" element={<MyBatches/>}/>
      <Route path="Schedules" element={<Schedules/>}/>
      <Route path="Attendances" element={<Attendances/>}/>
      <Route path="Assignment" element={<Assignment/>}/>
      <Route path="Test" element={<Test/>}/>
      <Route path="Resultss" element={<Resultess/>}/>

      </Route>




    </Routes>
  );
}


export default App;
