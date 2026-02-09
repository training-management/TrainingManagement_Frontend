import { useState } from "react";
import OneImg from "../assets/oneonone.png";

export default function OneOnOne() {
  const [flip, setFlip] = useState(false);

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT : FLIP IMAGE CARD */}
        <div className="flex justify-center perspective-1000">
          <div
            onClick={() => setFlip(!flip)}
            className={`relative w-[520px] h-[360px] cursor-pointer transition-transform duration-700 transform-style-preserve-3d
            ${flip ? "rotate-y-180" : ""}`}
          >

            {/* FRONT */}
            <div className="absolute inset-0 backface-hidden bg-white rounded-3xl shadow-2xl flex items-center justify-center">
              <img
                src={OneImg}
                alt="One on One"
                className="w-full h-full object-contain rounded-3xl"
              />
            </div>

            {/* BACK */}
            <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-[#1EC9A8] to-[#22B3E3] rounded-3xl shadow-2xl flex flex-col items-center justify-center text-white px-10">
              <h3 className="text-2xl font-bold mb-3">
                Private Discussion
              </h3>
              <p className="text-center text-sm mb-6">
                Your video can’t be seen by others. Secure one-on-one mentoring.
              </p>
              <button className="bg-red-500 px-6 py-2 rounded-full">
                End Discussion
              </button>
            </div>

          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold leading-tight text-[#2F2D6B]">
            One-on-One{" "}
            <span className="text-[#1EC9A8]">Discussions</span>
          </h2>

          <p className="mt-6 text-gray-500 max-w-lg leading-relaxed">
            Trainers and learners can have secure private video conversations
            inside the Edunexa training platform without interruption.
          </p>
        </div>

      </div>
    </section>
  );
}
