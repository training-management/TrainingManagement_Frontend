import Img from "../assets/fullstack.png";

export default function ExploreCourses() {
  return (
    <section className="w-full bg-[#eef7fb] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-14">
          <h2 className="text-4xl font-bold text-primary">
            Explore <span className="text-accent">Courses</span>
          </h2>
          <p className="text-muted mt-2">
            Talent Grow – Professional IT Training & Management System
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT TAGS */}
          <div className="flex gap-4 overflow-hidden">
            {[
              "Web Design",
              "Python",
              "Java",
              "React JS",
              "Node JS",
              "UI / UX",
              "Data Science",
            ].map((item, i) => (
              <div
                key={i}
                className="w-24 h-72 rounded-3xl flex items-center justify-center text-white font-semibold rotate-6deg"
                style={{
                  background: [
                    "#ff8a00",
                    "#ff7b7b",
                    "#9c5a1a",
                    "#ffbf00",
                    "#b388ff",
                    "#00a2ff",
                    "#32c36c",
                  ][i],
                }}
              >
                <span className="rotate-90 whitespace-nowrap">{item}</span>
              </div>
            ))}
          </div>

          {/* RIGHT CARD */}
          <div className="bg-white rounded-3xl p-8 shadow-card flex gap-6 items-center">
            <img
              src={Img}
              alt="fullstack"
              className="w-50 h-50 object-contain"
            />

            <div>
              <h3 className="text-2xl font-bold text-primary">
                Full Stack Development
              </h3>

              <p className="text-muted mt-2 max-w-sm">
                Learn complete web development with real projects, expert
                mentors & placement support.
              </p>

              <div className="flex items-center gap-1 mt-3 text-yellow-400">
                ★★★★★
              </div>

              <div className="flex items-center gap-6 mt-6">
                <span className="text-xl font-bold text-primary">₹15,000</span>

                {/* 🎹 PIANO BUTTON */}
                <button className="relative overflow-hidden rounded-full border-2 border-accent px-8 py-3 font-medium text-accent">
                  <div className="absolute inset-0 flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span
                        key={i}
                        className={`flex-1 bg-accent/20 animate-piano delay-${i}`}
                      />
                    ))}
                  </div>

                  <span className="relative z-10">EXPLORE</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
