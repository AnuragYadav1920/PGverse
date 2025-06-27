"use client";

import React, { useState, useEffect } from "react";

export default function forgotPassword() {
  const [password, setPassword] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const changePassword = () => {};
  return (
    <div className="min-h-screen flex justify-center items-center bg-white">
      <div className="w-[250px] min-h-[300px] border-[1px] text-black border-slate-300 rounded-lg ">
        <h1 className="text-lg text-black text-center font-semibold pt-6 px-1">
          Reset account password
        </h1>
        <span className="px-2 text-[10px] text-slate-400 block text-center">Enter a new password below to change your password</span>
        <div className="px-4">
          <label
            htmlFor="newpassword"
            className="py-2 text-sm text-black block "
          >
            New Password
          </label>
          <input
            type="password"
            id="newpassword"
            value={password.newPassword}
            onChange={(e) =>
              setPassword({ ...password, newPassword: e.target.value })
            }
            placeholder="new password"
            className="w-full p-2 text-sm border text-gray-600 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 sm:mb-0 sm:flex-1"
          />
        </div>
        <div className="px-4">
          <label
            htmlFor="confirmpassword"
            className="py-2 text-sm text-black block"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmpassword"
            value={password.confirmPassword}
            onChange={(e) =>
              setPassword({ ...password, confirmPassword: e.target.value })
            }
            placeholder="confirm password"
            className="w-full p-2 border text-sm text-gray-600 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 sm:mb-0 sm:flex-1"
          />
        </div>
        <div className="w-full text-center py-6 text-white px-4">
              <button
                onClick={changePassword}
                className="w-full py-2 text-sm bg-orange-500 rounded-lg hover:bg-orange-600 cursor-pointer"
              >
                CHANGE PASSWORD
              </button>
            </div>
      </div>
    </div>
  );
}
