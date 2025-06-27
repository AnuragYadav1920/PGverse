"use client"
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function profile() {
  const router  = useRouter()
  const logout = async() =>{
    try {
      const response = await axios.get("/api/users/logout");
      console.log(response.data.message)
      toast.success(response.data.message);
      router.push("/")
    } catch (error: any) {
      toast.error(error.message)
    }
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>Profile</h1>
        <hr />
        <p>profile page</p>
        <hr />
        <button className="my-4 p-2 cursor-pointer bg-blue-500 text-white" onClick={logout}>Logout</button>
      </div>
    </>
  );
}
