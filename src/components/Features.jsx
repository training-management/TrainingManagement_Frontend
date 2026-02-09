import Img from "../assets/features.png";

import { Check } from "lucide-react";

export default function Features() {
  return (
    <section className="w-full bg-[#F9FAFB] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2F2D6B]">
            Our <span className="text-[#1EC9A8]">Features</span>
          </h2>
          <p className="mt-4 text-gray-500">
            These powerful features make IT training and learning more efficient
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl shadow-xl p-6 max-w-lg">
              <img
                src={Img}
                alt="Feature UI"
                className="w-full rounded-xl"
              />
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div>
            <h3 className="text-3xl font-bold text-[#2F2D6B] leading-snug">
              A user interface{" "}
              <span className="text-[#1EC9A8]">designed for the classroom</span>
            </h3>

            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-3 text-gray-600">
                <Check className="text-[#1EC9A8] mt-1" size={20} />
                <span>
                  Trainers don't get lost in grid view and have a dedicated
                  teaching space.
                </span>
              </li>

              <li className="flex items-start gap-3 text-gray-600">
                <Check className="text-[#1EC9A8] mt-1" size={20} />
                <span>
                  Mentors and presenters can be moved to the front easily.
                </span>
              </li>

              <li className="flex items-start gap-3 text-gray-600">
                <Check className="text-[#1EC9A8] mt-1" size={20} />
                <span>
                  Trainers can monitor students and class data in real time.
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
