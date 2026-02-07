

const OfflineToOnline = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold leading-snug">
             {" "}
            <span className="text-indigo-900">Everything you can manage in an offline Institute </span>,{" "}
            <span className="text-teal-500">you can do with Edunexa</span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            Talent Grow is a complete Training & Management System that helps institutes and
             organizations manage training schedules, attendance, assessments, employee performance,
              and learning progress — all through one secure, cloud-based platform.
          </p>

          <button className="mt-6 text-teal-500 font-semibold hover:underline">
            See How It Works →
          </button>
        </div>

        {/* RIGHT IMAGE + VIDEO */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl">

          {/* IMAGE */}
          <img
            src="https://i.pinimg.com/736x/9b/f9/6d/9bf96d72248d18a6cfb1f9d3e3699c8d.jpg"
            alt="Classroom"
            className="w-full h-320px object-cover"
          />

          {/* VIDEO OVERLAY */}
          <video
            src="/videos/demo.mp4"
            controls
            className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition duration-300"
          />
        </div>

      </div>
    </section>
  );
};

export default OfflineToOnline;
