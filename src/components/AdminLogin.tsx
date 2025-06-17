import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/wishes");
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-dvh border-4 border-[#411E31] border-double flex flex-col items-center justify-center bg-white px-4 xmd:px-6 xl:px-10 py-8 tab:py-12 aboutMeGrad w3-animate-opacity2">
      <div className="relative top-4 w-full flex flex-col items-center">
        <h1 className="text-2xl tab:text-3xl lg:text-4xl xl:text-5xl font-semibold text-center text-[#411E31] playfairFont">
          Admin Login
        </h1>
        <p className="text-sm md:text-base text-center text-gray-600 mb-6 mt-[3px]">
          Kindly enter your credentials to proceed
        </p>
        <form
          onSubmit={handleLogin}
          className="w-full tab:max-w-2xl bg-white border border-pink-200 shadow-lg p-4 tab:p-6 xl:p-10 rounded-md space-y-4"
        >
          <div data-aoss="zoom-in" data-aoss-duration="1200">
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-100 bg-[#FFFCFC] text-gray-600 placeholder-gray-600 shadow-md transition ease-in-out duration-500 delay-10 hover:scale-[1.02]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div data-aoss="zoom-in" data-aoss-duration="1200">
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-100 bg-[#FFFCFC] text-gray-600 placeholder-gray-600 shadow-md transition ease-in-out duration-500 delay-10 hover:scale-[1.02]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full bg-[#863373] text-white py-2 rounded-md hover:bg-[#5c1f4e] shadow-md w3-animate-zooms transition ease-in-out duration-500 delay-10 cursor-pointer hover:scale-[1.02]"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
