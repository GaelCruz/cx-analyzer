import React from "react";
import Navbar from "../components/Navbar";
import Robot from "../components/Robot";

export default function HomePage() {
  return (
    <div className="flex justify-center px-5">
      <div className="w-[70vw] bg-red-300/0">
        <Navbar />
        <div className="h-[85vh] flex flex-col justify-center">
          <div className="flex flex-col space-y-4">
            <h2 className="text-center font-bold text-3xl">
              PROVE YOUR <span className="bg-linear-to-br from-purple-500 to-indigo-500 p-1 rounded">WORTH</span>. EARN <span className="bg-linear-to-br from-purple-500 to-indigo-500 rounded text-transparent bg-clip-text">BIG</span>.
            </h2>
            <h4 className="text-center">We'll help you track your progress and achievments on one platform. AI</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
