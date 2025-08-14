"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const pathname = usePathname();

  const hideNavbar =
    pathname.includes("/auth/login") || pathname.includes("/auth/signup");
  return (
    <>
      {!hideNavbar && (
        <nav className="bg-blue-950 text-white px-6 py-4">
          <h1 className="text-xl font-bold text-red-500">PGverse</h1>
        </nav>
      )}
    </>
  );
}
