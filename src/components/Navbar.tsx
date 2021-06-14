import React from "react";
import Logo from "../assets/img/logo.svg";
import MenuHamburger from "../assets/img/menu-hamburger.svg";

function Navbar() {
  return (
    <nav className="flex justify-evenly w-full py-2 md:py-4">
      <img src={Logo} alt="logo" className="w-20 md:w-36" />
      <ul className="hidden md:flex justify-between items-center">
        <li className="mx-2"><a href="/#" target="_self"><span>Courses</span></a></li>
        <li className="mx-2"><a href="/#" target="_self"><span>Coaching</span></a></li>
        <li className="mx-2"><a href="/#" target="_self"><span>Community</span></a></li>
        <li className="mx-2"><a href="/#" target="_self"><span>Workshops</span></a></li>
      </ul>
      <button className="md:hidden">
          <img src={MenuHamburger} alt="Menu" className="w-8 h-8" />
      </button>
      <div className="flex">
        <button className="text-gray-200 bg-white hover:text-green-200 hover:border-green-200 focus:text-green-200 focus:border-green-200 rounded py-2 px-4 hidden md:block">Login</button>
        <button className="bg-white text-gray-200 border border-gray-200 hover:text-green-200 hover:border-green-200 focus:text-green-200 focus:border-green-200 rounded py-2 px-4">Join for free</button>
      </div>
    </nav>
  );
}

export default Navbar;
