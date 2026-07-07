import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { EyeIcon, EyeSlashIcon, EnvelopeIcon, LockClosedIcon} from "@heroicons/react/24/outline"
import axios from "axios"
import { toast } from "react-hot-toast"


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  async function handleLogin() {
    console.log("Login button clicked");
    console.log("Email:", email);
    console.log("Password:", password);

    try {
      const res = await axios.post(import.meta.env.VITE_BACKEND_URL + "/users/login", { 
      email: email,
      password: password, });
     
      console.log(res)

      if (res.data.role == "admin") {
        //window.location.href = "/admin";
        navigate("/admin");
      } else {
        //window.location.href = "/";
        navigate("/");
      }

      toast.success("Login successful! Welcome back.");
      
    } catch (error) {
      console.log("error during login:");
      console.error(error);
      toast.error("Login failed. Please try again.");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className="w-full h-screen bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat flex">

      {/* Left Panel */}
      <div className="w-[50%] h-full bg-[#071927]/60 flex items-center justify-center flex-col gap-6 px-16">
        <h1 className="text-5xl text-white font-bold leading-tight text-center drop-shadow-lg">
          Powering Sri Lanka with Technology
        </h1>
        <p className="text-lg text-slate-300 text-center leading-relaxed">
          Quality computers, accessories, and expert support across Sri Lanka.
        </p>
      </div>

      {/* Right Panel — Glass Card */}
      <div className="w-[50%] h-full flex items-center justify-center">
        <div className="w-[420px] bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 px-10 py-12 flex flex-col items-center gap-3">

          {/* Logo */}
          <img src="/new1.png" alt="Logo" className="w-36 h-36 object-contain rounded-2xl drop-shadow-xl" />

          {/* Title */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
            <p className="text-slate-300 text-sm mt-1">Sign in to continue</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">

            {/* Email Input */}
            <div className="relative w-full">
              <EnvelopeIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onClick={() => setEmail("")}
                className="w-full h-11 bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
              />
            </div>

            {/* Password Input */}
            <div className="relative w-full">
              <LockClosedIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-11 bg-white/10 border border-white/20 rounded-lg pl-10 pr-11 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
              >
                {showPassword
                  ? <EyeSlashIcon className="w-5 h-5" />
                  : <EyeIcon className="w-5 h-5" />
                }
              </button>
            </div>

            {/* Forgot Password */}
            <div className="w-full flex justify-end -mt-2">
              <Link to="/forgot-password" className="text-sm text-accent hover:underline">
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full h-11 bg-accent hover:bg-[#0198d5] text-white font-semibold rounded-lg transition-colors duration-300 mt-1"
            >
              Login
            </button>

            {/* Sign Up Link */}
            <p className="text-sm text-slate-300 text-center mt-1">
              Don't have an account?{" "}
              <Link to="/register" className="text-accent hover:underline font-medium">
                Sign Up
              </Link>
            </p>

          </form>
        </div>
      </div>

    </div>
  );
}
