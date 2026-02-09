// // import React from 'react';
// // import { 
// //   LayoutDashboard, BookOpen, Users, BarChart3, Calendar, 
// //   Megaphone, FolderClosed, MessageSquare, Settings, LogOut, Plus 
// // } from 'lucide-react';
// // import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

// // const data = [
// //   { name: 'Mon', progress: 400 },
// //   { name: 'Tue', progress: 300 },
// //   { name: 'Wed', progress: 600 },
// //   { name: 'Thu', progress: 800 },
// //   { name: 'Fri', progress: 500 },
// // ];

// // const TrainerDashboard = () => {
// //   return (
// //     <div className="flex h-screen bg-[#E0F2F1] p-6 font-sans">
      
// //       {/* SIDEBAR - Styled like the Vitality Sidebar */}
// //       <aside className="w-64 bg-[#7BC8C4] rounded-[40px] flex flex-col p-8 text-white shadow-xl">
// //         <div className="flex items-center gap-2 mb-12 px-4">
// //           <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center font-bold text-[#7BC8C4]">V</div>
// //           <h1 className="text-xl font-bold tracking-tight">Vitality</h1>
// //         </div>

// //         <nav className="flex-1 space-y-2">
// //           <NavItem icon={<LayoutDashboard size={20}/>} label="Dashboard" active />
// //           <NavItem icon={<BookOpen size={20}/>} label="My Trainings" />
// //           <NavItem icon={<Users size={20}/>} label="Employees" />
// //           <NavItem icon={<BarChart3 size={20}/>} label="Progress" />
// //           <NavItem icon={<Calendar size={20}/>} label="Schedule" />
// //           <NavItem icon={<Megaphone size={20}/>} label="Announcements" />
// //           <NavItem icon={<FolderClosed size={20}/>} label="Resources" />
// //           <NavItem icon={<MessageSquare size={20}/>} label="Messages" />
// //         </nav>

// //         <div className="mt-auto pt-6 border-t border-white/20 space-y-2">
// //           <NavItem icon={<Settings size={20}/>} label="Settings" />
// //           <NavItem icon={<LogOut size={20}/>} label="Logout" />
// //         </div>
// //       </aside>

// //       {/* MAIN CONTENT AREA */}
// //       <main className="flex-1 ml-8 overflow-y-auto pr-4">
        
// //         {/* TOP WELCOME BAR */}
// //         <header className="flex justify-between items-center mb-8">
// //           <div>
// //             <h2 className="text-2xl font-bold text-slate-800">👋 Welcome back, Trainer</h2>
// //             <p className="text-slate-500">You have <span className="font-semibold text-[#7BC8C4]">2 sessions</span> today • Feb 8, 2026</p>
// //           </div>
// //           <div className="flex gap-3">
// //             <button className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl text-sm font-medium shadow-sm hover:shadow-md transition cursor-pointer">
// //               <Megaphone size={16} /> Post Announcement
// //             </button>
// //             <button className="flex items-center gap-2 bg-[#7BC8C4] px-4 py-2 rounded-xl text-sm font-medium text-white shadow-lg hover:bg-[#6ab4b0] transition cursor-pointer">
// //               <Plus size={16} /> Create Training
// //             </button>
// //           </div>
// //         </header>

// //         <div className="grid grid-cols-3 gap-6">
          
// //           {/* STATS CARDS */}
// //           <div className="col-span-2 grid grid-cols-2 gap-4">
// //             <StatCard label="Total Trainings" value="12" icon={<BookOpen className="text-blue-500"/>} />
// //             <StatCard label="Enrolled Employees" value="148" icon={<Users className="text-purple-500"/>} />
// //             <StatCard label="Ongoing Trainings" value="04" icon={<BarChart3 className="text-orange-500"/>} />
// //             <StatCard label="Today's Sessions" value="02" icon={<Calendar className="text-emerald-500"/>} />
// //           </div>

// //           {/* TRAINING TREND CHART (Top Right in your Image) */}
// //           <div className="bg-white rounded-[32px] p-6 shadow-sm border border-slate-100">
// //              <h3 className="font-bold text-slate-700 mb-4">Training trend</h3>
// //              <div className="h-32">
// //                 <ResponsiveContainer width="100%" height="100%">
// //                   <LineChart data={data}>
// //                     <Line type="monotone" dataKey="progress" stroke="#7BC8C4" strokeWidth={3} dot={false} />
// //                   </LineChart>
// //                 </ResponsiveContainer>
// //              </div>
// //           </div>

