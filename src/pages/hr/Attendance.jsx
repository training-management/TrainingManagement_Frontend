export default function Attendance() {
  return (
    <div className="space-y-10">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-[#1f2a6b]">
          Attendance Management
        </h1>
        <p className="mt-2 text-gray-600 max-w-3xl">
          Track employee attendance across training sessions, monitor presence,
          absences and participation trends in real time.
        </p>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Kpi title="Total Sessions" value="86" />
        <Kpi title="Avg Attendance" value="88%" />
        <Kpi title="Present Today" value="72" />
        <Kpi title="Absent Today" value="14" />
      </div>

      {/* ATTENDANCE TABLE */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold text-[#1f2a6b] mb-4">
          Attendance Overview
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="text-left p-3">Employee Name</th>
                <th className="text-left p-3">Training Program</th>
                <th className="text-left p-3">Date</th>
                <th className="text-left p-3">Status</th>
              </tr>
            </thead>

            <tbody>
              <AttendanceRow
                name="Rohit Mehta"
                program="Full Stack Development"
                date="08 Feb 2026"
                status="Present"
              />
              <AttendanceRow
                name="Neha Sharma"
                program="HR Compliance Training"
                date="08 Feb 2026"
                status="Present"
              />
              <AttendanceRow
                name="Amit Singh"
                program="Digital Marketing"
                date="08 Feb 2026"
                status="Absent"
              />
              <AttendanceRow
                name="Pooja Verma"
                program="Excel for Finance"
                date="08 Feb 2026"
                status="Late"
              />
            </tbody>
          </table>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold text-[#1f2a6b] mb-2">
          Attendance Actions
        </h2>

        <p className="text-gray-500 mb-6 max-w-2xl">
          Manage attendance efficiently and ensure accurate records for
          training compliance and performance evaluation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ActionCard
            title="Mark Attendance"
            desc="Record attendance for training sessions."
          />
          <ActionCard
            title="Edit Attendance"
            desc="Correct attendance records if required."
          />
          <ActionCard
            title="Export Attendance Report"
            desc="Download attendance data for review."
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

function AttendanceRow({ name, program, date, status }) {
  return (
    <tr className="border-b last:border-none">
      <td className="p-3 font-medium">{name}</td>
      <td className="p-3">{program}</td>
      <td className="p-3">{date}</td>
      <td className="p-3">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            status === "Present"
              ? "bg-green-100 text-green-700"
              : status === "Absent"
              ? "bg-red-100 text-red-600"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {status}
        </span>
      </td>
    </tr>
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
