export default function WhatIsTalentGrow() {
  return (
    <section className="w-full bg-[#F8FAFC] py-20">

      <div className="max-w-1400px mx-auto px-16 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold">
          <span className="text-indigo-800">What is Our</span>{" "}
          <span className="text-teal-400">Training & Management System?</span>
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-500 max-w-4xl mx-auto">
        Edunexa is a modern Training & Management System designed to help institutes,
          organizations, and companies manage training programs, trainers, learners,
          attendance, assessments, and performance — all from one centralized,
          cloud-based platform.
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">


          {/* Trainers Card */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="For Trainers"
              className="w-full h-260px]object-cover"
            />

            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
              <h3 className="text-2xl font-bold mb-4">FOR TRAINERS</h3>
              <button className="px-6 py-2 border-2 border-white rounded-full   hover:bg-sky-500  transition">
                Start Training
              </button>
            </div>
          </div>

          {/* Students Card */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
              alt="For Students"
              className="w-full h-260px object-cover"
            />

            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
              <h3 className="text-2xl font-bold mb-4">FOR LEARNERS / EMPLOYEES</h3>
              <button className="px-6 py-2 border-2 border-white rounded-full   hover:bg-sky-500  transition">
                Join Training
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
