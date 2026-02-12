export default function User() {
  return (
    <div className="space-y-10">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-[#1f2a6b]">
          User & Role Management
        </h1>
        <p className="mt-2 text-gray-600 max-w-3xl">
          Manage system users, assign roles, control permissions and ensure
          secure access across the Training & Management System.
        </p>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Kpi title="Total Users" value="124" />
        <Kpi title="Admins" value="04" />
        <Kpi title="HR Managers" value="09" />
        <Kpi title="Trainers" value="18" />
      </div>

      {/* USER LIST */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold text-[#1f2a6b] mb-4">
          Users Overview
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="text-left p-3">User Name</th>
                <th className="text-left p-3">Email</th>
                <th className="text-left p-3">Role</th>
                <th className="text-left p-3">Department</th>
                <th className="text-left p-3">Status</th>
              </tr>
            </thead>

            <tbody>
              <UserRow
                name="Amit Verma"
                email="amit@company.com"
                role="Admin"
                dept="System"
                status="Active"
              />
              <UserRow
                name="Neha Sharma"
                email="neha@company.com"
                role="HR Manager"
                dept="Human Resources"
                status="Active"
              />
              <UserRow
                name="Rohit Mehta"
                email="rohit@company.com"
                role="Trainer"
                dept="IT & Software"
                status="Active"
              />
              <UserRow
                name="Pooja Singh"
                email="pooja@company.com"
                role="Employee"
                dept="Marketing"
                status="Inactive"
              />
            </tbody>
          </table>
        </div>
      </div>

      {/* ROLE & ACTIONS */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold text-[#1f2a6b] mb-2">
          Role & Permission Actions
        </h2>

        <p className="text-gray-500 mb-6 max-w-2xl">
          Control access rights, define responsibilities and maintain system
          security by managing user roles effectively.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ActionCard
            title="Create New User"
            desc="Add new users and assign appropriate system roles."
          />
          <ActionCard
            title="Manage Roles"
            desc="Define Admin, HR, Trainer and Employee permissions."
          />
          <ActionCard
            title="Activate / Deactivate Users"
            desc="Control user access based on employment or system status."
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

function UserRow({ name, email, role, dept, status }) {
  return (
    <tr className="border-b last:border-none">
      <td className="p-3 font-medium">{name}</td>
      <td className="p-3">{email}</td>
      <td className="p-3">{role}</td>
      <td className="p-3">{dept}</td>
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
