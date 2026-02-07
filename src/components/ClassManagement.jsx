export default function ClassManagement() {
  return (
    <section className="w-full bg-[#F9FAFB] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl font-bold leading-tight text-[#2F2D6B]">
              <span className="text-[#1EC9A8]">Class Management</span> <br />
              Tools for Educators
            </h2>

            <p className="mt-6 text-gray-500 max-w-lg leading-relaxed">
              Talent Grow provides powerful tools to manage classes such as
              student roster, attendance and grading. Trainers can evaluate
              tests and quizzes in real time using the gradebook.
            </p>
          </div>

          {/* RIGHT GRADEBOOK CARD */}
          <div className="flex justify-center">
            <div className="relative bg-white rounded-2xl shadow-xl p-6 w-full">

              {/* Header */}
              <div className="flex items-center justify-between bg-blue-400 rounded-xl px-4 py-2 text-white mb-4">
                <span className="font-medium">GradeBook</span>
                <span className="bg-yellow-400 text-white rounded-full p-1 text-xs">
                  ★
                </span>
              </div>

              {/* Bars */}
              <div className="space-y-4">

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200" />
                  <div className="flex-1 h-3 bg-blue-300 rounded-full" />
                  <span className="text-sm bg-blue-100 px-3 py-1 rounded-full">
                    100
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200" />
                  <div className="flex-1 h-3 bg-green-300 rounded-full" />
                  <span className="text-sm bg-green-100 px-3 py-1 rounded-full">
                    85
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200" />
                  <div className="flex-1 h-3 bg-red-300 rounded-full" />
                  <span className="text-sm bg-red-100 px-3 py-1 rounded-full">
                    75
                  </span>
                </div>

              </div>

              {/* Export button */}
              <div className="flex justify-end mt-6">
                <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm">
                  Export
                </button>
              </div>

              {/* Decorative icons */}
              <div className="absolute top-6 right-6 w-8 h-8 bg-blue-200 rounded-full" />
              <div className="absolute bottom-6 left-6 w-8 h-8 bg-blue-100 rounded-full" />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
