import { SignedIn, UserButton, UserProfile } from "@clerk/clerk-react";
import React from "react";
import { NavLink } from "react-router";

export default function AppSidebar() {
  return (
    <nav>
      <ul>
        <li>
          <UserButton />
        </li>
      </ul>
    </nav>
  );
}
