import { useState } from "react";
import { sidebarLinks } from "../../constants/content.js";
import { NavLink } from "react-router-dom";

import Chevron from "../../../public/icons/chevron-right.svg";
import Logout from "./Logout";
function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const sidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    // Sidebar Container

    <div
      className={`flex flex-col sticky h-screen justify-between bg-slate-800 top-0 left-0 ${
        sidebarOpen ? "min-w-[200px]" : "min-w-[70px]"
      }  ftransition-all duration-700`}
    >
      {/* toggle and links */}
      <div>
        {/* Sidebar Toggle */}
        <div className={`mt-6 mb-6 pl-3`}>
          <img
            src={Chevron}
            className={`w-12 cursor-pointer ${
              sidebarOpen && "rotate-180"
            } transition duration-700`}
            onClick={sidebarToggle}
          />
        </div>

        {/* Links */}
        <ul>
          {sidebarLinks.map((item) => (
            <li key={item.route} className=" text-white text-center ">
              <NavLink
                to={item.route}
                className={({ isActive }) =>
                  isActive
                    ? "flex py-4 text-lg gap-4 px-4 hover:bg-purple border-l-8 border-purple bg-slate-700 transition duration-250"
                    : "flex py-4 text-lg gap-4 px-4 hover:bg-purple transition duration-250"
                }
              >
                <img src={item.imgURL} className={`h-6 w-6`} />
                {sidebarOpen && (
                  <span className="pl-4 h-6 transition opacity-100 duration-700">
                    {item.label}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* User Buttons */}
      {sidebarOpen ? (
        <div className="p-4 mb-6 opacity-100 transition duration-700">
          <Logout label={"Logout"} />
        </div>
      ) : (
        <div className=" mb-6 opacity-100 transition duration-700">
          <Logout label={"𝕏"} />
        </div>
      )}
    </div>
  );
}

export default Sidebar;
