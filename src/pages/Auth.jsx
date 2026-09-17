import { useState } from "react";
import { useNavigate } from "react-router-dom";
import galaxy from "../assets/galaxy.jpg";
import beach from "../assets/beach.jpg";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Auth() {

  const navigate = useNavigate();

  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState({});

  const [name,setName] = useState("");
  const [mobile,setMobile] = useState("");
  const [role,setRole] = useState("admin");

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");

  const togglePassword = (field) => {
    setShowPassword((prev)=>({
      ...prev,
      [field]:!prev[field]
    }))
  }

  /* ================= LOGIN ================= */

  const handleLogin = async (e)=>{
    e.preventDefault();

    setError("");

    try{

      const res = await fetch("http://localhost:5000/api/auth/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          email,
          password
        })
      });

      const data = await res.json();

      if(data.success){

        localStorage.setItem("token",data.token);
        localStorage.setItem("user",JSON.stringify(data.user));

        navigate("/admin");

      }else{

        setError(data.message);

      }

    }catch(err){

      setError("Server Error");

    }
  }

  /* ================= SIGNUP ================= */

  const handleSignup = async (e)=>{
    e.preventDefault();

    try{

      const res = await fetch("http://localhost:5000/api/auth/signup",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name,
          email,
          password,
          role,
          mobile
        })
      });

      const data = await res.json();

      if(data.success){

        alert("Signup Successful, Please Login");
        setIsSignUp(false);

        setName("");
        setEmail("");
        setPassword("");
        setMobile("");

      }else{

        alert(data.message);

      }

    }catch(err){

      alert("Server Error");

    }
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">

      <div className="relative w-[900px] h-[550px] bg-white rounded-2xl shadow-2xl overflow-hidden">

        <div className={`flex w-[200%] h-full transition-transform duration-700 ${isSignUp ? "-translate-x-1/2":"translate-x-0"}`}>

          {/* LOGIN SIDE */}

          <div className="flex w-1/2 h-full">

            <div
              className="w-1/2 bg-cover bg-center relative"
              style={{backgroundImage:`url(${galaxy})`}}
            >

              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-10">

                <h1 className="text-3xl font-bold mb-4">Hello Friend</h1>

                <button
                  onClick={()=>setIsSignUp(true)}
                  className="border border-white px-10 py-3 rounded-full"
                >
                  SIGN UP
                </button>

              </div>

            </div>

            <Form
              title="Login"
              isSignup={false}
              togglePassword={togglePassword}
              showPassword={showPassword}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              handleSubmit={handleLogin}
              error={error}
            />

          </div>


          {/* SIGNUP SIDE */}

          <div className="flex w-1/2 h-full">

            <Form
              title="Sign Up"
              isSignup={true}
              togglePassword={togglePassword}
              showPassword={showPassword}
              name={name}
              setName={setName}
              mobile={mobile}
              setMobile={setMobile}
              role={role}
              setRole={setRole}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              handleSubmit={handleSignup}
            />

            <div
              className="w-1/2 bg-cover bg-center relative"
              style={{backgroundImage:`url(${beach})`}}
            >

              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-10">

                <h1 className="text-3xl font-bold mb-4">Welcome Back</h1>

                <button
                  onClick={()=>setIsSignUp(false)}
                  className="border border-white px-10 py-3 rounded-full"
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


/* ================= FORM ================= */

function Form({
  title,
  isSignup,
  togglePassword,
  showPassword,
  email,
  setEmail,
  password,
  setPassword,
  handleSubmit,
  error,
  name,
  setName,
  mobile,
  setMobile,
  role,
  setRole
}){

  return(

    <form
      onSubmit={handleSubmit}
      className="w-1/2 flex flex-col justify-center items-center px-10 text-center bg-white"
    >

      <h1 className="text-2xl font-bold mb-4">{title}</h1>

      <div className="flex gap-4 mb-5 text-xl">
        <FaFacebookF/>
        <FaInstagram/>
        <FaTwitter/>
        <FaLinkedinIn/>
      </div>

      {error && !isSignup && (
        <p className="text-red-500 text-sm mb-3">{error}</p>
      )}

      {isSignup && (
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          className="w-full bg-gray-100 border p-2 rounded-lg mb-3"
        />
      )}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        className="w-full bg-gray-100 border p-2 rounded-lg mb-3"
      />

      {isSignup && (
        <input
          type="number"
          placeholder="Mobile"
          value={mobile}
          onChange={(e)=>setMobile(e.target.value)}
          className="w-full bg-gray-100 border p-2 rounded-lg mb-3"
        />
      )}

      {isSignup && (
        <select
          value={role}
          onChange={(e)=>setRole(e.target.value)}
          className="w-full bg-gray-100 border p-2 rounded-lg mb-3"
        >
          <option value="admin">Admin</option>
          <option value="hr">HR</option>
          <option value="trainer">Trainer</option>
          <option value="employee">Employee</option>
        </select>
      )}

      <div className="relative w-full mb-3">

        <input
          type={showPassword[title] ? "text":"password"}
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="w-full bg-gray-100 border p-2 rounded-lg"
        />

        <span
          onClick={()=>togglePassword(title)}
          className="absolute right-3 top-3 cursor-pointer"
        >
          👁
        </span>

      </div>

      {!isSignup && (

        <div className="w-full flex justify-between text-xs mb-3">

          <label className="flex gap-2 items-center">
            <input type="checkbox"/> Remember me
          </label>

          <a href="#" className="text-blue-500">
            Forgot Password?
          </a>

        </div>

      )}

      <button className="bg-[#2bb7a3] text-white px-10 py-2 rounded-full mt-4">
        {title}
      </button>

    </form>
  )
}
