export default function HrDashboard() {
  return (
    <div className="space-y-10">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-[#1f2a6b]">
          HR & Training Panel
        </h1>
        <p className="mt-2 text-gray-600 max-w-3xl">
          Plan trainings, assign employees, track attendance, monitor course
          completion and generate performance reports — all from one place.
        </p>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Kpi title="Active Trainings" value="18" />
        <Kpi title="Employees Enrolled" value="96" />
        <Kpi title="Completion Rate" value="82%" />
        <Kpi title="Certifications Issued" value="64" />
      </div>

      {/* MAIN PANELS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* TRAINING MANAGEMENT */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold text-[#1f2a6b] mb-4">
            Training Management
          </h2>

          <ul className="space-y-3 text-sm text-gray-600">
            <li>• Create and schedule training programs</li>
            <li>• Assign trainers and training batches</li>
            <li>• Allocate employees department-wise</li>
            <li>• Monitor training timelines and capacity</li>
          </ul>
        </div>

        {/* ATTENDANCE & PROGRESS */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold text-[#1f2a6b] mb-4">
            Attendance & Progress Tracking
          </h2>

          <ul className="space-y-3 text-sm text-gray-600">
            <li>• Daily attendance monitoring</li>
            <li>• Track course progress in real time</li>
            <li>• Identify delayed or inactive learners</li>
            <li>• Completion & certification tracking</li>
          </ul>
        </div>
      </div>

      {/* REPORTS */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold text-[#1f2a6b] mb-4">
          HR Reports & Insights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ReportCard
            title="Attendance Report"
            desc="Employee-wise and batch-wise attendance summaries."
          />
          <ReportCard
            title="Training Completion Report"
            desc="Track completed, ongoing and pending trainings."
          />
          <ReportCard
            title="Skill Development Report"
            desc="Measure employee skill growth after training."
          />
        </div>
      </div>

      {/* ACTIONS */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold text-[#1f2a6b] mb-2">
          HR Actions
        </h2>

        <p className="text-gray-500 mb-6 max-w-2xl">
          Take quick actions to keep training operations smooth and aligned
          with organizational goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ActionCard
            title="Create Training Program"
            desc="Design new programs based on business needs."
          />
          <ActionCard
            title="Assign Employees"
            desc="Enroll employees into relevant courses."
          />
          <ActionCard
            title="Generate HR Reports"
            desc="Export reports for management review."
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
