import { useState } from "react";
import galaxy from "../assets/galaxy.jpg";
import beach from "../assets/beach.jpg";

export default function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState({});

  const togglePassword = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="relative w-[900px] h-[550px] bg-white rounded-2xl shadow-2xl overflow-hidden">

        {/* SLIDER */}
        <div
          className={`flex w-[200%] h-full transition-transform duration-700 ease-in-out ${
            isSignUp ? "-translate-x-1/2" : "translate-x-0"
          }`}
        >

          {/* ================= SIGN IN ================= */}
          <div className="flex w-1/2 h-full">

            {/* IMAGE LEFT */}
            <div
              className="w-1/2 bg-cover bg-center relative"
              style={{ backgroundImage: `url(${galaxy})` }}
            >
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-10">
                <h1 className="text-3xl font-bold mb-4">
                  Hello, Friend!
                </h1>
                <p className="mb-6">
                  Enter your personal details and start journey with us
                </p>

                <button
                  onClick={() => setIsSignUp(true)}
                  className="border border-white px-10 py-3 rounded-full hover:bg-white hover:text-black transition"
                >
                 SIGN IN
                </button>
              </div>
            </div>

            {/* FORM RIGHT */}
            <Form
              title="login"
              isSignup={false}
              togglePassword={togglePassword}
              showPassword={showPassword}
            />
          </div>

          {/* ================= SIGN UP ================= */}
          <div className="flex w-1/2 h-full">

            {/* FORM LEFT */}
            <Form
              title="Sign Up"
              isSignup={true}
              togglePassword={togglePassword}
              showPassword={showPassword}
            />

            {/* IMAGE RIGHT */}
            <div
              className="w-1/2 bg-cover bg-center relative"
              style={{ backgroundImage: `url(${beach})` }}
            >
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-10">
                <h1 className="text-3xl font-bold mb-4">
                  Welcome Back!
                </h1>
                <p className="mb-6">
                  To keep connected with us please login with your personal info
                </p>

                <button
                  onClick={() => setIsSignUp(false)}
                  className="border border-white px-10 py-3 rounded-full hover:bg-white hover:text-black transition"
                >
                  LOGIN
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

/* ================= FORM COMPONENT ================= */

function Form({ title, isSignup, togglePassword, showPassword }) {
  return (
    <form className="w-1/2 flex flex-col justify-center items-center px-10 text-center bg-white">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>

      <div className="flex gap-3 mb-5">
        <Social />
        <Social />
        <Social />
        <Social />
      </div>

      {isSignup && (
        <input
          type="text"
          placeholder="Name"
          className="w-full bg-gray-100 border p-2 rounded-lg mb-3"
        />
      )}

      <input
        type="email"
        placeholder="Email"
        className="w-full bg-gray-100 border p-2 rounded-lg mb-3"
      />

       <input
        type="mobile"
        placeholder="mobile"
        className="w-full bg-gray-100 border p-2 rounded-lg mb-3"
      />

      <div className="relative w-full mb-3">
        <input
          type={showPassword[title] ? "text" : "password"}
          placeholder="Password"
          className="w-full bg-gray-100 border p-2 rounded-lg"
        />
        <span
          onClick={() => togglePassword(title)}
          className="absolute right-3 top-3 cursor-pointer text-gray-500"
        >
          👁
        </span>
      </div>
       <div className="relative w-full mb-3">
        <input
          type={showPassword[title] ? "text" : "Confrom password"}
          placeholder="Confirm Password"
          className="w-full bg-gray-100 border
           p-2 rounded-lg"
        />
        <span
          onClick={() => togglePassword(title)}
          className="absolute right-3 top-3 cursor-pointer text-gray-500"
        >
          👁
        </span>
      </div>

      {!isSignup && (
        <div className="w-full flex justify-between text-xs mb-3">
          <label className="flex gap-2 items-center">
            <input type="checkbox" /> Remember
          </label>
          <a href="#">Forgot password?</a>
        </div>
      )}

      <button className="bg-[#2bb7a3] text-white px-10 py-2 rounded-full uppercase text-sm mt-4 hover:scale-105 transition">
        {title}
      </button>
    </form>
  );
}

/* ================= SOCIAL ICON ================= */

function Social() {
  return (
    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shadow hover:scale-110 transition cursor-pointer">
      
    </div>
  );
}
