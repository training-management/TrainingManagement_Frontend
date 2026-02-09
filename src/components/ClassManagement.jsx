
import Img from "../assets/class.png";


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

          
{/* RIGHT IMAGE CARD */}
<div className="flex justify-center perspective-1000">

  <div className="relative w-[420px] h-[300px] cursor-pointer transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">

    {/* FRONT SIDE */}
    <div className="absolute inset-0 backface-hidden bg-white rounded-3xl shadow-2xl flex items-center justify-center">
      <img
        src={Img}
        alt="Gradebook"
        className="w-full h-full object-contain rounded-3xl"
      />
    </div>

    {/* BACK SIDE */}
    <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white rounded-3xl shadow-2xl flex items-center justify-center">
      <img
        src={Img}
        alt="Gradebook Back"
        className="w-full h-full object-contain rounded-3xl opacity-90"
      />
    </div>

  </div>
</div>


              
            
          

        </div>
      </div>
    </section>
  );
}
