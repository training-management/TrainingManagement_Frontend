import { useState } from "react";

export default function Auth() {
  const [signup, setSignup] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div
        className={`relative w-[900px] h-[500px] bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-700 ${
          signup ? "" : "flex-row-reverse"
        } flex`}
      >
        {/* FORM SIDE */}
        <div className="w-1/2 flex flex-col items-center justify-center px-10 transition-all duration-700">
          <h2 className="text-3xl font-bold text-teal-500 mb-4">
            {signup ? "Create Account" : "Sign In"}
          </h2>

          <p className="text-gray-400 text-sm mb-4">or use your email</p>

          <form className="flex flex-col gap-3 w-full max-w-xs">
            {signup && (
              <input
                type="text"
                placeholder="Name"
                className="bg-gray-100 px-4 py-2 rounded"
              />
            )}

            <input
              type="email"
              placeholder="Email"
              className="bg-gray-100 px-4 py-2 rounded"
            />

            <input
              type="password"
              placeholder="Password"
              className="bg-gray-100 px-4 py-2 rounded"
            />

            <button className="mt-4 bg-teal-400 text-white py-2 rounded-full">
              {signup ? "SIGN UP" : "SIGN IN"}
            </button>
          </form>
        </div>

        {/* SLIDE PANEL */}
        <div className="w-1/2 bg-teal-400 text-white flex flex-col items-center justify-center px-10 transition-all duration-700">
          {signup ? (
            <>
              <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
              <p className="text-center text-sm mb-6">
                To keep connected with us please login with your personal info
              </p>
              <button
                onClick={() => setSignup(false)}
                className="border border-white px-8 py-2 rounded-full"
              >
                SIGN IN
              </button>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold mb-4">Hello, Friend!</h2>
              <p className="text-center text-sm mb-6">
                Enter your details and start your journey with us
              </p>
              <button
                onClick={() => setSignup(true)}
                className="border border-white px-8 py-2 rounded-full"
              >
                SIGN UP
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
