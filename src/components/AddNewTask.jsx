import React from "react";
import Button from "./Button";

export default function AddNewTask({setAddNewTaskIsActive, addNewTaskIsActive}) {
  return (
    <div className={`${addNewTaskIsActive ? 'w-full h-full bg-zinc-800/50 absolute flex justify-center' : 'hidden'}`}>
      <div className="flex flex-col justify-center">
        <div className="bg-zinc-800 p-5 rounded-md w-100 shadow shadow-xl">
          <form action="" className="flex flex-col space-y-3">
            <div className="flex justify-between items-center">
              <p className="text-xl font-bold">Create a New Item</p>
              <button className="text-xl cursor-pointer" onClick={() => setAddNewTaskIsActive(false)}>&times;</button>
            </div>
            <div className="flex space-y-2 flex-col ">
              <label htmlFor="">Task: </label>
              <input
                type="text"
                placeholder="Gym Time"
                className="w-full ring rounded ring-zinc-600 p-2"
              />
            </div>
            <div className="flex space-y-2 flex-col ">
              <label htmlFor="">Description: </label>
              <textarea
                type="text"
                placeholder="Go to gym from 2PM-4PM"
                className="w-full ring rounded ring-zinc-600 p-2"
              />
            </div>
            <Button children={"Add"} />
          </form>
        </div>
      </div>
    </div>
  );
}
