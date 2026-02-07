import Img from "../assets/student.png";

export default function Tools() {
  return (
    <section className="w-full bg-[#F9FAFB] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl font-bold leading-tight text-[#2F2D6B]">
              <span className="text-[#1EC9A8]">Tools</span> For Teachers <br />
              And Learners
            </h2>

            <p className="mt-6 text-gray-500 max-w-lg leading-relaxed">
              Talent Grow provides a powerful set of tools for IT trainers and
              learners. Trainers can assign tasks in real time, track progress
              and manage submissions efficiently.
            </p>
          </div>

          {/* RIGHT IMAGE CARD */}
          <div className="flex justify-center">
            <div className="relative bg-white rounded-2xl shadow-xl p-10 w-full">

              {/* DOT BACKGROUND */}
              <div className="absolute inset-0 bg-[radial-gradient(#E5E7EB_1px,transparent_1px)] [(background-size:16px_16px0] rounded-2xl" />

              {/* IMAGE */}
              <img
                src={Img}
                alt="Student"
                className="relative z-10 w-full"
              />

              {/* DECOR ICONS */}
              <div className="absolute top-10 left-10 bg-white shadow-md rounded-xl p-3">
                <img src="/icon-1.png" alt="" className="w-6 h-6" />
              </div>

              <div className="absolute top-24 right-12 bg-white shadow-md rounded-xl p-3">
                <img src="/icon-2.png" alt="" className="w-6 h-6" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
