"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import { axios } from "axios";

const countryCodes = [
  { name: "Afghanistan", code: "+93", flag: "🇦🇫" },
  { name: "Albania", code: "+355", flag: "🇦🇱" },
  { name: "Algeria", code: "+213", flag: "🇩🇿" },
  { name: "Andorra", code: "+376", flag: "🇦🇩" },
  { name: "Angola", code: "+244", flag: "🇦🇴" },
  { name: "Argentina", code: "+54", flag: "🇦🇷" },
  { name: "Armenia", code: "+374", flag: "🇦🇲" },
  { name: "Australia", code: "+61", flag: "🇦🇺" },
  { name: "Austria", code: "+43", flag: "🇦🇹" },
  { name: "Bangladesh", code: "+880", flag: "🇧🇩" },
  { name: "Belgium", code: "+32", flag: "🇧🇪" },
  { name: "Brazil", code: "+55", flag: "🇧🇷" },
  { name: "Canada", code: "+1", flag: "🇨🇦" },
  { name: "China", code: "+86", flag: "🇨🇳" },
  { name: "Denmark", code: "+45", flag: "🇩🇰" },
  { name: "Egypt", code: "+20", flag: "🇪🇬" },
  { name: "France", code: "+33", flag: "🇫🇷" },
  { name: "Germany", code: "+49", flag: "🇩🇪" },
  { name: "India", code: "+91", flag: "🇮🇳" },
  { name: "Indonesia", code: "+62", flag: "🇮🇩" },
  { name: "Italy", code: "+39", flag: "🇮🇹" },
  { name: "Japan", code: "+81", flag: "🇯🇵" },
  { name: "Mexico", code: "+52", flag: "🇲🇽" },
  { name: "Nepal", code: "+977", flag: "🇳🇵" },
  { name: "Netherlands", code: "+31", flag: "🇳🇱" },
  { name: "New Zealand", code: "+64", flag: "🇳🇿" },
  { name: "Nigeria", code: "+234", flag: "🇳🇬" },
  { name: "Pakistan", code: "+92", flag: "🇵🇰" },
  { name: "Russia", code: "+7", flag: "🇷🇺" },
  { name: "Saudi Arabia", code: "+966", flag: "🇸🇦" },
  { name: "Singapore", code: "+65", flag: "🇸🇬" },
  { name: "South Africa", code: "+27", flag: "🇿🇦" },
  { name: "South Korea", code: "+82", flag: "🇰🇷" },
  { name: "Spain", code: "+34", flag: "🇪🇸" },
  { name: "Sri Lanka", code: "+94", flag: "🇱🇰" },
  { name: "Sweden", code: "+46", flag: "🇸🇪" },
  { name: "Switzerland", code: "+41", flag: "🇨🇭" },
  { name: "Thailand", code: "+66", flag: "🇹🇭" },
  { name: "Turkey", code: "+90", flag: "🇹🇷" },
  { name: "Ukraine", code: "+380", flag: "🇺🇦" },
  { name: "United Arab Emirates", code: "+971", flag: "🇦🇪" },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
  { name: "United States", code: "+1", flag: "🇺🇸" },
  { name: "Vietnam", code: "+84", flag: "🇻🇳" },
  { name: "Zimbabwe", code: "+263", flag: "🇿🇼" },
  // ... add more if needed
];

export default function Signup() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
    phone: ""
  });

  const onSignup = async () => {};
  return (
    <>
      <div className="flex flex-col md:flex-row bg-blue-950 min-h-screen items-center px-4 sm:px-8">
        {/* Left Section - Welcome */}
        <div className="w-full sm:w-2/3 md:flex-1 text-center text-white mb-8 md:mb-0">
          <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem]">
            Welcome to{" "}
            <strong className="text-red-600 font-bold">PGLife</strong>
          </h1>
          <p className="text-[1.1rem] sm:text-[1.3rem] md:text-[1.4rem]">
            Find the Best PG's Near You!
          </p>
          <p className="text-sm sm:text-base">
            Join thousands of users finding safe and affordable PGs across the
            city.
          </p>
        </div>

        {/* Right Section - Signup Form */}
        <div className="w-full h-auto text-black pt-2 border-2 border-blue-400 rounded-3xl bg-slate-200 mx-auto md:min-w-[400px] md:max-w-[500px]   md:h-[90vh] ">
          <h1 className="text-center text-[2rem] sm:text-[2.5rem] py-4 text-blue-500 font-bold">
            Signup
          </h1>

          {/* Username */}
          <div className="w-full px-4 items-center sm:px-8 sm:flex ">
            <label htmlFor="username" className="w-full py-2 text-blue-500 inline-block sm:w-24">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              placeholder="Create username"
              className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 sm:flex-1 sm:mb-0"
            />
          </div>

          {/* Email */}
          <div className="w-full px-4 items-center sm:px-8 sm:flex sm:mt-4 ">
            <label htmlFor="email" className="w-full py-2 text-blue-500 inline-block sm:w-24">
              Email
            </label>
            <input
              type="text"
              id="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Enter email"
              className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 sm:mb-0 sm:flex-1"
            />
          </div>

          {/* Phone */}
          <div className="w-full px-4 items-center sm:px-8 sm:flex sm:my-4">
            <label htmlFor="phone" className="w-full py-2 text-blue-500 inline-block sm:w-24">
              Phone no
            </label>
              <input
                type="number"
                id="phone"
                value={user.phone}
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
                placeholder="Enter Phone no."
                className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 no-spinner sm:mb-0 sm:flex-1"
              />
          </div>

          {/* Password */}
          <div className="w-full px-4 sm:px-8 sm:flex sm:items-center ">
            <label htmlFor="password" className="w-full py-2 text-blue-500 inline-block sm:w-24">
              Password
            </label>
            <input
              type="text"
              id="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Create password"
              className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 sm:mb-0 sm:flex-1"
            />
          </div>

          {/* Submit Button */}
          <div className="w-full text-center py-6 px-4 text-white">
            <button
              onClick={onSignup}
              className="w-full py-2 bg-blue-500 rounded-lg hover:bg-blue-600 cursor-pointer"
            >
              Submit
            </button>
          </div>

          <div className="flex w-full justify-center gap-2 my-4 sm:my-6">
            <div className="size-10 p-2 bg-gray-300 rounded-full cursor-pointer hover:bg-gray-400"><img src="https://www.svgrepo.com/show/303108/google-icon-logo.svg" alt="" /></div>
            <div className="size-10 p-2 bg-gray-300 rounded-full cursor-pointer hover:bg-gray-400"><img src="https://www.svgrepo.com/show/303117/facebook-2-logo.svg" alt="" /></div>
            <div className="size-10 p-2 bg-gray-300 rounded-full cursor-pointer hover:bg-gray-400"><img src="https://www.svgrepo.com/show/475689/twitter-color.svg" alt="" /></div>
          </div>
          <p className="pt-4 text-center text-gray-400 text-sm sm:text-base">
            Already registered? <span className="text-red-600">Login</span>
          </p>
          <p className="text-[12px] py-2 mb-8 text-center  text-gray-400 px-4 sm:text-[14px] sm:mb-4">
            By clicking the button, you are agreeing to our{" "}
            <span className="text-red-600">Terms and Services.</span>
          </p>
        </div>
      </div>
    </>
  );
}
