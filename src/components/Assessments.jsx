 import Img from "../assets/assement.png";
 
 export default function Assessments() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CARD */}
          <div className="flex justify-center">
            <div className="relative bg-white rounded-2xl shadow-xl p-6 w-420px">

              {/* Decorative shapes */}
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-blue-200 rounded-full opacity-60" />
              <div className="absolute -top-2 right-10 w-3 h-3 bg-orange-400 rounded-full" />
              <div className="absolute bottom-6 right-6 w-3 h-3 bg-pink-400 rounded-full" />
              <div className="absolute bottom-6 left-6 w-3 h-3 bg-green-400 rounded-full" />


             

              {/* Image */}
              <img
                src={Img}
                alt="Italy"
                className="rounded-xl mb-4"
              />


              {/* Correct / wrong icons */}
              <div className="absolute top-8 right-8 bg-white shadow-md rounded-full p-2 text-red-500">
                ✕
              </div>
              <div className="absolute top-20 right-6 bg-white shadow-md rounded-full p-2 text-green-500">
                ✓
              </div>

            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-4xl font-bold leading-tight text-[#2F2D6B]">
              Assessments,{" "}
              <span className="text-[#1EC9A8]">Quizzes, Tests</span>
            </h2>

            <p className="mt-6 text-gray-500 max-w-lg leading-relaxed">
              Talent Grow allows trainers to easily launch live assignments,
              quizzes and tests. Student results are automatically saved in the
              online gradebook.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
