import { supabase } from "./supabaseClient";

export const handleCreateTask = async (newTask) => {
  try {
    const { data, error } = await supabase
      .from("tasks")
      .insert(newTask)
      .select();

    if (error) throw error;
    console.log("Task Created successfully", data);
  } catch (e) {
    console.error("Error Creating Task: ", e.message);
  }
};
