import React, { useState } from "react";
import "./globals.css";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

export const metadata = {
  title: "PGverse",
  description: "find best PG's around you",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
