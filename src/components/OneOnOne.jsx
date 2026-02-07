export default function OneOnOne() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT UI CARD */}
          <div className="flex justify-center">
            <div className="relative bg-white rounded-2xl shadow-card p-6 w-[520px]">

              {/* BACK CARD */}
              <div className="absolute -top-8 -left-8 w-full h-full bg-gray-100 rounded-2xl -z-10" />

              {/* HEADER ICON */}
              <div className="absolute top-4 left-4 bg-blue-100 p-2 rounded-full">
                👥
              </div>

              {/* VIDEO CARDS */}
              <div className="grid grid-cols-2 gap-4 mb-4 mt-6">
                <div className="rounded-xl overflow-hidden bg-gray-200 h-40" />
                <div className="rounded-xl overflow-hidden bg-gray-200 h-40" />
              </div>

              {/* FOOTER */}
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="text-sm font-medium text-primary">
                    Private Discussion
                  </p>
                  <p className="text-xs text-muted">
                    Your video can't be seen by others
                  </p>
                </div>

                <button className="bg-red-500 text-white text-sm px-4 py-2 rounded-full">
                  End Discussion
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-4xl font-bold leading-tight text-primary">
              One-on-One{" "}
              <span className="text-accent">Discussions</span>
            </h2>

            <p className="mt-6 text-muted max-w-lg leading-relaxed">
              Trainers and mentors can have private conversations with students
              without leaving the Talent Grow virtual classroom environment.
            </p>
          </div>

        </div>

        {/* CTA BUTTON */}
        <div className="flex justify-center mt-20">
          <button className="bg-gradient-to-r from-[#1EC9A8] to-[#22B3E3] text-white px-10 py-4 rounded-full font-medium shadow-lg">
            See More Features
          </button>
        </div>

      </div>
    </section>
  );
}
