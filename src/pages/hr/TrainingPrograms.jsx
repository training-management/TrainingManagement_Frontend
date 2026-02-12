export default function TrainingPrograms() {
  return (
    <div className="space-y-10">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-[#1f2a6b]">
          Training Programs
        </h1>
        <p className="mt-2 text-gray-600 max-w-3xl">
          Create, manage and monitor training programs. Assign trainers,
          enroll employees and track progress across departments.
        </p>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Kpi title="Total Programs" value="22" />
        <Kpi title="Ongoing Programs" value="14" />
        <Kpi title="Completed Programs" value="06" />
        <Kpi title="Upcoming Programs" value="02" />
      </div>

      {/* PROGRAM LIST */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold text-[#1f2a6b] mb-4">
          Program Overview
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="text-left p-3">Program Name</th>
                <th className="text-left p-3">Department</th>
                <th className="text-left p-3">Trainer</th>
                <th className="text-left p-3">Duration</th>
                <th className="text-left p-3">Status</th>
              </tr>
            </thead>

            <tbody>
              <ProgramRow
                name="Full Stack Development"
                dept="IT & Software"
                trainer="Rahul Mehta"
                duration="6 Months"
                status="Ongoing"
              />
              <ProgramRow
                name="React Advanced"
                dept="IT & Software"
                trainer="Sneha Patel"
                duration="3 Months"
                status="Ongoing"
              />
              <ProgramRow
                name="HR Compliance Training"
                dept="Human Resources"
                trainer="Anita Sharma"
                duration="1 Month"
                status="Completed"
              />
              <ProgramRow
                name="Leadership Skills"
                dept="Management"
                trainer="Amit Singh"
                duration="2 Months"
                status="Upcoming"
              />
            </tbody>
          </table>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold text-[#1f2a6b] mb-2">
          Training Actions
        </h2>

        <p className="text-gray-500 mb-6 max-w-2xl">
          Manage training operations efficiently and ensure employees receive
          the right training at the right time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ActionCard
            title="Create Training Program"
            desc="Design and launch new training programs."
          />
          <ActionCard
            title="Assign Trainer"
            desc="Allocate trainers based on expertise."
          />
          <ActionCard
            title="Enroll Employees"
            desc="Assign employees to training batches."
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

function ProgramRow({ name, dept, trainer, duration, status }) {
  return (
    <tr className="border-b last:border-none">
      <td className="p-3 font-medium">{name}</td>
      <td className="p-3">{dept}</td>
      <td className="p-3">{trainer}</td>
      <td className="p-3">{duration}</td>
      <td className="p-3">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            status === "Ongoing"
              ? "bg-blue-100 text-blue-700"
              : status === "Completed"
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

function ActionCard({ title, desc }) {
  return (
    <div className="border border-dashed border-gray-300 rounded-lg p-4 hover:bg-gray-50">
      <h4 className="font-semibold text-[#1f2a6b] mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}
