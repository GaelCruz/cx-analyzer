import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router";
import Robot from "../components/Robot";

export default function HomePage() {
  return (
    <div className="flex justify-center px-5">
      <div className="w-[70vw] bg-red-300/0">
        <Navbar />
        <div className="relative h-[85vh] flex flex-col justify-center">
          <div className="flex justify-center">
            <div className="flex flex-col space-y-4 z-50">
              <h2 className="text-center font-bold text-3xl">
                PROVE YOUR{" "}
                <span className="bg-linear-to-br from-purple-500 to-indigo-500 p-1 rounded">
                  WORTH
                </span>
                . EARN{" "}
                <span className="bg-linear-to-br from-purple-500 to-indigo-500 rounded text-transparent bg-clip-text">
                  BIG
                </span>
                .
              </h2>
              <h4 className="text-center w-150">
                We'll help you track your progress and achievments on one
                platform. Let our zorbAI analyze your historcal tasks and
                accomplished tasks to show employers your value and potential
              </h4>
              <button>
                <Link
                  to={"login"}
                  className="bg-purple-500 duration-200 transition hover:shadow-xl hover:shadow-purple-900 p-2 rounded"
                >
                  Get Started
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bg-red-500/0 left-0 z-10 top-0">
          <Robot />
        </div>
      </div>
    </div>
  );
}
