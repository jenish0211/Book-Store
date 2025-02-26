import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../../images/logo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className="bg-gray-800 py-4" id="navbar">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo and Toggler */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logoImg} alt="site logo" className="w-10 h-10" />
            <span className="text-white text-2xl font-bold tracking-wide uppercase">
              Bookhub
            </span>
          </Link>
          <button
            type="button"
            className="text-white md:hidden focus:outline-none"
            onClick={handleNavbar}
          >
            <HiOutlineMenuAlt3 size={35} />
          </button>
        </div>

        {/* Navbar Links */}
        <div
          className={`${
            toggleMenu ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto transition-all duration-300`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 text-center">
            <li className="nav-item">
              <Link
                to="book"
                className="text-white text-lg font-medium uppercase tracking-wide hover:text-gray-300"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                className="text-white text-lg font-medium uppercase tracking-wide hover:text-gray-300"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
