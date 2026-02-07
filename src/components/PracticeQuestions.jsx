export default function PracticeQuestions() {
  return (
    <section className="w-full bg-[#eef7fb] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex justify-between items-start mb-14">
          <div>
            <h2 className="text-4xl font-bold text-primary">
              Practice <span className="text-accent">Questions Series</span>
            </h2>
            <p className="text-muted mt-2">
              Talent Grow – IT Training Management System
            </p>
          </div>

          <a className="text-accent font-semibold cursor-pointer">
            SEE ALL →
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT TAGS */}
          <div className="flex gap-4 overflow-hidden">
            {[
              { t: "Frontend", c: "#ff7b7b" },
              { t: "Backend", c: "#9c5a1a" },
              { t: "Full Stack", c: "#ffbf00" },
              { t: "React", c: "#b388ff" },
              { t: "Node", c: "#00a2ff" },
              { t: "Python", c: "#32c36c" },
            ].map((item, i) => (
              <div
                key={i}
                className="w-24 h-72 rounded-3xl flex items-center justify-center text-white font-semibold rotate-6"
                style={{ background: item.c }}
              >
                <span className="rotate-90 whitespace-nowrap">
                  {item.t}
                </span>
              </div>
            ))}
          </div>

          {/* RIGHT CARD */}
          <div className="bg-white rounded-3xl p-8 shadow-card flex gap-6 items-center">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt=""
              className="w-44 h-44 object-cover rounded-2xl"
            />

            <div>
              <h3 className="text-2xl font-bold text-primary">
                Questions Series <br /> And Mock Interviews
              </h3>

              <p className="text-muted mt-2 max-w-sm">
                Practice more. Learn faster. Succeed smarter. Build strong
                concepts, improve coding skills, and prepare for top IT careers.
              </p>

              <div className="flex items-center gap-1 mt-3 text-yellow-400">
                ★★★★★
              </div>

              <div className="flex items-center gap-6 mt-6">
                <span className="text-xl font-bold text-primary">₹9,990</span>

                {/* 🎹 SAME PIANO BUTTON */}
                <button className="relative overflow-hidden rounded-full border-2 border-accent px-8 py-3 font-medium text-accent">
                  <div className="absolute inset-0 flex mr-6">
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

          {/* RIGHT SIDE TAGS */}
          <div className="hidden lg:flex gap-4 absolute right-8 ml-6">
            {[
              { t: "DevOps", c: "#4db6ac" },
              { t: "Testing", c: "#2ecc71" },
            ].map((item, i) => (
              <div
                key={i}
                className="w-24 h-72 rounded-3xl flex items-center justify-center text-white font-semibold rotate-6"
                style={{ background: item.c }}
              >
                <span className="rotate-90 whitespace-nowrap">
                  {item.t}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
