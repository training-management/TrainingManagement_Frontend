import { motion } from "framer-motion";

export default function ReportsAnalytics() {
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
          Reports & Analytics
        </h1>
        <p className="mt-3 text-gray-600 max-w-3xl">
          Monitor platform performance, training effectiveness and user
          engagement through centralized reports and analytics.
        </p>
      </motion.div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { title: "Total Trainings", value: "42" },
          { title: "Active Users", value: "118" },
          { title: "Completion Rate", value: "78%" },
          { title: "System Uptime", value: "99.9%" },
        ].map((item, index) => (
          <Kpi key={index} {...item} delay={index * 0.1} />
        ))}
      </div>

      {/* ANALYTICS SECTIONS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-xl shadow p-6"
        >
          <h2 className="text-xl font-semibold text-[#1f2a6b] mb-4">
            Training Performance Overview
          </h2>

          <ul className="space-y-3 text-sm text-gray-600">
            <li>• Highest performing department: <b>IT & Software</b></li>
            <li>• Most enrolled course: <b>Full Stack Development</b></li>
            <li>• Average course completion time: <b>4.5 months</b></li>
            <li>• Drop-out rate: <b>12%</b></li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-xl shadow p-6"
        >
          <h2 className="text-xl font-semibold text-[#1f2a6b] mb-4">
            User Engagement Metrics
          </h2>

          <ul className="space-y-3 text-sm text-gray-600">
            <li>• Daily active users: <b>64%</b></li>
            <li>• Monthly active users: <b>92%</b></li>
            <li>• Average session duration: <b>38 mins</b></li>
            <li>• Peak usage time: <b>6 PM – 9 PM</b></li>
          </ul>
        </motion.div>
      </div>

      {/* REPORT TYPES */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-xl shadow p-6"
      >
        <h2 className="text-xl font-semibold text-[#1f2a6b] mb-4">
          Available Reports
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ReportCard
            title="Training Completion Report"
            desc="Detailed course-wise completion and certification data."
          />
          <ReportCard
            title="User Activity Report"
            desc="Login frequency, session time and engagement trends."
          />
          <ReportCard
            title="Department Performance Report"
            desc="Compare training outcomes across departments."
          />
        </div>
      </motion.div>

      {/* ACTIONS */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-xl shadow p-6"
      >
        <h2 className="text-xl font-semibold text-[#1f2a6b] mb-2">
          Administrative Actions
        </h2>

        <p className="text-gray-500 mb-6 max-w-2xl">
          Generate insights, export reports and make data-driven decisions
          to improve training effectiveness and system performance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ActionCard
            title="Generate Custom Report"
            desc="Filter data by department, course or date range."
          />
          <ActionCard
            title="Export Reports"
            desc="Download reports in PDF or Excel format."
          />
          <ActionCard
            title="System Health Analysis"
            desc="Monitor logs, uptime and platform reliability."
          />
        </div>
      </motion.div>

    </motion.div>
  );
}

/* ---------- COMPONENTS ---------- */

function Kpi({ title, value, delay }) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay }}
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-xl shadow p-6 cursor-pointer"
    >
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-3xl font-bold text-[#1f2a6b] mt-2">{value}</p>
    </motion.div>
  );
}

function ReportCard({ title, desc }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="border border-dashed border-gray-300 rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition"
    >
      <h4 className="font-semibold text-[#1f2a6b] mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{desc}</p>
    </motion.div>
  );
}

function ActionCard({ title, desc }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="border border-dashed border-gray-300 rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition"
    >
      <h4 className="font-semibold text-[#1f2a6b] mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{desc}</p>
    </motion.div>
  );
}