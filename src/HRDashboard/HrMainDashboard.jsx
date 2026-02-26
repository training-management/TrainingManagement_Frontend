export default function HrMainDashboard() {
  return (
    <div className="p-8">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        HR & Training Panel
      </h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-6 mb-10">
        <Card title="Total Trainings" value="24" />
        <Card title="Employees Enrolled" value="132" />
        <Card title="Completed Trainings" value="89" />
        <Card title="Upcoming Sessions" value="5" />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-2 gap-8">
        {/* Ongoing Trainings */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">
            Ongoing Training Programs
          </h2>
          <ul className="space-y-3 text-gray-600">
            <li>• React Development Bootcamp</li>
            <li>• Node.js Backend Training</li>
            <li>• HR Leadership Program</li>
            <li>• Cyber Security Awareness</li>
          </ul>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">
            HR Quick Actions
          </h2>
          <div className="flex flex-col gap-3">
            <button className="bg-teal-500 text-white py-2 rounded-lg">
              Create Training
            </button>
            <button className="bg-teal-500 text-white py-2 rounded-lg">
              Assign Employees
            </button>
            <button className="bg-teal-500 text-white py-2 rounded-lg">
              Generate Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="text-2xl font-bold text-gray-800 mt-2">{value}</p>
    </div>
  );
}