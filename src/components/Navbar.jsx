import React from "react";
import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="flex justify-center bg-blue-500/0 py-2">
      <div className="w-150 bg-red-500/0">
        <ul className="flex justify-evenly p-2 rounded-md bg-zinc-800 shadow-xl">
          <li className=" ">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-purple-500 p-1 rounded"
                  : "p-1 rounded opacity-70 hover:opacity-100 transition-all duration-700 ease-in-out"
              }
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li className="">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-purple-500 p-1 rounded"
                  : "p-1 rounded opacity-70 hover:opacity-100 transition-all duration-700 ease-in-out"
              }
              to={"/about"}
            >
              About
            </NavLink>
          </li>
          <li className="">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-purple-500 p-1 rounded"
                  : "p-1 rounded opacity-70 hover:opacity-100 transition-all duration-700 ease-in-out"
              }
              to={"/login"}
            >
              Log In
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
