export default function Coursest() {
  return (
    <div className="space-y-10">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-[#1f2a6b]">
          Courses Management
        </h1>
        <p className="mt-2 text-gray-600 max-w-3xl">
          Manage all training courses, categories, instructors and course
          availability across departments from one centralized panel.
        </p>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Kpi title="Total Courses" value="26" />
        <Kpi title="Active Courses" value="19" />
        <Kpi title="Departments Covered" value="08" />
        <Kpi title="Instructors Assigned" value="14" />
      </div>

      {/* COURSE LIST */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold text-[#1f2a6b] mb-4">
          Course Overview
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="text-left p-3">Course Name</th>
                <th className="text-left p-3">Department</th>
                <th className="text-left p-3">Instructor</th>
                <th className="text-left p-3">Duration</th>
                <th className="text-left p-3">Status</th>
              </tr>
            </thead>

            <tbody>
              <CourseRow
                name="Full Stack Development"
                dept="IT & Software"
                instructor="Rahul Mehta"
                duration="6 Months"
                status="Active"
              />
              <CourseRow
                name="React JS Advanced"
                dept="IT & Software"
                instructor="Sneha Patel"
                duration="3 Months"
                status="Active"
              />
              <CourseRow
                name="HR Compliance Training"
                dept="Human Resources"
                instructor="Anita Sharma"
                duration="1 Month"
                status="Active"
              />
              <CourseRow
                name="Digital Marketing Basics"
                dept="Marketing"
                instructor="Amit Singh"
                duration="2 Months"
                status="Inactive"
              />
            </tbody>
          </table>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold text-[#1f2a6b] mb-2">
          Course Actions
        </h2>

        <p className="text-gray-500 mb-6 max-w-2xl">
          Perform administrative actions to keep course content updated,
          instructors aligned and training quality consistent.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ActionCard
            title="Add New Course"
            desc="Create a new course with department, duration and objectives."
          />
          <ActionCard
            title="Assign Instructor"
            desc="Allocate qualified instructors to manage course delivery."
          />
          <ActionCard
            title="Manage Course Status"
            desc="Activate, deactivate or update courses based on requirements."
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

function CourseRow({ name, dept, instructor, duration, status }) {
  return (
    <tr className="border-b last:border-none">
      <td className="p-3 font-medium">{name}</td>
      <td className="p-3">{dept}</td>
      <td className="p-3">{instructor}</td>
      <td className="p-3">{duration}</td>
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
