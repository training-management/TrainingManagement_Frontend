import { useNavigate } from "react-router-dom";
import Img from "../assets/frond.png";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#4EC1BE] relative overflow-hidden">

      {/* HERO CONTENT */}
      <div className="grid grid-cols-2 px-16 pt-20 items-center">

        {/* LEFT TEXT */}
        <div>
          <h1 className="text-6xl font-bold leading-tight">
            <span className="text-[#1F3C88]">Everthing you need to</span>{" "}
            <span className="text-white">Manage training & Workforce--</span> <br />
            <span className="text-white"> in one smart platform</span>
          </h1>

          <p className="text-white opacity-80 mt-6 max-w-xl">
            Our Training & Management System helps organizations, institutes, and companies manage
           employee training, attendance, performance, scheduling, and progress tracking
          through one secure, cloud-based platform.
          </p>

          <div className="flex items-center gap-6 mt-10">
            <button
              onClick={() => navigate("/courses")}
              className="bg-yellow-400 text-white px-8 py-4 rounded-full font-semibold"
            >
              Join for free
            </button>

            <div className="flex items-center gap-3 text-white font-medium cursor-pointer">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#4EC1BE]">
                ▶
              </div>
              Learn More
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE CONTAINER */}
        <div className="relative flex justify-center">

          {/* SOFT BACKGROUND */}
          <div className=" bg-[#6FD1CE] rounded-[40px] w-[420px] h-[520px]">

             {/* MAIN IMAGE */}
          <img
            src={Img}
            alt="student"
            className="relative z-10 w-[420px] h-[520px] bg-[#6FD1CE] rounded-[40px] object-cover"
          />
          </div>

         

          {/* TOP CARD */}
          <div className="absolute top-6 left-[-40px] bg-white px-6 py-3 rounded-xl shadow-lg z-20">
            📊 <span className="font-semibold">Training Class</span>
          </div>

          {/* MIDDLE CARD */}
          <div className="absolute bottom-15 left-0 bg-white p-4 rounded-xl shadow-lg w-55 z-20">
            <h3 className="font-bold">Empolyee Learning</h3>
            <p className="text-sm text-gray-500">Dashboard screen reco</p>
            <button className="mt-3 bg-pink-500 text-white px-4 py-2 rounded-full text-sm">
              Get Strated
            </button>
          </div>

          {/* RIGHT CARD */}
          <div className="absolute bottom-16 right-15 bg-white p-4 rounded-xl shadow-lg z-20">
            🎉 <span className="font-semibold">Congratulations</span>
            <p className="text-sm text-gray-500">
              Your admission is completed
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM WAVE */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            d="M0,256L80,240C160,224,320,192,480,170.7C640,149,800,139,960,154.7C1120,171,1280,213,1360,234.7L1440,256L1440,320L0,320Z"
          />
        </svg>
      </div>

    </div>
  );
}
