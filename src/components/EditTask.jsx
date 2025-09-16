import React, { useState } from "react";
import Button from "./Button";
import { supabase } from "../data/supabaseClient";
import { Description } from "@radix-ui/themes/components/alert-dialog";
import { useTasks } from "./TasksContext";

const handleEditTask = async (taskId, updatedData) => {
  try {
    const { data, error } = await supabase
      .from("tasks")
      .update(updatedData)
      .eq("id", taskId)
      .select();
    if (error) throw error;
    console.log("task Updated Susccessfully: ", data);
    return { data, error: null };
  } catch (e) {
    console.error("Error updating Task: ", e.message);
    return { data: null, error: e.message };
  }
};

export default function EditTask({ task, onClose }) {
  const [taskTitle, setTaskTitle] = useState(task.task);
  const [taskDescription, setTaskDesctiption] = useState(task.description);
  const { fetchData } = useTasks();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data: updatedData, error } = await handleEditTask(task.id, {
      task: taskTitle,
      description: taskDescription,
    });

    if (!error) {
      onClose();
      fetchData();
    }
  };

  return (
    <div
      className={`w-full h-full bg-zinc-800/50 flex absolute z-50 top-0 left-0 justify-center`}
    >
      <div className="flex flex-col justify-center">
        <div className="bg-zinc-800 p-5 rounded-md w-100 shadow shadow-xl">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
            <div className="flex justify-between items-center">
              <p className="text-xl font-bold">Create a New Item</p>
              <button className="text-xl cursor-pointer" onClick={onClose}>
                &times;
              </button>
            </div>
            <div className="flex space-y-2 flex-col ">
              <label htmlFor="">Task: </label>
              <input
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                type="text"
                placeholder="Gym Time"
                className="w-full ring rounded ring-zinc-600 p-2"
              />
            </div>
            <div className="flex space-y-2 flex-col ">
              <label htmlFor="">Description: </label>
              <textarea
                value={taskDescription}
                onChange={(e) => setTaskDesctiption(e.target.value)}
                type="text"
                placeholder="Go to gym from 2PM-4PM"
                className="w-full ring rounded ring-zinc-600 p-2"
              />
            </div>
            <Button type="submit" children={"Edit"} />
          </form>
        </div>
      </div>
    </div>
  );
}
