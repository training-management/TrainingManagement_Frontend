export default function Reportss() {
  return (
    <div className="space-y-10">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-[#1f2a6b]">
          Reports & Analytics
        </h1>
        <p className="mt-2 text-gray-600 max-w-3xl">
          Monitor platform performance, training effectiveness and user
          engagement through centralized reports and analytics.
        </p>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Kpi title="Total Trainings" value="42" />
        <Kpi title="Active Users" value="118" />
        <Kpi title="Completion Rate" value="78%" />
        <Kpi title="System Uptime" value="99.9%" />
      </div>

      {/* ANALYTICS SECTIONS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* TRAINING PERFORMANCE */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold text-[#1f2a6b] mb-4">
            Training Performance Overview
          </h2>

          <ul className="space-y-3 text-sm text-gray-600">
            <li>• Highest performing department: <b>IT & Software</b></li>
            <li>• Most enrolled course: <b>Full Stack Development</b></li>
            <li>• Average course completion time: <b>4.5 months</b></li>
            <li>• Drop-out rate: <b>12%</b></li>
          </ul>
        </div>

        {/* USER ENGAGEMENT */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold text-[#1f2a6b] mb-4">
            User Engagement Metrics
          </h2>

          <ul className="space-y-3 text-sm text-gray-600">
            <li>• Daily active users: <b>64%</b></li>
            <li>• Monthly active users: <b>92%</b></li>
            <li>• Average session duration: <b>38 mins</b></li>
            <li>• Peak usage time: <b>6 PM – 9 PM</b></li>
          </ul>
        </div>
      </div>

      {/* REPORT TYPES */}
      <div className="bg-white rounded-xl shadow p-6">
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
      </div>

      {/* ACTIONS */}
      <div className="bg-white rounded-xl shadow p-6">
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
      </div>

    </div>
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

function ReportCard({ title, desc }) {
  return (
    <div className="border border-dashed border-gray-300 rounded-lg p-4 hover:bg-gray-50">
      <h4 className="font-semibold text-[#1f2a6b] mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function ActionCard({ title, desc }) {
  return (
    <div className="border border-dashed border-gray-300 rounded-lg p-4 hover:bg-gray-50">
      <h4 className="font-semibold text-[#1f2a6b] mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}
