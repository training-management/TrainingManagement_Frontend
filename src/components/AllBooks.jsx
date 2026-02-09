import Img from "../assets/book.png";

export default function AllBooks() {
  return (
    <section className="w-full bg-[#eef7fb] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-14">
          <h2 className="text-4xl font-bold text-primary">
            All <span className="text-accent">Books</span>
          </h2>
          <span className="text-accent font-semibold cursor-pointer">
            SEE ALL →
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

          {/* LEFT TAGS */}
          <div className="flex gap-4">
            {[
              { t: "UI / UX", c: "#ff8a00" },
              { t: "Web Dev", c: "#ff7b7b" },
              { t: "Java", c: "#9c5a1a" },
              { t: "Python", c: "#ffbf00" },
            ].map((item, i) => (
              <div
                key={i}
                className="w-24 h-72 rounded-3xl flex items-center justify-center text-white font-semibold rotate-[-6deg]"
                style={{ background: item.c }}
              >
                <span className="rotate-90 whitespace-nowrap">
                  {item.t}
                </span>
              </div>
            ))}
          </div>

          {/* CENTER BOOK CARD */}
          <div className="bg-white rounded-3xl p-8 shadow-card flex gap-8 items-center">
            <img
              src={Img}
              alt="Python Book"
              className="w-32"
            />

            <div>
              <h3 className="text-2xl font-bold text-primary">
                Python Beginner to <br /> Advanced
              </h3>

              <p className="text-muted mt-2 max-w-sm">
                Cras convallis lacus orci, tristique tincidunt magna fringilla
                at faucibus vel.
              </p>

              <div className="flex items-center gap-1 mt-3 text-yellow-400">
                ★★★★★
              </div>

              <div className="flex items-center gap-6 mt-6">
                <span className="text-xl font-bold text-primary">₹450</span>

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

          {/* RIGHT TAGS */}
          <div className="flex gap-4 justify-end">
            {[
              { t: "AI / ML", c: "#2ecc71" },
              { t: "React", c: "#00a2ff" },
              { t: "Node", c: "#4db6ac" },
            ].map((item, i) => (
              <div
                key={i}
                className="w-24 h-72 rounded-3xl flex items-center justify-center text-white font-semibold rotate-[6deg]"
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
