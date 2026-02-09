export default function Footer() {
  return (
    <footer className="w-full bg-[#0f172a] text-gray-300">

      {/* TOP INFO BAR */}
      <div className="bg-teal-500 text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between">
          <span>Support: +91 98765 43210</span>
           <span>Email: admissions@talentgrow.com</span>
          
          <span>ISO 9001:2015 Certified Institute</span>
        </div>
      </div>

      {/* NEWSLETTER */}
      <div className="py-20 text-center">
        <h3 className="text-2xl font-semibold text-white mb-8">
          Subscribe to get our Newsletter
        </h3>

        <div className="flex justify-center">
          <div className="flex bg-[#1e293b] rounded-full p-1 w-460">
            <input
              type="email"
              placeholder="Your Email Address"
              className="bg-transparent flex-1 px-6 text-sm outline-none"
            />
            <button className="bg-teal-400 text-[#0f172a] px-8 py-2 rounded-full font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-5 gap-12">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">TalentGrow</h2>
          <p className="text-sm leading-6">
            Master the future of tech with our hands-on training programs.
            Join 5000+ students already learning with us.
          </p>
        </div>

        {/* LEARNING PATHS */}
        <div>
          <h4 className="text-white font-semibold mb-4">LEARNING PATHS</h4>
          <ul className="space-y-3 text-sm">
            <li>Frontend Development</li>
            <li>Backend Mastery</li>
            <li>Mobile App Dev</li>
            <li>UI/UX Design</li>
            <li>Data Science & AI</li>
          </ul>
        </div>

        {/* FOR STUDENTS */}
        <div>
          <h4 className="text-white font-semibold mb-4">FOR STUDENTS</h4>
          <ul className="space-y-3 text-sm">
            <li>Free Demo Classes</li>
            <li>Placement Cell</li>
            <li>Alumni Success</li>
            <li>Verify Certificate</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="text-white font-semibold mb-4">COMPANY</h4>
          <ul className="space-y-3 text-sm">
            <li>About Journey</li>
            <li className="flex items-center gap-2">
              Work With Us
              <span className="bg-pink-500 text-white text-xs px-2 py-0.5 rounded">
                Hiring
              </span>
            </li>
            <li>Privacy & Refund</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* HEADQUARTERS */}
        <div>
          <h4 className="text-white font-semibold mb-4">HEADQUARTERS</h4>
          <p className="text-sm leading-6 mb-6">
            Plot No. 45, Tech Zone, Vijay Nagar,
            <br /> Indore – 452010
          </p>

          <div className="flex gap-4">
            <div className="w-9 h-9 bg-[#1e293b] rounded-full flex items-center justify-center">
              f
            </div>
            <div className="w-9 h-9 bg-[#1e293b] rounded-full flex items-center justify-center">
              t
            </div>
            <div className="w-9 h-9 bg-[#1e293b] rounded-full flex items-center justify-center">
              in
            </div>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 text-sm py-6">
        <div className="max-w-7xl mx-auto px-6 flex justify-between">
          <span>
            Copyright © 2026 Talent Grow IT Training & Management System.
            Registered under Govt. of India.
          </span>
          <span className="opacity-60">Trusted By</span>
        </div>
      </div>
    </footer>
  );
}
