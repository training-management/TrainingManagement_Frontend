export default function Testimonial() {
  return (
    <section className="w-full bg-[#eef7fb] py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}
        <div>
          <p className="text-xs tracking-widest text-gray-400 mb-4">
            TESTIMONIAL
          </p>

          <h2 className="text-[42px] font-bold text-[#1e2a5a] mb-8">
            What They Say?
          </h2>

          <p className="text-gray-500 leading-7 mb-6 max-w-lg">
            Talent Grow has helped more than 100k+ students worldwide
            to achieve their dream careers in the IT industry.
          </p>

          <p className="text-gray-500 leading-7 mb-6 max-w-lg">
            Our interactive labs and expert mentorship have made learning
            both fun and effective for students and teachers alike.
          </p>

          <p className="text-gray-500 mb-10">
            Are you ready to start? Share your experience with us.
          </p>

          <button className="flex items-center gap-3 rounded-full border-2 border-teal-400 px-8 py-3 text-teal-500 font-medium hover:bg-teal-50 transition">
            Write your assessment →
          </button>
        </div>

        {/* RIGHT */}
        <div className="relative">

          {/* IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
            alt="testimonial"
            className="w-96 rounded-[36px] object-cover"
          />

          {/* ARROW */}
          <div className="absolute right-[-22px] top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center text-teal-500 text-2xl cursor-pointer">
            ›
          </div>

          {/* CARD */}
          <div className="absolute -bottom-20 left-12 bg-white rounded-3xl p-7 max-w-md shadow-2xl border-l-4 border-red-400">
            <p className="text-gray-500 italic leading-7 mb-6">
              “Thank you so much for your help. It’s exactly what I’ve been
              looking for. You won’t regret it. It really saves me time and
              effort. Talent Grow is exactly what my career was lacking.”
            </p>

            <h4 className="font-bold text-[#1e2a5a]">
              Gloria Rose
            </h4>

            <div className="flex items-center gap-2 mt-1">
              <span className="text-yellow-400">★★★★★</span>
              <span className="text-sm text-gray-400">
                12 reviews at Yelp
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