// //           {/* TRAINING PROGRESS (Visual Progress Bars) */}
// //           <div className="col-span-2 bg-white rounded-[32px] p-8 shadow-sm">
// //             <h3 className="font-bold text-slate-800 mb-6">Training Progress</h3>
// //             <div className="space-y-6">
// //               <ProgressBar label="React Training" progress={75} color="bg-[#7BC8C4]" />
// //               <ProgressBar label="Java Basics" progress={45} color="bg-orange-400" />
// //               <ProgressBar label="UI/UX Design" progress={90} color="bg-blue-400" />
// //             </div>
// //           </div>

// //           {/* SCHEDULE TIMELINE */}
// //           <div className="bg-white rounded-[32px] p-8 shadow-sm">
// //             <h3 className="font-bold text-slate-800 mb-4">Today's Schedule</h3>
// //             <div className="space-y-4">
// //                <TimelineItem time="10:00 AM" title="React Session" active />
// //                <TimelineItem time="02:00 PM" title="Java Q&A" />
// //                <div className="mt-6 pt-4 border-t text-sm text-slate-400">
// //                   <p>Tomorrow – New Batch Starts</p>
// //                </div>
// //             </div>
// //           </div>

// //           {/* SMART TABLE - EMPLOYEES */}
// //           <div className="col-span-3 bg-white rounded-[32px] p-8 shadow-sm">
// //             <div className="flex justify-between items-center mb-6">
// //               <h3 className="font-bold text-slate-800">Enrolled Employees</h3>
// //               <button className="text-[#7BC8C4] text-sm font-semibold">View all</button>
// //             </div>
// //             <div className="space-y-3">
// //               <EmployeeRow name="Lillian" course="React Training" progress={75} />
// //               <EmployeeRow name="Helena" course="Java Basics" progress={45} />
// //               <EmployeeRow name="Strickland" course="React Training" progress={20} />
// //             </div>
// //           </div>

// //         </div>
// //       </main>
// //     </div>
// //   );
// // };

// // // Reusable Components
// // const NavItem = ({ icon, label, active = false }) => (
// //   <div className={`flex items-center gap-4 px-4 py-3 rounded-2xl cursor-pointer transition-all ${active ? 'bg-white text-[#7BC8C4] shadow-md' : 'hover:bg-white/10'}`}>
// //     {icon}
// //     <span className="font-medium">{label}</span>
// //   </div>
// // );

// // const StatCard = ({ label, value, icon }) => (
// //   <div className="bg-white p-6 rounded-[32px] shadow-sm hover:scale-105 transition-transform cursor-pointer border border-transparent hover:border-[#7BC8C4]">
// //     <div className="flex justify-between items-start">
// //       <div>
// //         <p className="text-slate-400 text-sm mb-1">{label}</p>
// //         <p className="text-3xl font-bold text-slate-800">{value}</p>
// //       </div>
// //       <div className="p-3 bg-slate-50 rounded-2xl">{icon}</div>
// //     </div>
// //   </div>
// // );

// // const ProgressBar = ({ label, progress, color }) => (
// //   <div>
// //     <div className="flex justify-between mb-2">
// //       <span className="text-sm font-medium text-slate-700">{label}</span>
// //       <span className="text-sm font-bold text-slate-400">{progress}%</span>
// //     </div>
// //     <div className="w-full bg-slate-100 rounded-full h-2.5">
// //       <div className={`${color} h-2.5 rounded-full`} style={{ width: `${progress}%` }}></div>
// //     </div>
// //   </div>
// // );

// // const TimelineItem = ({ time, title, active = false }) => (
// //   <div className={`flex gap-4 p-3 rounded-2xl ${active ? 'bg-[#E0F2F1]' : ''}`}>
// //     <span className="text-xs font-bold text-[#7BC8C4] w-16">{time}</span>
// //     <span className="text-sm font-semibold text-slate-700">{title}</span>
// //   </div>
// // );

// // const EmployeeRow = ({ name, course, progress }) => (
// //   <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-md transition group">
// //     <div className="flex items-center gap-3">
// //       <div className="w-10 h-10 bg-slate-300 rounded-full overflow-hidden">
// //         <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`} alt="avatar" />
// //       </div>
// //       <div>
// //         <p className="font-bold text-slate-800">{name}</p>
// //         <p className="text-xs text-slate-400">{course}</p>
// //       </div>
// //     </div>
// //     <div className="flex items-center gap-8">
// //        <div className="text-right">
// //           <p className="text-xs font-bold text-slate-400">{progress}% Done</p>
// //        </div>
// //        <button className="bg-white border px-4 py-1.5 rounded-xl text-xs font-bold group-hover:bg-[#7BC8C4] group-hover:text-white transition">Details</button>
// //     </div>
// //   </div>
// // );

