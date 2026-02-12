// export default function PracticeQuestions() {
//   return (
//     <section className="w-full bg-[#eef7fb] py-24">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* HEADER */}
//         <div className="flex justify-between items-start mb-14">
//           <div>
//             <h2 className="text-4xl font-bold text-primary">
//               Practice <span className="text-accent">Questions Series</span>
//             </h2>
//             <p className="text-muted mt-2">
//               Talent Grow – IT Training Management System
//             </p>
//           </div>

//           <a className="text-accent font-semibold cursor-pointer">
//             SEE ALL →
//           </a>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

//           {/* LEFT TAGS */}
//           <div className="flex gap-4 overflow-hidden">
//             {[
//               { t: "Frontend", c: "#ff7b7b" },
//               { t: "Backend", c: "#9c5a1a" },
//               { t: "Full Stack", c: "#ffbf00" },
//               { t: "React", c: "#b388ff" },
//               { t: "Node", c: "#00a2ff" },
//               { t: "Python", c: "#32c36c" },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="w-24 h-72 rounded-3xl flex items-center justify-center text-white font-semibold rotate-6"
//                 style={{ background: item.c }}
//               >
//                 <span className="rotate-90 whitespace-nowrap">
//                   {item.t}
//                 </span>
//               </div>
//             ))}
//           </div>

//           {/* RIGHT CARD */}
//           <div className="bg-white rounded-3xl p-8 shadow-card flex gap-6 items-center">
//             <img
//               src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
//               alt=""
//               className="w-44 h-44 object-cover rounded-2xl"
//             />

//             <div>
//               <h3 className="text-2xl font-bold text-primary">
//                 Questions Series <br /> And Mock Interviews
//               </h3>

//               <p className="text-muted mt-2 max-w-sm">
//                 Practice more. Learn faster. Succeed smarter. Build strong
//                 concepts, improve coding skills, and prepare for top IT careers.
//               </p>

//               <div className="flex items-center gap-1 mt-3 text-yellow-400">
//                 ★★★★★
//               </div>

//               <div className="flex items-center gap-6 mt-6">
//                 <span className="text-xl font-bold text-primary">₹9,990</span>

//                 {/* 🎹 SAME PIANO BUTTON */}
//                 <button className="relative overflow-hidden rounded-full border-2 border-accent px-8 py-3 font-medium text-accent">
//                   <div className="absolute inset-0 flex mr-6">
//                     {[1, 2, 3, 4, 5].map((i) => (
//                       <span
//                         key={i}
//                         className={`flex-1 bg-accent/20 animate-piano delay-${i}`}
//                       />
//                     ))}
//                   </div>
//                   <span className="relative z-10">EXPLORE</span>
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT SIDE TAGS */}
//           <div className="hidden lg:flex gap-4 absolute right-8 ml-6">
//             {[
//               { t: "DevOps", c: "#4db6ac" },
//               { t: "Testing", c: "#2ecc71" },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="w-24 h-72 rounded-3xl flex items-center justify-center text-white font-semibold rotate-6"
//                 style={{ background: item.c }}
//               >
//                 <span className="rotate-90 whitespace-nowrap">
//                   {item.t}
//                 </span>
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }
export default function PracticeQuestions() {
  return (
    <section className="w-full bg-[#eef7fb] py-24 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex justify-between items-start mb-16">
          <div>
            <h2 className="text-4xl font-bold text-black">
              Practice Questions Series
            </h2>
            <p className="text-gray-600 mt-2">
              Talent Grow – IT Training Management System
            </p>
          </div>

          <span className="font-semibold cursor-pointer">
            SEE ALL →
          </span>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[auto_minmax(420px,480px)_auto] gap-20 items-center">

          {/* LEFT COLOR BARS */}
          <div className="hidden lg:flex gap-4">
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
                className="w-20 h-64 rounded-3xl flex items-center justify-center
                text-white font-semibold rotate-6
                transition-all duration-300 ease-out
                hover:-translate-y-2 hover:rotate-0 hover:shadow-xl"
                style={{ background: item.c }}
              >
                <span className="rotate-90 whitespace-nowrap">
                  {item.t}
                </span>
              </div>
            ))}
          </div>

          {/* WHITE CARD */}
          <div className="bg-white rounded-3xl shadow-xl p-8 flex gap-6 items-start">

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Practice"
              className="w-36 h-36 rounded-2xl object-cover shrink-0"
            />

            <div className="flex flex-col">
              <h3 className="text-2xl font-bold leading-snug">
                Questions Series <br /> And Mock Interviews
              </h3>

              <p className="text-gray-600 text-sm mt-2 max-w-sm">
                Practice more. Learn faster. Succeed smarter.
                Build strong concepts, improve coding skills,
                and prepare for top IT careers.
              </p>

              <div className="text-yellow-400 mt-3">
                ★★★★★
              </div>

              <div className="flex items-center gap-6 mt-6">
                <span className="text-xl font-bold">
                  ₹9,990
                </span>

                <button className="border-2 border-black rounded-full px-6 py-2 font-medium
                                   transition hover:bg-black hover:text-white">
                  EXPLORE
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT COLOR BARS */}
          <div className="hidden lg:flex gap-4">
            {[
              { t: "DevOps", c: "#4db6ac" },
              { t: "Testing", c: "#2ecc71" },
            ].map((item, i) => (
              <div
                key={i}
                className="w-20 h-64 rounded-3xl flex items-center justify-center
                text-white font-semibold -rotate-6
                transition-all duration-300 ease-out
                hover:-translate-y-2 hover:rotate-0 hover:shadow-xl"
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
