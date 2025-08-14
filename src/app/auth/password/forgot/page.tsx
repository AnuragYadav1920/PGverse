"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaCircleArrowLeft } from "react-icons/fa6";

export default function forgotPassword() {

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [buttonDisabled,setButtonDisabled] = useState(true);

    const onReset = () =>{

    }

    useEffect(()=>{
        if(email.length > 0){
            setButtonDisabled(false)
        }
    },[email])
  return (
    <>
      <div className="min-h-screen">
        <div className="flex">
          {/* Left Section - Welcome */}
          <div className="hidden min-h-screen bg-blue-950 flex-1/2 items-center text-center lg:grid ">
            <div className="px-4">
              <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem]">
                Welcome to{" "}
                <strong className="text-red-600 font-bold">PGverse</strong>
              </h1>
              <p className="text-[1.1rem] sm:text-[1.3rem] md:text-[1.4rem]">
                Find the Best PG's Near You!
              </p>
              <p className="text-sm sm:text-base">
                Join thousands of users finding safe and affordable PGs across
                the city.
              </p>
            </div>
          </div>

          {/* Right Section - login Form */}
          <div className="min-h-screen grid bg-gray-200 flex-1 items-center lg:flex-1/2 lg:grid">
            <div className="px-4 py-8 sm:w-2/3 sm:mx-auto lg:w-[500px] ">
              <h1 className="text-[2rem] sm:text-[2.5rem] py-2 text-blue-500 font-bold">
                {loading ? "Processing" : "Forgot Password"}
              </h1>
            <p className=" text-[10px] text-slate-400 block">Please provide the email address associated with your account to reset your account password.</p>
              {/* Email */}
              <div className="pt-6">
                <label
                  htmlFor="email"
                  className="w-full py-2 text-blue-500 inline-block sm:w-24"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  autoComplete="off"
                  className="w-full p-2 border text-gray-600 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 sm:mb-0 sm:flex-1"
                />
              </div>

              {/* Submit Button */}
              <div className="w-full text-center py-6 text-white">
                <button
                  onClick={onReset}
                  className="w-full py-2 bg-blue-500 rounded-lg hover:bg-blue-600 cursor-pointer"
                >
                  {buttonDisabled ? "Required Details" : "Reset Password"}
                </button>
              </div>

              {/* back button */}
              <div>
                <FaCircleArrowLeft className="text-2xl mt-8 text-blue-500 cursor-pointer"/> 
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
