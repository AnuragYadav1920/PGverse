import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="bg-blue-950 text-white px-6 py-4">
      <h1 className="text-xl font-bold text-red-500">PGverse</h1>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-blue-950 flex justify-center py-4 px-6 flex-wrap-reverse sm:justify-between">
      <div className="font-extralight text-center py-4">Copyright @ 2025 PGverse | All rights reserved</div>
      <div className="flex gap-4 font-extralight py-4">
        <Link href="#">Terms</Link>
        <Link href="#">Privacy</Link>
        <Link href="#">Contact</Link>
      </div>
    </footer>
  )
};

