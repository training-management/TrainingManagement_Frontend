export default function CloudFeatures() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-1400px mx-auto px-16 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold">
          <span className="text-indigo-800">All-In-One</span>{" "}
          <span className="text-teal-400">Cloud Training & Management Software</span>
        </h2>

        {/* Subheading */}
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
         Everything you need to manage training programs, employees, learners, and 
            organizational growth — all in one secure platform.
        </p>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-12 border-2 border-teal-300 shadow-xl scale-105">
            <div className="w-16 h-16 mx-auto rounded-full bg-sky-400 flex items-center justify-center text-white text-2xl">
              📄
            </div>

            <h3 className="mt-6 text-xl font-semibold text-indigo-800">
             Training Programs, Fees & Documentation
            </h3>

            <p className="mt-4 text-gray-500">
              Manage training modules, fee records, invoices, and 
              official documents securely from one centralized system.
            </p>
          </div>

          {/* Card 2 (Highlighted) */}
          <div className="bg-white rounded-3xl p-12 border-2 border-teal-300 shadow-2xl scale-105  hover:shadow-2xl ">
            <div className="w-16 h-16 mx-auto rounded-full bg-green-400 flex items-center justify-center text-white text-2xl">
              📅
            </div>

            <h3 className="mt-6 text-xl font-semibold text-indigo-800">
              Smart Scheduling & Attendance Management
            </h3>

            <p className="mt-4 text-gray-500">
              Create training schedules, manage batches, 
              and track attendance automatically for employees and learners.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition ">
            <div className="w-16 h-16 mx-auto rounded-full bg-blue-400 flex items-center justify-center text-white text-2xl">
              👥
            </div>

            <h3 className="mt-6 text-xl font-semibold text-indigo-800">
              Learner, Employee & Performance Tracking
            </h3>

            <p className="mt-4 text-gray-500">
              Track progress, performance, and engagement for students and
               employees with real-time insights and reports.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
