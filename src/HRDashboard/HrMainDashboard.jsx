// export default function HrMainDashboard() {
//   return (
//     <div className="p-8">
//       {/* Heading */}
//       <h1 className="text-3xl font-bold text-gray-800 mb-8">
//         HR & Training Panel
//       </h1>

//       {/* KPI Cards */}
//       <div className="grid grid-cols-4 gap-6 mb-10">
//         <Card title="Total Trainings" value="24" />
//         <Card title="Employees Enrolled" value="132" />
//         <Card title="Completed Trainings" value="89" />
//         <Card title="Upcoming Sessions" value="5" />
//       </div>

//       {/* Bottom Section */}
//       <div className="grid grid-cols-2 gap-8">
//         {/* Ongoing Trainings */}
//         <div className="bg-white p-6 rounded-xl shadow">
//           <h2 className="text-xl font-semibold mb-4">
//             Ongoing Training Programs
//           </h2>
//           <ul className="space-y-3 text-gray-600">
//             <li>• React Development Bootcamp</li>
//             <li>• Node.js Backend Training</li>
//             <li>• HR Leadership Program</li>
//             <li>• Cyber Security Awareness</li>
//           </ul>
//         </div>

//         {/* Quick Actions */}
//         <div className="bg-white p-6 rounded-xl shadow">
//           <h2 className="text-xl font-semibold mb-4">
//             HR Quick Actions
//           </h2>
//           <div className="flex flex-col gap-3">
//             <button className="bg-teal-500 text-white py-2 rounded-lg">
//               Create Training
//             </button>
//             <button className="bg-teal-500 text-white py-2 rounded-lg">
//               Assign Employees
//             </button>
//             <button className="bg-teal-500 text-white py-2 rounded-lg">
//               Generate Report
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Card({ title, value }) {
//   return (
//     <div className="bg-white p-6 rounded-xl shadow">
//       <h3 className="text-gray-500 text-sm">{title}</h3>
//       <p className="text-2xl font-bold text-gray-800 mt-2">{value}</p>
//     </div>
//   );
// }






import React from "react";
import {
  Search,
  Users,
  UserCheck,
  UserX,
  FileText,
  MoreHorizontal,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const attendanceData = [
  { day: "Mon", value: 90 },
  { day: "Tue", value: 70 },
  { day: "Wed", value: 120 },
  { day: "Thu", value: 85 },
  { day: "Fri", value: 55 },
  { day: "Sat", value: 75 },
  { day: "Sun", value: 45 },
];

export default function HrMainDashboard() {
  return (
    <div className="bg-[#F5F6FA] min-h-screen p-8 my-6 mx-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-semibold">
            Welcome , <span className="font-bold">HR</span>
          </h1>
          <p className="text-black mt-2 text-xl">
            Have a good work and always be enthusiastic
          </p>
        </div>

        <div className="bg-white flex items-center px-4 py-2 rounded-xl shadow-sm w-64">
          <Search size={18} className=" mr-2" />
          <input
            placeholder="Search ..."
            className="outline-none text-sm w-full"
          />
        </div>
      </div>

      {/* STAT CARDS */}
      <div className="grid grid-cols-4 gap-6 mb-10">
        {[
          { title: "Total Employee", value: "325", icon: <Users size={20} /> },
          { title: "Employee Permission", value: "12", icon: <UserCheck size={20} /> },
          { title: "Resign Employee", value: "21", icon: <UserX size={20} /> },
          { title: "Total Applied", value: "234", icon: <FileText size={20} /> },
        ].map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl shadow-[0_5px_20px_rgba(0,0,0,0.05)]">
            <div className="flex justify-between">
              <div>
                <p className="text-black text-sm">{item.title}</p>
                <h2 className="text-3xl font-bold text-[#4EC1BE] mt-3">
                  {item.value}
                </h2>
              </div>
              <div className="bg-[#4EC1BE]/20 p-3 rounded-xl text-[#4EC1BE]">
                {item.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MIDDLE SECTION */}
      <div className="grid grid-cols-3 gap-6 mb-10">

        {/* ATTENDANCE */}
        <div className="col-span-2 bg-white p-6 rounded-3xl shadow-[0_5px_20px_rgba(0,0,0,0.05)]">
          <div className="flex justify-between mb-6">
            <h2 className="font-semibold text-lg">Attendance Statistics</h2>
            <button className="bg-gray-100 px-4 py-1 rounded-lg text-sm">
              Week 01
            </button>
          </div>

          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={attendanceData}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#4EC1BE"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* REVIEWS MOOD */}
        <div className="bg-white p-6 rounded-3xl shadow-[0_5px_20px_rgba(0,0,0,0.05)]">
          <h2 className="font-semibold text-lg mb-6">Reviews Mood</h2>

          <div className="space-y-4">
            <div className="h-5 bg-[#4EC1BE] rounded-full w-3/4"></div>
            <div className="h-5 bg-gray-300 rounded-full w-1/2"></div>
            <div className="h-5 bg-gray-200 rounded-full w-1/3"></div>
          </div>

          <div className="flex justify-between mt-6 text-sm">
            <span>Positive</span>
            <span>Neutral</span>
            <span>Negative</span>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="grid grid-cols-3 gap-6">

        {/* TOP SCORE */}
        <div className="col-span-2 bg-white p-6 rounded-3xl shadow-[0_5px_20px_rgba(0,0,0,0.05)]">
          <div className="flex justify-between mb-6">
            <h2 className="font-semibold text-lg">Top Score Hiring</h2>
            <button className="bg-gray-100 px-4 py-1 rounded-lg text-sm">
              June 2024
            </button>
          </div>

          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-400 border-b">
                <th className="text-left pb-3">Candidate</th>
                <th className="text-left">Match Score</th>
                <th className="text-left">Status</th>
                <th className="text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-4">Cody Fisher</td>
                <td className="text-[#4EC1BE] font-semibold">70%</td>
                <td>
                  <span className="bg-[#4EC1BE]/20 text-[#4EC1BE] px-3 py-1 rounded-full text-xs">
                    Interview
                  </span>
                </td>
                <td><MoreHorizontal size={18} /></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* EMPLOYEE DIVISION */}
        {/* EMPLOYEE DIVISION BUBBLE CHART */}
<div className="bg-white p-6 rounded-3xl shadow-[0_5px_20px_rgba(0,0,0,0.05)] relative overflow-hidden">
  <h2 className="font-semibold text-lg mb-6">
    Employee Division
  </h2>

  <div className="relative h-64 w-full flex items-center justify-center">

    {/* 70% Circle */}
    <div className="absolute w-40 h-40 rounded-full border-4 border-lime-400 flex items-center justify-center text-2xl font-bold text-lime-500 bg-lime-50 left-6">
      70%
    </div>

    {/* 20% Circle */}
    <div className="absolute w-28 h-28 rounded-full border-4 border-purple-400 flex items-center justify-center text-xl font-semibold text-purple-500 bg-purple-50 right-10 top-6">
      20%
    </div>

    {/* 10% Circle */}
    <div className="absolute w-20 h-20 rounded-full border-4 border-pink-400 flex items-center justify-center text-sm font-semibold text-pink-500 bg-pink-50 right-20 bottom-6">
      10%
    </div>

  </div>

  {/* Legend */}
  <div className="flex justify-around mt-6 text-sm text-gray-500">
    <div className="flex items-center gap-2">
      <span className="w-3 h-3 bg-lime-400 rounded-full"></span>
      General
    </div>
    <div className="flex items-center gap-2">
      <span className="w-3 h-3 bg-purple-400 rounded-full"></span>
      Technician
    </div>
    <div className="flex items-center gap-2">
      <span className="w-3 h-3 bg-pink-400 rounded-full"></span>
      Marketing
    </div>
  </div>
</div>
      </div>

    </div>
  );
}