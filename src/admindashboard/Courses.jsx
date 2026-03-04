import { motion } from "framer-motion";

export default function Courses() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="space-y-10"
    >
      {/* HEADER */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-[#1f2a6b] mx-5 my-5">
          Courses Management
        </h1>
        <p className="mt-2 text-gray-600 max-w-3xl ml-5">
          Manage all training courses, categories, instructors and course
          availability across departments from one centralized panel.
        </p>
      </motion.div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-5 my-5">
        {[
          { title: "Total Courses", value: "26" },
          { title: "Active Courses", value: "19" },
          { title: "Departments Covered", value: "08" },
          { title: "Instructors Assigned", value: "14" },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Kpi title={item.title} value={item.value} />
          </motion.div>
        ))}
      </div>

      {/* COURSE LIST */}
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow p-6"
      >
        <h2 className="text-xl font-semibold text-[#1f2a6b] mb-4">
          Course Overview
        </h2>

        <div className="overflow-x-auto ml-5 mr-5">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="text-left p-3">Course Name</th>
                <th className="text-left p-3">Department</th>
                <th className="text-left p-3">Instructor</th>
                <th className="text-left p-3">Duration</th>
                <th className="text-left p-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {[
                {
                  name: "Full Stack Development",
                  dept: "IT & Software",
                  instructor: "Rahul Mehta",
                  duration: "6 Months",
                  status: "Active",
                },
                {
                  name: "React JS Advanced",
                  dept: "IT & Software",
                  instructor: "Sneha Patel",
                  duration: "3 Months",
                  status: "Active",
                },
                {
                  name: "HR Compliance Training",
                  dept: "Human Resources",
                  instructor: "Anita Sharma",
                  duration: "1 Month",
                  status: "Active",
                },
                {
                  name: "Digital Marketing Basics",
                  dept: "Marketing",
                  instructor: "Amit Singh",
                  duration: "2 Months",
                  status: "Inactive",
                },
              ].map((course, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b last:border-none hover:bg-gray-50 transition"
                >
                  <td className="p-3 font-medium">{course.name}</td>
                  <td className="p-3">{course.dept}</td>
                  <td className="p-3">{course.instructor}</td>
                  <td className="p-3">{course.duration}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        course.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {course.status}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* ACTIONS */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow p-6"
      >
        <h2 className="text-xl font-semibold text-[#1f2a6b] mb-2">
          Course Actions
        </h2>

        <p className="text-gray-500 mb-6 max-w-2xl">
          Perform administrative actions to keep course content updated,
          instructors aligned and training quality consistent.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "Add New Course",
              desc: "Create a new course with department, duration and objectives.",
            },
            {
              title: "Assign Instructor",
              desc: "Allocate qualified instructors to manage course delivery.",
            },
            {
              title: "Manage Course Status",
              desc: "Activate, deactivate or update courses based on requirements.",
            },
          ].map((action, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ActionCard title={action.title} desc={action.desc} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ---------- COMPONENTS ---------- */

function Kpi({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-3xl font-bold text-[#1f2a6b] mt-2">{value}</p>
    </div>
  );
}

function ActionCard({ title, desc }) {
  return (
    <div className="border border-dashed border-gray-300 rounded-lg p-4 hover:bg-gray-50 transition">
      <h4 className="font-semibold text-[#1f2a6b] mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}