// // export default TrainerDashboard;

// import {
//   BookOpen, Users, BarChart3, Calendar, Megaphone, Plus
// } from "lucide-react";
// import { LineChart, Line, ResponsiveContainer } from "recharts";

// const data = [
//   { name: "Mon", progress: 400 },
//   { name: "Tue", progress: 300 },
//   { name: "Wed", progress: 600 },
//   { name: "Thu", progress: 800 },
//   { name: "Fri", progress: 500 },
// ];

// export default function TrainerDashboard() {
//   return (
//     <div className="bg-[#E0F2F1] min-h-screen p-6 font-sans">

//       {/* HEADER */}
//       <header className="flex justify-between items-center mb-8">
//         <div>
//           <h2 className="text-2xl font-bold text-slate-800">
//             👋 Welcome back, Trainer
//           </h2>
//           <p className="text-slate-500">
//             You have <span className="font-semibold text-[#7BC8C4]">2 sessions</span> today
//           </p>
//         </div>
//         <div className="flex gap-3">
//           <button className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow hover:shadow-md transition">
//             <Megaphone size={16} /> Post Announcement
//           </button>
//           <button className="flex items-center gap-2 bg-[#7BC8C4] px-4 py-2 rounded-xl text-white shadow hover:bg-[#6ab4b0] transition">
//             <Plus size={16} /> Create Training
//           </button>
//         </div>
//       </header>

//       {/* GRID */}
//       <div className="grid grid-cols-3 gap-6">

//         {/* STATS */}
//         <div className="col-span-2 grid grid-cols-2 gap-4">
//           <Stat label="Total Trainings" value="12" icon={<BookOpen />} />
//           <Stat label="Enrolled Employees" value="148" icon={<Users />} />
//           <Stat label="Ongoing Trainings" value="04" icon={<BarChart3 />} />
//           <Stat label="Today's Sessions" value="02" icon={<Calendar />} />
//         </div>

//         {/* CHART */}
//         <div className="bg-white rounded-[32px] p-6">
//           <h3 className="font-bold mb-4">Training Trend</h3>
//           <div className="h-32">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={data}>
//                 <Line
//                   type="monotone"
//                   dataKey="progress"
//                   stroke="#7BC8C4"
//                   strokeWidth={3}
//                   dot={false}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// const Stat = ({ label, value, icon }) => (
//   <div className="bg-white p-6 rounded-[32px] hover:scale-105 transition cursor-pointer">
//     <div className="flex justify-between">
//       <div>
//         <p className="text-slate-400 text-sm">{label}</p>
//         <p className="text-3xl font-bold">{value}</p>
//       </div>
//       <div className="p-3 bg-slate-50 rounded-2xl text-[#7BC8C4]">
//         {icon}
//       </div>
//     </div>
//   </div>
// );


import React from "react";
import {
  BookOpen, Users, BarChart3, Calendar,
  Megaphone, Plus
} from "lucide-react";
import {
  LineChart, Line, ResponsiveContainer
} from "recharts";

const data = [
  { name: "Mon", progress: 400 },
  { name: "Tue", progress: 300 },
  { name: "Wed", progress: 600 },
  { name: "Thu", progress: 800 },
  { name: "Fri", progress: 500 },
];

