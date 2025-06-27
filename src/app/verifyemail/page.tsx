"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function verifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      const response = await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
    } catch (error: any) {
      setError(true);
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="bg-white w-[250px] min-h-[300px] p-2 ">
          {verified && (
            <div className="text-center text-black border-[1px] border-slate-300 p-2 rounded-lg">
              <img
                src="https://img.freepik.com/premium-vector/green-gradient-verified-badge_78370-6065.jpg?semt=ais_hybrid&w=740"
                alt="email-verify-img"
                className="size-20 mx-auto"
              />
              <span className="w-full text-xl font-semibold">
                Your email is been verified.
              </span>
              <div className="text-center break-words text-[12px] bg-slate-100 py-3 px-6 my-3 border-[1px] border-slate-300 rounded-lg">
                <span>{token ? `token : ${token}` : "no token"}</span>
              </div>
              <div className="w-full text-center my-5">
                <Link
                  href="/login"
                  className="py-2 px-4 bg-blue-400 hover:bg-blue-500 font-extralight rounded-lg block"
                >
                  Back to{" "}
                </Link>
              </div>
            </div>
          )};
          
          {error && (
            <div className="text-center text-black border-[1px] border-slate-300 p-2 rounded-lg">
              <img
                src="https://cdn3d.iconscout.com/3d/premium/thumb/wrong-label-3d-icon-download-in-png-blend-fbx-gltf-file-formats--reject-cancel-delete-remove-coupled-pack-sign-symbols-icons-6247467.png?f=webp"
                className="size-18 mx-auto"
              />
              <span className="w-full text-xl font-semibold py-3">
                Email verification failed !.
              </span>
              <div className="text-center break-words text-[12px] bg-slate-100 py-3 px-6 my-3 border-[1px] border-slate-300 rounded-lg">
                <span>
                  Invalid token ! <br /> or <br /> token expired !
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
