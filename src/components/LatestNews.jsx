export default function LatestNews() {
  return (
    <section className="w-full bg-[#eef7fb] py-24 mt-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-[40px] font-bold text-[#1e2a5a]">
            Lastest <span className="text-teal-500">News</span> and Resources
          </h2>
          <p className="text-gray-500 mt-4">
            See the developments that have occurred to Talent Grow in the world
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT BIG CARD */}
          <div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="news"
                className="rounded-3xl w-98 h-98 object-cover"
              />

              <span className="absolute bottom-4 left-4 bg-teal-500 text-white text-xs px-4 py-1 rounded-full">
                NEWS
              </span>
            </div>

            <h3 className="text-[24px] font-bold text-[#1e2a5a] mt-8 leading-snug">
              Class adds $30 million to its balance sheet for a Zoom-friendly
              edtech solution
            </h3>

            <p className="text-gray-500 mt-4 leading-7">
              Class, launched less than a year ago by Blackboard co-founder
              Michael Chasen, integrates exclusively...
            </p>

            <span className="text-teal-500 font-medium mt-4 inline-block cursor-pointer">
              Read more
            </span>
          </div>

          {/* RIGHT STACKED CARDS */}
          <div className="flex flex-col gap-8">

            {/* ITEM */}
            <div className="flex gap-6">
              <img
                src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
                className="w-40 h-28 rounded-2xl object-cover"
              />

              <div>
                <span className="bg-teal-500 text-white text-xs px-3 py-1 rounded-full">
                  PRESS RELEASE
                </span>

                <h4 className="text-[#1e2a5a] font-bold mt-3 leading-snug">
                  Class Technologies Inc. Closes $30 Million Series A Financing
                  to Meet High Demand
                </h4>
              </div>
            </div>

            {/* ITEM */}
            <div className="flex gap-6">
              <img
                src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04"
                className="w-40 h-28 rounded-2xl object-cover"
              />

              <div>
                <span className="bg-teal-500 text-white text-xs px-3 py-1 rounded-full">
                  NEWS
                </span>

                <h4 className="text-[#1e2a5a] font-bold mt-3 leading-snug">
                  Zoom’s earliest investors are betting millions on a better
                  Zoom for schools
                </h4>
              </div>
            </div>

            {/* ITEM */}
            <div className="flex gap-6">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7"
                className="w-40 h-28 rounded-2xl object-cover"
              />

              <div>
                <span className="bg-teal-500 text-white text-xs px-3 py-1 rounded-full">
                  NEWS
                </span>

                <h4 className="text-[#1e2a5a] font-bold mt-3 leading-snug">
                  Former Blackboard CEO Raises $16M to Bring LMS Features to
                  Zoom Classrooms
                </h4>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
