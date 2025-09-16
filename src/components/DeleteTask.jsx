import React from "react";
import { supabase } from "../data/supabaseClient";
import { useTasks } from "./TasksContext";

export default function DeleteTask({ task, handleCloseDeleteModel }) {
  const { fetchData } = useTasks();
  const deleteItemFromTaskList = async (taskID) => {
    try {
      const { data, error } = await supabase
        .from("tasks")
        .delete()
        .eq("id", taskID);
      handleCloseDeleteModel();
      fetchData();
    } catch {
      throw new Error("Error Deleting task");
    }
  };
  return (
    <div className="w-full h-full bg-zinc-800/50 flex absolute z-50 top-0 left-0 justify-center">
      <div className="flex flex-col justify-center">
        <div className="justify-evenly duration-400  bg-zinc-800 rounded-md">
          <div className="flex text-xl space-x-2 bg-red-500 rounded-tr-md p-3 rounded-tl-md">
            <p>Deleting: </p>
            <p className="font-bold">{task.task}</p>
          </div>
          <div className="p-3">
            <p>Are you sure you want to delete this?</p>
          </div>
          <div className="flex text-sm justify-end p-3 space-x-2">
            <button
              onClick={handleCloseDeleteModel}
              className="hover:bg-zinc-500 p-1 rounded bg-zinc-700"
            >
              Cancel
            </button>
            <button
              onClick={() => deleteItemFromTaskList(task.id)}
              className="p-1 rounded bg-red-500 hover:bg-red-400"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