const TrainerDashboard = () => {
  return (
    <div className="min-h-screen bg-[#E0F2F1] p-6 font-sans">

      {/* TOP WELCOME BAR */}
      <header className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            👋 Welcome back, Trainer
          </h2>
          <p className="text-slate-500">
            You have{" "}
            <span className="font-semibold text-[#7BC8C4]">
              2 sessions
            </span>{" "}
            today • Feb 8, 2026
          </p>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl text-sm font-medium shadow-sm hover:shadow-md transition">
            <Megaphone size={16} /> Post Announcement
          </button>
          <button className="flex items-center gap-2 bg-[#7BC8C4] px-4 py-2 rounded-xl text-sm font-medium text-white shadow-lg hover:bg-[#6ab4b0] transition">
            <Plus size={16} /> Create Training
          </button>
        </div>
      </header>

      <div className="grid grid-cols-3 gap-6">

        {/* STATS CARDS */}
        <div className="col-span-2 grid grid-cols-2 gap-4">
          <StatCard
            label="Total Trainings"
            value="12"
            icon={<BookOpen className="text-blue-500" />}
          />
          <StatCard
            label="Enrolled Employees"
            value="148"
            icon={<Users className="text-purple-500" />}
          />
          <StatCard
            label="Ongoing Trainings"
            value="04"
            icon={<BarChart3 className="text-orange-500" />}
          />
          <StatCard
            label="Today's Sessions"
            value="02"
            icon={<Calendar className="text-emerald-500" />}
          />
        </div>

        {/* TRAINING TREND CHART */}
        <div className="bg-white rounded-[32px] p-6 shadow-sm border border-slate-100">
          <h3 className="font-bold text-slate-700 mb-4">
            Training trend
          </h3>
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <Line
                  type="monotone"
                  dataKey="progress"
                  stroke="#7BC8C4"
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* TRAINING PROGRESS */}
        <div className="col-span-2 bg-white rounded-[32px] p-8 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-6">
            Training Progress
          </h3>
          <div className="space-y-6">
            <ProgressBar
              label="React Training"
              progress={75}
              color="bg-[#7BC8C4]"
            />
            <ProgressBar
              label="Java Basics"
              progress={45}
              color="bg-orange-400"
            />
            <ProgressBar
              label="UI/UX Design"
              progress={90}
              color="bg-blue-400"
            />
          </div>
        </div>

        {/* SCHEDULE */}
        <div className="bg-white rounded-[32px] p-8 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-4">
            Today's Schedule
          </h3>
          <div className="space-y-4">
            <TimelineItem
              time="10:00 AM"
              title="React Session"
              active
            />
            <TimelineItem
              time="02:00 PM"
              title="Java Q&A"
            />
            <div className="mt-6 pt-4 border-t text-sm text-slate-400">
              Tomorrow – New Batch Starts
            </div>
          </div>
        </div>

        {/* EMPLOYEES TABLE */}
        <div className="col-span-3 bg-white rounded-[32px] p-8 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-800">
              Enrolled Employees
            </h3>
            <button className="text-[#7BC8C4] text-sm font-semibold">
              View all
            </button>
          </div>

          <div className="space-y-3">
            <EmployeeRow
              name="Lillian"
              course="React Training"
              progress={75}
            />
            <EmployeeRow
              name="Helena"
              course="Java Basics"
              progress={45}
            />
            <EmployeeRow
              name="Strickland"
              course="React Training"
              progress={20}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

/* ===== REUSABLE COMPONENTS (UNCHANGED) ===== */

const StatCard = ({ label, value, icon }) => (
  <div className="bg-white p-6 rounded-[32px] shadow-sm hover:scale-105 transition-transform cursor-pointer border border-transparent hover:border-[#7BC8C4]">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-slate-400 text-sm mb-1">{label}</p>
        <p className="text-3xl font-bold text-slate-800">{value}</p>
      </div>
      <div className="p-3 bg-slate-50 rounded-2xl">
        {icon}
      </div>
    </div>
  </div>
);

const ProgressBar = ({ label, progress, color }) => (
  <div>
    <div className="flex justify-between mb-2">
      <span className="text-sm font-medium text-slate-700">
        {label}
      </span>
      <span className="text-sm font-bold text-slate-400">
        {progress}%
      </span>
    </div>
    <div className="w-full bg-slate-100 rounded-full h-2.5">
      <div
        className={`${color} h-2.5 rounded-full`}
        style={{ width: `${progress}%` }}
      />
    </div>
  </div>
);

const TimelineItem = ({ time, title, active = false }) => (
  <div className={`flex gap-4 p-3 rounded-2xl ${active ? "bg-[#E0F2F1]" : ""}`}>
    <span className="text-xs font-bold text-[#7BC8C4] w-16">
      {time}
    </span>
    <span className="text-sm font-semibold text-slate-700">
      {title}
    </span>
  </div>
);

const EmployeeRow = ({ name, course, progress }) => (
  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-md transition group">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-slate-300 rounded-full overflow-hidden">
        <img
          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`}
          alt="avatar"
        />
      </div>
      <div>
        <p className="font-bold text-slate-800">{name}</p>
        <p className="text-xs text-slate-400">{course}</p>
      </div>
    </div>

    <div className="flex items-center gap-8">
      <p className="text-xs font-bold text-slate-400">
        {progress}% Done
      </p>
      <button className="bg-white border px-4 py-1.5 rounded-xl text-xs font-bold group-hover:bg-[#7BC8C4] group-hover:text-white transition">
        Details
      </button>
    </div>
  </div>
);

export default TrainerDashboard;
