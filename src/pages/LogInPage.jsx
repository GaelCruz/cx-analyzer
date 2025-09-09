import React from "react";
import Navbar from "../components/Navbar";
import { SignIn } from "@clerk/clerk-react";

export default function HomePage() {
  return (
    <div className="flex justify-center px-5">
      <div className="w-full max-w-[70vw]">
        <Navbar />
        <div className="flex justify-center mt-5">
          <SignIn />
        </div>
      </div>
    </div>
  );
}
