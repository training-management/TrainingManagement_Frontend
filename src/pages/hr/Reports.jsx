export default function Reports() {
  return (
    <div className="space-y-10">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-[#1f2a6b]">
          Reports & Analytics
        </h1>
        <p className="mt-2 text-gray-600 max-w-3xl">
          Generate detailed training, attendance and performance reports
          to support HR decision-making and management reviews.
        </p>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Kpi title="Total Trainings" value="42" />
        <Kpi title="Completed Reports" value="128" />
        <Kpi title="Pending Reviews" value="7" />
        <Kpi title="Overall Completion Rate" value="91%" />
      </div>

      {/* REPORT TYPES */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold text-[#1f2a6b] mb-4">
          Available Reports
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ReportCard
            title="Training Completion Report"
            desc="Analyze completion status of employees across all training programs."
          />
          <ReportCard
            title="Attendance Summary Report"
            desc="View attendance trends, absentees and participation levels."
          />
          <ReportCard
            title="Employee Performance Report"
            desc="Evaluate skill improvement and engagement after training."
          />
          <ReportCard
            title="Cost vs Outcome Analysis"
            desc="Measure training investment against business outcomes."
          />
        </div>
      </div>

      {/* RECENT REPORTS */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold text-[#1f2a6b] mb-4">
          Recently Generated Reports
        </h2>

        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="text-left p-3">Report Name</th>
              <th className="text-left p-3">Generated On</th>
              <th className="text-left p-3">Type</th>
              <th className="text-left p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            <ReportRow
              name="January Attendance Summary"
              date="05 Feb 2026"
              type="Attendance"
              status="Completed"
            />
            <ReportRow
              name="Full Stack Training Outcome"
              date="02 Feb 2026"
              type="Training"
              status="Completed"
            />
            <ReportRow
              name="Q1 Performance Review"
              date="30 Jan 2026"
              type="Performance"
              status="In Review"
            />
          </tbody>
        </table>
      </div>

      {/* ACTIONS */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold text-[#1f2a6b] mb-2">
          Report Actions
        </h2>

        <p className="text-gray-500 mb-6 max-w-2xl">
          Create and manage reports to gain insights into training effectiveness
          and employee performance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ActionCard
            title="Generate New Report"
            desc="Create custom training or attendance reports."
          />
          <ActionCard
            title="Download Reports"
            desc="Export reports in PDF or Excel format."
          />
          <ActionCard
            title="Share with Management"
            desc="Send reports directly to leadership."
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

function ReportRow({ name, date, type, status }) {
  return (
    <tr className="border-b last:border-none">
      <td className="p-3 font-medium">{name}</td>
      <td className="p-3">{date}</td>
      <td className="p-3">{type}</td>
      <td className="p-3">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            status === "Completed"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {status}
        </span>
      </td>
    </tr>
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
