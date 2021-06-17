import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/img/logo.svg";
import MenuHamburger from "../assets/img/menu-hamburger.svg";

function Navbar() {
  return (
    <nav className="w-full py-2 md:py-4">
      <div className="container mx-auto flex justify-evenly">
        <img src={Logo} alt="logo" className="w-20 md:w-36" />
        <ul className="hidden md:flex justify-between items-center">
          <li className="mx-2">
            <a href="/#" target="_self" className="font-poppins text-base">
              <span>Courses</span>
            </a>
          </li>
          <li className="mx-2">
            <a href="/#" target="_self" className="font-poppins text-base">
              <span>Coaching</span>
            </a>
          </li>
          <li className="mx-2">
            <a href="/#" target="_self" className="font-poppins text-base">
              <span>Community</span>
            </a>
          </li>
          <li className="mx-2">
            <a href="/#" target="_self" className="font-poppins text-base">
              <span>Workshops</span>
            </a>
          </li>
          <li className="mx-2">
            <NavLink to="/admin" className="font-poppins text-base">
              <span>Admin</span>
            </NavLink>
          </li>
        </ul>
        <button className="md:hidden">
          <img src={MenuHamburger} alt="Menu" className="w-8 h-8" />
        </button>
        <div className="flex">
          <button className="font-poppins text-gray-200 bg-white hover:text-green-200 hover:border-green-200 focus:text-green-200 focus:border-green-200 rounded py-2 px-4 hidden md:block mx-2 outline-none">
            Login
          </button>
          <button className="font-poppins bg-white text-gray-200 border border-gray-200 hover:text-green-200 hover:border-green-200 focus:text-green-200 focus:border-green-200 rounded py-2 px-4 mx-2 outline-none">
            Join for free
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
