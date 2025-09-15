import React, { useState } from "react";

export default function Task({ item }) {
  const [isHover, setIsHover] = useState(false);
  return (
    <li
      key={item.id}
      className={`w-75 hover:tranistion bg-zinc-800 p-2 rounded-md shadow-md hover:shadow-lg hover:shadow-purple-800 m-1 duration-300 hover:-translate-y-1`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="flex justify-between">
        <div>
          <strong>Text:</strong> {item.task}
        </div>
        {isHover && (
          <button className="text-sm bg-zinc-900 px-2 rounded-md font-bold text-zinc-500 hover:text-white">
            Edit
          </button>
        )}
      </div>
      <br />
      <strong>Description:</strong> {item.description}
      <br />
      <small>Created At: {new Date(item.created_at).toLocaleString()}</small>
    </li>
  );
}
