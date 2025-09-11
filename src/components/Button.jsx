import React from "react";

export default function Button({ children }) {
  return (
    <button className="py-1 px-4 bg-purple-500  rounded-md duration-200 transition hover:shadow-lg cursor-pointer hover:shadow-purple-800">
      {children}
    </button>
  );
}
