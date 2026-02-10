// export default function EmployeeDashboard() {
//   return (
//     <>
//       <h1 className="text-3xl font-bold text-teal-700 mb-6">
//         Employee Dashboard 👋
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//         <Stat title="Assigned Trainings" value="6" />
//         <Stat title="Completed" value="3" />
//         <Stat title="In Progress" value="2" />
//         <Stat title="Certificates" value="1" />
//       </div>
//     </>
//   );
// }

// function Stat({ title, value }) {
//   return (
//     <div className="bg-white p-6 rounded-2xl shadow hover:scale-105 transition">
//       <p className="text-gray-500">{title}</p>
//       <h2 className="text-3xl font-bold text-blue-600">{value}</h2>
//     </div>
//   );
// }
// export default function EmployeeDashboard() {
//   return (
//     <>
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-semibold">Student Activity</h1>
//         <p className="text-sm text-gray-500">Courses Progress: 14 / 30</p>
//       </div>

//       {/* Course Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <CourseCard
//           title="UX Science Progress"
//           category="Design"
//           color="bg-teal-500"
//           footer="230 Students • 100 comments"
//         />
//         <CourseCard
//           title="Discovering New Places"
//           category="Geography"
//           color="bg-indigo-500"
//           footer="Add to your courses"
//         />
//         <CourseCard
//           title="Volleyball College Course"
//           category="Physical Education"
//           color="bg-green-500"
//           footer="16 hours left"
//         />
//       </div>
//     </>
//   );
// }

// function CourseCard({ title, category, color, footer }) {
//   return (
//     <div className="bg-white rounded-2xl shadow hover:scale-105 transition">
//       <div className={`h-2 rounded-t-2xl ${color}`}></div>

//       <div className="p-5">
//         <p className="text-sm text-gray-400">{category}</p>
//         <h3 className="font-semibold mt-2">{title}</h3>

//         <p className="text-xs text-gray-500 mt-4">{footer}</p>
//       </div>
//     </div>
//   );
// }

import { CalendarDays, BookOpen, Clock, User } from "lucide-react";

export default function EmployeeDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Hello, Learner 👋</h1>
          <p className="text-sm text-gray-500">Here’s your learning overview today</p>
        </div>
        <div className="bg-white px-4 py-2 rounded-xl shadow text-sm text-gray-600">
          Progress: <span className="font-semibold">14 / 30 Classes</span>
        </div>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <StatCard title="Classes Today" value="3" icon={<CalendarDays />} />
        <StatCard title="Ongoing Courses" value="5" icon={<BookOpen />} />
        <StatCard title="Hours This Week" value="12h" icon={<Clock />} />
        <StatCard title="Assigned Mentors" value="4" icon={<User />} />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today Schedule */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6">
          <h2 className="font-semibold text-lg mb-4">Today’s Classes</h2>
          <div className="space-y-4">
            <ScheduleItem
              subject="React Basics"
              teacher="Ms. Anjali Sharma"
              time="10:00 AM – 11:30 AM"
              color="bg-purple-500"
            />
            <ScheduleItem
              subject="UI/UX Fundamentals"
              teacher="Mr. Rahul Verma"
              time="12:00 PM – 1:00 PM"
              color="bg-pink-500"
            />
            <ScheduleItem
              subject="JavaScript Logic"
              teacher="Ms. Neha Jain"
              time="3:00 PM – 4:30 PM"
              color="bg-indigo-500"
            />
          </div>
        </div>

        {/* Calendar */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="font-semibold text-lg mb-4">Calendar</h2>
          <div className="grid grid-cols-7 gap-2 text-center text-sm">
            {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
              <div key={d} className="text-gray-400 font-medium">{d}</div>
            ))}
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg ${i === 10 ? "bg-purple-500 text-white" : "hover:bg-gray-100"}`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Courses */}
      <div>
        <h2 className="font-semibold text-lg mb-4">Your Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CourseCard
            title="UX Science"
            category="Design"
            progress="70%"
            teacher="Ms. Anjali Sharma"
            color="from-purple-400 to-purple-600"
          />
          <CourseCard
            title="JavaScript Mastery"
            category="Programming"
            progress="45%"
            teacher="Mr. Rahul Verma"
            color="from-pink-400 to-pink-600"
          />
          <CourseCard
            title="React Development"
            category="Frontend"
            progress="30%"
            teacher="Ms. Neha Jain"
            color="from-indigo-400 to-indigo-600"
          />
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon }) {
  return (
    <div className="bg-white rounded-2xl shadow p-5 flex items-center gap-4">
      <div className="p-3 rounded-xl bg-purple-100 text-purple-600">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="text-xl font-semibold">{value}</h3>
      </div>
    </div>
  );
}

function ScheduleItem({ subject, teacher, time, color }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl border hover:shadow-sm">
      <div className="flex items-center gap-3">
        <div className={`w-3 h-12 rounded-full ${color}`}></div>
        <div>
          <h4 className="font-medium">{subject}</h4>
          <p className="text-sm text-gray-500">{teacher}</p>
        </div>
      </div>
      <p className="text-sm text-gray-400">{time}</p>
    </div>
  );
}

function CourseCard({ title, category, progress, teacher, color }) {
  return (
    <div className="bg-white rounded-2xl shadow hover:scale-105 transition">
      <div className={`h-24 rounded-t-2xl bg-gradient-to-r ${color}`}></div>
      <div className="p-5">
        <p className="text-sm text-gray-400">{category}</p>
        <h3 className="font-semibold mt-1">{title}</h3>
        <p className="text-xs text-gray-500 mt-1">Mentor: {teacher}</p>

        <div className="mt-4">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Progress</span>
            <span>{progress}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-purple-500 h-2 rounded-full"
              style={{ width: progress }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
