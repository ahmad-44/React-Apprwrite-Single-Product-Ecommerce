// Navbar.js
import { useState } from "react";
import { logoText } from "../constants/content";
import { navItems } from "../constants/content";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [isNavOpen, setIssNavOpen] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setIssNavOpen(!isNavOpen);
  };
  return (
    <nav className="w-full border-b ">
      <div className="flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-black">
        {/* Logo */}
        <h2 className="w-full text-3xl font-bold text-accent">{logoText}</h2>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.route}
              to={item.route}
              className={({ isActive }) =>
                isActive
                  ? "p-4 hover:bg-accent bg-accentLight text-cloud rounded-lg m-2 cursor-pointer duration-300 hover:text-cloud"
                  : "p-4 hover:bg-accentLight rounded-lg m-2 cursor-pointer duration-300 hover:text-cloud"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="block md:hidden">
          {isNavOpen ? (
            <AiOutlineClose size={20} />
          ) : (
            <AiOutlineMenu size={20} />
          )}
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={
            isNavOpen
              ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-accent ease-in-out duration-500"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          {/* Mobile Logo */}
          <h2 className="w-full text-3xl font-bold text-cloud m-4">
            {logoText}
          </h2>

          {/* Mobile Navigation Items */}
          {navItems.map((item) => (
            <NavLink
              key={item.route}
              to={item.route}
              className={({ isActive }) =>
                isActive
                  ? "p-4 border-b block rounded-xl hover:bg-accentLight bg-accentLight duration-300 hover:text-cloud cursor-pointer text-cloud border-gray-600"
                  : "p-4 border-b block rounded-xl hover:bg-accentLight duration-300 hover:text-cloud cursor-pointer text-cloud border-gray-600"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
