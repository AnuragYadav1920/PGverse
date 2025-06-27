"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import toast from "react-hot-toast";
import axios  from "axios";


export default function Signup() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
    phone: ""
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false)


  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      alert("User registered successfully");
      toast.success("User registered successfully");
      router.push("/login");
    } catch (error: any) {
      toast.error(error.message)
    }finally{
      setLoading(false);
    }
  };

  useEffect(()=>{
    if(user.email && user.password && user.phone && user.username){
      setButtonDisabled(false)
    }else{
      setButtonDisabled(true)
    }
  },[user])
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
              Join thousands of users finding safe and affordable PGs across the
              city.
            </p>
          </div>
        </div>

        {/* Right Section - login Form */}
        <div className="min-h-screen grid bg-gray-200 flex-1 items-center lg:flex-1/2 lg:grid">
          <div className="px-4 py-8 sm:w-2/3 sm:mx-auto lg:w-[500px] ">
            <h1 className="text-center text-[2rem] sm:text-[2.5rem] py-4 text-blue-500 font-bold">
              {loading ? "Processing" : "Signup"}
            </h1>
            {/* username */}
            <div className="">
              <label
                htmlFor="username"
                className="w-full py-2 text-blue-500 inline-block sm:w-24"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                placeholder="Create username"
                className="w-full p-2 border text-gray-600 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 sm:mb-0 sm:flex-1"
              />
            </div>
            {/* Email */}
            <div className="">
              <label
                htmlFor="email"
                className="w-full py-2 text-blue-500 inline-block sm:w-24"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="Enter email"
                className="w-full p-2 border text-gray-600 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 sm:mb-0 sm:flex-1"
              />
            </div>

            <div className="">
              <label
                htmlFor="phone"
                className="w-full py-2 text-blue-500 inline-block sm:w-24"
              >
                Phone
              </label>
              <input
                type="text"
                id="phone"
                value={user.phone}
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
                placeholder="Enter phone no"
                className="w-full p-2 border text-gray-600 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 sm:mb-0 sm:flex-1"
              />
            </div>

            {/* Password */}
            <div className="">
              <label
                htmlFor="password"
                className="w-full py-2 text-blue-500 inline-block sm:w-24"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="Create password"
                className="w-full p-2 border text-gray-600 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 sm:mb-0 sm:flex-1"
              />
            </div>

            {/* Submit Button */}
            <div className="w-full text-center py-6 px-4 text-white">
              <button
                onClick={onSignup}
                className="w-full py-2 bg-blue-500 rounded-lg hover:bg-blue-600 cursor-pointer"
              >
                {buttonDisabled ? "Required Details" : "Signup"}
              </button>
            </div>

            <div className="flex w-full justify-center gap-2 my-4 sm:my-6">
              <div className="size-10 p-2 bg-gray-300 rounded-full cursor-pointer hover:bg-gray-400">
                <img
                  src="https://www.svgrepo.com/show/303108/google-icon-logo.svg"
                  alt=""
                />
              </div>
              <div className="size-10 p-2 bg-gray-300 rounded-full cursor-pointer hover:bg-gray-400">
                <img
                  src="https://www.svgrepo.com/show/303117/facebook-2-logo.svg"
                  alt=""
                />
              </div>
              <div className="size-10 p-2 bg-gray-300 rounded-full cursor-pointer hover:bg-gray-400">
                <img
                  src="https://www.svgrepo.com/show/475689/twitter-color.svg"
                  alt=""
                />
              </div>
            </div>
            <p className="pt-4 text-center text-gray-400 text-sm sm:text-base">
              Already registered ?
              <Link href="/login" className="text-red-600">
                {" "}
                Login
              </Link>
            </p>
            <p className="text-[12px] py-2 mb-8 text-center  text-gray-400 px-4 sm:text-[14px] sm:mb-4">
              By clicking the button, you are agreeing to our{" "}
              <span className="text-red-600">Terms and Services.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
