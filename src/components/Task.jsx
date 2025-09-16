import React, { useState } from "react";
import EditTask from "./EditTask";
import DeleteTask from "./DeleteTask";

export default function Task({ item }) {
  const [isHover, setIsHover] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleOpenModel = () => {
    setIsEditing(true);
  };

  const handleCloseModel = () => {
    setIsEditing(false);
  };

  const handleOpenDeleteModel = () => {
    setIsDeleting(true);
  };
  const handleCloseDeleteModel = () => {
    setIsDeleting(false);
  };

  const isDisabled = isEditing || isDeleting;

  return (
    <li
      key={item.id}
      className={`${
        isDisabled
          ? "w-75 bg-zinc-800 p-2 rounded-md shadow-md m-1"
          : "w-75 hover:transition bg-zinc-800 p-2 rounded-md shadow-md hover:shadow-lg hover:shadow-purple-800 m-1 duration-300 hover:-translate-y-1"
      }`}
      // Only set hover state when not disabled
      onMouseEnter={() => !isDisabled && setIsHover(true)}
      onMouseLeave={() => !isDisabled && setIsHover(false)}
    >
      <div className="flex justify-between">
        <div>
          <strong>Text:</strong> {item.task}
        </div>
        {/* Only show buttons on hover when not disabled */}
        {isHover && !isDisabled && (
          <div className="flex space-x-1">
            <button
              onClick={handleOpenModel}
              className="text-sm bg-zinc-900 px-2 rounded-md font-bold text-zinc-500 hover:text-white"
            >
              Edit
            </button>
            <button
              onClick={handleOpenDeleteModel}
              className="text-sm bg-red-900 px-2 rounded-md font-bold text-white hover:bg-red-500 hover:text-white"
            >
              Delete
            </button>
          </div>
        )}
      </div>
      <br />
      <strong>Description:</strong> {item.description}
      <br />
      <small>Created At: {new Date(item.created_at).toLocaleString()}</small>
      {isEditing && <EditTask task={item} onClose={handleCloseModel} />}
      {isDeleting && (
        <DeleteTask
          task={item}
          handleCloseDeleteModel={handleCloseDeleteModel}
        />
      )}
    </li>
  );
}
