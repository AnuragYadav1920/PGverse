"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
export default function Footer() {
  const pathname = usePathname();

  const hideFooter =
    pathname.includes("/auth/login") || pathname.includes("/auth/signup");
  return (
    <>
      {!hideFooter && (
        <footer className="bg-blue-950 flex justify-center py-4 px-6 flex-wrap-reverse sm:justify-between">
          {" "}
          <div className="font-extralight text-center py-4">
            Copyright @ 2025 PGverse | All rights reserved
          </div>{" "}
          <div className="flex gap-4 font-extralight py-4">
            <Link href="#">Terms</Link>
            <Link href="#">Privacy</Link>
            <Link href="#">Contact</Link>{" "}
          </div>{" "}
        </footer>
      )}
    </>
  );
}
