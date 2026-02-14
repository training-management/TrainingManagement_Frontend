export default function Employees() {
  return (
    <div className="space-y-10">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-[#1f2a6b]">
          Employees Management
        </h1>
        <p className="mt-2 text-gray-600 max-w-3xl">
          Manage employees, assign them to training programs, track participation
          and monitor skill development across departments.
        </p>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Kpi title="Total Employees" value="120" />
        <Kpi title="Active Employees" value="108" />
        <Kpi title="In Training" value="76" />
        <Kpi title="Certified Employees" value="54" />
      </div>

      {/* EMPLOYEE LIST */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold text-[#1f2a6b] mb-4">
          Employee Overview
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="text-left p-3">Employee Name</th>
                <th className="text-left p-3">Department</th>
                <th className="text-left p-3">Assigned Training</th>
                <th className="text-left p-3">Progress</th>
                <th className="text-left p-3">Status</th>
              </tr>
            </thead>

            <tbody>
              <EmployeeRow
                name="Rohit Mehta"
                dept="IT & Software"
                training="Full Stack Development"
                progress="70%"
                status="Active"
              />
              <EmployeeRow
                name="Neha Sharma"
                dept="Human Resources"
                training="HR Compliance Training"
                progress="100%"
                status="Certified"
              />
              <EmployeeRow
                name="Amit Singh"
                dept="Marketing"
                training="Digital Marketing"
                progress="45%"
                status="Active"
              />
              <EmployeeRow
                name="Pooja Verma"
                dept="Finance"
                training="Excel for Finance"
                progress="—"
                status="Not Enrolled"
              />
            </tbody>
          </table>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold text-[#1f2a6b] mb-2">
          HR Actions
        </h2>

        <p className="text-gray-500 mb-6 max-w-2xl">
          Perform key employee-related actions to ensure smooth training
          operations and workforce development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ActionCard
            title="Add New Employee"
            desc="Register new employees into the training system."
          />
          <ActionCard
            title="Assign Training"
            desc="Enroll employees into relevant training programs."
          />
          <ActionCard
            title="Track Progress"
            desc="Monitor individual employee learning progress."
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

function EmployeeRow({ name, dept, training, progress, status }) {
  return (
    <tr className="border-b last:border-none">
      <td className="p-3 font-medium">{name}</td>
      <td className="p-3">{dept}</td>
      <td className="p-3">{training}</td>
      <td className="p-3">{progress}</td>
      <td className="p-3">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            status === "Certified"
              ? "bg-green-100 text-green-700"
              : status === "Active"
              ? "bg-blue-100 text-blue-700"
              : "bg-gray-100 text-gray-600"
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
