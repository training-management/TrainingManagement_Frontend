export default function Departmentt() {
  return (
    <div className="space-y-10">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-[#1f2a6b]">
          Departments Management
        </h1>
        <p className="mt-2 text-gray-600 max-w-3xl">
          Manage organizational departments, assign HR managers and instructors,
          and structure training programs department-wise.
        </p>
      </div>

      {/* KPI SUMMARY */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Kpi title="Total Departments" value="08" />
        <Kpi title="Active HR Managers" value="05" />
        <Kpi title="Running Programs" value="18" />
      </div>

      {/* DEPARTMENT LIST */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold text-[#1f2a6b] mb-4">
          Department Overview
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="text-left p-3">Department Name</th>
                <th className="text-left p-3">HR Manager</th>
                <th className="text-left p-3">Courses</th>
                <th className="text-left p-3">Status</th>
              </tr>
            </thead>

            <tbody>
              <DepartmentRow
                name="IT & Software"
                hr="Anita Sharma"
                courses="6"
                status="Active"
              />
              <DepartmentRow
                name="Human Resources"
                hr="Rohit Verma"
                courses="3"
                status="Active"
              />
              <DepartmentRow
                name="Finance"
                hr="Neha Gupta"
                courses="4"
                status="Active"
              />
              <DepartmentRow
                name="Marketing"
                hr="Amit Singh"
                courses="5"
                status="Inactive"
              />
            </tbody>
          </table>
        </div>
      </div>

      {/* ACTION SECTION */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold text-[#1f2a6b] mb-2">
          Administrative Actions
        </h2>

        <p className="text-gray-500 mb-6 max-w-2xl">
          Use these actions to control department-level operations and maintain
          structured training workflows.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ActionCard
            title="Add New Department"
            desc="Create a new department and define its scope and responsibilities."
          />
          <ActionCard
            title="Assign HR Manager"
            desc="Allocate HR managers to oversee departmental training programs."
          />
          <ActionCard
            title="View Department Reports"
            desc="Analyze department-wise performance, completion rate and impact."
          />
        </div>
      </div>

    </div>
  );
}

/* ---------- SMALL COMPONENTS ---------- */

function Kpi({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-3xl font-bold text-[#1f2a6b] mt-2">{value}</p>
    </div>
  );
}

function DepartmentRow({ name, hr, courses, status }) {
  return (
    <tr className="border-b last:border-none">
      <td className="p-3 font-medium">{name}</td>
      <td className="p-3">{hr}</td>
      <td className="p-3">{courses}</td>
      <td className="p-3">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            status === "Active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-600"
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
