export default function Success() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-1400px mx-auto px-16 text-center">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold">
          <span className="text-teal-400">What our Training &</span>{" "}
          <span className="text-indigo-700">Management System does</span>
        </h2>

        {/* Sub text */}
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Manage training programs, employees, 
          and performance efficiently with smart tools designed for
           modern organizations.
        </p>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12">
          
          <div>
            <h3 className="text-5xl font-bold text-teal-400">15K+</h3>
            <p className="mt-2 text-indigo-700 font-medium">
              Active Learners & Employees
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-teal-400">75%</h3>
            <p className="mt-2 text-indigo-700 font-medium">
              Training Completion Rate
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-teal-400">350+</h3>
            <p className="mt-2 text-indigo-700 font-medium">
              Practical Training Modules
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-teal-400">26</h3>
            <p className="mt-2 text-indigo-700 font-medium">
              Certified Industry Trainers
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-teal-400">16</h3>
            <p className="mt-2 text-indigo-700 font-medium">
              Years of Training Excellence
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
