import Link from "next/link";
import * as React from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header className="flex justify-between px-5 ">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-36 h-30 object-contain cursor-pointer"
            src="/logo.png"
            alt="logo"
          />
        </Link>

        <div className="hidden md:inline-flex items-center space-x-5">
          <h3 className="">About</h3>
          <h3 className="">Contact</h3>
          <h3 className="">FAQ</h3>
        </div>
      </div>
      <div className="flex item-center space-x-5 text-teal-600 py-20">
        <h3 className="">Sign In</h3>
        <h3 className=" border px-4 rounded-full border-teal-600 text-white bg-teal-600">Get Started</h3>
      </div>
    </header>
  );
};

export default Header;
