export default function AdminDashboard() {
  return (
    <div className="space-y-10">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-[#1f2a6b]">
          System Owner / Admin Panel
        </h1>
        <p className="mt-2 text-gray-600 max-w-2xl">
          Manage departments, courses, users, permissions, system settings and
          monitor overall platform usage.
        </p>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <KpiCard
          title="Departments"
          value="08"
          desc="Active departments"
        />

        <KpiCard
          title="Courses"
          value="24"
          desc="Total training courses"
        />

        <KpiCard
          title="Users"
          value="320"
          desc="Employees & trainers"
        />

        <KpiCard
          title="System Status"
          value="99.9%"
          desc="Platform uptime"
        />

      </div>

      {/* QUICK ACTIONS */}
      <div className="bg-white rounded-xl p-6 shadow">
        <h2 className="text-xl font-semibold text-[#1f2a6b] mb-2">
          Quick Actions
        </h2>
        <p className="text-gray-500 mb-6 max-w-2xl">
          Frequently used administrative operations to manage the training
          platform efficiently.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <ActionBox label="Add Department" />
          <ActionBox label="Create Course" />
          <ActionBox label="Manage Users" />
          <ActionBox label="View Reports" />
        </div>

        {/* ACTION DETAILS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-[#1f2a6b] mb-2">
              Department Management
            </h4>
            <p>
              Create and organize departments to structure training programs,
              assign HR managers, and manage departmental responsibilities.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-[#1f2a6b] mb-2">
              Course & User Control
            </h4>
            <p>
              Add new courses, manage user roles, assign permissions, and
              monitor platform-wide user activity and access control.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}

/* ---------- Components ---------- */

function KpiCard({ title, value, desc }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="text-3xl font-bold text-[#1f2a6b] mt-2">{value}</p>
      <p className="text-sm text-gray-400 mt-1">{desc}</p>
    </div>
  );
}

function ActionBox({ label }) {
  return (
    <div className="border border-dashed border-gray-300 rounded-lg p-4 text-center text-gray-600 hover:bg-gray-50 cursor-pointer">
      {label}
    </div>
  );
}
