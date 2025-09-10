import { SignedIn, UserButton } from "@clerk/clerk-react";
import React from "react";
import { NavLink } from "react-router";

export default function AppSidebar() {
  return (
    <nav className="flex justify-start h-screen">
      <ul className="ring ring-zinc-800 flex flex-col w-48"> {/* Fixed sidebar width */}
        <li className="p-3">
          <UserButton />
        </li>

        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block w-full p-3 ${
                isActive ? "bg-zinc-800 text-white" : "hover:bg-zinc-700"
              }`
            }
          >
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              `block w-full p-3 ${
                isActive ? "bg-zinc-800 text-white" : "hover:bg-zinc-700"
              }`
            }
          >
            Analytics
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `block w-full p-3 ${
                isActive ? "bg-zinc-800 text-white" : "hover:bg-zinc-700"
              }`
            }
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
