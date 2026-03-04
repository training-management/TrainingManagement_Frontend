import { motion } from "framer-motion";

export default function Departments() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="space-y-10 mx-5 my-5"
    >

      {/* HEADER */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-[#1f2a6b]">
          Departments Management
        </h1>
        <p className="mt-4 text-black max-w-3xl">
          Manage organizational departments, assign HR managers and instructors,
          and structure training programs department-wise.
        </p>
      </motion.div>

      {/* KPI SUMMARY */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 cursor-pointer">
        {[
          { title: "Total Departments", value: "08" },
          { title: "Active HR Managers", value: "05" },
          { title: "Running Programs", value: "18" },
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

      {/* DEPARTMENT LIST */}
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow p-6 cursor-pointer"
      >
        <h2 className="text-xl font-semibold text-[#1f2a6b] mb-4">
          Department Overview
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="text-left p-3">Department Name</th>
                <th className="text-left p-3">HR Manager</th>
                <th className="text-left p-3">Courses</th>
                <th className="text-left p-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {[
                { name: "IT & Software", hr: "Anita Sharma", courses: "6", status: "Active" },
                { name: "Human Resources", hr: "Rohit Verma", courses: "3", status: "Active" },
                { name: "Finance", hr: "Neha Gupta", courses: "4", status: "Active" },
                { name: "Marketing", hr: "Amit Singh", courses: "5", status: "Inactive" },
              ].map((dept, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b last:border-none hover:bg-gray-50 transition"
                >
                  <td className="p-3 font-medium">{dept.name}</td>
                  <td className="p-3">{dept.hr}</td>
                  <td className="p-3">{dept.courses}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        dept.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {dept.status}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* ACTION SECTION */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow p-6 cursor-pointer"
      >
        <h2 className="text-xl font-semibold text-[#1f2a6b] mb-2">
          Administrative Actions
        </h2>

        <p className="text-black mb-6 max-w-2xl">
          Use these actions to control department-level operations and maintain
          structured training workflows.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "Add New Department",
              desc: "Create a new department and define its scope and responsibilities.",
            },
            {
              title: "Assign HR Manager",
              desc: "Allocate HR managers to oversee departmental training programs.",
            },
            {
              title: "View Department Reports",
              desc: "Analyze department-wise performance, completion rate and impact.",
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

/* ---------- SMALL COMPONENTS ---------- */

function Kpi({ title, value }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow">
      <p className="text-lg text-black">{title}</p>
      <p className="text-3xl font-semibold text-[#1f2a6b] mt-2">{value}</p>
    </div>
  );
}

function ActionCard({ title, desc }) {
  return (
    <div className="border border-dashed border-black rounded-lg p-4 hover:bg-gray-50 transition">
      <h4 className="font-semibold text-[#1f2a6b] mb-2">{title}</h4>
      <p className="text-lg text-black">{desc}</p>
    </div>
  );
}